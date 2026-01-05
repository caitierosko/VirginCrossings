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
        <h1 className="text-2xl md:text-3xl font-bold text-[#0A2540]">Virgin CROSSings</h1>
        <Button
          onClick={scrollToForm}
          size="lg"
          className="bg-[#0891B2] hover:bg-[#0E7490] text-white rounded-full px-6 md:px-8"
        >
          Reserve a Cabin
        </Button>
      </div>
    </header>
  )
}
