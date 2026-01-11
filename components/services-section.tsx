import { Card, CardContent } from "@/components/ui/card"
import { Monitor, Smartphone, Server, BarChart3, Cloud, Palette } from "lucide-react"

const services = [
  {
    icon: Monitor,
    title: "Web apps & dashboards",
    description: "Modern web applications built with React, Next.js, and cutting-edge technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile apps",
    description: "iOS, Android, and cross-platform solutions with React Native and native frameworks.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description: "Scalable backends, microservices, and robust API architectures.",
  },
  {
    icon: BarChart3,
    title: "Data & analytics",
    description: "ETL pipelines, dashboards, and real-time analytics systems.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Infrastructure automation, CI/CD, and cloud-native deployments.",
  },
  {
    icon: Palette,
    title: "UX/UI & product discovery",
    description: "User research, prototyping, and design systems that drive engagement.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">What we do</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Full-stack capabilities to bring your product from concept to production.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-border/50 bg-card/50 p-0 transition-colors hover:border-border hover:bg-card"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
                  <service.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mb-2 font-semibold tracking-tight">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
