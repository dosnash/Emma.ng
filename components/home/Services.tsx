"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, CalendarDays, Play } from "lucide-react"
import SplitReveal, { Eyebrow } from "@/components/motion/SplitReveal"
import { CAL_URL, filmService, process, services } from "@/lib/site"

const ease = [0.16, 1, 0.3, 1] as const

/** Running timecode for the film frame */
function Timecode() {
  const [frames, setFrames] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setFrames((f) => f + 1), 1000 / 24)
    return () => clearInterval(id)
  }, [])
  const ff = String(frames % 24).padStart(2, "0")
  const ss = String(Math.floor(frames / 24) % 60).padStart(2, "0")
  const mm = String(Math.floor(frames / 1440) % 60).padStart(2, "0")
  return (
    <span className="tabular-nums" suppressHydrationWarning>
      00:{mm}:{ss}:{ff}
    </span>
  )
}

/** AI UGC still filling the film frame; hides itself if the file is missing so the animated sheen shows */
function FilmCover({ src }: { src: string }) {
  const [ok, setOk] = useState(true)
  if (!ok) return null
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="AI-generated UGC-style ad still"
      onError={() => setOk(false)}
      className="film-cover absolute inset-0 h-full w-full object-cover"
    />
  )
}

export function BookCallButton({ label = "Book a consultation", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={CAL_URL}
      target="_blank"
      rel="noreferrer"
      className={`btn-sweep inline-flex min-h-[54px] items-center gap-2.5 px-7 text-[14px] font-medium ${className}`}
    >
      <CalendarDays className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  )
}

export default function Services() {
  const reduceMotion = useReducedMotion()
  const processRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: processRef, offset: ["start 0.85", "end 0.6"] })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="services" className="gutter relative overflow-hidden bg-ink py-28 text-white md:py-40">
      <div className="dot-grid absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top_right,#000,transparent_70%)]" aria-hidden="true" />
      <div className="orb orb-b right-[-15%] top-[20%] h-[480px] w-[480px] bg-brand/30" aria-hidden="true" />

      <div className="relative">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Eyebrow className="text-sky">What I do</Eyebrow>
            <SplitReveal
              className="display mt-6 max-w-4xl text-[clamp(40px,5.6vw,88px)]"
              segments={["Websites that convert.", { text: "Films that move.", className: "font-serif italic text-sky" }]}
            />
          </div>
          <p className="max-w-sm text-[15px] leading-[1.7] text-white/65">
            A focused set of services, so each one gets done properly. One person from first call
            to launch day.
          </p>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-[6px] bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.li
              key={service.title}
              initial={reduceMotion ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: index * 0.08, ease }}
              className={`group relative flex min-h-[360px] flex-col justify-between gap-10 overflow-hidden bg-ink p-7 transition-colors duration-500 hover:bg-brand sm:p-9`}
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-[40px] italic leading-none text-sky transition-colors duration-500 group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight
                  className="h-5 w-5 text-white/40 transition-all duration-500 ease-out-expo group-hover:rotate-45 group-hover:text-white"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="text-[clamp(22px,1.9vw,28px)] font-medium leading-tight tracking-tight">{service.title}</h3>
                <p className="mt-3 max-w-md text-[14px] leading-[1.65] text-white/65 transition-colors group-hover:text-white/85">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2 border-t border-white/10 pt-5 text-[13px] text-white/70 group-hover:border-white/25">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="h-1 w-1 flex-none rounded-full bg-amber" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
          <motion.li
            initial={reduceMotion ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: services.length * 0.08, ease }}
            className="relative flex min-h-[360px] flex-col justify-between gap-10 overflow-hidden bg-brand p-7 sm:p-9"
          >
            <div className="orb orb-a right-[-30%] top-[-30%] h-[260px] w-[260px] bg-sky/40" aria-hidden="true" />
            <span className="relative font-serif text-[40px] italic leading-none text-white">?</span>
            <div className="relative">
              <h3 className="text-[clamp(22px,1.9vw,28px)] font-medium leading-tight tracking-tight">
                Not sure what you need?
              </h3>
              <p className="mt-3 max-w-md text-[14px] leading-[1.65] text-white/80">
                Book a free consultation and we&apos;ll work out the right mix for your goals and budget.
              </p>
              <BookCallButton label="Book a consultation" className="mt-6 w-fit bg-white text-ink [--sweep:var(--amber)]" />
            </div>
          </motion.li>
        </ul>

        {/* Featured: AI Films & Ads */}
        <motion.article
          initial={reduceMotion ? false : { opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.1, ease }}
          className="relative mt-6 grid overflow-hidden rounded-[6px] bg-gradient-to-br from-deep via-navy to-ink ring-1 ring-white/10 lg:grid-cols-[1fr_1.15fr]"
        >
          <div className="flex flex-col justify-between gap-10 p-7 sm:p-10 lg:p-14">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-serif text-[40px] italic leading-none text-sky">{String(services.length + 1).padStart(2, "0")}</span>
                <span className="rounded-full bg-amber px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-ink">
                  New
                </span>
              </div>
              <h3 className="display mt-8 text-[clamp(40px,4.6vw,72px)]">
                AI Films <span className="font-serif italic text-sky">&amp; Ads</span>
              </h3>
              <p className="mt-5 max-w-md text-[15px] leading-[1.7] text-white/70">{filmService.description}</p>
              <ul className="mt-8 grid gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-[14px] text-white/80 sm:grid-cols-2">
                {filmService.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-[9px] h-1 w-1 flex-none rounded-full bg-amber" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <BookCallButton label="Plan your film" className="w-fit bg-white text-ink" />
          </div>

          {/* Film frame visual */}
          <div className="relative min-h-[340px] p-4 sm:p-6 lg:p-8">
            <div className="film-frame relative h-full min-h-[300px] overflow-hidden rounded-[4px] bg-black">
              <div className="film-sheen absolute inset-0" aria-hidden="true" />
              <FilmCover src={filmService.cover} />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.65)_100%)]" aria-hidden="true" />
              {/* letterbox bars */}
              <div className="absolute inset-x-0 top-0 h-[9%] bg-black" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 h-[9%] bg-black" aria-hidden="true" />

              <div className="absolute left-9 top-[14%] flex items-center gap-2 text-[11px] font-medium tracking-wider text-white/85">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" aria-hidden="true" />
                REC
              </div>
              <div className="absolute right-9 top-[14%] text-[11px] text-white/70">
                <Timecode />
              </div>

              <div className="absolute inset-0 grid place-items-center">
                <span className="relative grid h-20 w-20 place-items-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/40">
                  <span className="absolute inset-0 animate-ping rounded-full bg-white/10" aria-hidden="true" />
                  <Play className="ml-1 h-7 w-7 fill-white text-white" aria-hidden="true" />
                </span>
              </div>

              {/* corner crop marks */}
              {["left-3 top-[12%] border-l border-t", "right-3 top-[12%] border-r border-t", "left-3 bottom-[12%] border-b border-l", "right-3 bottom-[12%] border-b border-r"].map((pos) => (
                <span key={pos} className={`absolute h-5 w-5 border-white/50 ${pos}`} aria-hidden="true" />
              ))}

              <div className="absolute bottom-[14%] left-9 right-9 flex items-end justify-between gap-4">
                <p className="font-serif text-[clamp(20px,2vw,28px)] italic leading-tight text-white">
                  Your story, <br className="hidden sm:block" />made cinematic.
                </p>
                <div className="flex gap-1.5">
                  {filmService.formats.map((format) => (
                    <span key={format} className="rounded border border-white/30 px-2 py-0.5 text-[10px] text-white/80">
                      {format}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Process: numbered steps with a line that draws as you scroll */}
        <div ref={processRef} className="mt-28 md:mt-36">
          <Eyebrow className="text-sky">How we&apos;ll work</Eyebrow>
          <div className="relative mt-12">
            <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-white/10 md:block" aria-hidden="true" />
            <motion.div
              className="absolute left-0 right-0 top-[7px] hidden h-px origin-left bg-gradient-to-r from-bright via-sky to-amber md:block"
              style={reduceMotion ? undefined : { scaleX: lineScale }}
              aria-hidden="true"
            />
            <ol className="grid gap-12 md:grid-cols-4 md:gap-8">
              {process.map((step, index) => (
                <motion.li
                  key={step.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: index * 0.12, ease }}
                  className="relative"
                >
                  <span className="relative z-10 block h-[15px] w-[15px] rounded-full border-2 border-sky bg-ink" aria-hidden="true" />
                  <p className="mt-6 text-[12px] text-sky/70">Step {String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-[26px] font-medium tracking-tight">{step.title}</h3>
                  <p className="mt-3 max-w-[30ch] text-[14px] leading-[1.65] text-white/60">{step.body}</p>
                </motion.li>
              ))}
            </ol>
          </div>
          <BookCallButton label="Book a free consultation" className="mt-16 bg-white text-ink" />
        </div>
      </div>
    </section>
  )
}
