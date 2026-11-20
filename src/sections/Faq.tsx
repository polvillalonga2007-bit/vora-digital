import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { useState } from 'react'

import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { faq } from '../content'
import { cx } from '../lib/cx'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="preguntes" className="scroll-mt-20 border-t border-line bg-surface-2/50 py-20 sm:py-28">
      <Container className="max-w-[800px]">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
        <Reveal className="mt-10">
          <ul className="depth relative divide-y divide-line rounded-card bg-surface shadow-soft">
            {faq.items.map((item, index) => {
              const isOpen = open === index
              return (
                <li key={item.q}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="text-[15.5px] font-medium leading-snug sm:text-[16.5px]">{item.q}</span>
                    <span
                      className={cx(
                        'mt-0.5 grid size-7 shrink-0 place-items-center rounded-[9px] bg-surface-2 text-muted transition-transform duration-300',
                        isOpen && 'rotate-45 bg-accent/10 text-accent',
                      )}
                    >
                      <Plus className="size-3.5" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-[14.5px] leading-relaxed text-muted sm:px-6 sm:pb-6">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
