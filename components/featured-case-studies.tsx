import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CaseStudyCard } from "@/components/case-study-card"
import { caseStudies } from "@/lib/case-studies"

export function FeaturedCaseStudies() {
  // Get 3 featured case studies (prioritize Live status)
  const featured = caseStudies.filter((cs) => cs.status === "Live").slice(0, 3)

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">Selected work</h2>
            <p className="text-muted-foreground">A few recent projects we shipped.</p>
          </div>
          <Button asChild variant="ghost" className="hidden gap-2 sm:flex">
            <Link href="/case-studies">
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button asChild variant="outline" className="gap-2 bg-transparent">
            <Link href="/case-studies">
              View all case studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
