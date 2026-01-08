import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturedProjects } from "@/components/featured-projects"
import { Stats } from "@/components/stats"
import { Footer } from "@/components/footer"

export const dynamic = "force-static"
export const revalidate = false

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedProjects />
        <Stats />
      </main>
      <Footer />
    </div>
  )
}
