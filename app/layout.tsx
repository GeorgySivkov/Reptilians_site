import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Reptilians | Startup Studio",
  description:
    "A startup studio that builds and ships software. We turn ideas into MVPs and production-ready products — fast.",
  openGraph: {
    title: "Reptilians | Startup Studio",
    description:
      "A startup studio that builds and ships software. We turn ideas into MVPs and production-ready products — fast.",
    siteName: "Reptilians",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
