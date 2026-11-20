"use client"

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion"
import { useRef } from "react"

type ScrollWordsProps = {
  text: string
  /** Words (exact match, punctuation stripped) to render in brand blue serif italic */
  highlight?: string[]
  className?: string
}

/** Paragraph whose words light up one by one as it scrolls through the viewport. */
export default function ScrollWords({ text, highlight = [], className }: ScrollWordsProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] })
  const words = text.split(" ")

  return (
    <p ref={ref} className={className}>
      {words.map((word, index) => {
        const bare = word.replace(/[^\w']/g, "")
        const isHighlight = highlight.includes(bare)
        const start = index / words.length
        const end = start + 1 / words.length
        return (
          <Word
            key={`${word}-${index}`}
            progress={scrollYProgress}
            range={[start, end]}
            still={!!reduceMotion}
            className={isHighlight ? "font-serif italic text-brand" : undefined}
          >
            {word}
          </Word>
        )
      })}
    </p>
  )
}

function Word({
  children,
  progress,
  range,
  still,
  className
}: {
  children: string
  progress: MotionValue<number>
  range: [number, number]
  still: boolean
  className?: string
}) {
  const opacity = useTransform(progress, range, [0.14, 1])
  return (
    <motion.span style={still ? undefined : { opacity }} className={className}>
      {children}{" "}
    </motion.span>
  )
}
