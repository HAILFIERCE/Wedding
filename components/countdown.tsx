'use client'

import { useEffect, useState } from 'react'

const TARGET = new Date('2027-01-23T00:00:00')

function getRemaining() {
  const diff = Math.max(0, TARGET.getTime() - Date.now())
  const days = Math.floor(diff / 86_400_000)
  const hrs = Math.floor((diff % 86_400_000) / 3_600_000)
  const mins = Math.floor((diff % 3_600_000) / 60_000)
  const secs = Math.floor((diff % 60_000) / 1000)
  return { days, hrs, mins, secs }
}

const labels: { key: keyof ReturnType<typeof getRemaining>; label: string }[] = [
  { key: 'days', label: 'Days' },
  { key: 'hrs', label: 'Hrs' },
  { key: 'mins', label: 'Mins' },
  { key: 'secs', label: 'Secs' },
]

export function Countdown() {
  const [time, setTime] = useState({ days: 0, hrs: 0, mins: 0, secs: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTime(getRemaining())
    const id = setInterval(() => setTime(getRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex items-center justify-center gap-2.5 sm:gap-3">
      {labels.map(({ key, label }) => (
        <div
          key={key}
          className="flex w-[68px] flex-col items-center rounded-md border border-primary/30 bg-card/70 px-2 py-3 shadow-sm backdrop-blur-sm"
        >
          <span className="font-serif text-3xl font-semibold leading-none text-foreground tabular-nums">
            {mounted ? String(time[key]).padStart(2, '0') : '--'}
          </span>
          <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}
