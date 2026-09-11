import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Invited } from '@/components/invited'
import { WeddingEvents } from '@/components/wedding-events'
import { Venue } from '@/components/venue'
import { Rsvp } from '@/components/rsvp'
import { SiteFooter } from '@/components/site-footer'
import { SakuraPetals } from '@/components/sakura-petals'
import { Reveal } from '@/components/reveal'
import { EnvelopeIntro } from '@/components/envelope-intro'

export default function Page() {
  return (
    <main className="relative min-h-dvh">
      <EnvelopeIntro />
      <SakuraPetals />
      <SiteHeader />
      <Hero />
      <Reveal>
        <Invited />
      </Reveal>
      <Reveal>
        <WeddingEvents />
      </Reveal>
      <Reveal>
        <Venue />
      </Reveal>
      <Reveal>
        <Rsvp />
      </Reveal>
      <SiteFooter />
    </main>
  )
}
