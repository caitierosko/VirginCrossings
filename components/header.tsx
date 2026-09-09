"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function Header() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToForm = () => {
    document.getElementById("reservation-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex flex-col leading-none">
          <span
            className={`font-serif text-2xl md:text-3xl font-semibold tracking-tight transition-colors ${
              isSticky ? "text-[#0A2540]" : "text-white"
            }`}
          >
            Virgin Crossings
          </span>
          <span
            className={`text-[0.6rem] md:text-xs uppercase tracking-[0.25em] mt-1 transition-colors ${
              isSticky ? "text-[#C6A667]" : "text-[#E4CE9B]"
            }`}
          >
            Private Yacht Charters
          </span>
        </div>
        <Button
          onClick={scrollToForm}
          size="lg"
          className="bg-[#C6A667] hover:bg-[#B0904E] text-[#0A2540] font-semibold rounded-full px-6 md:px-8"
        >
          Reserve a Cabin
        </Button>
      </div>
    </header>
  )
}
