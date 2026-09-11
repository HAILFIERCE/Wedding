import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { LeafyHeading } from '@/components/ornament'

export function Venue() {
  return (
    <section id="venue" className="border-t border-primary/15 px-5 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <LeafyHeading>Venue</LeafyHeading>

        <h3 className="mt-6 font-serif text-3xl font-semibold text-foreground">
          Wedlock Greens
        </h3>
        <p className="mt-1 text-muted-foreground">Dhanbad, Jharkhand</p>

        <div className="group mx-auto mt-8 overflow-hidden rounded-xl border border-primary/25 shadow-[0_12px_40px_-16px_oklch(0.5_0.05_60/0.5)]">
          <Image
            src="/images/venue.png"
            alt="Wedlock Greens venue — an illuminated palace mansion surrounded by gardens at dusk"
            width={1200}
            height={720}
            className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        <div className="mt-8">
          <a
            href="https://maps.google.com/?q=Dhanbad+Jharkhand"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-md bg-gradient-to-b from-primary to-[oklch(0.55_0.09_68)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.55_0.09_68/0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-12px_oklch(0.55_0.09_68/0.8)]"
          >
            <MapPin className="size-4" />
            View on Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
