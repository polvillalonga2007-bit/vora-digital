import { Check, MapPin, Smartphone } from 'lucide-react'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { hero } from '../content'

export function Hero() {
  return (
    <section id="top" className="pt-24 sm:pt-32">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-[13px] text-muted">
              <MapPin className="size-3.5 text-accent" />
              {hero.kicker}
            </p>

            <h1 className="mt-6 text-balance font-display text-[30px] leading-[1.1] tracking-[-0.02em] sm:text-[38px] lg:text-[44px]">
              {hero.title}
              <span className="mt-2 block italic text-accent">{hero.accent}</span>
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-[16.5px] leading-relaxed text-muted sm:text-[18px]">{hero.lead}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" href={hero.primary.href} className="w-full sm:w-auto">
                {hero.primary.label}
              </Button>
              <Button size="lg" variant="secondary" href={hero.secondary.href} className="w-full sm:w-auto">
                {hero.secondary.label}
              </Button>
            </div>

            <ul className="mt-7 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5">
              {hero.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-[13.5px] text-muted">
                  <Check className="size-4 shrink-0 text-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative pb-6">
            <div className="depth relative overflow-hidden rounded-card bg-surface p-2 shadow-glow">
              <img
                src={hero.image}
                alt={hero.imageAlt}
                className="aspect-[4/3] w-full rounded-[18px] object-cover"
                loading="eager"
              />
            </div>
            <div className="depth absolute bottom-0 left-4 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-[13px] text-fg shadow-soft">
              <Smartphone className="size-4 text-accent" />
              {hero.imageNote}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
