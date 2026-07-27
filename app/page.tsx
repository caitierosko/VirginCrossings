import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Recap } from "@/components/recap"
import { DatesInclusions } from "@/components/dates-inclusions"
import { CabinOptions } from "@/components/cabin-options"
import { WhoItsFor } from "@/components/who-its-for"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ReservationForm } from "@/components/reservation-form"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Recap />
        <DatesInclusions />
        <CabinOptions />
        <WhoItsFor />
        <Testimonials />
        <FAQ />
        <Contact />
        <ReservationForm />
      </main>
      <Footer />
    </>
  )
}
