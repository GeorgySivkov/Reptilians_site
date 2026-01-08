import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects"

export const metadata = {
  title: "Projects | DevLabs",
  description: "Explore our collection of pet projects and experimental tools",
}

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-24">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="mb-12">
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">Our Work</p>
              <h1 className="mb-4 text-4xl font-bold tracking-tight">All Projects</h1>
              <p className="max-w-2xl text-lg text-muted-foreground">
                A comprehensive collection of tools, experiments, and production applications built by our team during
                our creative explorations.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
