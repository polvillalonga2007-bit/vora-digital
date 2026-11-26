import { Clock, Image, ListChecks, MessageCircle, Phone, Scale, Star, Users, type LucideIcon } from 'lucide-react'

import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { includes } from '../content'

const icons: Record<string, LucideIcon> = {
  portada: Image,
  serveis: ListChecks,
  equip: Users,
  opinions: Star,
  horaris: Clock,
  contacte: Phone,
  whatsapp: MessageCircle,
  legal: Scale,
}

export function Includes() {
  return (
    <section id="inclou" className="scroll-mt-20 border-t border-line bg-surface-2/50 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={includes.eyebrow} title={includes.title} description={includes.description} />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {includes.items.map((item, index) => {
            const Icon = icons[item.key] ?? Image
            return (
              <Reveal key={item.key} delay={(index % 4) * 0.06} className="h-full">
                <article className="depth flex h-full flex-col rounded-card-sm bg-surface p-4 shadow-soft sm:p-5">
                  <span className="grid size-10 place-items-center rounded-[11px] bg-surface-2 text-accent">
                    <Icon className="size-[18px]" />
                  </span>
                  <h3 className="mt-4 text-[15.5px] font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted sm:text-[14px]">{item.text}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
