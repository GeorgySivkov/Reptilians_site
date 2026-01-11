import { Card, CardContent } from "@/components/ui/card"
import { Package, Clock, Users } from "lucide-react"

const models = [
  {
    icon: Package,
    title: "Fixed scope / fixed price",
    description:
      "Best for well-defined projects with clear requirements. Fixed budget and timeline with milestone-based delivery.",
    features: ["Clear deliverables", "Predictable cost", "Milestone payments"],
  },
  {
    icon: Clock,
    title: "Time & materials",
    description: "Flexible engagement for evolving requirements. Pay for actual work done with full transparency.",
    features: ["Flexible scope", "Sprint-based billing", "Quick pivots"],
  },
  {
    icon: Users,
    title: "Dedicated team",
    description: "Your own engineering squad, fully integrated with your processes. Scale up or down as needed.",
    features: ["Full-time focus", "Direct collaboration", "Long-term partnership"],
  },
]

export function EngagementModelsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Engagement models</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Choose the collaboration style that fits your project and team.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {models.map((model) => (
            <Card
              key={model.title}
              className="border-border/50 bg-card/50 p-0 transition-colors hover:border-accent/50"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
                  <model.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-tight">{model.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{model.description}</p>
                <ul className="space-y-2">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
