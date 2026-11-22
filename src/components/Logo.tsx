import { asset, brand } from '../content'
import { cx } from '../lib/cx'

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cx('grid size-9 shrink-0 place-items-center rounded-[11px] bg-accent text-bg', className)}
    >
      <svg
        viewBox="0 0 24 24"
        className="size-4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 8l7 9 7-9" />
      </svg>
    </span>
  )
}

export function Logo({ className }: { className?: string }) {
  // Mentre brand.logo sigui un marcador ('[logotip]') es mostra la marca de text.
  const hasLogo = brand.logo.startsWith('/') || brand.logo.startsWith('http')
  return (
    <a href={asset('#top')} className={cx('inline-flex items-center gap-2.5 text-[16px] tracking-tight text-fg', className)}>
      {hasLogo ? <img src={brand.logo} alt="" className="size-9 shrink-0 object-contain" /> : <LogoMark />}
      <span className="font-semibold">
        {brand.parts[0]} <span className="font-normal text-muted">{brand.parts[1]}</span>
      </span>
    </a>
  )
}
