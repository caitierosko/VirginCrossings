import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "The best week of riding in my life. Crossing between islands with the chase boat right there gave me the confidence to push way further than I ever have.",
      name: "Marcus T.",
      detail: "Wing foiler • Round One",
    },
    {
      quote:
        "Flawless organization, incredible crew, and downwinders that felt straight out of a dream. I already told my whole crew we're booking Round Two.",
      name: "Sofia R.",
      detail: "Kitesurfer • Round One",
    },
    {
      quote:
        "Every detail was handled—gear, safety, food, good people. Knowing half the proceeds went to Slow is Pro made it even better.",
      name: "James & Elena K.",
      detail: "Private cabin • Round One",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-4 text-balance">What Riders Are Saying</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Straight from the crew who joined our first edition.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <figure
              key={index}
              className="flex flex-col gap-4 p-8 rounded-3xl bg-[#F0F9FF] border border-[#0891B2]/15"
            >
              <Quote className="w-8 h-8 text-[#0891B2]" aria-hidden="true" />
              <blockquote className="text-gray-700 leading-relaxed text-pretty flex-1">{t.quote}</blockquote>
              <figcaption className="mt-2">
                <p className="font-semibold text-[#0A2540]">{t.name}</p>
                <p className="text-sm text-[#0E7490]">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
