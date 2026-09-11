import { Share2, Heart } from 'lucide-react'
import { Monogram } from '@/components/monogram'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-primary/15 bg-background px-5 py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-8 text-center md:grid-cols-3 md:text-left">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            With Love,
          </p>
          <p className="mt-1 font-script text-3xl text-primary">Jay &amp; Aditi</p>
        </div>

        <div className="flex justify-center">
          <Monogram className="size-20" />
        </div>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <p className="font-serif text-lg font-semibold text-foreground">
            #JayWedsAditi
          </p>
          <div className="flex items-center gap-3">
            {[InstagramIcon, WhatsAppIcon, Share2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex size-9 items-center justify-center rounded-full border border-primary/30 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Social link"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-10 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
        Made with
        <Heart className="size-3.5 fill-blush text-blush" />
        for our loved ones
      </p>
    </footer>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.86 9.86 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm5.8 14.13c-.24.68-1.42 1.33-1.95 1.37-.5.05-1.13.24-3.7-.77-3.11-1.23-5.1-4.39-5.26-4.59-.15-.2-1.26-1.68-1.26-3.2 0-1.52.8-2.27 1.08-2.58.28-.31.6-.38.8-.38l.58.01c.18 0 .43-.07.68.52.24.59.83 2.03.9 2.18.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.61.18.3.78 1.29 1.68 2.09 1.15 1.03 2.12 1.35 2.42 1.5.3.15.47.12.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.07.12.07.72-.17 1.4Z" />
    </svg>
  )
}
