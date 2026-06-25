"use client"

import * as React from "react"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Loader2 } from "lucide-react"
import Link from "next/link"

interface AuthFormProps {
  mode: "login" | "signup"
}

export function AuthForm({ mode }: AuthFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | null>(null)
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [acceptedCrossBorderTransfer, setAcceptedCrossBorderTransfer] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const next = sanitizeNext(searchParams.get("next"))
  const nextQuery = next === "/" ? "" : `?next=${encodeURIComponent(next)}`
  const isBusy = loading

  const getCallbackUrl = () => {
    const callbackUrl = new URL("/auth/callback", window.location.origin)
    if (next !== "/") {
      callbackUrl.searchParams.set("next", next)
    }
    return callbackUrl.toString()
  }

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setNotice(null)

    if (!acceptedTerms || !acceptedCrossBorderTransfer) {
      setError("Please accept the Terms of Service, Privacy Policy, and Cross-Border Transfer Notice before continuing.")
      setLoading(false)
      return
    }

    if (mode === "signup" && password !== confirmPassword) {
      setError("Passwords do not match!")
      setLoading(false)
      return
    }

    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: getCallbackUrl(),
          },
        })
        if (error) throw error
        setNotice("Check your email for the confirmation link before signing in.")
        setPassword("")
        setConfirmPassword("")
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) throw error
        router.push(next)
        router.refresh()
      }
    } catch (err: unknown) {
      setError(getErrorMessage(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md shadow-lg border-slate-200">
      <CardHeader className="space-y-1 text-center">
        <div className="flex justify-center mb-4">
          <GraduationCap className="h-10 w-10 text-primary" />
        </div>
        <CardTitle className="text-2xl font-serif">
          {mode === "login" ? "Welcome Back" : "Create Account"}
        </CardTitle>
        <CardDescription>
          {mode === "login" 
            ? "Enter your credentials to access the platform" 
            : "Join the ISAA global academic community"}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleAuth}>
        <CardContent className="space-y-4">
          {error && (
            <div className="p-3 text-sm bg-red-50 text-red-600 rounded-md border border-red-100">
              {error}
            </div>
          )}
          {notice && (
            <div className="p-3 text-sm bg-emerald-50 text-emerald-700 rounded-md border border-emerald-100">
              {notice}
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="name@school.edu" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              className="bg-slate-50/50"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">{mode === "signup" ? "Create Password" : "Password"}</Label>
              {mode === "login" && (
                <Link href="/forgot-password" className="text-xs text-muted-foreground hover:underline">
                  Forgot password?
                </Link>
              )}
            </div>
            <Input 
              id="password" 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              className="bg-slate-50/50"
            />
          </div>
          {mode === "signup" && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Retype Password</Label>
              <Input 
                id="confirmPassword" 
                type="password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required 
                className="bg-slate-50/50"
              />
            </div>
          )}
          <div className="space-y-3 rounded-lg border border-slate-200 bg-slate-50/60 p-3 text-sm">
            <label htmlFor="acceptedTerms" className="flex items-start gap-3 leading-5 text-slate-700">
              <input
                id="acceptedTerms"
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                required
              />
              <span>
                I have read and agree to the{" "}
                <Link href="/tos" target="_blank" rel="noreferrer" className="font-medium text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" target="_blank" rel="noreferrer" className="font-medium text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
            <label htmlFor="acceptedCrossBorderTransfer" className="flex items-start gap-3 leading-5 text-slate-700">
              <input
                id="acceptedCrossBorderTransfer"
                type="checkbox"
                checked={acceptedCrossBorderTransfer}
                onChange={(e) => setAcceptedCrossBorderTransfer(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                required
              />
              <span>
                I consent to the{" "}
                <Link href="/notice" target="_blank" rel="noreferrer" className="font-medium text-primary hover:underline">
                  cross-border transfer of my personal data
                </Link>
                .
              </span>
            </label>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full h-11" type="submit" disabled={isBusy}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {mode === "login" ? "Sign In" : "Sign Up"}
          </Button>
          <div className="text-sm text-center text-muted-foreground">
            {mode === "login" ? (
              <>
                Don&apos;t have an account?{" "}
                <Link href={`/signup${nextQuery}`} className="text-primary hover:underline font-medium">
                  Create one
                </Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link href={`/login${nextQuery}`} className="text-primary hover:underline font-medium">
                  Sign in
                </Link>
              </>
            )}
          </div>
        </CardFooter>
      </form>
    </Card>
  )
}

function getErrorMessage(error: unknown) {
  if (!(error instanceof Error)) return "Something went wrong."
  if (error.message.toLowerCase().includes("email not confirmed")) {
    return "Please confirm your email before signing in."
  }
  return error.message
}

function sanitizeNext(value: string | null) {
  if (!value || !value.startsWith("/") || value.startsWith("//")) {
    return "/"
  }
  return value
}
