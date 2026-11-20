import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { nav } from '../content'
import { cx } from '../lib/cx'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cx(
          'transition-colors duration-300',
          (scrolled || open) && 'border-b border-line bg-bg/90 backdrop-blur-md',
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-4">
          <Logo />
          <nav aria-label="Seccions" className="hidden items-center gap-1 md:flex">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex h-9 items-center rounded-[10px] px-3 text-[14px] text-muted transition-colors hover:bg-surface-2 hover:text-fg"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button href={nav.cta.href} className="h-10 px-4 text-[14px]">
              {nav.cta.label}
            </Button>
          </div>
          <button
            type="button"
            aria-label={open ? 'Tanca el menú' : 'Obre el menú'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="grid size-10 place-items-center rounded-[11px] text-fg transition-colors hover:bg-surface-2 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </Container>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="sheet"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="border-b border-line bg-bg md:hidden"
          >
            <Container className="py-4">
              <ul className="flex flex-col">
                {nav.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex h-12 items-center rounded-[10px] px-2 text-[16px] text-fg transition-colors hover:bg-surface-2"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <Button href={nav.cta.href} onClick={() => setOpen(false)} className="mt-3 w-full">
                {nav.cta.label}
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
