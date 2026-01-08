import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TeamCard } from "@/components/team-card"
import { team } from "@/lib/team"
import { Code2, Lightbulb, Users, Zap } from "lucide-react"

export const metadata = {
  title: "About | DevLabs",
  description: "Learn about our team and mission to build innovative software solutions",
}

const values = [
  {
    icon: Code2,
    title: "Craftsmanship",
    description: "We take pride in writing clean, maintainable code that stands the test of time.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly explore new technologies and approaches to solve complex problems.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe the best solutions come from diverse perspectives working together.",
  },
  {
    icon: Zap,
    title: "Impact",
    description: "We focus on building tools that make a real difference for developers and users.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-24">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">About Us</p>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                Building the Future, One Project at a Time
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We&apos;re a team of passionate developers who believe in the power of side projects. When we&apos;re
                not building solutions for clients, we&apos;re exploring new ideas and pushing the boundaries of
                what&apos;s possible.
              </p>
            </div>

            <div className="mb-24 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="rounded-xl border border-border/50 bg-card p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-2 font-semibold">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>

            <div className="mb-12">
              <p className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
                The Team
              </p>
              <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Meet Our Developers</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {team.map((member) => (
                  <TeamCard key={member.id} member={member} />
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
