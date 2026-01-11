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
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">1. Acceptance of Terms</h2>
              <p className="leading-relaxed text-muted-foreground">
                By accessing and using Reptilians websites and services, you accept and agree to be bound by the terms
                and provisions of this agreement. If you do not agree to abide by these terms, please do not use our
                services.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">2. Services</h2>
              <p className="leading-relaxed text-muted-foreground">
                Reptilians provides custom software development services including but not limited to: web and mobile
                application development, backend systems, data and analytics solutions, and product discovery. The
                specific scope, deliverables, and terms of each engagement are defined in separate service agreements.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">3. Intellectual Property</h2>
              <p className="leading-relaxed text-muted-foreground">
                Unless otherwise specified in a service agreement, all intellectual property rights in deliverables
                created by Reptilians for a client shall be transferred to the client upon full payment. Reptilians
                retains rights to any pre-existing tools, frameworks, or methodologies used in the creation of
                deliverables.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">4. Confidentiality</h2>
              <p className="leading-relaxed text-muted-foreground">
                Reptilians agrees to maintain the confidentiality of all client information and materials. We will not
                disclose confidential information to third parties without prior written consent, except as required by
                law. Upon request, we are prepared to enter into formal Non-Disclosure Agreements (NDAs).
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">5. Disclaimer</h2>
              <p className="leading-relaxed text-muted-foreground">
                The materials on Reptilians websites are provided on an &apos;as is&apos; basis. Reptilians makes no
                warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
                without limitation, implied warranties of merchantability, fitness for a particular purpose, or
                non-infringement.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">6. Limitations</h2>
              <p className="leading-relaxed text-muted-foreground">
                In no event shall Reptilians be liable for any indirect, incidental, special, consequential, or punitive
                damages arising out of or related to the use of our services, even if Reptilians has been notified of
                the possibility of such damages.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">7. Revisions</h2>
              <p className="leading-relaxed text-muted-foreground">
                Reptilians may revise these terms of service at any time without notice. By using our websites and
                services you are agreeing to be bound by the current version of these terms of service.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">8. Contact</h2>
              <p className="leading-relaxed text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:legal@reptilians.dev" className="text-accent hover:underline">
                  legal@reptilians.dev
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
