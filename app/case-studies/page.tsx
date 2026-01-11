"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CaseStudyCard } from "@/components/case-study-card"
import { CaseStudyFilters } from "@/components/case-study-filters"
import { caseStudies, type CaseStudyStatus } from "@/lib/case-studies"

export default function CaseStudiesPage() {
  const [selectedStatuses, setSelectedStatuses] = useState<CaseStudyStatus[]>([])
  const [selectedStack, setSelectedStack] = useState<string[]>([])

  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter((cs) => {
      const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes(cs.status)
      const matchesStack = selectedStack.length === 0 || selectedStack.some((tech) => cs.stack.includes(tech))
      return matchesStatus && matchesStack
    })
  }, [selectedStatuses, selectedStack])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-10">
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Case Studies</h1>
              <p className="max-w-2xl text-lg text-muted-foreground">
                A selection of client work and studio-built products. Some cases are anonymized due to NDAs.
              </p>
            </div>

            <CaseStudyFilters
              selectedStatuses={selectedStatuses}
              onStatusChange={setSelectedStatuses}
              selectedStack={selectedStack}
              onStackChange={setSelectedStack}
            />

            {filteredCaseStudies.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredCaseStudies.map((caseStudy) => (
                  <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <p className="text-lg text-muted-foreground">No case studies match your filters.</p>
                <p className="mt-2 text-sm text-muted-foreground">Try adjusting your filter criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
