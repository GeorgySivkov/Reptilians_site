"use client"

import { useState, useMemo } from "react"
import { CaseStudyCard } from "@/components/case-study-card"
import { CaseStudyFilters } from "@/components/case-study-filters"
import type { CaseStudy } from "@/lib/case-studies"

interface CaseStudiesListProps {
  caseStudies: CaseStudy[]
}

export function CaseStudiesList({ caseStudies }: CaseStudiesListProps) {
  const [selectedStack, setSelectedStack] = useState<string[]>([])

  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter((cs) => {
      const matchesStack = selectedStack.length === 0 || selectedStack.some((tech) => cs.stack.includes(tech))
      return matchesStack
    })
  }, [caseStudies, selectedStack])

  return (
    <>
      <CaseStudyFilters
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
    </>
  )
}
