import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin } from "lucide-react"

export const dynamic = "force-static"
export const revalidate = false

export const metadata = {
  title: "Contact | Reptilians",
  description: "Share a brief — we'll reply with next steps and a suggested engagement model.",
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hey@reptilians.studio",
    href: "mailto:hey@reptilians.studio",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Distributed worldwide",
    href: null,
  },
]

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Let's build something solid.</h1>
              <p className="text-lg text-muted-foreground">
                Share a short brief — we'll reply with next steps and a suggested engagement model.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <ContactForm />
              </div>

              <div className="space-y-6">
                <div className="rounded-xl border border-border/50 bg-card/50 p-6">
                  <h3 className="mb-5 font-semibold">Contact Info</h3>
                  <div className="space-y-4">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                          <item.icon className="h-5 w-5 text-accent" />
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


              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
