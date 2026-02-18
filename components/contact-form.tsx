"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [ndaRequired, setNdaRequired] = useState(false)
  const [budget, setBudget] = useState("")
  const [timeline, setTimeline] = useState("")
  const [model, setModel] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const summary = formData.get("summary") as string

    const subject = encodeURIComponent(`Project Inquiry from ${name}${company ? ` (${company})` : ""}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}${company ? `\nCompany: ${company}` : ""}\n\nProject Summary:\n${summary}\n\nBudget: ${budget || "Not specified"}\nTimeline: ${timeline || "Not specified"}\nEngagement Model: ${model || "Not specified"}\nNDA Required: ${ndaRequired ? "Yes" : "No"}`
    )

    window.open(`mailto:hey@reptilians.studio?subject=${subject}&body=${body}`, "_self")
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-border/50 bg-card p-12 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
          <CheckCircle className="h-8 w-8 text-accent" />
        </div>
        <h3 className="mb-2 text-xl font-semibold">Email Client Opened</h3>
        <p className="text-muted-foreground">Your email client should have opened with the details pre-filled. Just hit send!</p>
        <Button className="mt-6" onClick={() => setIsSubmitted(false)}>
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-border/50 bg-card p-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input id="name" name="name" placeholder="Your name" required className="bg-background" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Work Email *</Label>
          <Input id="email" name="email" type="email" placeholder="you@company.com" required className="bg-background" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" placeholder="Your company name (optional)" className="bg-background" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="summary">Project Summary *</Label>
        <Textarea
          id="summary"
          name="summary"
          placeholder="Tell us about your project: goals, challenges, and what you're looking to build..."
          required
          className="min-h-[120px] resize-none bg-background"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="budget">Budget Range</Label>
          <Select value={budget} onValueChange={setBudget}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under-25k">Under $25k</SelectItem>
              <SelectItem value="25k-50k">$25k – $50k</SelectItem>
              <SelectItem value="50k-100k">$50k – $100k</SelectItem>
              <SelectItem value="100k-250k">$100k – $250k</SelectItem>
              <SelectItem value="over-250k">Over $250k</SelectItem>
              <SelectItem value="not-sure">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="timeline">Timeline</Label>
          <Select value={timeline} onValueChange={setTimeline}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="When do you need this?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asap">ASAP</SelectItem>
              <SelectItem value="1-month">Within 1 month</SelectItem>
              <SelectItem value="1-3-months">1-3 months</SelectItem>
              <SelectItem value="3-6-months">3-6 months</SelectItem>
              <SelectItem value="flexible">Flexible</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="model">Engagement Model</Label>
        <Select value={model} onValueChange={setModel}>
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="How would you like to work?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="fixed">Fixed scope / fixed price</SelectItem>
            <SelectItem value="tm">Time & materials</SelectItem>
            <SelectItem value="dedicated">Dedicated team</SelectItem>
            <SelectItem value="not-sure">Not sure yet</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-3">
        <Checkbox id="nda" checked={ndaRequired} onCheckedChange={(checked) => setNdaRequired(checked as boolean)} />
        <Label htmlFor="nda" className="text-sm font-normal cursor-pointer">
          NDA required before detailed discussions
        </Label>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
      >
        {isSubmitting ? (
          <>
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Submit Request
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">We typically reply within 1–2 business days.</p>
    </form>
  )
}
