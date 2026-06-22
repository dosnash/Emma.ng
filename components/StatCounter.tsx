"use client"

import { useEffect, useRef, useState } from "react"

type StatCounterProps = {
  value: number
  suffix?: string
  label: string
  decimals?: number
}

export default function StatCounter({ value, suffix = "", label, decimals = 0 }: StatCounterProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const currentRef = ref.current

    if (!currentRef) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated) {
          return
        }

        setHasAnimated(true)
        const duration = 1200
        const startTime = performance.now()

        const animate = (time: number) => {
          const progress = Math.min((time - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplayValue(value * eased)

          if (progress < 1) {
            window.requestAnimationFrame(animate)
          } else {
            setDisplayValue(value)
          }
        }

        window.requestAnimationFrame(animate)
      },
      { threshold: 0.35 }
    )

    observer.observe(currentRef)

    return () => {
      observer.disconnect()
    }
  }, [hasAnimated, value])

  const formattedValue = displayValue.toFixed(decimals)

  return (
    <div
      ref={ref}
      className="rounded-lg border border-[#ffd6ce] bg-[#fff7f5] p-6 transition-colors hover:border-[#ff5535]/45"
    >
      <p className="text-3xl font-extrabold tracking-tight text-[#0a0a0a]">
        {formattedValue}
        {suffix}
      </p>
      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#52525b]">
        {label}
      </p>
    </div>
  )
}
