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
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/kitesurf-action.jpg"
          aria-label="Kitesurfing and wing-foiling across turquoise Caribbean water in the Virgin Islands"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/85 via-[#0A2540]/65 to-[#0891B2]/45" />
      </div>
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <div className="inline-flex items-center gap-3 text-[#E4CE9B] mb-8 uppercase tracking-[0.3em] text-xs md:text-sm font-medium">
          <span className="h-px w-8 bg-[#C6A667]" />
          All-Inclusive Charter • 2027
          <span className="h-px w-8 bg-[#C6A667]" />
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-6 text-balance leading-[1.05]">
          The Sea, Entirely Yours
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-4 font-light tracking-wide">
          February 8&ndash;15, 2027 &bull; British Virgin Islands
        </p>
        <p className="text-base md:text-xl text-white/80 mb-10 max-w-2xl mx-auto text-pretty leading-relaxed font-light">
          A fully crewed, all-inclusive private yacht charter across the British Virgin Islands. Captain and
          private chef, curated islands and anchorages, and a week that feels like your own floating retreat &mdash;
          reserved by the cabin.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-[#C6A667] hover:bg-[#B0904E] text-[#0A2540] font-semibold rounded-full px-8 py-6 text-lg min-h-[3.5rem] w-full sm:w-auto"
          >
            Reserve a Cabin
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/70 text-white hover:bg-white hover:text-[#0A2540] rounded-full px-8 py-6 text-lg min-h-[3.5rem] w-full sm:w-auto bg-transparent"
            asChild
          >
            <a href="#welcome-packet" className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              Request the Brochure
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
