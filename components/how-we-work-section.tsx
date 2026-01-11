import { Search, FileText, Code2, TestTube, Rocket, RefreshCw } from "lucide-react"

const steps = [
  { icon: Search, title: "Discover", description: "Understand goals, constraints, and priorities" },
  { icon: FileText, title: "Plan & estimate", description: "Scope, timeline, and resource planning" },
  { icon: Code2, title: "Build", description: "Iterative development with weekly demos" },
  { icon: TestTube, title: "QA", description: "Testing, code review, and quality gates" },
  { icon: Rocket, title: "Launch", description: "Deployment, monitoring, and go-live support" },
  { icon: RefreshCw, title: "Support & iterate", description: "Maintenance, feedback, and continuous improvement" },
]

export function HowWeWorkSection() {
  return (
    <section className="border-y border-border/40 bg-secondary/20 py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">How we work</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Weekly demos and transparent communication at every stage.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border/60 lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                <div className="relative z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background">
                  <step.icon className="h-5 w-5 text-accent" />
                </div>
                <div className="mb-1 text-xs font-medium text-accent">Step {index + 1}</div>
                <h3 className="mb-1 font-semibold tracking-tight">{step.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
