import Link from "next/link"

const lastUpdated = "June 24, 2026"

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
          <h2 className="font-serif text-xl font-semibold text-primary">Information Needed</h2>
          <p>
            [To be completed: overseas recipient names, countries or regions, contact methods, processing purposes,
            processing methods, data categories, security measures, retention periods, and procedures for exercising
            rights with overseas recipients.]
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">1. Why This Notice Is Provided</h2>
          <p>
            ISAA may rely on service providers whose servers, support teams, or subprocessors are located outside
            mainland China. This Notice explains the categories of personal information that may be transferred or
            accessed cross-border when you use the platform.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">2. Transfer Scenarios</h2>
          <p>
            Cross-border processing may occur when ISAA uses cloud authentication, database, file storage, email
            confirmation, session management, or automated moderation services. Current code indicates use of Supabase
            for authentication, database, and storage, and optional OpenAI-compatible language-model moderation if
            enabled by administrators.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">3. Categories of Personal Information</h2>
          <p>
            The categories may include account email, user ID, authentication metadata, profile fields, avatar files,
            public contact email preference, articles, abstracts, comments, likes, event records, wiki files, uploaded
            file URLs, moderation data, and technical information required for secure sessions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">4. Purposes</h2>
          <p>
            Cross-border processing is used to provide account access, host platform data, store uploaded files, support
            academic publishing, enable comments and likes, manage event participation, operate moderation, maintain
            security, and troubleshoot service issues.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">5. Overseas Recipients</h2>
          <p>
            [To be completed: exact overseas recipient legal names, countries or regions, contact details, and links to
            their privacy or data processing terms. Potential recipients based on current code may include Supabase and,
            if enabled, an OpenAI-compatible moderation provider.]
          </p>
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
            processing through the platform contact channel. [To be completed: request email, verification procedure,
            response timeframe, and how requests are forwarded to overseas recipients.]
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">8. Risks and Safeguards</h2>
          <p>
            Different jurisdictions may have different data protection laws. ISAA will use reasonable technical and
            organizational measures to protect personal information, including access controls and service-provider
            arrangements where applicable. [To be completed: specific contractual safeguards, encryption practices, and
            access control procedures.]
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
