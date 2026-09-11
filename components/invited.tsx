import { Ornament } from '@/components/ornament'

export function Invited() {
  return (
    <section id="invited" className="px-5 py-16 text-center">
      <div className="mx-auto max-w-xl">
        <h2 className="font-script text-4xl text-primary md:text-5xl">
          You Are Invited
        </h2>
        <p className="mt-6 text-balance font-serif text-xl text-foreground/90">
          Two hearts, two families, one love.
        </p>
        <p className="mt-1 text-balance font-serif text-xl text-foreground/90">
          Join us as we begin our forever.
        </p>
        <Ornament className="mt-6" />
      </div>
    </section>
  )
}
