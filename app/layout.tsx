import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Clean modern sans-serif for body copy and UI
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

// Elegant serif for luxury display headings
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
})

// <CHANGE> Updated metadata for Virgin Crossings all-inclusive charter with SEO
export const metadata: Metadata = {
  title: "Virgin Crossings — All-Inclusive Private Yacht Charter in the BVI (Feb 8–15, 2027)",
  description:
    "An all-inclusive private yacht charter across the British Virgin Islands. Crewed catamarans with captain and private chef, book by the cabin. A curated week on the water for 2027.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Virgin Crossings — All-Inclusive Private Yacht Charter in the BVI (2027)",
    description:
      "An all-inclusive private yacht charter across the British Virgin Islands. Crewed catamarans with captain and private chef, booked by the cabin.",
    type: "website",
    locale: "en_US",
  },
}

// <CHANGE> Added viewport configuration for mobile-first design
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0891B2",
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Virgin Crossings — 2027 Charter",
              description:
                "An all-inclusive private yacht charter across the British Virgin Islands, booked by the cabin",
              startDate: "2027-02-08",
              endDate: "2027-02-15",
              location: {
                "@type": "Place",
                name: "British Virgin Islands",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "VG",
                },
              },
              offers: [
                {
                  "@type": "Offer",
                  price: "10000",
                  priceCurrency: "USD",
                  name: "Private Cabin with Ensuite",
                  availability: "https://schema.org/LimitedAvailability",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
