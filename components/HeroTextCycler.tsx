"use client"

import { useEffect, useState } from "react"

type HeroTextCyclerProps = {
  words?: string[]
  className?: string
}

const defaultWords = [
  "Web Designer",
  "WordPress Developer",
  "Frontend Developer",
  "Conversion Specialist"
]

export default function HeroTextCycler({ words = defaultWords, className }: HeroTextCyclerProps) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisible(false)
      const timeout = window.setTimeout(() => {
        setIndex((current) => (current + 1) % words.length)
        setVisible(true)
      }, 260)

      return () => window.clearTimeout(timeout)
    }, 2000)

    return () => window.clearInterval(interval)
  }, [words.length])

  return (
    <span
      aria-live="polite"
      className={`inline-block text-[#ff5535] transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      } ${className ?? ""}`}
    >
      {words[index]}
    </span>
  )
}
