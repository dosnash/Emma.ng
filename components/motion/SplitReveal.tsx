"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ElementType, ReactNode } from "react"

type Segment = string | { text: string; className?: string }

type SplitRevealProps = {
  segments: Segment[]
  as?: ElementType
  className?: string
  delay?: number
  stagger?: number
  /** Animate immediately on mount instead of on scroll into view */
  onMount?: boolean
}

/**
 * Splits text into words; each word slides up from behind a mask.
 * Pass objects to style a run of words differently (e.g. serif italic).
 */
export default function SplitReveal({
  segments,
  as: Tag = "h2",
  className,
  delay = 0,
  stagger = 0.045,
  onMount = false
}: SplitRevealProps) {
  const reduceMotion = useReducedMotion()

  const words: { word: string; className?: string }[] = []
  for (const segment of segments) {
    const text = typeof segment === "string" ? segment : segment.text
    const cls = typeof segment === "string" ? undefined : segment.className
    text
      .split(" ")
      .filter(Boolean)
      .forEach((word) => words.push({ word, className: cls }))
  }

  const trigger = onMount
    ? { animate: "visible" }
    : { whileInView: "visible", viewport: { once: true, amount: 0.5 } }

  return (
    <Tag className={className}>
      <span className="sr-only">{words.map((w) => w.word).join(" ")}</span>
      <motion.span
        aria-hidden="true"
        initial={reduceMotion ? false : "hidden"}
        {...trigger}
        transition={{ staggerChildren: stagger, delayChildren: delay }}
        className="inline"
      >
        {words.map(({ word, className: cls }, index) => (
          <span
            key={`${word}-${index}`}
            className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom"
          >
            <motion.span
              className={`inline-block ${cls ?? ""}`}
              variants={{
                hidden: { y: "110%" },
                visible: { y: "0%", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
              }}
            >
              {word}
            </motion.span>
            {index < words.length - 1 ? " " : null}
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${className}`}>
      <span className="inline-block h-px w-8 bg-current opacity-60" aria-hidden="true" />
      {children}
    </p>
  )
}
