import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function AdminLoading() {
  return (
    <div className="space-y-8">
      <div>
        <div className="h-10 w-80 rounded-md bg-slate-200" />
        <div className="mt-3 h-5 w-96 rounded-md bg-slate-100" />
      </div>

      <div className="h-10 w-full max-w-xl rounded-lg bg-slate-100" />

      <Card className="border-slate-200 shadow-sm">
        <CardHeader className="space-y-3 border-b bg-slate-50/50">
          <div className="h-6 w-44 rounded-md bg-slate-200" />
          <div className="h-4 w-96 rounded-md bg-slate-100" />
        </CardHeader>
        <CardContent className="space-y-4 p-6">
          {[0, 1, 2].map((item) => (
            <div key={item} className="space-y-2 rounded-lg border border-slate-100 p-4">
              <div className="h-5 w-2/3 rounded-md bg-slate-200" />
              <div className="h-4 w-full rounded-md bg-slate-100" />
              <div className="h-4 w-1/3 rounded-md bg-slate-100" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
