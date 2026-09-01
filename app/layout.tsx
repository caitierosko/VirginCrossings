import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Open_Sans, Lato, Raleway, Nunito, Quicksand, Manrope, DM_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// <CHANGE> Using Inter font for modern sans-serif
const inter = Inter({ subsets: ["latin"] })

// Additional font imports
const openSans = Open_Sans({ subsets: ["latin"] })
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] })
const raleway = Raleway({ subsets: ["latin"] })
const nunito = Nunito({ subsets: ["latin"] })
const quicksand = Quicksand({ subsets: ["latin"] })
const manrope = Manrope({ subsets: ["latin"] })
const dmSans = DM_Sans({ subsets: ["latin"] })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

// <CHANGE> Updated metadata for Virgin CROSSings landing page with SEO
export const metadata: Metadata = {
  title: "Virgin CROSSings — Wing-Foil & Kitesurf Flotilla in the BVI (Feb 8–15, 2027)",
  description:
    "Round Two for 2027! A 7-day wing-foil and kitesurf expedition across the British Virgin Islands. Real crossings, chase-boat support, crewed catamarans. 50% of proceeds to Slow is Pro.",
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
    title: "Virgin CROSSings — Wing-Foil & Kitesurf Flotilla in the BVI (Round Two 2027)",
    description:
      "Round Two for 2027! A 7-day wing-foil and kitesurf expedition across the British Virgin Islands. Real crossings, chase-boat support, crewed catamarans.",
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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Virgin CROSSings — Round Two 2027",
              description: "A 7-day wing-foil and kitesurf flotilla across the British Virgin Islands",
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
                  price: "7000",
                  priceCurrency: "USD",
                  name: "Cabin with Ensuite",
                  availability: "https://schema.org/LimitedAvailability",
                },
                {
                  "@type": "Offer",
                  price: "3500",
                  priceCurrency: "USD",
                  name: "Per Person (Shared Cabin)",
                  availability: "https://schema.org/LimitedAvailability",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
