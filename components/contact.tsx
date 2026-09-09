import { Mail, MessageCircle } from "lucide-react"

export function Contact() {
  return (
    <section className="py-16 px-4 bg-[#0A2540] text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <span className="inline-block text-[#E4CE9B] uppercase tracking-[0.3em] text-xs font-medium mb-4">
          Concierge
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-medium mb-8">Speak With Our Team</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="mailto:info@virgincrossings.com"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors px-6 py-4 rounded-full"
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium">Email Us</span>
          </a>
          <a
            href="https://wa.me/1234567890"
            className="flex items-center gap-3 bg-[#C6A667] hover:bg-[#B0904E] text-[#0A2540] transition-colors px-6 py-4 rounded-full"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
