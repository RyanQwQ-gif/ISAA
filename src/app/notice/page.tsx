import Link from "next/link"

const lastUpdated = "July 1, 2026"

export default function CrossBorderNoticePage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12 md:px-8">
      <div className="space-y-4 border-b pb-8">
        <p className="text-sm font-medium text-muted-foreground">Cross-Border Transfer Notice</p>
        <h1 className="font-serif text-4xl font-bold text-primary">Personal Data Cross-Border Transfer Notice</h1>
        <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
      </div>

      <div className="prose prose-slate mt-8 max-w-none space-y-8">
        <section className="space-y-3 rounded-lg border bg-slate-50 p-4">
          <h2 className="font-serif text-xl font-semibold text-primary">Items Still To Confirm</h2>
          <p>
            ISAA still needs to confirm exact legal entity names, contact methods, retention periods, detailed
            contractual safeguards, and the procedure for forwarding personal-information rights requests to overseas
            service providers. Current request email: wuzj.ryan2024@gdhfi.com.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">1. Why This Notice Is Provided</h2>
          <p>
            ISAA is created by a team in mainland China and primarily serves users in mainland China. ISAA may rely on
            service providers whose servers, support teams, or subprocessors are located outside mainland China. This
            Notice explains the categories of personal information that may be transferred or accessed cross-border when
            you use the platform.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">2. Transfer Scenarios</h2>
          <p>
            Cross-border processing may occur when ISAA uses cloud authentication, database, file storage, email
            confirmation, session management, CDN/security services, application hosting, or automated moderation
            services. Current planned providers include Hytron servers in Hong Kong for application hosting, Cloudflare
            for domain services, DNS, CDN, traffic security, and edge logs, Supabase for authentication, database,
            storage, sessions, and verification emails, and OpenAI for optional automated moderation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">3. Categories of Personal Information</h2>
          <p>
            The categories may include account email, user ID, authentication metadata, profile fields, avatar files,
            public contact email preference, articles, abstracts, comments, likes, event records, wiki files, uploaded
            file URLs, moderation data, IP address, device/browser information, CDN logs, server logs, and technical
            information required for secure sessions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">4. Purposes</h2>
          <p>
            Cross-border processing is used to provide account access, host platform data, store uploaded files, support
            academic publishing, enable comments and likes, manage event participation, operate moderation, maintain
            security, deliver verification emails, route and protect network traffic, cache website assets, and
            troubleshoot service issues.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">5. Overseas Recipients</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Cloudflare: domain, DNS, CDN, traffic security, edge caching, and related logs. Processing may occur in
              countries and regions where Cloudflare operates.
            </li>
            <li>
              Hytron: Hong Kong server hosting for the ISAA application and server-side operational logs.
            </li>
            <li>
              Supabase: authentication, database, storage, sessions, and verification emails. Processing may occur in
              countries and regions where Supabase and its subprocessors operate.
            </li>
            <li>
              OpenAI: optional automated moderation after keyword screening. ISAA may send article titles, abstracts,
              content, and moderation metadata to OpenAI when the feature is enabled.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">6. Your Separate Consent</h2>
          <p>
            Because cross-border personal information transfer may require separate consent under applicable law, ISAA
            asks you to confirm this Notice separately from the general Terms of Service and Privacy Policy before using
            account features.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">7. How to Exercise Rights</h2>
          <p>
            You may request access, correction, deletion, withdrawal of consent, or an explanation of cross-border
            processing by contacting wuzj.ryan2024@gdhfi.com. The verification procedure, response timeframe, and
            forwarding process for overseas recipients are still to be confirmed.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">8. Risks and Safeguards</h2>
          <p>
            Different jurisdictions may have different data protection laws. ISAA will use reasonable technical and
            organizational measures to protect personal information, including access controls and service-provider
            arrangements where applicable. Current safeguards include account authentication, role-based administrator
            access, service secrets kept server-side, HTTPS transport, Cloudflare traffic protection, and provider-side
            security controls. Specific contractual safeguards, retention periods, and internal access-control procedures
            are still to be confirmed.
          </p>
        </section>

        <p className="text-sm text-muted-foreground">
          Please also read the <Link className="text-primary underline" href="/privacy">Privacy Policy</Link> and{" "}
          <Link className="text-primary underline" href="/tos">Terms of Service</Link>.
        </p>
      </div>
    </main>
  )
}
