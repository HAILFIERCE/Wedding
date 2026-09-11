'use client'

import { useState, type FormEvent } from 'react'
import { User, Phone, Users, Send, ChevronDown, Heart, Check } from 'lucide-react'

export function Rsvp() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="rsvp"
      className="border-t border-primary/15 bg-secondary/40 px-5 py-16"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-script text-4xl text-primary md:text-5xl">RSVP</h2>
        <p className="mt-3 flex items-center justify-center gap-2 text-muted-foreground">
          Kindly confirm your presence and bless us
          <Heart className="size-4 fill-blush text-blush" />
        </p>

        {submitted ? (
          <div className="mx-auto mt-8 max-w-md rounded-xl border border-primary/30 bg-card p-8 shadow-sm">
            <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Check className="size-6" />
            </span>
            <p className="mt-4 font-serif text-2xl font-semibold text-foreground">
              Thank you!
            </p>
            <p className="mt-2 text-muted-foreground">
              Your response has been received. We can&apos;t wait to celebrate
              with you.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Field icon={User}>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  aria-label="Your Name"
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </Field>

              <Field icon={Phone}>
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </Field>

              <Field icon={ChevronDown}>
                <select
                  required
                  defaultValue=""
                  aria-label="Will you attend?"
                  className="w-full appearance-none bg-transparent text-sm text-foreground focus:outline-none"
                >
                  <option value="" disabled>
                    Will you attend?
                  </option>
                  <option value="yes">Joyfully accept</option>
                  <option value="no">Regretfully decline</option>
                </select>
              </Field>

              <Field icon={Users}>
                <input
                  type="number"
                  min={1}
                  max={20}
                  placeholder="No. of Guests"
                  aria-label="Number of Guests"
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </Field>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2.5 rounded-md bg-primary px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
              >
                Submit RSVP
                <Send className="size-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

function Field({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <label className="flex items-center gap-3 rounded-md border border-primary/25 bg-card px-4 py-3 text-left shadow-sm focus-within:border-primary/60">
      <span className="flex-1">{children}</span>
      <Icon className="size-4 shrink-0 text-primary/70" />
    </label>
  )
}
