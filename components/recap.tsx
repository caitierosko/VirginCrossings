export function Recap() {
  const stats = [
    { value: "7", label: "Nights at sea" },
    { value: "100%", label: "Cabins sold out" },
    { value: "1:2", label: "Crew to guest care" },
    { value: "8", label: "Guests per yacht" },
  ]

  return (
    <section className="py-24 px-4 bg-[#0A2540]">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <span className="inline-block text-[#E4CE9B] px-4 py-1.5 text-xs font-medium mb-4 uppercase tracking-[0.3em]">
            A Returning Favourite
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-medium text-white mb-6 text-balance">
            Our First Season Sold Out
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto text-pretty font-light">
            Our inaugural charter brought together guests from across the globe for a week of glassy anchorages,
            long lunches on deck, and sunsets you feel in your chest. For 2027 we&apos;ve refined every detail.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="/images/recap-sunset.png"
            alt="Guests relaxing at sunset on the deck of a private catamaran charter in the British Virgin Islands"
            className="w-full h-80 object-cover rounded-3xl shadow-xl"
          />
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 p-6 rounded-2xl bg-white/5 border border-[#C6A667]/20 text-center"
              >
                <span className="font-serif text-5xl md:text-6xl font-medium text-[#E4CE9B]">{stat.value}</span>
                <span className="text-sm md:text-base text-white/70 leading-snug">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
