import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { getProjectById, projects } from "@/lib/projects"

export const dynamic = "force-static"
export const revalidate = false

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    return { title: "Project Not Found" }
  }

  return {
    title: `${project.title} | DevLabs`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Project Not Found</h1>
            <p className="mt-4 text-muted-foreground">The project you're looking for doesn't exist.</p>
            <Button asChild className="mt-8">
              <Link href="/projects">Back to Projects</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <article className="py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <Button asChild variant="ghost" className="mb-8 -ml-4 gap-2">
              <Link href="/projects">
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Link>
            </Button>

            <div className="mb-8">
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{project.title}</h1>
              <p className="text-xl leading-relaxed text-muted-foreground">{project.description}</p>
            </div>

            <div className="mb-8 flex flex-wrap gap-4">
              {project.demo && (
                <Button asChild className="gap-2">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.github && (
                <Button asChild variant="outline" className="gap-2 bg-transparent">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                </Button>
              )}
            </div>

            <div className="relative mb-12 aspect-video overflow-hidden rounded-xl border border-border/50 bg-muted">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold tracking-tight">About this project</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">{project.longDescription}</p>

              <h2 className="mt-12 text-2xl font-semibold tracking-tight">Tech Stack</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <div
                    key={tag}
                    className="rounded-lg border border-border/50 bg-secondary/50 px-4 py-2 text-sm font-medium"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
