import { useEffect } from 'react'

import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { asset, brand } from '../content'
import type { LegalPage } from '../legal'
import { legal } from '../legal'
import { Footer } from '../sections/Footer'

// Els trossos entre dobles claudàtors són dades que falten; es marquen perquè
// el titular les vegi de seguida i les pugui completar.
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\[\[.+?\]\])/g).map((part, index) =>
        part.startsWith('[[') && part.endsWith(']]') ? (
          <span key={index} className="rounded-[4px] bg-accent-2/12 px-1 font-medium text-accent-2">
            {part.slice(2, -2)}
          </span>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  )
}

export function Legal({ page }: { page: LegalPage }) {
  useEffect(() => {
    document.title = `${page.title} · ${brand.name}`
  }, [page.title])

  return (
    <div className="min-h-dvh">
      <header className="border-b border-line">
        <Container className="flex h-16 items-center justify-between gap-4">
          <Logo />
          <a
            href={asset('')}
            className="inline-flex h-9 items-center rounded-[10px] px-3 text-[14px] text-muted transition-colors hover:bg-surface-2 hover:text-fg"
          >
            Tornar a l’inici
          </a>
        </Container>
      </header>

      <main className="py-14 sm:py-20">
        <Container className="max-w-[720px]">
          <p className="text-[12px] font-medium tracking-[0.18em] text-accent uppercase">{page.eyebrow}</p>
          <h1 className="mt-3 font-display text-[34px] leading-[1.15] text-fg sm:text-[42px]">{page.title}</h1>
          <p className="mt-3 text-[13px] text-faint">Darrera actualització: {page.updated}</p>
          <p className="mt-6 text-[16px] leading-relaxed text-muted">
            <Rich text={page.intro} />
          </p>

          <div className="mt-10 flex flex-col gap-9">
            {page.sections.map((section, index) => (
              <section key={section.heading}>
                <h2 className="text-[19px] font-semibold text-fg">
                  {index + 1}. {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-[15px] leading-relaxed text-muted">
                    <Rich text={paragraph} />
                  </p>
                ))}
                {section.list ? (
                  <ul className="mt-3 flex flex-col gap-2">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-2.5 text-[15px] leading-relaxed text-muted">
                        <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-2" />
                        <span>
                          <Rich text={item} />
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-[16px] border border-line bg-surface p-5 text-[15px] leading-relaxed text-muted">
            Si tens qualsevol dubte sobre aquest text, escriu a{' '}
            <a href={`mailto:${legal.email}`} className="text-accent underline decoration-line-strong underline-offset-2">
              {legal.email}
            </a>{' '}
            o truca al{' '}
            <a href={`tel:+${legal.phoneDigits}`} className="text-accent underline decoration-line-strong underline-offset-2">
              {legal.phone}
            </a>
            .
          </div>

          <a href={asset('')} className="mt-8 inline-flex text-[14px] text-accent hover:underline">
            ← Tornar a la pàgina principal
          </a>
        </Container>
      </main>

      <Footer />
    </div>
  )
}
