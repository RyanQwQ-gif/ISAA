import Link from "next/link"

const lastUpdated = "July 1, 2026"

export default function TermsPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12 md:px-8">
      <div className="space-y-4 border-b pb-8">
        <p className="text-sm font-medium text-muted-foreground">Terms of Service</p>
        <h1 className="font-serif text-4xl font-bold text-primary">ISAA Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
      </div>

      <div className="prose prose-slate mt-8 max-w-none space-y-8">
        <section className="space-y-3 rounded-lg border bg-slate-50 p-4">
          <h2 className="font-serif text-xl font-semibold text-primary">Items Still To Confirm</h2>
          <p>
            ISAA still needs to confirm its legal operator name, registered or mailing address, official contact email,
            governing law, and dispute resolution venue. Current official contact email: wuzj.ryan2024@gdhfi.com.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">1. Acceptance</h2>
          <p>
            These Terms govern your access to and use of ISAA, an academic collaboration platform for international
            school students. By creating an account, signing in, posting content, joining events, or using the platform,
            you agree to these Terms, the Privacy Policy, the Cross-Border Transfer Notice, and the Community Guidelines.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">2. Accounts</h2>
          <p>
            You are responsible for the accuracy of your account information, the security of your password, and all
            activity under your account. You may not impersonate another person, create accounts for abusive purposes,
            or share access in a way that compromises the platform. Account registration and sign-in may use Supabase
            authentication, including verification emails or one-time codes sent through Supabase-managed email systems.
          </p>
          <p>
            If you are under 14 years old, ISAA may collect your personal information only with authorization from your
            guardian, and you should not independently create or use an account without guardian approval. If you are at
            least 14 years old but under 18 years old, your guardian may authorize your use of ISAA, or you may authorize
            the use of your personal information yourself where applicable law allows.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">3. User Content</h2>
          <p>
            You retain ownership of articles, comments, event descriptions, wiki resources, profile information, and
            files that you submit. You grant ISAA a non-exclusive, worldwide, royalty-free license to host, store,
            display, reproduce, and moderate your content as needed to operate, protect, and improve the platform.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">4. Acceptable Use</h2>
          <p>
            You must follow the Community Guidelines. You may not use ISAA to violate laws, infringe intellectual
            property rights, distribute malicious files, scrape data without permission, disrupt service availability,
            or collect information about other users for non-academic or harmful purposes. Because the platform is
            created by a team in mainland China and primarily serves users in mainland China, users must not publish
            content that violates applicable mainland China laws or creates legal, safety, or school-community risks.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">5. Events</h2>
          <p>
            ISAA may allow users to publish and register for academic events. Event organizers are responsible for the
            accuracy of event information and for any offline arrangements. ISAA is not responsible for third-party
            event cancellation, safety arrangements, travel, admission decisions, or organizer conduct unless required
            by applicable law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">6. Moderation and Administration</h2>
          <p>
            ISAA may review, reject, hide, delete, or preserve content and account records where necessary for safety,
            compliance, academic integrity, service operation, or enforcement of these Terms. Administrator tools may
            be used to manage users, remove posts, and configure moderation rules. Forum submissions may be checked
            against keyword rules and, when configured, sent to OpenAI for automated moderation after keyword screening.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">7. Third-Party Infrastructure</h2>
          <p>
            ISAA is operated using third-party infrastructure. Current planned providers include Cloudflare for domain
            services, DNS, CDN, security, and edge traffic handling; Hytron servers in Hong Kong for application hosting;
            Supabase for authentication, database, storage, sessions, and email verification; and OpenAI for optional
            automated moderation. These providers may process service data as described in the Privacy Policy and
            Cross-Border Transfer Notice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">8. Service Changes</h2>
          <p>
            ISAA may add, change, suspend, or discontinue features. The platform is provided on an &quot;as is&quot; and
            &quot;as available&quot; basis to the maximum extent allowed by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">9. Termination</h2>
          <p>
            You may stop using the platform at any time. ISAA may suspend or terminate access if you violate these
            Terms, create safety risks, infringe others&apos; rights, or misuse the service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">10. Contact</h2>
          <p>
            For questions about these Terms, contact ISAA at wuzj.ryan2024@gdhfi.com. Postal or mailing address is still
            to be confirmed.
          </p>
        </section>

        <p className="text-sm text-muted-foreground">
          Related documents: <Link className="text-primary underline" href="/guidelines">Community Guidelines</Link>,{" "}
          <Link className="text-primary underline" href="/privacy">Privacy Policy</Link>, and{" "}
          <Link className="text-primary underline" href="/notice">Cross-Border Transfer Notice</Link>.
        </p>
      </div>
    </main>
  )
}
