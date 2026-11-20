"use client"

import { animate, useInView, useReducedMotion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

type CountUpProps = {
  value: number
  suffix?: string
  decimals?: number
  className?: string
}

export default function CountUp({ value, suffix = "", decimals = 0, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(reduceMotion ? value : 0)

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) {
      setDisplay(value)
      return
    }
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(latest)
    })
    return () => controls.stop()
  }, [inView, reduceMotion, value])

  return (
    <span ref={ref} className={className}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}
