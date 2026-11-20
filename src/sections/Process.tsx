import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { process } from '../content'

export function Process() {
  return (
    <section id="proces" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={process.eyebrow} title={process.title} description={process.description} />

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {process.steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <li>
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-[12px] bg-accent font-display text-[17px] text-bg">
                    {index + 1}
                  </span>
                  <span aria-hidden className="h-px flex-1 bg-line-strong" />
                </div>
                <h3 className="mt-4 text-[17px] font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <p className="mt-10 rounded-[14px] bg-surface-2 px-5 py-4 text-[14px] leading-relaxed text-muted">
          {process.note}
        </p>
      </Container>
    </section>
  )
}
