import { AdminDashboardClient } from "@/components/admin/admin-dashboard-client"

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-serif font-bold text-slate-900 tracking-tight">Platform Administration</h1>
        <p className="text-muted-foreground mt-2 text-lg">Manage users, moderate content, and configure platform taxonomy.</p>
      </div>

      <AdminDashboardClient
        hasServiceRoleKey={Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY)}
      />
    </div>
  )
}
