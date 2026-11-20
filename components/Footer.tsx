"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { ContactButton } from "@/components/ContactModal"
import SplitReveal from "@/components/motion/SplitReveal"
import { BookCallButton } from "@/components/home/Services"
import { socials } from "@/lib/site"

export default function Footer() {
  const reduceMotion = useReducedMotion()

  return (
    <footer id="contact" className="relative overflow-hidden bg-ink text-white">
      <div className="orb orb-a left-[-10%] top-[-20%] h-[520px] w-[520px] bg-brand/40" aria-hidden="true" />
      <div className="gutter relative pb-36 pt-24 md:pb-28 md:pt-32">
        <p className="eyebrow text-sky">Let&apos;s work together</p>

        <SplitReveal
          as="h2"
          className="display mt-8 max-w-5xl text-[clamp(44px,8vw,128px)]"
          segments={["Have a project in mind?", { text: "Let's build it.", className: "font-serif italic text-sky" }]}
        />

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <BookCallButton className="justify-center bg-white text-ink" />
          <ContactButton className="btn-sweep inline-flex min-h-[54px] items-center justify-center gap-2.5 border border-white/25 px-7 text-[14px] font-medium text-white [--sweep:var(--brand)]">
            Chat on WhatsApp
          </ContactButton>
          <p className="max-w-xs text-sm leading-relaxed text-sky/80">
            Tell me what you&apos;re building. I usually reply within 24 hours.
          </p>
        </div>

        <div className="mt-24 grid gap-10 border-t border-white/10 pt-10 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="eyebrow text-sky/60">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {[
                ["Home", "/"],
                ["Work", "/projects"],
                ["Services", "/#services"]
                // ["Guides", "/resources"]
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="link-line text-white/80 hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-sky/60">Elsewhere</p>
            <ul className="mt-4 space-y-2.5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1 text-white/80 hover:text-white"
                  >
                    <span className="link-line">{social.label}</span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-sky/60">Working</p>
            <p className="mt-4 text-white/80">Remotely, with clients worldwide</p>
            <a href="https://app.cal.com/emma-developer" target="_blank" rel="noreferrer" className="link-line mt-2.5 inline-block text-white/80 hover:text-white">
              Book a consultation
            </a>
          </div>
          <div>
            <p className="eyebrow text-sky/60">Colophon</p>
            <p className="mt-4 text-white/80">Designed &amp; built by Emmanuel Ovansa</p>
            <p className="mt-2.5 text-white/50">© 2023–2026</p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none relative select-none overflow-hidden" aria-hidden="true">
        <motion.p
          initial={reduceMotion ? false : { y: "40%" }}
          whileInView={{ y: "18%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="display -mb-[0.06em] whitespace-nowrap text-center text-[25vw] leading-[0.8] text-white/[0.06]"
        >
          Emma<span className="font-serif italic">.ng</span>
        </motion.p>
      </div>
    </footer>
  )
}
