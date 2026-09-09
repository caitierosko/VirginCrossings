"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Anchor } from "lucide-react"

export function CabinOptions() {
  const scrollToForm = () => {
    document.getElementById("reservation-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const features = [
    "Private cabin with ensuite bathroom",
    "Up to two guests per cabin",
    "All meals by a private chef & open bar",
    "Full run of a fully crewed luxury yacht",
  ]

  return (
    <section className="py-24 px-4 bg-[#FAF8F3]">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <span className="inline-block text-[#C6A667] uppercase tracking-[0.3em] text-xs font-medium mb-4">
            Reserve by the Cabin
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-medium text-[#0A2540] mb-4 text-balance">
            One Rate. One Cabin.
          </h2>
          <p className="text-gray-600 text-lg font-light">
            Book anywhere from one to five cabins. Once a yacht is full, we open the next.
          </p>
        </div>
        <Card className="relative overflow-hidden border border-[#C6A667]/40 shadow-xl">
          <div className="h-1.5 w-full bg-[#C6A667]" />
          <CardHeader className="text-center pb-8 pt-10">
            <div className="w-16 h-16 rounded-full bg-[#C6A667]/15 flex items-center justify-center mx-auto mb-4">
              <Anchor className="w-8 h-8 text-[#C6A667]" />
            </div>
            <CardTitle className="font-serif text-2xl md:text-3xl font-medium text-[#0A2540]">
              Private Cabin with Ensuite
            </CardTitle>
            <CardDescription className="font-serif text-5xl md:text-6xl font-medium text-[#0A2540] mt-4">
              $10,000
              <span className="font-sans text-lg text-gray-500 font-normal"> / cabin</span>
            </CardDescription>
            <p className="text-base text-gray-600 mt-2 font-light">
              Your deposit reserves the cabin for the full week
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="space-y-3">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C6A667]" />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 text-center leading-relaxed">
              A 20% gratuity for the crew is recommended but not included.
            </p>
            <Button
              onClick={scrollToForm}
              className="w-full rounded-full py-6 text-lg bg-[#C6A667] hover:bg-[#B0904E] text-[#0A2540] font-semibold"
            >
              Reserve Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
