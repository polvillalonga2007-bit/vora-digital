import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { brand, footer } from '../content'

export function Footer() {
  return (
    <footer className="border-t border-line pt-14 pb-8">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.2fr_0.9fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-muted">{footer.blurb}</p>
            <p className="mt-4 text-[13px] text-faint">{brand.town} · Bages</p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <p className="text-[13px] font-medium text-fg">{column.title}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[14px] text-muted transition-colors hover:text-accent">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-[13px] text-faint">{footer.copyright}</p>
          <p className="text-[13px] text-faint">Fet a Manresa</p>
        </div>
      </Container>
    </footer>
  )
}
