import Image from 'next/image'
import { Mail } from 'lucide-react'
import { Countdown } from '@/components/countdown'
import { Ornament } from '@/components/ornament'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-secondary/60 via-background to-background"
    >
      {/* Floral corners */}
      <Image
        src="/images/floral-corner.png"
        alt=""
        width={340}
        height={340}
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 -top-6 z-0 w-40 select-none opacity-90 sm:w-56 lg:w-72"
        priority
      />
      <Image
        src="/images/floral-corner.png"
        alt=""
        width={340}
        height={340}
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-6 z-0 w-40 -scale-x-100 select-none opacity-90 sm:w-56 lg:w-72"
        priority
      />

      <p
        aria-hidden="true"
        className="absolute right-6 top-8 z-10 hidden text-right font-script text-xl leading-tight text-primary/80 sm:block lg:right-10 lg:top-10 lg:text-2xl"
      >
        Different Days
        <br />
        The Same Forever
      </p>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-8 px-5 pb-16 pt-28 md:grid-cols-2 md:pb-24 md:pt-32">
        {/* Copy */}
        <div className="text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">
            Together with our families
          </p>

          <h1 className="mt-5 font-serif text-6xl font-medium leading-none tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            Jay <span className="font-script text-primary">&amp;</span> Aditi
          </h1>

          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.28em] text-foreground/70">
            Invite you to celebrate
            <br />
            <span className="text-primary">our wedding</span>
          </p>

          <Ornament className="mt-6 md:justify-start" />

          <div className="mt-6">
            <p className="font-serif text-2xl font-semibold text-foreground">
              23 – 24 January 2027
            </p>
            <p className="mt-1 text-base text-muted-foreground">
              Wedlock Greens, Dhanbad
            </p>
          </div>

          <div className="mt-8 flex justify-center md:justify-start">
            <Countdown />
          </div>

          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="#invited"
              className="group inline-flex items-center gap-2.5 rounded-md bg-gradient-to-b from-primary to-[oklch(0.55_0.09_68)] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.55_0.09_68/0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-12px_oklch(0.55_0.09_68/0.8)]"
            >
              Open Invitation
              <Mail className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Illustration — edges feathered so the artwork melts into the page */}
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <Image
            src="/images/couple-swing.png"
            alt="Illustration of Jay and Aditi in traditional Indian wedding attire sitting together on a floral swing"
            width={900}
            height={1000}
            priority
            className="h-auto w-full select-none object-contain mix-blend-multiply [mask-image:radial-gradient(120%_120%_at_50%_45%,#000_58%,transparent_90%)] [-webkit-mask-image:radial-gradient(120%_120%_at_50%_45%,#000_58%,transparent_90%)]"
          />
        </div>
      </div>

      {/* Soft wave transition */}
      <div
        aria-hidden="true"
        className="h-10 w-full bg-background [clip-path:ellipse(75%_100%_at_50%_100%)]"
      />
    </section>
  )
}
