"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, Users, Target } from "lucide-react"
import { ProjectCarousel } from "@/components/project-carousel"
import { ProjectIcon } from "@/components/project-icon"
import type { CaseStudy } from "@/lib/case-studies"
import { statusConfig, industryConfig } from "@/lib/case-studies"
import { cn } from "@/lib/utils"

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const status = statusConfig[caseStudy.status]
  const industry = industryConfig[caseStudy.industry]

  return (
    <Link href={`/case-studies/${caseStudy.slug}`}>
      <Card className="group h-full flex flex-col border-border/50 bg-card p-0 transition-all duration-300 hover:border-border hover:shadow-lg hover:shadow-accent/5">
        <div className="overflow-hidden rounded-t-xl">
          <ProjectCarousel images={caseStudy.screenshots} title={caseStudy.name} compact />
        </div>

        <CardContent className="flex flex-1 flex-col p-5">
          <div className="mb-3 flex items-start justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <ProjectIcon icon={caseStudy.icon} className="h-4.5 w-4.5 text-accent" />
              </div>
              <h3 className="text-base font-semibold leading-tight tracking-tight transition-colors group-hover:text-accent truncate">
                {caseStudy.name}
              </h3>
            </div>
            <Badge variant="outline" className={cn("shrink-0 text-xs font-medium", status.color)}>
              {status.label}
            </Badge>
          </div>

          <div className="mb-3 flex items-center gap-2 text-xs">
            <span className={cn("font-medium", industry.color)}>{industry.label}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{caseStudy.model}</span>
          </div>

          <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{caseStudy.tagline}</p>

          <div className="mb-4 space-y-2 border-t border-border/40 pt-3">
            <div className="flex items-start gap-2 text-xs text-muted-foreground">
              <Target className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent/70" />
              <span className="line-clamp-1">{caseStudy.useCase}</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-muted-foreground">
              <Users className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent/70" />
              <span className="line-clamp-1">{caseStudy.audience}</span>
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex flex-wrap gap-1.5">
              {caseStudy.stack.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs font-normal px-2 py-0.5">
                  {tech}
                </Badge>
              ))}
              {caseStudy.stack.length > 3 && (
                <Badge variant="secondary" className="text-xs font-normal px-2 py-0.5">
                  +{caseStudy.stack.length - 3}
                </Badge>
              )}
            </div>

            <div className="mt-3 flex items-center gap-1 text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
              View case study <ArrowUpRight className="h-3 w-3" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
