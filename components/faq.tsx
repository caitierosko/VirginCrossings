import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Do I need to bring pumps?",
      answer: "No—onboard.",
    },
    {
      question: "What are typical wing sizes?",
      answer: "3.5–5.5 depending on rider and conditions.",
    },
    {
      question: "What about connectivity?",
      answer: "Basic Wi-Fi is available; consider an eSIM if you need stronger connectivity.",
    },
    {
      question: "What's the arrival timing?",
      answer: "Plan to be on Tortola by 2:00 PM on Feb 7.",
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
