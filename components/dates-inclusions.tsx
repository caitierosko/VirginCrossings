import { Check, X } from "lucide-react"

export function DatesInclusions() {
  const included = [
    "7 nights aboard a luxury crewed catamaran",
    "Private captain & professional crew",
    "Private chef — all meals prepared onboard",
    "Open bar: wine, beer, seltzers & spirits",
    "Curated daily itinerary & island anchorages",
    "Tender support & water toys",
    "Fuel, moorings, cruising fees & permits",
  ]

  const notIncluded = [
    "Flights",
    "Airport & ferry transfers",
    "Select meals ashore",
    "Travel insurance & crew gratuity",
    "Personal excursions & spa ashore",
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-[#FAF8F3]">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <span className="inline-block text-[#C6A667] uppercase tracking-[0.3em] text-xs font-medium mb-4">
            All-Inclusive
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-medium text-[#0A2540] mb-4 text-balance">
            Dates &amp; What&apos;s Included
          </h2>
          <p className="text-xl md:text-2xl text-[#0891B2] font-light mb-3">
            February 8&ndash;15, 2027 &bull; British Virgin Islands
          </p>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto text-pretty leading-relaxed font-light">
            Your first night is a sleep-aboard. The yacht stays docked so everyone can arrive on the 8th, then we set
            sail the morning of the 9th.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#C6A667]/20">
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-[#0A2540] mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C6A667] flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              Included
            </h3>
            <ul className="space-y-4">
              {included.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C6A667] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-[#0A2540] mb-6 flex items-center gap-3">
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
