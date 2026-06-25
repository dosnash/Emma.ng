"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { Variants } from "framer-motion"
import type { ReactNode } from "react"

type StaggerRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
}

type StaggerItemProps = {
  children: ReactNode
  className?: string
}

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1]

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut }
  }
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div className={className} variants={reduceMotion ? undefined : itemVariants}>
      {children}
    </motion.div>
  )
}

export default function StaggerReveal({
  children,
  className,
  delay = 0,
  staggerDelay = 0.08
}: StaggerRevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.18 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}
