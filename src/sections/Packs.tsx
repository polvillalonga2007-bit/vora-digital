import { Check } from 'lucide-react'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { packs } from '../content'

export function Packs() {
  return (
    <section id="packs" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={packs.eyebrow} title={packs.title} description={packs.description} />

        <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
          {packs.items.map((pack, index) => (
            <Reveal key={pack.key} delay={index * 0.07} className="h-full">
              <article className="depth relative flex h-full flex-col rounded-card bg-surface p-6 shadow-glow [--depth-edge:rgb(31_90_70/0.4)] sm:p-7">
                <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-accent-2">
                  {pack.audience}
                </p>
                <h3 className="mt-2 font-display text-[24px] tracking-[-0.01em]">{pack.name}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{pack.text}</p>

                <ul className="mt-5 flex flex-col gap-2">
                  {pack.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14px] text-fg">
                      <span className="mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-[6px] bg-accent/10 text-accent">
                        <Check className="size-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  <p className="flex items-baseline gap-1.5">
                    <span className="font-display text-[38px] leading-none tracking-[-0.02em]">
                      {pack.price.toLocaleString('ca-ES')}
                    </span>
                    <span className="text-[17px] font-medium">€</span>
                    <span className="ml-1 text-[12.5px] text-faint">sense IVA</span>
                  </p>
                  <p className="mt-1.5 text-[13px] text-muted">+ {pack.maintenance} · 49 €/mes</p>
                  <Button href={pack.href} target="_blank" rel="noopener" className="mt-5 w-full">
                    {packs.cta}
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-[13.5px] leading-relaxed text-faint">
          {packs.note}
        </p>
      </Container>
    </section>
  )
}
