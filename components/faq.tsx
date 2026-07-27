import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Can I kitesurf instead of wing-foil?",
      answer:
        "Absolutely. Round Two is a combined wing-foil and kitesurf flotilla. Riders on either discipline are welcome, and the chase boats support both.",
    },
    {
      question: "Do I need to bring pumps?",
      answer: "No—wing and kite pumps are onboard.",
    },
    {
      question: "What are typical wing and kite sizes?",
      answer: "Wings run 3.5–5.5 and kites typically 9–12m, depending on rider and the day's trade winds.",
    },
    {
      question: "What about connectivity?",
      answer: "Basic Wi-Fi is available; consider an eSIM if you need stronger connectivity.",
    },
    {
      question: "What's the arrival timing?",
      answer: "Plan to be on Tortola by 2:00 PM on Feb 6, 2027.",
    },
    {
      question: "Which charity benefits from this?",
      answer: "50% of proceeds are donated to Slow is Pro, a non-profit promoting safer boating.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#F0F9FF]">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-12 text-center text-balance">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-2xl px-6 border border-gray-200 shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-[#0A2540] hover:text-[#0891B2] py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
