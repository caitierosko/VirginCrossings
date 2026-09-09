import { Anchor, UtensilsCrossed, Compass, Sparkles } from "lucide-react"

export function About() {
  const badges = [
    { icon: Anchor, label: "Private Captain" },
    { icon: UtensilsCrossed, label: "Private Chef" },
    { icon: Compass, label: "Curated Itinerary" },
    { icon: Sparkles, label: "Fully All-Inclusive" },
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <span className="inline-block text-[#C6A667] uppercase tracking-[0.3em] text-xs font-medium mb-4">
            The Experience
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-medium text-[#0A2540] mb-6 text-balance">
            A Retreat That Happens to Float
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto text-pretty font-light">
            Virgin Crossings charters the finest crewed catamarans in the British Virgin Islands and hands you the
            keys to the week. Wake to a chef-prepared breakfast at anchor, glide between reef-fringed islands, and let
            your captain and crew handle every detail. It is a private, all-inclusive escape &mdash; reserved by the
            cabin, so you share the yacht only with good company.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mb-14">
          <img
            src="/images/wingfoil-catamaran.png"
            alt="Crewed luxury catamaran anchored in the turquoise waters of the British Virgin Islands"
            className="w-full h-72 object-cover rounded-2xl shadow-md"
          />
          <img
            src="/images/kite-jump.png"
            alt="Guests enjoying the open water aboard a private charter in the Caribbean"
            className="w-full h-72 object-cover rounded-2xl shadow-md"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#FAF8F3] border border-[#C6A667]/25 hover:border-[#C6A667] transition-colors"
            >
              <badge.icon className="w-7 h-7 text-[#C6A667]" />
              <span className="text-sm md:text-base font-medium text-[#0A2540] text-center">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
