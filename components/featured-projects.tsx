import Link from "next/link"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getFeaturedProjects } from "@/lib/projects"

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects()

  return (
    <section className="border-t border-border/40 py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">Featured Work</p>
            <h2 className="text-3xl font-bold tracking-tight">Selected Projects</h2>
          </div>
          <Button asChild variant="ghost" className="hidden gap-2 sm:inline-flex">
            <Link href="/projects">
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button asChild variant="outline" className="gap-2 bg-transparent">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
