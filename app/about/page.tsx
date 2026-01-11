import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Code2, Lightbulb, Users, Zap, Target, Clock, Shield, MessageSquare, CheckCircle2 } from "lucide-react"

export const dynamic = "force-static"
export const revalidate = false

export const metadata = {
  title: "About | Reptilians",
  description: "A startup studio that builds and ships software. Distributed across Serbia, Amsterdam, and Cyprus.",
}

const values = [
  {
    icon: Code2,
    title: "Craftsmanship",
    description: "We take pride in writing clean, maintainable code that scales and lasts.",
  },
  {
    icon: Lightbulb,
    title: "Product Thinking",
    description: "We care about outcomes, not just outputs. Every decision ties back to user value.",
  },
  {
    icon: Users,
    title: "Transparency",
    description: "Weekly demos, open communication, and no surprises. You always know where we stand.",
  },
  {
    icon: Zap,
    title: "Velocity",
    description: "Fast iteration without cutting corners. We ship early and improve continuously.",
  },
]

const projectCriteria = [
  {
    icon: Target,
    title: "Clear Decision Maker",
    description: "We need a single point of contact who can make decisions and prioritize trade-offs.",
  },
  {
    icon: Clock,
    title: "Realistic Timelines",
    description: "Rushing leads to technical debt. We work fast, but we won't promise the impossible.",
  },
  {
    icon: MessageSquare,
    title: "Access to Feedback",
    description: "The best products come from tight feedback loops with real users and stakeholders.",
  },
  {
    icon: Shield,
    title: "Defined Expectations",
    description: "Security, compliance, and quality requirements should be clear upfront, not afterthoughts.",
  },
  {
    icon: CheckCircle2,
    title: "Shared Quality Bar",
    description: "We align on what 'done' means before we start. No ambiguity, no scope creep.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                A studio that builds software that works.
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We're a distributed team of product-minded engineers across{" "}
                <span className="font-medium text-foreground">Serbia</span>,{" "}
                <span className="font-medium text-foreground">Amsterdam</span>, and{" "}
                <span className="font-medium text-foreground">Cyprus</span>. We help startups launch MVPs and help
                enterprises ship complex systems — from ideation to production.
              </p>
            </div>

            <div className="mb-24 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="rounded-xl border border-border/50 bg-card/50 p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
                    <value.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mb-2 font-semibold">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-border/50 bg-card/30 p-8 md:p-12">
              <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">How we choose projects</h2>
              <p className="mb-10 max-w-2xl text-muted-foreground">
                We work best when we can own outcomes. Here's what makes a great collaboration:
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projectCriteria.map((criteria, index) => (
                  <div key={criteria.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <criteria.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">{criteria.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{criteria.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
