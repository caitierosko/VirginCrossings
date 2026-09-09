import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "How does booking by the cabin work?",
      answer:
        "Each cabin is $10,000 for the week and sleeps up to two guests. You can reserve one to five cabins. Once a yacht is fully booked, we open the next one — so you always share the yacht with a small, like-minded group.",
    },
    {
      question: "What's included in the price?",
      answer:
        "Your charter is all-inclusive: seven nights aboard a crewed luxury catamaran, a private captain and chef, all meals prepared onboard, an open bar, a curated island itinerary, tender support, and all fuel, moorings and cruising fees.",
    },
    {
      question: "How many guests can share a cabin?",
      answer:
        "Each cabin comfortably accommodates up to two guests and has its own ensuite bathroom. Total guests per yacht are kept small for a private, unhurried experience.",
    },
    {
      question: "What about meals and dietary needs?",
      answer:
        "A private chef prepares all meals onboard, tailored to your group. Simply let us know about any allergies or preferences and we'll take care of the rest.",
    },
    {
      question: "What about connectivity?",
      answer: "Basic Wi-Fi is available onboard; consider an eSIM if you need stronger connectivity.",
    },
    {
      question: "What's the arrival timing?",
      answer:
        "Arrive on Feb 8, 2027. Your first night is a sleep-aboard — the yacht stays at the dock overnight so everyone has time to settle in, then we set sail the morning of the 9th.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-[#FAF8F3]">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <span className="inline-block text-[#C6A667] uppercase tracking-[0.3em] text-xs font-medium mb-4">
            Good to Know
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-medium text-[#0A2540] text-balance">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-2xl px-6 border border-gray-200 shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg font-medium text-[#0A2540] hover:text-[#B0904E] py-6">
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
