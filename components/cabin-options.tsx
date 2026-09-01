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
    "Shower & facilities in every cabin",
    "$3,500 per person (two per cabin)",
    "Full yacht amenities included",
  ]

  return (
    <section className="py-20 px-4 bg-[#F0F9FF]">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-4 text-balance">Cabin Options & Pricing</h2>
          <p className="text-gray-600 text-lg">Limited availability • Deposit required to secure</p>
        </div>
        <Card className="relative overflow-hidden border-2 border-[#0891B2] shadow-xl">
          <CardHeader className="text-center pb-8 pt-8">
            <div className="w-16 h-16 rounded-full bg-[#0891B2]/10 flex items-center justify-center mx-auto mb-4">
              <Anchor className="w-8 h-8 text-[#0891B2]" />
            </div>
            <CardTitle className="text-2xl md:text-3xl text-[#0A2540]">Cabin with Ensuite</CardTitle>
            <CardDescription className="text-4xl md:text-5xl font-bold text-[#0891B2] mt-4">
              $7,000
              <span className="text-lg text-gray-600 font-normal"> / cabin</span>
            </CardDescription>
            <p className="text-base text-gray-600 mt-2">or $3,500 per person for the week</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="space-y-3">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-[#0891B2]" />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 text-center leading-relaxed">
              A 20% gratuity for the crew is recommended but not included.
            </p>
            <Button
              onClick={scrollToForm}
              className="w-full rounded-full py-6 text-lg bg-[#0891B2] hover:bg-[#0E7490] text-white"
            >
              Reserve Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
