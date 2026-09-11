import { Heart } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Ornament({ className }: { className?: string }) {
  return (
    <div
      className={cn('flex items-center justify-center gap-2', className)}
      aria-hidden="true"
    >
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-primary/60" />
      <Heart className="size-3.5 fill-blush text-blush" />
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-primary/60" />
    </div>
  )
}

export function LeafyHeading({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex items-center justify-center gap-3', className)}>
      <Leaf className="rotate-180" />
      <h2 className="font-script text-4xl leading-none text-primary md:text-5xl">
        {children}
      </h2>
      <Leaf />
    </div>
  )
}

export function FloralMedallion({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* five-petal blossom */}
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse
          key={a}
          cx="32"
          cy="19"
          rx="5.4"
          ry="10.5"
          transform={`rotate(${a} 32 32)`}
          fill="currentColor"
          opacity="0.9"
        />
      ))}
      <circle cx="32" cy="32" r="5.4" className="fill-blush" />
      {/* small leaves */}
      <path
        d="M14 46c6 1 10 5 11 11-6-1-10-5-11-11Z"
        fill="currentColor"
        opacity="0.5"
      />
      <path
        d="M50 46c-6 1-10 5-11 11 6-1 10-5 11-11Z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  )
}

export function CornerVine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 2C22 6 40 18 52 36c6 9 9 20 10 32"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.55"
      />
      {[
        { x: 16, y: 8, r: 20 },
        { x: 34, y: 20, r: 55 },
        { x: 50, y: 38, r: 90 },
      ].map((leaf, i) => (
        <path
          key={i}
          d="M0 0c8 1 13 6 14 14-8-1-13-6-14-14Z"
          transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.r}) scale(0.9)`}
          fill="currentColor"
          opacity="0.4"
        />
      ))}
      <circle cx="12" cy="6" r="4" fill="currentColor" opacity="0.7" />
      <circle cx="12" cy="6" r="1.6" className="fill-blush" />
    </svg>
  )
}

function Leaf({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 16"
      className={cn('h-3 w-9 text-primary/70', className)}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 8c10-6 22-6 36 0-14 6-26 6-36 0Z"
        fill="currentColor"
        opacity="0.25"
      />
      <path
        d="M2 8h36"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  )
}
