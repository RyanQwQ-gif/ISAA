import Link from "next/link"

const lastUpdated = "June 24, 2026"

export default function PrivacyPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12 md:px-8">
      <div className="space-y-4 border-b pb-8">
        <p className="text-sm font-medium text-muted-foreground">Privacy Policy</p>
        <h1 className="font-serif text-4xl font-bold text-primary">ISAA Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
      </div>

      <div className="prose prose-slate mt-8 max-w-none space-y-8">
        <section className="space-y-3 rounded-lg border bg-slate-50 p-4">
          <h2 className="font-serif text-xl font-semibold text-primary">Information Needed</h2>
          <p>
            [To be completed: legal operator name, privacy contact, data protection contact, data hosting region,
            retention periods, account deletion method, user age policy, third-party service list, and whether event
            registration data is shared with school clubs or event organizers.]
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">1. Scope</h2>
          <p>
            This Privacy Policy explains how ISAA collects, uses, stores, discloses, and protects personal information
            when users access the platform, create accounts, publish academic content, join events, upload files, or
            interact with other users.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">2. Information We Collect</h2>
          <p>
            Based on current platform functionality, ISAA may collect account information such as email address,
            password authentication records, user ID, and login session information; profile information such as display
            name, school, biography, avatar, contact email, and public-contact preference; academic content such as
            articles, abstracts, tags, comments, likes, wiki documents, uploaded files, and event information; and event
            participation records such as registration status.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">3. How We Use Information</h2>
          <p>
            ISAA uses personal information to create and authenticate accounts, display profiles, publish user content,
            support comments and likes, manage event registration, host wiki resources, operate administrator tools,
            conduct moderation, prevent abuse, maintain security, and communicate service-related information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">4. Public Information</h2>
          <p>
            Some information may be visible to other users or visitors, including display name, school, avatar, biography,
            article and event content, comments, tags, wiki documents, and profile pages. Your contact email is shown
            only if you enable the public contact email setting and provide a contact email.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">5. Moderation and Automated Review</h2>
          <p>
            Submitted articles may be checked against moderation keywords and may be reviewed by an administrator or an
            automated language-model moderation service if configured. Moderation may process titles, abstracts, content,
            and related metadata to classify content as approved, pending, or rejected.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">6. Service Providers</h2>
          <p>
            The platform currently uses Supabase-related services for authentication, database access, file storage, and
            sessions. It may also use an OpenAI-compatible moderation provider if an administrator enables LLM moderation.
            [To be completed: exact service providers, legal entities, countries or regions of processing, and links to
            provider privacy terms.]
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">7. Retention</h2>
          <p>
            ISAA retains information for as long as necessary to operate the platform, maintain academic records,
            enforce rules, resolve disputes, and comply with legal obligations. [To be completed: specific retention
            periods for account data, posts, comments, event registrations, uploaded files, logs, and deleted accounts.]
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">8. Your Rights</h2>
          <p>
            Depending on applicable law, you may have rights to access, copy, correct, delete, restrict, withdraw consent,
            or request an explanation of personal information processing. You can edit many profile fields directly in
            your account. [To be completed: request channel and verification process.]
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">9. Minors</h2>
          <p>
            ISAA is designed for international high school students, many of whom may be minors. [To be completed:
            minimum age, guardian consent requirements, and special processing rules for users under 14 or other
            applicable age thresholds.]
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">10. Cross-Border Transfers</h2>
          <p>
            Personal information may be stored or processed outside mainland China depending on the hosting, database,
            storage, authentication, and moderation providers used. Please review the{" "}
            <Link className="text-primary underline" href="/notice">Cross-Border Transfer Notice</Link>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">11. Contact</h2>
          <p>[To be completed: privacy contact email and mailing address.]</p>
        </section>
      </div>
    </main>
  )
}
