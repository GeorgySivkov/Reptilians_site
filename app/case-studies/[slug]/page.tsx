import { notFound } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectCarousel } from "@/components/project-carousel"
import { ProjectIcon } from "@/components/project-icon"
import {
  ArrowLeft,
  AlertCircle,
  Lightbulb,
  ArrowRight,
  Building2,
  Users,
  Target,
  CheckCircle2,
  Wrench,
} from "lucide-react"
import { caseStudies, getCaseStudyBySlug, statusConfig, industryConfig } from "@/lib/case-studies"
import { cn } from "@/lib/utils"

export const dynamic = "force-static"
export const revalidate = false

export function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const caseStudy = getCaseStudyBySlug(slug)

  if (!caseStudy) {
    notFound()
  }

  const status = statusConfig[caseStudy.status]
  const industry = industryConfig[caseStudy.industry]

  const contactSubject = encodeURIComponent(`Inquiry about: ${caseStudy.name}`)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <article className="py-12 md:py-20">
          <div className="container mx-auto max-w-5xl px-4">
            {/* Back link */}
            <Link
              href="/case-studies"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Case Studies
            </Link>

            {/* Header */}
            <header className="mb-10">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <Badge variant="outline" className={cn("text-xs font-medium", status.color)}>
                  {status.label}
                </Badge>
                <span className={cn("text-sm font-medium", industry.color)}>{industry.label}</span>
                <span className="text-sm text-muted-foreground">• {caseStudy.model}</span>
              </div>

              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                  <ProjectIcon icon={caseStudy.icon} className="h-7 w-7 text-accent" />
                </div>
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{caseStudy.name}</h1>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground">{caseStudy.summary}</p>
            </header>

            {/* Screenshot carousel */}
            <div className="mb-12">
              <ProjectCarousel images={caseStudy.screenshots} title={caseStudy.name} />
            </div>

            {/* Meta info grid */}
            <div className="mb-12 grid gap-4 sm:grid-cols-3">
              <Card className="border-border/50 bg-card/50 p-0">
                <CardContent className="flex items-start gap-3 p-4">
                  <Building2 className="mt-0.5 h-5 w-5 text-accent" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Client</p>
                    <p className="text-sm font-medium">{caseStudy.sections.client}</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card/50 p-0">
                <CardContent className="flex items-start gap-3 p-4">
                  <Target className="mt-0.5 h-5 w-5 text-accent" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Use Case</p>
                    <p className="text-sm font-medium">{caseStudy.useCase}</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card/50 p-0">
                <CardContent className="flex items-start gap-3 p-4">
                  <Users className="mt-0.5 h-5 w-5 text-accent" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Target Audience</p>
                    <p className="text-sm font-medium">{caseStudy.audience}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Problem / Solution / What's Next */}
            <div className="mb-12 grid gap-6 md:grid-cols-3">
              <Card className="border-border/50 bg-card/50 p-0">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
                      <AlertCircle className="h-5 w-5 text-red-400" />
                    </div>
                    <h2 className="text-lg font-semibold">Problem</h2>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{caseStudy.sections.problem}</p>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card/50 p-0">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                      <Lightbulb className="h-5 w-5 text-emerald-400" />
                    </div>
                    <h2 className="text-lg font-semibold">Solution</h2>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{caseStudy.sections.solution}</p>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card/50 p-0">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                      <ArrowRight className="h-5 w-5 text-blue-400" />
                    </div>
                    <h2 className="text-lg font-semibold">What's Next</h2>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{caseStudy.sections.whatsNext}</p>
                </CardContent>
              </Card>
            </div>

            {/* What We Did */}
            <Card className="mb-12 border-border/50 bg-card/50 p-0">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Wrench className="h-5 w-5 text-accent" />
                  </div>
                  <h2 className="text-lg font-semibold">What We Did</h2>
                </div>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {caseStudy.sections.whatWeDid.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Outcome */}
            <Card className="mb-12 border-accent/30 bg-accent/5 p-0">
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <h2 className="text-lg font-semibold">Outcome</h2>
                </div>
                <p className="text-muted-foreground">{caseStudy.sections.outcome}</p>
              </CardContent>
            </Card>

            {/* Tech stack */}
            <div className="mb-12">
              <h2 className="mb-4 text-lg font-semibold">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {caseStudy.stack.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4 border-t border-border/40 pt-8 sm:flex-row">
              <Button asChild size="lg" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href={`/contact?subject=${contactSubject}`}>Request a demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
                <Link href={`/contact?subject=${contactSubject}`}>Discuss a similar project</Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
