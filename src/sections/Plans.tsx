import { Check } from 'lucide-react'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { plans } from '../content'
import { cx } from '../lib/cx'

export function Plans() {
  return (
    <section id="preus" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={plans.eyebrow} title={plans.title} description={plans.description} />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.tiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 0.07} className="h-full">
              <article
                className={cx(
                  'depth relative flex h-full flex-col rounded-card bg-surface p-6 shadow-soft sm:p-7',
                  tier.featured && '[--depth-edge:rgb(31_90_70/0.4)] shadow-glow',
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-[22px] tracking-[-0.01em]">{tier.name}</h3>
                  <span
                    className={cx(
                      'rounded-full px-2.5 py-1 text-[12px] font-medium',
                      tier.featured ? 'bg-accent text-bg' : 'bg-surface-2 text-muted',
                    )}
                  >
                    {tier.tag}
                  </span>
                </div>

                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="font-display text-[42px] leading-none tracking-[-0.02em]">
                    {tier.price.toLocaleString('ca-ES')}
                  </span>
                  <span className="text-[18px] font-medium">€</span>
                  <span className="ml-1 text-[13px] text-faint">sense IVA</span>
                </div>

                <p className="mt-4 text-[14.5px] leading-relaxed text-muted">{tier.text}</p>

                <Button
                  href={tier.href}
                  variant={tier.featured ? 'primary' : 'secondary'}
                  className="mt-6 w-full sm:mt-7"
                >
                  {tier.cta}
                </Button>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="depth relative h-full rounded-card bg-surface p-6 shadow-soft sm:p-7">
              <h3 className="text-[16px] font-semibold tracking-tight">{plans.includedTitle}</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {plans.included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] text-muted">
                    <span className="mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-[6px] bg-accent/10 text-accent">
                      <Check className="size-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[12.5px] text-faint">{plans.vatNote}</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="depth relative h-full rounded-card bg-surface-2 p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-[16px] font-semibold tracking-tight">{plans.maintenance.title}</h3>
                <span className="rounded-full bg-surface px-2.5 py-1 text-[12px] text-muted">Opcional</span>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-muted">{plans.maintenance.text}</p>
              <ul className="mt-5 grid grid-cols-2 gap-3">
                {plans.maintenance.options.map((option) => (
                  <li key={option.name} className="rounded-[14px] bg-surface p-4">
                    <p className="text-[13px] text-muted">{option.name}</p>
                    <p className="mt-1 font-display text-[24px] leading-none tracking-[-0.01em]">
                      {option.price} €<span className="ml-1 font-sans text-[12.5px] text-faint">/mes</span>
                    </p>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-muted">{option.text}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[13px] leading-relaxed text-muted">{plans.maintenance.note}</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
