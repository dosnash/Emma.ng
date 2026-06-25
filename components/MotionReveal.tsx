"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

type MotionRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale"
}

const variants = {
  up: { opacity: 0, y: 24 },
  down: { opacity: 0, y: -24 },
  left: { opacity: 0, x: 24 },
  right: { opacity: 0, x: -24 },
  fade: { opacity: 0 },
  scale: { opacity: 0, scale: 0.92 }
}

const visible = { opacity: 1, y: 0, x: 0, scale: 1 }

export default function MotionReveal({
  children,
  className,
  delay = 0,
  direction = "up"
}: MotionRevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : variants[direction]}
      whileInView={reduceMotion ? undefined : visible}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
