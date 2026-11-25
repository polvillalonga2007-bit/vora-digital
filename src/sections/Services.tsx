import { ArrowUpRight } from 'lucide-react'

import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { services } from '../content'

// Serveis que es poden contractar sense la web. Cada targeta obre WhatsApp amb
// el missatge del servei ja escrit, perquè qui només vol una peça no hagi de
// passar pel formulari sencer.
export function Services() {
  return (
    <section id="serveis" className="scroll-mt-20 border-t border-line bg-surface-2/50 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={services.eyebrow} title={services.title} description={services.description} />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, index) => (
            <Reveal key={item.key} delay={(index % 3) * 0.07} className="h-full">
              <article className="depth flex h-full flex-col rounded-card bg-surface p-6 shadow-soft">
                <h3 className="text-balance font-display text-[21px] leading-[1.2] tracking-[-0.01em]">
                  {item.name}
                </h3>
                <p className="mt-2.5 text-[14px] font-medium text-accent-2">{item.problem}</p>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{item.text}</p>

                <div className="mt-auto pt-6">
                  <p className="flex flex-wrap items-baseline gap-x-1.5">
                    {item.from && <span className="text-[12.5px] text-faint">des de</span>}
                    <span className="font-display text-[26px] leading-none tracking-[-0.01em]">{item.price}</span>
                    {item.period && <span className="text-[13px] text-faint">{item.period}</span>}
                  </p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener"
                    className="mt-4 flex items-center justify-between gap-3 rounded-[13px] border border-line-strong px-4 py-3 text-[13.5px] font-medium text-accent transition-colors hover:border-accent/50 hover:bg-surface-2"
                  >
                    <span>{services.ctaLabel}</span>
                    <ArrowUpRight className="size-4 shrink-0" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-[13.5px] leading-relaxed text-faint">
          {services.note}
        </p>
      </Container>
    </section>
  )
}
