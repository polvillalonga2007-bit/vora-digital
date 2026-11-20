import { cx } from '../lib/cx'
import { Reveal } from './Reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <Reveal className={cx('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <p className="mb-3 text-[12.5px] font-medium uppercase tracking-[0.16em] text-accent">{eyebrow}</p>
      )}
      <h2 className="text-balance font-display text-[30px] leading-[1.12] tracking-[-0.015em] sm:text-[40px]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-[16px] leading-relaxed text-muted sm:text-[17px]">{description}</p>
      )}
    </Reveal>
  )
}
