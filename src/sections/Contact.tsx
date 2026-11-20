import { Mail, MessageCircle, Phone } from 'lucide-react'

import { Container } from '../components/Container'
import { contact } from '../content'

export function Contact() {
  const channels = [
    { icon: MessageCircle, label: contact.whatsapp.label, value: contact.whatsapp.value, href: contact.whatsapp.href },
    { icon: Phone, label: contact.phone.label, value: contact.phone.value, href: contact.phone.href },
    { icon: Mail, label: contact.email.label, value: contact.email.value, href: contact.email.href },
  ]

  return (
    <section id="contacte" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[26px] bg-accent px-6 py-14 text-bg sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgb(255_255_255/0.14),transparent_60%)]"
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <p className="text-[12.5px] font-medium uppercase tracking-[0.16em] text-bg/70">{contact.eyebrow}</p>
            <h2 className="mt-4 text-balance font-display text-[32px] leading-[1.08] tracking-[-0.02em] sm:text-[46px]">
              {contact.title}
            </h2>
            <p className="mt-4 text-pretty text-[16px] leading-relaxed text-bg/80 sm:text-[17px]">{contact.lead}</p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
              <a
                href={contact.whatsapp.href}
                className="inline-flex h-13 items-center justify-center gap-2 rounded-control-lg bg-bg px-6 text-[15px] font-medium text-accent transition-colors hover:bg-white"
              >
                <MessageCircle className="size-4" />
                {contact.whatsapp.label}
              </a>
              <a
                href={contact.email.href}
                className="inline-flex h-13 items-center justify-center gap-2 rounded-control-lg border border-bg/30 px-6 text-[15px] font-medium text-bg transition-colors hover:bg-bg/10"
              >
                <Mail className="size-4" />
                {contact.email.label}
              </a>
            </div>

            <dl className="mt-9 grid gap-3 border-t border-bg/15 pt-8 sm:grid-cols-3">
              {channels.map(({ icon: Icon, label, value, href }) => (
                <div key={label}>
                  <dt className="text-[12.5px] text-bg/60">{label}</dt>
                  <dd className="mt-1">
                    <a
                      href={href}
                      className="inline-flex items-center gap-1.5 text-[14.5px] text-bg underline decoration-bg/30 underline-offset-4 transition-colors hover:decoration-bg"
                    >
                      <Icon className="size-3.5 shrink-0" />
                      {value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-7 text-[13px] leading-relaxed text-bg/60">{contact.note}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
