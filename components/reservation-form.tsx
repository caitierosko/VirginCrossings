"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitReservation } from "@/app/actions"
import { Loader2, CheckCircle2 } from "lucide-react"

export function ReservationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)

    try {
      const result = await submitReservation(formData)

      if (result.success) {
        setIsSuccess(true)
        ;(e.target as HTMLFormElement).reset()
      } else {
        setError(result.error || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("Failed to submit. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <section id="reservation-form" className="py-24 px-4 bg-gradient-to-b from-[#FAF8F3] to-white">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#C6A667]/40 text-center">
            <CheckCircle2 className="w-16 h-16 text-[#C6A667] mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-[#0A2540] mb-4">Welcome Aboard</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
              We&apos;ve received your request. Our team will be in touch shortly with deposit details and your
              charter brochure. Please check your inbox (and spam).
            </p>
            <Button
              onClick={() => setIsSuccess(false)}
              variant="outline"
              className="border-[#C6A667] text-[#B0904E] hover:bg-[#C6A667] hover:text-[#0A2540] rounded-full"
            >
              Submit Another Reservation
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="reservation-form" className="py-24 px-4 bg-gradient-to-b from-[#FAF8F3] to-white scroll-mt-20">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <span className="inline-block text-[#C6A667] uppercase tracking-[0.3em] text-xs font-medium mb-4">
            Reservations
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-medium text-[#0A2540] mb-4 text-balance">
            Reserve Your Cabin
          </h2>
          <p className="text-gray-600 text-lg font-light">
            Share a few details and our team will follow up with deposit details.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" name="name" required className="rounded-xl" placeholder="John Doe" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-xl"
              placeholder="john@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Mobile / WhatsApp *</Label>
            <Input id="phone" name="phone" type="tel" required className="rounded-xl" placeholder="+1 (555) 123-4567" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cabins">Number of Cabins *</Label>
            <Select name="cabins" required>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Select number of cabins" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Cabin — $10,000</SelectItem>
                <SelectItem value="2">2 Cabins — $20,000</SelectItem>
                <SelectItem value="3">3 Cabins — $30,000</SelectItem>
                <SelectItem value="4">4 Cabins — $40,000</SelectItem>
                <SelectItem value="5">5 Cabins — $50,000</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-gray-500">$10,000 per cabin, up to two guests each.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests">Number of Guests *</Label>
            <Select name="guests" required>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Select number" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <SelectItem key={n} value={String(n)}>
                    {n}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="skill">Wing Skill Level *</Label>
            <Select name="skill" required>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Select skill level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="arrival">Arrival Choice *</Label>
            <Select name="arrival" required>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Select arrival method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tortola-eis">Fly to Tortola (EIS)</SelectItem>
                <SelectItem value="st-thomas-ferry">Fly to St. Thomas (STT) + Ferry</SelectItem>
                <SelectItem value="not-sure">Not sure yet</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dietary">Dietary Needs</Label>
            <Textarea
              id="dietary"
              name="dietary"
              className="rounded-xl resize-none"
              rows={3}
              placeholder="Any allergies or dietary restrictions?"
            />
          </div>

          <div className="space-y-3">
            <Label>Gear Needs (optional)</Label>
            <div className="space-y-2">
              {["Board", "Foil", "Wing", "None / bringing all"].map((gear) => (
                <div key={gear} className="flex items-center space-x-2">
                  <Checkbox id={`gear-${gear}`} name="gear" value={gear} />
                  <Label htmlFor={`gear-${gear}`} className="font-normal cursor-pointer">
                    {gear}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes / Questions</Label>
            <Textarea
              id="notes"
              name="notes"
              className="rounded-xl resize-none"
              rows={4}
              placeholder="Any questions or special requests?"
            />
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex items-start space-x-2">
              <Checkbox id="terms" name="terms" required />
              <Label htmlFor="terms" className="font-normal leading-relaxed cursor-pointer">
                I agree to the{" "}
                <a href="#terms" className="text-[#B0904E] hover:underline">
                  charter terms
                </a>{" "}
                and understand a $10,000 deposit per cabin is required to secure my reservation. *
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="whatsapp" name="whatsapp" />
              <Label htmlFor="whatsapp" className="font-normal leading-relaxed cursor-pointer">
                Add me to the WhatsApp trip group
              </Label>
            </div>
          </div>

          {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">{error}</div>}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#C6A667] hover:bg-[#B0904E] text-[#0A2540] rounded-full py-6 text-lg font-semibold"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                Submitting...
              </>
            ) : (
              "Submit Reservation Request"
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}
