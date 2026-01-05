"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function Hero() {
  const scrollToForm = () => {
    document.getElementById("reservation-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#0891B2]/10 via-white to-[#0A2540]/5 pt-24 pb-16 px-4">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30C13.431 60 0 46.569 0 30 0 13.431 13.431 0 30 0zm0 58C44.912 58 57 45.912 57 31S44.912 4 30 4 3 16.088 3 31s12.088 27 27 27z' fill='%230891B2' fillOpacity='1' fillRule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#0A2540] mb-6 text-balance leading-tight">
          Wing-Foil Island Crossings in the BVI
        </h1>
        <p className="text-xl md:text-2xl text-[#0E7490] mb-4 font-medium">
          Feb 7–14, 2026 • Tortola, British Virgin Islands
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto text-pretty leading-relaxed">
          A 7-day wing-foil flotilla—real island crossings with chase-boat support, crewed catamarans, and good-energy
          community.
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
            className="border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white rounded-full px-8 py-6 text-lg min-h-[3.5rem] w-full sm:w-auto bg-transparent"
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
