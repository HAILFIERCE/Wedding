import { cn } from '@/lib/utils'

export function Monogram({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-full border border-primary/40 bg-card/60 text-primary shadow-[inset_0_0_0_3px_var(--background)]',
        className,
      )}
      aria-label="J and A monogram"
    >
      <span className="flex items-center gap-0.5 font-serif text-xl font-semibold uppercase leading-none tracking-wide">
        J
        <span className="font-script text-lg lowercase text-blush">&amp;</span>
        A
      </span>
    </div>
  )
}
