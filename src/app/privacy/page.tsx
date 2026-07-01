import Link from "next/link"

const lastUpdated = "July 1, 2026"

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
          <h2 className="font-serif text-xl font-semibold text-primary">Items Still To Confirm</h2>
          <p>
            ISAA still needs to confirm its legal operator name, privacy contact, data protection contact, precise
            retention periods, account deletion process, and whether event registration data is shared with school clubs
            or event organizers. Current privacy contact email: wuzj.ryan2024@gdhfi.com.
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
            password authentication records, email verification records, user ID, and login session information; profile
            information such as display name, school, biography, avatar, contact email, and public-contact preference;
            academic content such as
            articles, abstracts, tags, comments, likes, wiki documents, uploaded files, and event information; and event
            participation records such as registration status. ISAA may also process technical information such as IP
            address, device/browser data, request logs, security events, CDN logs, and moderation records.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">3. How We Use Information</h2>
          <p>
            ISAA uses personal information to create and authenticate accounts, display profiles, publish user content,
            support comments and likes, manage event registration, host wiki resources, operate administrator tools,
            conduct moderation, prevent abuse, maintain security, send authentication or verification messages through
            Supabase, operate CDN and security services, and communicate service-related information.
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
            automated language-model moderation service if configured. Keyword screening happens first. If the content
            passes keyword screening and OpenAI moderation is enabled, ISAA may send the title, abstract, content, and
            related moderation metadata to OpenAI to classify content as approved, pending, or rejected.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">6. Service Providers</h2>
          <p>
            ISAA currently plans to use Cloudflare for domain services, DNS, CDN, traffic security, edge caching, and
            related request logs; Hytron servers in Hong Kong for application hosting and server logs; Supabase for
            authentication, database access, file storage, sessions, and email verification messages; and OpenAI for
            optional automated moderation. These providers may process data in Hong Kong, the United States, or other
            countries and regions where they or their subprocessors operate. Provider details may change as the platform
            develops.
          </p>
          <p className="text-sm text-muted-foreground">
            Provider policy links:{" "}
            <a className="text-primary underline" href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noreferrer">
              Cloudflare
            </a>
            ,{" "}
            <a className="text-primary underline" href="https://supabase.com/privacy" target="_blank" rel="noreferrer">
              Supabase
            </a>
            , and{" "}
            <a className="text-primary underline" href="https://openai.com/policies/row-privacy-policy/" target="_blank" rel="noreferrer">
              OpenAI
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">7. Retention</h2>
          <p>
            ISAA retains information for as long as necessary to operate the platform, maintain academic records,
            enforce rules, resolve disputes, and comply with legal obligations. Account data, posts, comments, event
            registrations, uploaded files, moderation records, CDN logs, server logs, and deleted-account records may
            have different retention periods. Specific retention periods are still to be confirmed.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">8. Your Rights</h2>
          <p>
            Depending on applicable law, you may have rights to access, copy, correct, delete, restrict, withdraw consent,
            or request an explanation of personal information processing. You can edit many profile fields directly in
            your account. You may send privacy requests to wuzj.ryan2024@gdhfi.com. The identity verification process
            and expected response timeframe are still to be confirmed.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">9. Minors</h2>
          <p>
            ISAA is designed for international school students, many of whom may be minors. If a user is under 14 years
            old, ISAA may collect that user&apos;s personal information only with authorization from the user&apos;s guardian.
            Users under 14 should not independently create or use an account without guardian approval. If a user is at
            least 14 years old but under 18 years old, personal information processing may be authorized by the user&apos;s
            guardian, or by the minor user directly where applicable law allows.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">10. Cross-Border Transfers</h2>
          <p>
            ISAA is created by a team in mainland China and primarily serves users in mainland China. Personal
            information may be stored or processed outside mainland China, including through Hytron servers in Hong Kong,
            Cloudflare, Supabase, and OpenAI. Please review the{" "}
            <Link className="text-primary underline" href="/notice">Cross-Border Transfer Notice</Link>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">11. Contact</h2>
          <p>
            For privacy questions or requests, contact ISAA at wuzj.ryan2024@gdhfi.com. Postal or mailing address is
            still to be confirmed.
          </p>
        </section>
      </div>
    </main>
  )
}
