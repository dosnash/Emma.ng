"use client"

import Link from "next/link"
import { ArrowDown, ArrowRight } from "lucide-react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ContactButton } from "@/components/ContactModal"
import RibbonShader from "@/components/motion/RibbonShader"
import { BrandMark } from "@/components/Navbar"

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const artScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])

  return (
    <section
      id="top"
      ref={ref}
      className="gutter relative min-h-[max(680px,100svh)] overflow-hidden bg-navy text-white"
    >
      {/* Intro curtain: brand mark, then five panels lift away */}
      <div className="hero-entry" aria-hidden="true">
        <div className="hero-entry-panels">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="hero-entry-panel" />
          ))}
        </div>
        <div className="hero-entry-brand">
          <div className="flex items-center gap-4">
            <BrandMark className="h-14 w-14 bg-white text-[34px] text-brand" />
            <span className="text-2xl font-semibold tracking-tight text-white">Emma.ng</span>
          </div>
        </div>
      </div>

      {/* Art: full-bleed folded ribbons, a reading shade on the left, grain */}
      <motion.div
        className="grain absolute inset-0 z-0 overflow-hidden"
        style={reduceMotion ? undefined : { scale: artScale }}
        aria-hidden="true"
      >
        <RibbonShader className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,9,30,0.55)_0%,rgba(4,9,30,0.2)_45%,transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#040a1e]/70 to-transparent" />
      </motion.div>

      <motion.div
        className="relative z-10 grid min-h-[max(680px,100svh)] items-end gap-12 pb-28 pt-36 md:grid-cols-[1.5fr_1fr] md:items-center md:gap-[clamp(40px,8vw,140px)] md:pb-32"
        style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <div>
          <h1 className="display whitespace-nowrap text-[clamp(46px,6.4vw,104px)]">
            <span className="hero-line">
              <span style={{ ["--i" as string]: 0 }}>Web designer &amp;</span>
            </span>
            <span className="hero-line">
              <span style={{ ["--i" as string]: 1 }}>frontend</span>
            </span>
            <span className="hero-line">
              <span style={{ ["--i" as string]: 2 }} className="font-serif italic text-sky">
                developer.
              </span>
            </span>
          </h1>
        </div>

        <div className="max-w-[360px] md:pt-28">
          <p className="hero-fade text-[16px] leading-[1.7] text-white/80" style={{ ["--i" as string]: 0 }}>
            Hi, I&apos;m Emma. I design and build fast, modern websites that win customers, and
            create AI-powered films and ads that tell your brand&apos;s story.
          </p>
          <div className="hero-fade mt-8 flex flex-wrap items-center gap-5" style={{ ["--i" as string]: 1 }}>
            <ContactButton className="btn-sweep inline-flex min-h-[54px] items-center gap-2.5 bg-white px-7 text-[14px] font-medium text-ink">
              Let&apos;s talk
            </ContactButton>
            <Link href="#work" className="group inline-flex items-center gap-2 text-[14px] text-white/85 hover:text-white">
              <span className="link-line">See my work</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </motion.div>

      <div className="hero-fade absolute inset-x-0 bottom-0 z-10 hidden md:block" style={{ ["--i" as string]: 3 }}>
        <div className="gutter flex items-center justify-between border-t border-white/10 py-5 text-[12px] text-sky/70">
          <span>Websites · AI films &amp; ads</span>
          <a href="#work" className="inline-flex items-center gap-2 hover:text-white">
            Scroll
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" aria-hidden="true" />
          </a>
          <span>Portfolio 2023 — 2026</span>
        </div>
      </div>
    </section>
  )
}
