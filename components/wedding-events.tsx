import { LeafyHeading, FloralMedallion, CornerVine } from '@/components/ornament'

const events = [
  { title: 'Haldi', date: '23 Jan 2027', time: '10:00 AM' },
  { title: 'Sangeet', date: '23 Jan 2027', time: '07:00 PM' },
  { title: 'Wedding Ceremony', date: '23 Jan 2027', time: '08:00 PM' },
  { title: 'Reception Dinner', date: '23 Jan 2027', time: '09:30 PM' },
]

export function WeddingEvents() {
  return (
    <section id="events" className="border-t border-primary/15 px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <LeafyHeading className="mb-12">Wedding Events</LeafyHeading>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map(({ title, date, time }) => (
            <article
              key={title}
              className="group relative flex flex-col items-center overflow-hidden rounded-xl border border-primary/25 bg-card/80 p-7 text-center shadow-[0_8px_30px_-12px_oklch(0.5_0.05_60/0.35)] backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_20px_45px_-16px_oklch(0.5_0.07_50/0.45)]"
            >
              {/* gilded top edge */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent"
              />
              {/* floating floral corners */}
              <CornerVine
                className="absolute -left-1 -top-1 size-16 text-primary/70 [animation:soft-float_6s_ease-in-out_infinite]"
              />
              <CornerVine
                className="absolute -bottom-1 -right-1 size-16 -scale-x-100 -scale-y-100 text-primary/70 [animation:soft-float_7s_ease-in-out_infinite]"
              />

              {/* floral medallion instead of an icon */}
              <span className="relative flex size-20 items-center justify-center">
                <span className="absolute inset-0 rounded-full border border-primary/30 bg-secondary/40 transition-colors duration-500 group-hover:bg-secondary/70" />
                <span className="absolute inset-1.5 rounded-full border border-primary/15" />
                <FloralMedallion className="relative size-11 text-primary transition-transform duration-500 group-hover:scale-110" />
              </span>

              <h3 className="mt-5 font-serif text-2xl font-semibold tracking-wide text-foreground">
                {title}
              </h3>
              <span
                aria-hidden="true"
                className="mt-2 h-px w-10 bg-primary/40"
              />
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                {date}
              </p>
              <p className="mt-1 font-serif text-lg font-semibold text-primary">
                {time}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
