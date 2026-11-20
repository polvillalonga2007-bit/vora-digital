import { ArrowUpRight } from 'lucide-react'

import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { sectors } from '../content'

export function Sectors() {
  return (
    <section id="sectors" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={sectors.eyebrow} title={sectors.title} description={sectors.description} />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.items.map((sector, index) => (
            <Reveal key={sector.key} delay={index * 0.07} className="h-full">
              <article className="depth flex h-full flex-col overflow-hidden rounded-card bg-surface shadow-soft">
                <img
                  src={sector.image}
                  alt={sector.imageAlt}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-[22px] tracking-[-0.01em]">{sector.name}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{sector.text}</p>
                  <ul className="mt-4 flex flex-col gap-1.5">
                    {sector.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-[13.5px] text-muted">
                        <span aria-hidden className="round mt-[7px] size-1.5 shrink-0 rounded-full bg-accent-2" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="mt-6 flex items-center justify-between gap-3 rounded-[13px] border border-dashed border-line-strong px-4 py-3 text-[13px] text-faint transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    <span>{sectors.examplesLabel}</span>
                    <ArrowUpRight className="size-4 shrink-0" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-[13.5px] leading-relaxed text-faint">
          {sectors.examplesNote}
        </p>
      </Container>
    </section>
  )
}
