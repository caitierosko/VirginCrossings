import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "The most effortless luxury we've experienced. Waking to the chef's breakfast at anchor, a new island each day — it felt entirely our own.",
      name: "Marcus T.",
      detail: "Inaugural Charter",
    },
    {
      quote:
        "Flawless from the first email to the last sunset. The crew anticipated everything. We've already reserved our cabins for next year.",
      name: "Sofia R.",
      detail: "Inaugural Charter",
    },
    {
      quote:
        "Booking by the cabin meant we shared the yacht with wonderful people. Every detail was handled with real care and taste.",
      name: "James & Elena K.",
      detail: "Private Cabin",
    },
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <span className="inline-block text-[#C6A667] uppercase tracking-[0.3em] text-xs font-medium mb-4">
            Guest Stories
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-medium text-[#0A2540] mb-4 text-balance">
            In Their Words
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty font-light">
            From the guests who joined our first season.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <figure
              key={index}
              className="flex flex-col gap-4 p-8 rounded-3xl bg-[#FAF8F3] border border-[#C6A667]/20"
            >
              <Quote className="w-8 h-8 text-[#C6A667]" aria-hidden="true" />
              <blockquote className="text-gray-700 leading-relaxed text-pretty flex-1 font-light italic">
                {t.quote}
              </blockquote>
              <figcaption className="mt-2">
                <p className="font-semibold text-[#0A2540]">{t.name}</p>
                <p className="text-sm text-[#B0904E]">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
