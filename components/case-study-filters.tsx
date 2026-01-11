"use client"

import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  getAllStack,
  getAllStatuses,
  getAllIndustries,
  statusConfig,
  industryConfig,
  type CaseStudyStatus,
  type Industry,
} from "@/lib/case-studies"
import { cn } from "@/lib/utils"

interface CaseStudyFiltersProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedStatuses: CaseStudyStatus[]
  onStatusChange: (statuses: CaseStudyStatus[]) => void
  selectedIndustries: Industry[]
  onIndustryChange: (industries: Industry[]) => void
  selectedStack: string[]
  onStackChange: (stack: string[]) => void
}

export function CaseStudyFilters({
  searchQuery,
  onSearchChange,
  selectedStatuses,
  onStatusChange,
  selectedIndustries,
  onIndustryChange,
  selectedStack,
  onStackChange,
}: CaseStudyFiltersProps) {
  const allStack = getAllStack()
  const allStatuses = getAllStatuses()
  const allIndustries = getAllIndustries()

  const toggleStatus = (status: CaseStudyStatus) => {
    if (selectedStatuses.includes(status)) {
      onStatusChange(selectedStatuses.filter((s) => s !== status))
    } else {
      onStatusChange([...selectedStatuses, status])
    }
  }

  const toggleIndustry = (industry: Industry) => {
    if (selectedIndustries.includes(industry)) {
      onIndustryChange(selectedIndustries.filter((i) => i !== industry))
    } else {
      onIndustryChange([...selectedIndustries, industry])
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
    onSearchChange("")
    onStatusChange([])
    onIndustryChange([])
    onStackChange([])
  }

  const hasActiveFilters =
    searchQuery || selectedStatuses.length > 0 || selectedIndustries.length > 0 || selectedStack.length > 0

  return (
    <div className="mb-8 space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search case studies..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

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

      {/* Industry filters */}
      <div>
        <p className="mb-3 text-sm font-medium text-muted-foreground">Industry</p>
        <div className="flex flex-wrap gap-2">
          {allIndustries.map((industry) => {
            const config = industryConfig[industry]
            const isSelected = selectedIndustries.includes(industry)
            return (
              <button
                key={industry}
                onClick={() => toggleIndustry(industry)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition-all",
                  isSelected
                    ? "border-accent/50 bg-accent/10 text-accent"
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
