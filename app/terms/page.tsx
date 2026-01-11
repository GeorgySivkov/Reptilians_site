import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const dynamic = "force-static"
export const revalidate = false

export const metadata = {
  title: "Terms of Service | Reptilians",
  description: "Terms of Service for Reptilians and our services",
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
          <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="mt-4 text-muted-foreground">Last updated: January 11, 2026</p>

          <div className="prose prose-neutral dark:prose-invert mt-12 max-w-none">
            <p className="leading-relaxed text-muted-foreground">
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Reptilians website(s) and
              related pages (the &quot;Website&quot;), and any Reptilians mobile applications and related services (the
              &quot;Apps&quot;), collectively, the &quot;Services&quot;.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              By accessing or using the Services, you agree to these Terms. If you do not agree, do not use the
              Services.
            </p>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">1) Who we are</h2>
              <p className="leading-relaxed text-muted-foreground">
                The Services are provided by <strong className="text-foreground">Reptilians</strong>{" "}
                (&quot;Reptilians&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
              </p>
              <p className="leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Legal entity name:</strong> Reptilians
                <br />
                <strong className="text-foreground">Contact:</strong>{" "}
                <a href="mailto:hey@reptilians.band" className="text-accent hover:underline">
                  hey@reptilians.band
                </a>
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Reptilians operates as a distributed team, but your contract (if any) is with Reptilians.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">2) Eligibility</h2>
              <p className="leading-relaxed text-muted-foreground">
                You must be at least <strong className="text-foreground">13 years old</strong> to use the Services. If
                you are under the age of majority where you live, you may use the Services only with permission of a
                parent or legal guardian.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">3) Changes to the Services and Terms</h2>
              <p className="leading-relaxed text-muted-foreground">
                We may modify, suspend, or discontinue any part of the Services at any time, with or without notice.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                We may update these Terms from time to time. The &quot;Last updated&quot; date shows when changes were
                made. Continued use after changes means you accept the updated Terms.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">4) Accounts and security</h2>
              <p className="leading-relaxed text-muted-foreground">
                If you create an account, you are responsible for:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>maintaining confidentiality of your credentials,</li>
                <li>all activity under your account,</li>
                <li>providing accurate information.</li>
              </ul>
              <p className="leading-relaxed text-muted-foreground">
                We may disable accounts we suspect are compromised, used unlawfully, or violate these Terms.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">5) Acceptable use</h2>
              <p className="leading-relaxed text-muted-foreground">You agree not to:</p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>
                  misuse the Services (e.g., attempt to gain unauthorized access, interfere with security, scrape at
                  scale, reverse engineer where prohibited),
                </li>
                <li>upload or transmit malicious code,</li>
                <li>infringe intellectual property or privacy rights,</li>
                <li>use the Services for unlawful, harmful, deceptive, or abusive purposes.</li>
              </ul>
              <p className="leading-relaxed text-muted-foreground">
                We may investigate violations and take any action we deem appropriate, including suspension or
                termination.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">6) User content and submissions</h2>
              <p className="leading-relaxed text-muted-foreground">
                If you submit content to the Services (e.g., messages, forms, files, feedback) (&quot;User
                Content&quot;):
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>you represent you have the rights to submit it,</li>
                <li>
                  you grant Reptilians a worldwide, non-exclusive, royalty-free license to host, store, reproduce,
                  modify (for formatting), and use it solely to operate, improve, and provide the Services.
                </li>
              </ul>
              <p className="leading-relaxed text-muted-foreground">
                Do not submit confidential information unless explicitly requested and protected under a separate
                written agreement (e.g., NDA).
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">7) Intellectual property</h2>
              <p className="leading-relaxed text-muted-foreground">
                All rights in the Services (including software, design, branding, and content) are owned by Reptilians
                or its licensors and are protected by law.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                You may not copy, modify, distribute, sell, or lease any part of the Services except as expressly
                permitted.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">8) Third-party services and links</h2>
              <p className="leading-relaxed text-muted-foreground">
                The Services may contain links to third-party websites or services. We do not control and are not
                responsible for third-party content, policies, or practices. Your use of third-party services is at your
                own risk and subject to their terms.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">9) No professional advice</h2>
              <p className="leading-relaxed text-muted-foreground">
                The Services may provide general information.{" "}
                <strong className="text-foreground">
                  Nothing in the Services constitutes professional medical, legal, financial, or other regulated advice.
                </strong>{" "}
                You are solely responsible for how you use any information and for obtaining professional advice where
                appropriate.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">10) Disclaimers (AS IS)</h2>
              <p className="leading-relaxed text-muted-foreground uppercase">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICES ARE PROVIDED{" "}
                <strong className="text-foreground">&quot;AS IS&quot;</strong> AND{" "}
                <strong className="text-foreground">&quot;AS AVAILABLE&quot;</strong> WITHOUT WARRANTIES OF ANY KIND,
                WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ACCURACY.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                We do not warrant that the Services will be uninterrupted, error-free, secure, or free of harmful
                components, or that any data will be preserved without loss.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">11) Limitation of liability</h2>
              <p className="leading-relaxed text-muted-foreground uppercase">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li className="uppercase">
                  REPTILIANS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR
                  PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS INTERRUPTION.
                </li>
                <li className="uppercase">
                  REPTILIANS&apos; TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THE SERVICES WILL NOT
                  EXCEED THE GREATER OF: (A) <strong className="text-foreground">EUR 100</strong>, OR (B) THE AMOUNT YOU
                  PAID TO REPTILIANS FOR THE SERVICES IN THE <strong className="text-foreground">3 MONTHS</strong>{" "}
                  BEFORE THE EVENT GIVING RISE TO THE CLAIM.
                </li>
              </ul>
              <p className="leading-relaxed text-muted-foreground">
                Some jurisdictions do not allow certain limitations. In that case, liability will be limited to the
                maximum extent permitted by law.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">12) Indemnification</h2>
              <p className="leading-relaxed text-muted-foreground">
                You agree to defend, indemnify, and hold harmless Reptilians (and its team members, contractors, and
                partners) from any claims, damages, liabilities, losses, and expenses (including reasonable legal fees)
                arising from:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>your use or misuse of the Services,</li>
                <li>your User Content,</li>
                <li>your violation of these Terms or any law,</li>
                <li>your infringement of any rights of another party.</li>
              </ul>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">13) Termination</h2>
              <p className="leading-relaxed text-muted-foreground">You may stop using the Services at any time.</p>
              <p className="leading-relaxed text-muted-foreground">
                We may suspend or terminate your access immediately if we believe you violated these Terms, created
                risk, or engaged in unlawful conduct.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Sections intended to survive termination will survive (including IP, disclaimers, limitation of
                liability, indemnification, dispute terms).
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">14) App store specific terms (Apple / Google)</h2>
              <p className="leading-relaxed text-muted-foreground">If you access the Services via an App:</p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Your use is also subject to the applicable app store terms and policies.</li>
                <li>
                  Apple and Google are not responsible for the Services and have no obligation to provide support.
                </li>
              </ul>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">15) Governing law and jurisdiction</h2>
              <p className="leading-relaxed text-muted-foreground">
                These Terms are governed by the laws of the applicable jurisdiction, excluding conflict-of-law rules.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Any dispute will be brought exclusively in the courts of the applicable jurisdiction, unless mandatory
                law provides otherwise.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">16) Contact</h2>
              <p className="leading-relaxed text-muted-foreground">
                Questions about these Terms:{" "}
                <a href="mailto:hey@reptilians.band" className="text-accent hover:underline">
                  hey@reptilians.band
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
