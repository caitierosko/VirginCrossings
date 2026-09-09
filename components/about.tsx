import { Anchor, Users, Heart, Shield } from "lucide-react"

export function About() {
  const badges = [
    { icon: Shield, label: "Chase Support" },
    { icon: Anchor, label: "Captained Catamarans" },
    { icon: Users, label: "Small Group" },
    { icon: Heart, label: "Gives Back (50%)" },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-6 text-balance">About the Experience</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto text-pretty">
            Hosted by Virgin Crossings, this is a wingfoil and kitesurf expedition across the BVI. Downwind lines, reef
            passes, and open-water glides with your crewed catamarans running chase support. Whether you&apos;re on a
            wing or a kite, you&apos;ll ride some of the most beautiful, consistent trade-wind conditions in the
            Caribbean.{" "}
            <strong className="text-[#0891B2]">50% of proceeds benefit the Slow is Pro non-profit</strong> to promote
            safer boating.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <img
            src="/images/wingfoil-catamaran.png"
            alt="Wing foiler gliding beside a crewed catamaran in the British Virgin Islands"
            className="w-full h-64 object-cover rounded-2xl shadow-md"
          />
          <img
            src="/images/kite-jump.png"
            alt="Kitesurfer boosting a jump over turquoise Caribbean water"
            className="w-full h-64 object-cover rounded-2xl shadow-md"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#F0F9FF] border border-[#0891B2]/20 hover:border-[#0891B2] transition-colors"
            >
              <badge.icon className="w-8 h-8 text-[#0891B2]" />
              <span className="text-sm md:text-base font-medium text-[#0A2540] text-center">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
