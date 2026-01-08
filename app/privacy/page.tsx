import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const dynamic = "force-static"
export const revalidate = false

export const metadata = {
  title: "Privacy Policy | DevLabs",
  description: "Privacy Policy for DevLabs and our projects",
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground">Last updated: January 7, 2026</p>

          <div className="prose prose-neutral dark:prose-invert mt-12 max-w-none">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">1. Introduction</h2>
              <p className="leading-relaxed text-muted-foreground">
                DevLabs (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, and safeguard your information when you visit our
                websites or use our projects.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">2. Information We Collect</h2>
              <p className="leading-relaxed text-muted-foreground">We may collect information in the following ways:</p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Personal Information:</strong> Name, email address, and other
                  contact details you provide through our contact form.
                </li>
                <li>
                  <strong className="text-foreground">Usage Data:</strong> Information about how you interact with our
                  websites, including pages visited and time spent.
                </li>
                <li>
                  <strong className="text-foreground">Technical Data:</strong> Browser type, device information, and IP
                  address for analytics purposes.
                </li>
              </ul>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">3. How We Use Your Information</h2>
              <p className="leading-relaxed text-muted-foreground">We use collected information to:</p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Respond to your inquiries and requests</li>
                <li>Improve our websites and projects</li>
                <li>Analyze usage patterns and optimize user experience</li>
                <li>Send updates about our projects (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">4. Data Security</h2>
              <p className="leading-relaxed text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the Internet is 100% secure.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">5. Third-Party Services</h2>
              <p className="leading-relaxed text-muted-foreground">
                Our websites may use third-party services such as analytics providers. These services may collect
                information about your use of our websites. We encourage you to review the privacy policies of these
                third-party services.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">6. Cookies</h2>
              <p className="leading-relaxed text-muted-foreground">
                We use cookies to enhance your experience on our websites. Cookies are small files stored on your device
                that help us remember your preferences and understand how you use our sites. You can control cookies
                through your browser settings.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">7. Your Rights</h2>
              <p className="leading-relaxed text-muted-foreground">You have the right to:</p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">8. Changes to This Policy</h2>
              <p className="leading-relaxed text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">9. Contact Us</h2>
              <p className="leading-relaxed text-muted-foreground">
                If you have any questions about this Privacy Policy or our data practices, please contact us through our
                contact page.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
