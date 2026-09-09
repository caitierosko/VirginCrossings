export function Recap() {
  const stats = [
    { value: "7", label: "Days in the BVI" },
    { value: "100%", label: "Cabins sold out" },
    { value: "50%", label: "Proceeds donated" },
    { value: "1", label: "Unforgettable crew" },
  ]

  return (
    <section className="py-20 px-4 bg-[#0A2540]">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#0891B2]/20 text-[#5EC8DE] px-4 py-1.5 rounded-full text-sm font-semibold mb-4 uppercase tracking-wide">
            Year One Recap
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
            Year One Was a Sell-Out Success
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto text-pretty">
            Our inaugural flotilla brought together riders from across the globe for a week of downwind lines, reef
            passes, and sunset rafts-ups. Round Two builds on everything that made it special.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="/images/recap-sunset.png"
            alt="Travelers celebrating at sunset on a catamaran deck during the first Virgin CROSSings edition"
            className="w-full h-80 object-cover rounded-3xl shadow-xl"
          />
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
              >
                <span className="text-4xl md:text-5xl font-bold text-[#5EC8DE]">{stat.value}</span>
                <span className="text-sm md:text-base text-white/70 leading-snug">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
