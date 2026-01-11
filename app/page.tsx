import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ServicesSection } from "@/components/services-section"
import { HowWeWorkSection } from "@/components/how-we-work-section"
import { EngagementModelsSection } from "@/components/engagement-models-section"
import { IndustriesSection } from "@/components/industries-section"
import { Footer } from "@/components/footer"

export const dynamic = "force-static"
export const revalidate = false

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <HowWeWorkSection />
        <EngagementModelsSection />
        <IndustriesSection />
      </main>
      <Footer />
    </div>
  )
}
