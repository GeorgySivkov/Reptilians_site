"use client"

import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getAllStack, getAllStatuses, statusConfig, type CaseStudyStatus } from "@/lib/case-studies"
import { cn } from "@/lib/utils"

interface CaseStudyFiltersProps {
  selectedStatuses: CaseStudyStatus[]
  onStatusChange: (statuses: CaseStudyStatus[]) => void
  selectedStack: string[]
  onStackChange: (stack: string[]) => void
}

export function CaseStudyFilters({
  selectedStatuses,
  onStatusChange,
  selectedStack,
  onStackChange,
}: CaseStudyFiltersProps) {
  const allStack = getAllStack()
  const allStatuses = getAllStatuses()

  const toggleStatus = (status: CaseStudyStatus) => {
    if (selectedStatuses.includes(status)) {
      onStatusChange(selectedStatuses.filter((s) => s !== status))
    } else {
      onStatusChange([...selectedStatuses, status])
    }
  }

  const toggleStack = (tech: string) => {
    if (selectedStack.includes(tech)) {
      onStackChange(selectedStack.filter((t) => t !== tech))
    } else {
      onStackChange([...selectedStack, tech])
    }
  }

  const clearFilters = () => {
    onStatusChange([])
    onStackChange([])
  }

  const hasActiveFilters = selectedStatuses.length > 0 || selectedStack.length > 0

  return (
    <div className="mb-8 space-y-6">
      {/* Status filters */}
      <div>
        <p className="mb-3 text-sm font-medium text-muted-foreground">Status</p>
        <div className="flex flex-wrap gap-2">
          {allStatuses.map((status) => {
            const config = statusConfig[status]
            const isSelected = selectedStatuses.includes(status)
            return (
              <button
                key={status}
                onClick={() => toggleStatus(status)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition-all",
                  isSelected
                    ? config.color
                    : "border-border bg-transparent text-muted-foreground hover:border-accent/50 hover:text-foreground",
                )}
              >
                {config.label}
              </button>
            )
          })}
        </div>
      </div>

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
