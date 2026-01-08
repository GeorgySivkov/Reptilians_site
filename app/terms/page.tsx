import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service | DevLabs",
  description: "Terms of Service for DevLabs and our projects",
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
          <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="mt-4 text-muted-foreground">Last updated: January 7, 2026</p>

          <div className="prose prose-neutral dark:prose-invert mt-12 max-w-none">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">1. Acceptance of Terms</h2>
              <p className="leading-relaxed text-muted-foreground">
                By accessing and using DevLabs websites and projects, you accept and agree to be bound by the terms and
                provisions of this agreement. If you do not agree to abide by these terms, please do not use our
                services.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">2. Use License</h2>
              <p className="leading-relaxed text-muted-foreground">
                Permission is granted to temporarily access the materials on DevLabs websites for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and
                under this license you may not:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations</li>
                <li>Transfer the materials to another person</li>
              </ul>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">3. Project Usage</h2>
              <p className="leading-relaxed text-muted-foreground">
                Our pet projects are provided for demonstration and educational purposes. Each project may have its own
                specific license terms. Please refer to individual project repositories for detailed licensing
                information.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">4. Disclaimer</h2>
              <p className="leading-relaxed text-muted-foreground">
                The materials on DevLabs websites are provided on an &apos;as is&apos; basis. DevLabs makes no
                warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of merchantability, fitness for a particular
                purpose, or non-infringement of intellectual property.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">5. Limitations</h2>
              <p className="leading-relaxed text-muted-foreground">
                In no event shall DevLabs or its suppliers be liable for any damages arising out of the use or inability
                to use the materials on our websites, even if DevLabs has been notified of the possibility of such
                damages.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">6. Revisions</h2>
              <p className="leading-relaxed text-muted-foreground">
                DevLabs may revise these terms of service at any time without notice. By using our websites and projects
                you are agreeing to be bound by the current version of these terms of service.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">7. Contact</h2>
              <p className="leading-relaxed text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us through our contact page.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
