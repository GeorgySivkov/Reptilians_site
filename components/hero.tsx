import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Zap, Shield } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/8 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-accent">Reptilians</span>
            <br />
            Startup studio that builds and ships software.
          </h1>
          <div className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            <p>We turn ideas into MVPs and production-ready products — fast.</p>
            <p className="mt-2">
              Distributed <span className="font-medium text-foreground">worldwide</span>.
            </p>
            <p className="mt-2">
              Work with us via <span className="font-medium text-foreground">fixed scope</span>,{" "}
              <span className="font-medium text-foreground">T&M</span>, or{" "}
              <span className="font-medium text-foreground">dedicated squads</span>.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">
                Book a call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
              <Link href="/case-studies">See case studies</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Code2 className="h-4 w-4 text-accent" />
              <span>Product-minded engineers</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-accent" />
              <span>Fast iteration</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-accent" />
              <span>Security-first defaults</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
