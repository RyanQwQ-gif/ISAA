export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50/50">
      <div className="container mx-auto py-10 px-4 md:px-8 max-w-[1400px]">
        {children}
      </div>
    </div>
  )
}
