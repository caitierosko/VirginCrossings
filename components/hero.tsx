"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function Hero() {
  const scrollToForm = () => {
    document.getElementById("reservation-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/kitesurf-action.jpg"
          alt="Kitesurfer boosting a big air jump over turquoise Caribbean water near a mangrove island in the Virgin Islands"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/80 via-[#0A2540]/60 to-[#0891B2]/50" />
      </div>
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <div className="inline-block bg-[#F59E0B] text-[#0A2540] px-5 py-2 rounded-full text-sm md:text-base font-bold mb-6 uppercase tracking-wide">
          Round Two • 2027
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight">
          Wing-Foil & Kitesurf Island Crossings in the BVI
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
          Feb 6–13, 2027 • Tortola, British Virgin Islands
        </p>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto text-pretty leading-relaxed">
          After a sold-out first edition, we&apos;re back for Round Two—a 7-day wing-foil and kitesurf flotilla with
          real island crossings, chase-boat support, crewed catamarans, and good-energy community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-[#0891B2] hover:bg-[#0E7490] text-white rounded-full px-8 py-6 text-lg min-h-[3.5rem] w-full sm:w-auto"
          >
            Reserve a Cabin
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-[#0A2540] rounded-full px-8 py-6 text-lg min-h-[3.5rem] w-full sm:w-auto bg-transparent"
            asChild
          >
            <a href="#welcome-packet" className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Welcome Packet
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
