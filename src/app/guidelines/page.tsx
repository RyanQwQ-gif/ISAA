import Link from "next/link"

const lastUpdated = "July 1, 2026"

export default function GuidelinesPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12 md:px-8">
      <div className="space-y-4 border-b pb-8">
        <p className="text-sm font-medium text-muted-foreground">Community Guidelines</p>
        <h1 className="font-serif text-4xl font-bold text-primary">ISAA Community Guidelines</h1>
        <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
      </div>

      <div className="prose prose-slate mt-8 max-w-none space-y-8">
        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">1. Purpose</h2>
          <p>
            ISAA is an academic exchange platform for international school students to publish research ideas,
            discover academic events, share wiki-style resources, and connect with peers across schools. These
            Guidelines explain the standards expected of every user.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">2. Academic Integrity</h2>
          <p>
            Users must submit original work or properly attribute sources. Do not submit plagiarized content,
            fabricated research, impersonated authorship, unauthorized exam materials, or requests to complete
            assignments dishonestly.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">3. Respectful Participation</h2>
          <p>
            Discussion should remain constructive, evidence-based, and suitable for a student academic community.
            Harassment, threats, hate speech, bullying, sexual content, doxxing, spam, and non-academic advertising
            are not allowed. Users must not publish content that violates applicable mainland China laws, encourages
            illegal activity, promotes scams, shares dangerous instructions, or creates school-community safety risks.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">4. Personal Information</h2>
          <p>
            Do not publish another person&apos;s private information, including personal email addresses, phone numbers,
            school schedules, addresses, identity documents, or private screenshots, unless you have clear permission.
            Your profile may show your display name, school, biography, avatar, and public contact email if you choose
            to provide them.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">5. Events and Wiki Resources</h2>
          <p>
            Event organizers should provide accurate dates, locations, registration deadlines, eligibility
            requirements, and organizer information. Wiki resources should be relevant to academic collaboration and
            must not include malware, misleading links, or files that infringe others&apos; rights.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">6. Moderation</h2>
          <p>
            Forum articles may be reviewed using keyword rules, automated moderation, and manual administrator review.
            Moderation may approve, reject, remove, or hold content for review when it appears unsafe, unlawful,
            irrelevant, low quality, or inconsistent with these Guidelines. Automated moderation may use OpenAI after
            keyword screening; administrators may manually approve or reject content.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-semibold text-primary">7. Enforcement</h2>
          <p>
            ISAA may remove content, restrict features, suspend accounts, or contact users when necessary to protect
            the community. Serious risks involving minors, safety, illegal activity, or school community harm may be
            escalated to appropriate administrators or authorities where legally required.
          </p>
        </section>

        <section className="space-y-3 rounded-lg border bg-slate-50 p-4">
          <h2 className="font-serif text-xl font-semibold text-primary">Items Still To Confirm</h2>
          <p>
            Reports and appeals may be sent to wuzj.ryan2024@gdhfi.com. ISAA still needs to confirm the detailed appeal
            process, response timeframe, and the platform operator&apos;s legal name.
          </p>
        </section>

        <p className="text-sm text-muted-foreground">
          Please also review the <Link className="text-primary underline" href="/tos">Terms of Service</Link>,{" "}
          <Link className="text-primary underline" href="/privacy">Privacy Policy</Link>, and{" "}
          <Link className="text-primary underline" href="/notice">Cross-Border Transfer Notice</Link>.
        </p>
      </div>
    </main>
  )
}
