import { Ship, ChefHat, Compass, Sparkles } from "lucide-react"

export function Fleet() {
  const crew = [
    {
      icon: Compass,
      title: "Professional Captain",
      description:
        "A licensed captain on every yacht handles navigation, anchoring, and all logistics so you can focus on the ride.",
    },
    {
      icon: ChefHat,
      title: "Private Chef & Mate",
      description:
        "Each yacht has a dedicated chef who doubles as first mate—preparing every meal, pouring your cocktails, and keeping things running smoothly.",
    },
    {
      icon: Sparkles,
      title: "Full Housekeeping",
      description:
        "Your crew maintains housekeeping throughout the week, so the boat stays pristine from the first crossing to the last sunset.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#0891B2]/10 text-[#0891B2] px-4 py-1.5 rounded-full text-sm font-semibold mb-4 uppercase tracking-wide">
            The Fleet
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-6 text-balance">
            Private Luxury Catamarans
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto text-pretty">
            As cabins fill, we book out entire private luxury catamarans—each with 4–5 cabins on board. Ranging from 50
            to 60 feet, the fleet includes yachts like the Bali 5.4 and Lagoon 50, every one crewed by a professional
            captain and chef who handle all the logistics so you just ride.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <img
            src="/images/fleet-catamaran-sailing.png"
            alt="Luxury Bali 5.4 catamaran sailing across turquoise water in the British Virgin Islands"
            className="w-full h-72 md:h-96 object-cover rounded-3xl shadow-xl"
          />
          <img
            src="/images/fleet-catamaran-anchored.png"
            alt="Lagoon 50 catamaran anchored in a calm Caribbean bay at golden hour"
            className="w-full h-72 md:h-96 object-cover rounded-3xl shadow-xl"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <img
            src="/images/fleet-deck-lounge.png"
            alt="Spacious catamaran cockpit and lounge deck set for dinner at sunset"
            className="w-full h-64 md:h-80 object-cover rounded-3xl shadow-xl"
          />
          <img
            src="/images/fleet-cuisine.png"
            alt="Gourmet seafood dish prepared by the private yacht chef"
            className="w-full h-64 md:h-80 object-cover rounded-3xl shadow-xl"
          />
        </div>

        <div className="flex items-center justify-center gap-3 mb-10">
          <Ship className="w-6 h-6 text-[#0891B2]" />
          <p className="text-base md:text-lg font-semibold text-[#0A2540]">
            50–60 ft • 4–5 cabins per yacht • Captain + Chef/Mate on every boat
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {crew.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#F0F9FF] border border-[#0891B2]/10"
            >
              <div className="w-14 h-14 rounded-full bg-[#0891B2]/10 flex items-center justify-center mb-4">
                <member.icon className="w-7 h-7 text-[#0891B2]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-2">{member.title}</h3>
              <p className="text-gray-600 leading-relaxed text-pretty">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
