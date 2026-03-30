import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export default function FluxoDownloadPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center">
        <div className="container mx-auto max-w-3xl px-4 py-16 md:py-24">

          {/* Back link */}
          <Link
            href="/case-studies/fluxo"
            className="mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Fluxo
          </Link>

          {/* Heading */}
          <div className="mb-12 text-center">
            <h1 className="mb-3 text-4xl font-bold tracking-tight md:text-5xl">Download Fluxo</h1>
            <p className="text-lg text-muted-foreground">
              Get the app on your device and start building daily habits today.
            </p>
          </div>

          {/* Content row: store buttons + divider + QR */}
          <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-center sm:justify-center sm:gap-0">

            {/* Store buttons */}
            <div className="flex flex-col items-center gap-4 sm:pr-12">
              <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  style={{ height: "52px", width: "auto" }}
                />
              </Link>
              <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  style={{ height: "78px", width: "auto", marginTop: "-13px", marginBottom: "-13px" }}
                />
              </Link>
            </div>

            {/* Divider */}
            <div className="hidden h-32 w-px bg-border sm:block" />
            <div className="block h-px w-24 bg-border sm:hidden" />

            {/* QR Code */}
            <div className="flex flex-col items-center gap-3 sm:pl-12">
              <div className="flex h-44 w-44 items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card/50">
                <div className="text-center">
                  <div className="mb-2 grid grid-cols-3 gap-1 opacity-30">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={i} className={`h-4 w-4 rounded-sm ${[0,2,4,6,8].includes(i) ? "bg-foreground" : "bg-transparent"}`} />
                    ))}
                  </div>
                  <p className="mt-2 text-xs font-medium text-muted-foreground">QR Code</p>
                  <p className="text-xs text-muted-foreground/60">coming soon</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Scan to download</p>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
