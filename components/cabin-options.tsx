"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, User } from "lucide-react"

export function CabinOptions() {
  const scrollToForm = () => {
    document.getElementById("reservation-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const cabins = [
    {
      title: "Shared Bunk Cabin",
      price: "$2,500",
      unit: "/ person",
      icon: Users,
      features: ["Comfortable bunk setup", "Shared cabin space", "Full yacht amenities", "Perfect for solo travelers"],
    },
    {
      title: "Private Queen Cabin",
      price: "$4,500",
      unit: "/ cabin",
      icon: User,
      features: ["Queen-size bed", "Private cabin", "En-suite facilities", "Single or couple"],
      popular: true,
    },
  ]

  return (
    <section className="py-20 px-4 bg-[#F0F9FF]">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-4 text-balance">Cabin Options & Pricing</h2>
          <p className="text-gray-600 text-lg">Limited availability • Deposit required to secure</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {cabins.map((cabin, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border-2 ${
                cabin.popular ? "border-[#0891B2] shadow-xl" : "border-gray-200"
              }`}
            >
              {cabin.popular && (
                <div className="absolute top-4 right-4 bg-[#0891B2] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <div className="w-16 h-16 rounded-full bg-[#0891B2]/10 flex items-center justify-center mx-auto mb-4">
                  <cabin.icon className="w-8 h-8 text-[#0891B2]" />
                </div>
                <CardTitle className="text-2xl md:text-3xl text-[#0A2540]">{cabin.title}</CardTitle>
                <CardDescription className="text-4xl md:text-5xl font-bold text-[#0891B2] mt-4">
                  {cabin.price}
                  <span className="text-lg text-gray-600 font-normal">{cabin.unit}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {cabin.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-[#0891B2]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToForm}
                  className={`w-full rounded-full py-6 text-lg ${
                    cabin.popular
                      ? "bg-[#0891B2] hover:bg-[#0E7490] text-white"
                      : "bg-[#0A2540] hover:bg-[#0A2540]/90 text-white"
                  }`}
                >
                  Reserve Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
