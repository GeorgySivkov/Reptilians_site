"use client"

import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getAllStack } from "@/lib/case-studies"
import { cn } from "@/lib/utils"

interface CaseStudyFiltersProps {
  selectedStack: string[]
  onStackChange: (stack: string[]) => void
}

export function CaseStudyFilters({
  selectedStack,
  onStackChange,
}: CaseStudyFiltersProps) {
  const allStack = getAllStack()

  const toggleStack = (tech: string) => {
    if (selectedStack.includes(tech)) {
      onStackChange(selectedStack.filter((t) => t !== tech))
    } else {
      onStackChange([...selectedStack, tech])
    }
  }

  const clearFilters = () => {
    onStackChange([])
  }

  const hasActiveFilters = selectedStack.length > 0

  return (
    <div className="mb-8 space-y-6">
      {/* Tech stack filters */}
      <div>
        <p className="mb-3 text-sm font-medium text-muted-foreground">Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          {allStack.map((tech) => {
            const isSelected = selectedStack.includes(tech)
            return (
              <Badge
                key={tech}
                variant={isSelected ? "default" : "secondary"}
                className={cn(
                  "cursor-pointer transition-all",
                  isSelected ? "bg-accent text-accent-foreground" : "hover:bg-secondary/80",
                )}
                onClick={() => toggleStack(tech)}
              >
                {tech}
              </Badge>
            )
          })}
        </div>
      </div>

      {/* Clear filters */}
      {hasActiveFilters && (
        <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-2 text-muted-foreground">
          <X className="h-4 w-4" />
          Clear all filters
        </Button>
      )}
    </div>
  )
}
