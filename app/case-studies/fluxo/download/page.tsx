import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export default function FluxoDownloadPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto max-w-2xl px-4 py-16 md:py-24">
          <Link
            href="/case-studies/fluxo"
            className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Fluxo
          </Link>

          <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">Download Fluxo</h1>
          <p className="mb-12 text-muted-foreground">
            Get the app on your device and start building daily habits today.
          </p>

          {/* Store buttons */}
          <div className="mb-12 flex flex-wrap items-center gap-4">
            <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                style={{ height: "48px", width: "auto" }}
              />
            </Link>
            <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                style={{ height: "72px", width: "auto", marginTop: "-12px", marginBottom: "-12px" }}
              />
            </Link>
          </div>

          {/* QR Code placeholder */}
          <div>
            <p className="mb-4 text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Scan to download
            </p>
            <div className="inline-flex h-48 w-48 items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card/50">
              <div className="text-center">
                <div className="mb-2 text-4xl">&#9644;</div>
                <p className="text-xs text-muted-foreground">QR Code</p>
                <p className="text-xs text-muted-foreground">coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
