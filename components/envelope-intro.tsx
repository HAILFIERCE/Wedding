'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const STORAGE_KEY = 'jay-aditi-invite-opened'
const CLOSE_DELAY_MS = 1500

export function EnvelopeIntro() {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  const [opening, setOpening] = useState(false)

  useEffect(() => {
    setMounted(true)

    let alreadyOpened = false
    try {
      alreadyOpened = sessionStorage.getItem(STORAGE_KEY) === '1'
    } catch {
      alreadyOpened = false
    }

    if (!alreadyOpened) {
      setVisible(true)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  function handleOpen() {
    if (opening) return
    setOpening(true)

    try {
      sessionStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // ignore storage failures (private browsing, etc.)
    }

    window.setTimeout(() => {
      setVisible(false)
      document.body.style.overflow = ''
    }, CLOSE_DELAY_MS)
  }

  if (!mounted || !visible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Wedding invitation"
      className={cn(
        'envelope-gate fixed inset-0 z-50 flex flex-col items-center justify-center gap-7 overflow-hidden bg-gradient-to-b from-[oklch(0.3_0.09_15)] via-[oklch(0.42_0.12_18)] to-[oklch(0.56_0.1_35)] px-6 text-center',
        opening && 'is-opening motion-safe:[animation:gate-fade_1.4s_ease-in-out_forwards]',
      )}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[oklch(0.92_0.03_60)]">
        Together with our families
      </p>

      <div
        className={cn(
          'relative flex h-[190px] w-[250px] flex-col items-center justify-center rounded-md border border-[oklch(0.72_0.11_75/0.55)] bg-[oklch(0.96_0.02_50)] shadow-[0_30px_70px_-20px_oklch(0.15_0.06_15/0.7)] sm:h-[210px] sm:w-[280px]',
          opening &&
            'motion-safe:[animation:card-slide-out_0.9s_cubic-bezier(0.22,1,0.36,1)_0.45s_forwards]',
        )}
      >
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1/2 bg-[oklch(0.42_0.12_18)]"
          style={{ clipPath: 'polygon(0 0, 100% 0, 50% 95%)' }}
        />

        <button
          type="button"
          onClick={handleOpen}
          aria-label="Tap the seal to open the invitation"
          className={cn(
            'relative flex size-[72px] items-center justify-center rounded-full border-2 border-[oklch(0.72_0.11_75)] bg-[oklch(0.42_0.12_18)] text-[oklch(0.97_0.02_55)] shadow-[0_10px_26px_-6px_oklch(0.12_0.06_15/0.75)] transition-transform hover:scale-105',
            opening
              ? 'motion-safe:[animation:seal-crack_0.55s_ease-in_forwards]'
              : 'motion-safe:[animation:seal-pulse_2.6s_ease-in-out_infinite]',
          )}
        >
          <span className="flex items-center gap-0.5 font-serif text-lg font-semibold uppercase leading-none tracking-wide">
            J<span className="font-script text-base lowercase">&amp;</span>A
          </span>
        </button>

        <p className="relative mt-4 font-serif text-lg font-medium text-[oklch(0.3_0.06_20/0.85)]">
          Jay &amp; Aditi
        </p>
      </div>

      <p className="font-script text-2xl text-[oklch(0.97_0.02_60)] sm:text-3xl">
        {opening ? 'Unfolding our forever…' : 'Tap the seal to open'}
      </p>
    </div>
  )
}
