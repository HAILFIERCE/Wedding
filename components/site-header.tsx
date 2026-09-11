'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Monogram } from '@/components/monogram'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Events', href: '#events' },
  { label: 'Venue', href: '#venue' },
  { label: 'RSVP', href: '#rsvp' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        {/* Left links (desktop) */}
        <ul className="hidden flex-1 items-center justify-end gap-7 pr-8 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80 md:flex">
          {navLinks.slice(0, 2).map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#home" className="shrink-0">
          <Monogram className="size-14" />
        </a>

        {/* Right links (desktop) */}
        <ul className="hidden flex-1 items-center gap-7 pl-8 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80 md:flex">
          {navLinks.slice(2).map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-md text-primary md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'mx-4 overflow-hidden rounded-xl border border-primary/20 bg-card/95 shadow-lg backdrop-blur transition-all md:hidden',
          open ? 'max-h-80 opacity-100' : 'pointer-events-none max-h-0 opacity-0',
        )}
      >
        <ul className="flex flex-col divide-y divide-primary/10 p-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-foreground/80">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
