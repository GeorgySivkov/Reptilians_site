import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CaseStudiesList } from "@/components/case-studies-list"
import { caseStudies } from "@/lib/case-studies"

export const dynamic = "force-static"
export const revalidate = false

export default function CaseStudiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-10">
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Case Studies</h1>
              <p className="max-w-2xl text-lg text-muted-foreground">
                A selection of client work and studio-built products.
                <br />
                Some cases are anonymized due to NDAs.
              </p>
            </div>

            <CaseStudiesList caseStudies={caseStudies} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
