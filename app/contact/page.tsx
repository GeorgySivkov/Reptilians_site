import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, Github, Twitter, Linkedin } from "lucide-react"

export const dynamic = "force-static"
export const revalidate = false

export const metadata = {
  title: "Contact | DevLabs",
  description: "Get in touch with our team to discuss your project or collaboration ideas",
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@devlabs.dev",
    href: "mailto:hello@devlabs.dev",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: null,
  },
]

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
]

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-24">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">Contact</p>
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Let&apos;s Work Together</h1>
              <p className="text-lg text-muted-foreground">
                Have a project in mind or want to collaborate? We&apos;d love to hear from you.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <ContactForm />
              </div>

              <div className="space-y-8">
                <div className="rounded-xl border border-border/50 bg-card p-8">
                  <h3 className="mb-6 font-semibold">Contact Info</h3>
                  <div className="space-y-4">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                          <item.icon className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="font-medium transition-colors hover:text-accent">
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-medium">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-border/50 bg-card p-8">
                  <h3 className="mb-6 font-semibold">Follow Us</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-foreground"
                      >
                        <link.icon className="h-5 w-5" />
                        <span className="sr-only">{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
