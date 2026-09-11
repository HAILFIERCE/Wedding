'use client'

import { useEffect, useState } from 'react'

type Petal = {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  drift: number
  sway: number
  swayDuration: number
  opacity: number
  hue: 'blush' | 'rose' | 'ivory'
}

const HUES: Record<Petal['hue'], string> = {
  blush: 'oklch(0.86 0.06 22)',
  rose: 'oklch(0.8 0.09 18)',
  ivory: 'oklch(0.93 0.03 60)',
}

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export function SakuraPetals({ count = 22 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([])

  // Generate on the client only, to avoid hydration mismatch.
  useEffect(() => {
    const hues: Petal['hue'][] = ['blush', 'rose', 'ivory']
    const next: Petal[] = Array.from({ length: count }, (_, id) => ({
      id,
      left: rand(0, 100),
      size: rand(10, 20),
      duration: rand(9, 18),
      delay: rand(0, 14),
      drift: rand(-60, 120),
      sway: rand(8, 24),
      swayDuration: rand(2.5, 5),
      opacity: rand(0.45, 0.85),
      hue: hues[Math.floor(rand(0, hues.length))],
    }))
    setPetals(next)
  }, [count])

  return (
    <div
      className="sakura-layer pointer-events-none fixed inset-0 z-20 overflow-hidden"
      aria-hidden="true"
    >
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute top-0 will-change-transform"
          style={{
            left: `${p.left}%`,
            animation: `sakura-fall ${p.duration}s linear ${p.delay}s infinite`,
            ['--petal-drift' as string]: `${p.drift}px`,
            ['--petal-opacity' as string]: p.opacity,
          }}
        >
          <span
            className="block"
            style={{
              width: `${p.size}px`,
              height: `${p.size * 0.78}px`,
              background: `radial-gradient(120% 120% at 30% 20%, ${HUES[p.hue]} 0%, oklch(0.9 0.05 25 / 0.35) 100%)`,
              borderRadius: '150% 0 150% 0',
              boxShadow: '0 1px 3px oklch(0.5 0.05 30 / 0.15)',
              animation: `sakura-sway ${p.swayDuration}s ease-in-out infinite`,
            }}
          />
        </span>
      ))}
    </div>
  )
}
