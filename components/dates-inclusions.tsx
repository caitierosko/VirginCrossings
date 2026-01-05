import { Check, X } from "lucide-react"

export function DatesInclusions() {
  const included = [
    "7 nights aboard crewed Bali 4.8 catamarans",
    "Captain + Chef/Host",
    "Breakfast daily + one onboard meal per day",
    "Beer, wine, seltzers & standard bar",
    "Daily route planning & safety briefings",
    "Chase support by tender",
    "Fuel, moorings, cruising fees & permits",
  ]

  const notIncluded = ["Flights", "Airport/ferry transfers", "Some meals ashore", "Trip insurance", "Wing gear"]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#F0F9FF]">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-4 text-balance">Dates & What's Included</h2>
          <p className="text-xl md:text-2xl text-[#0891B2] font-semibold">
            February 7–14, 2026 • Start/End: Tortola (EIS)
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#0891B2]/10">
            <h3 className="text-2xl font-bold text-[#0A2540] mb-6 flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#0891B2] flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              Included
            </h3>
            <ul className="space-y-4">
              {included.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0891B2] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-[#0A2540] mb-6 flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <X className="w-6 h-6 text-gray-600" />
              </div>
              Not Included
            </h3>
            <ul className="space-y-4">
              {notIncluded.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
