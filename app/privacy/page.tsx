import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const dynamic = "force-static"
export const revalidate = false

export const metadata = {
  title: "Privacy Policy | Reptilians",
  description: "Privacy Policy for Reptilians and our services",
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground">Last updated: January 11, 2026</p>

          <div className="prose prose-neutral dark:prose-invert mt-12 max-w-none">
            <p className="leading-relaxed text-muted-foreground">
              This Privacy Policy explains how Reptilians (&quot;we&quot;, &quot;us&quot;) collects, uses, shares, and
              protects information when you use our website(s) and mobile applications (the &quot;Services&quot;).
            </p>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">1) Controller and contact</h2>
              <p className="leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Data controller:</strong> Reptilians
                <br />
                <strong className="text-foreground">Contact email:</strong>{" "}
                <a href="mailto:hey@reptilians.studio" className="text-accent hover:underline">
                  hey@reptilians.studio
                </a>
              </p>
              <p className="leading-relaxed text-muted-foreground">
                If you are in the EEA/UK, you may have rights under applicable data protection laws (including GDPR). We
                address those rights below.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">2) What data we collect</h2>
              <p className="leading-relaxed text-muted-foreground">
                We collect information depending on how you use the Services.
              </p>

              <h3 className="mt-6 text-xl font-medium">A) Information you provide</h3>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Contact details</strong> (e.g., name, email) when you fill forms,
                  request a quote, or contact us.
                </li>
                <li>
                  <strong className="text-foreground">Project details</strong> you submit (briefs, attachments,
                  messages).
                </li>
                <li>
                  <strong className="text-foreground">Account data</strong> (if Apps include accounts): username, email,
                  and any profile fields you choose to add.
                </li>
              </ul>

              <h3 className="mt-6 text-xl font-medium">B) Information collected automatically (Website and Apps)</h3>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Device and usage data:</strong> device type, OS version, app
                  version, pages/screens viewed, actions taken, timestamps, language, referrer.
                </li>
                <li>
                  <strong className="text-foreground">Log data:</strong> IP address (Website), server logs, error logs.
                </li>
                <li>
                  <strong className="text-foreground">Diagnostics / crash data:</strong> crash reports, performance
                  metrics, and debugging information.
                </li>
              </ul>

              <h3 className="mt-6 text-xl font-medium">C) Cookies and similar technologies (Website)</h3>
              <p className="leading-relaxed text-muted-foreground">We may use cookies/local storage for:</p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>essential functionality (security, session management),</li>
                <li>preferences,</li>
                <li>analytics (if enabled).</li>
              </ul>
              <p className="leading-relaxed text-muted-foreground">
                You can control cookies via your browser settings. Some features may not work without essential cookies.
              </p>

              <h3 className="mt-6 text-xl font-medium">D) Data we do NOT intend to collect</h3>
              <p className="leading-relaxed text-muted-foreground">
                Unless explicitly stated inside a specific app, we do <strong className="text-foreground">not</strong>{" "}
                intentionally collect:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>sensitive personal data (e.g., health data, biometrics, precise location, government IDs),</li>
                <li>children&apos;s data.</li>
              </ul>
              <p className="leading-relaxed text-muted-foreground">
                If any specific app requires additional categories (e.g., health-related inputs), that app must provide
                clear in-app disclosures and consent flows where required.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">3) How we use data (purposes)</h2>
              <p className="leading-relaxed text-muted-foreground">We use your data to:</p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Provide and operate</strong> the Services (deliver features,
                  respond to requests, maintain accounts).
                </li>
                <li>
                  <strong className="text-foreground">Communicate</strong> with you (support, updates, transactional
                  messages).
                </li>
                <li>
                  <strong className="text-foreground">Improve and secure</strong> the Services (analytics,
                  troubleshooting, monitoring, fraud prevention).
                </li>
                <li>
                  <strong className="text-foreground">Comply with legal obligations</strong> and enforce our Terms.
                </li>
                <li>
                  <strong className="text-foreground">Business operations</strong> (internal reporting, administration).
                </li>
              </ul>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">4) Legal bases (EEA/UK users)</h2>
              <p className="leading-relaxed text-muted-foreground">Where applicable, we rely on:</p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Contract</strong> (to provide the Services you request),
                </li>
                <li>
                  <strong className="text-foreground">Legitimate interests</strong> (security, improvement, fraud
                  prevention),
                </li>
                <li>
                  <strong className="text-foreground">Consent</strong> (where required, e.g., certain cookies,
                  marketing, or optional data collection),
                </li>
                <li>
                  <strong className="text-foreground">Legal obligation</strong> (compliance).
                </li>
              </ul>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">5) How we share data</h2>
              <p className="leading-relaxed text-muted-foreground">We do not sell your personal data.</p>
              <p className="leading-relaxed text-muted-foreground">We may share information with:</p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Service providers/processors</strong> that help us run the
                  Services (hosting, email delivery, analytics, crash reporting, customer support tools).
                </li>
                <li>
                  <strong className="text-foreground">Legal authorities</strong> if required by law or to protect
                  rights, safety, and security.
                </li>
                <li>
                  <strong className="text-foreground">Corporate events</strong> (merger/acquisition/restructuring) where
                  data may transfer as part of the transaction.
                </li>
              </ul>

              <h3 className="mt-6 text-xl font-medium">Service provider transparency</h3>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Hosting: DigitalOcean / Cloudflare</li>
                <li>Analytics: PostHog</li>
                <li>Crash reporting: Sentry</li>
              </ul>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">6) International transfers</h2>
              <p className="leading-relaxed text-muted-foreground">
                Your data may be processed in countries other than where you live. Where required, we use appropriate
                safeguards for cross-border transfers.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">7) Data retention</h2>
              <p className="leading-relaxed text-muted-foreground">
                We retain personal data only as long as necessary for the purposes described above, including:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>to provide the Services,</li>
                <li>to comply with legal obligations,</li>
                <li>to resolve disputes and enforce agreements.</li>
              </ul>
              <p className="leading-relaxed text-muted-foreground">
                Retention periods vary by data type. You may request deletion where applicable (see Section 9).
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">8) Security</h2>
              <p className="leading-relaxed text-muted-foreground">
                We use reasonable administrative, technical, and organizational measures to protect data. However, no
                method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">9) Your privacy rights</h2>
              <p className="leading-relaxed text-muted-foreground">
                Depending on your location, you may have the right to:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>access, correct, or delete your personal data,</li>
                <li>object to or restrict processing,</li>
                <li>withdraw consent (where processing is based on consent),</li>
                <li>data portability,</li>
                <li>lodge a complaint with a supervisory authority.</li>
              </ul>
              <p className="leading-relaxed text-muted-foreground">
                To exercise rights, contact us at{" "}
                <a href="mailto:hey@reptilians.studio" className="text-accent hover:underline">
                  hey@reptilians.studio
                </a>
                . We may verify your identity before fulfilling requests.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">10) Marketing communications</h2>
              <p className="leading-relaxed text-muted-foreground">
                If we send marketing emails, you can opt out at any time using the unsubscribe link or by contacting us.
                We may still send non-marketing service messages (e.g., security or transactional notices).
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">11) Children&apos;s privacy</h2>
              <p className="leading-relaxed text-muted-foreground">
                The Services are not directed to children under <strong className="text-foreground">13</strong>. We do
                not knowingly collect personal data from children under 13. If you believe a child provided data,
                contact us and we will delete it where required.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">12) Third-party links</h2>
              <p className="leading-relaxed text-muted-foreground">
                The Services may link to third-party sites. Their privacy practices are not controlled by us. Review
                their policies before providing information.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">13) Changes to this policy</h2>
              <p className="leading-relaxed text-muted-foreground">
                We may update this Privacy Policy. If changes are material, we will post the updated version with a new
                &quot;Last updated&quot; date. Continued use means you accept the updated policy.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">14) Contact</h2>
              <p className="leading-relaxed text-muted-foreground">
                Privacy questions or requests:{" "}
                <a href="mailto:hey@reptilians.studio" className="text-accent hover:underline">
                  hey@reptilians.studio
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
