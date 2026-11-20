"use client"

import { useEffect, useRef } from "react"

/**
 * Generative dot-matrix canvas: a slow diagonal wave ripples through a grid
 * of dots, and dots near the pointer swell and brighten.
 */
export default function DotField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const spacing = 26
    let width = 0
    let height = 0
    let dpr = 1
    let frame = 0
    let running = true
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999 }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height)
      pointer.x += (pointer.tx - pointer.x) * 0.12
      pointer.y += (pointer.ty - pointer.y) * 0.12
      const t = time * 0.0006
      const cols = Math.ceil(width / spacing) + 1
      const rows = Math.ceil(height / spacing) + 1

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing
          const y = j * spacing
          // diagonal travelling wave + vertical fade toward the bottom-right
          const wave = Math.sin(i * 0.22 + j * 0.16 - t * 2.2) * 0.5 + 0.5
          const fade = Math.min(1, (x / width) * 0.9 + 0.25) * (1 - (y / height) * 0.35)
          const dx = x - pointer.x
          const dy = y - pointer.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const near = Math.max(0, 1 - dist / 170)
          const alpha = Math.min(1, (0.06 + wave * 0.22) * fade + near * 0.75)
          const r = 0.9 + wave * 0.5 + near * 1.8
          ctx.beginPath()
          ctx.fillStyle = near > 0.05 ? `rgba(245, 184, 61, ${alpha * near + alpha * 0.4})` : `rgba(185, 201, 247, ${alpha})`
          ctx.arc(x, y, r, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    const loop = (time: number) => {
      if (!running) return
      draw(time)
      frame = requestAnimationFrame(loop)
    }

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.tx = event.clientX - rect.left
      pointer.ty = event.clientY - rect.top
    }
    const onLeave = () => {
      pointer.tx = -9999
      pointer.ty = -9999
    }

    resize()
    window.addEventListener("resize", resize)

    if (reduceMotion) {
      draw(0)
      return () => window.removeEventListener("resize", resize)
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    document.addEventListener("pointerleave", onLeave)

    // Only animate while the canvas is visible
    const observer = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting
      if (visible && !running) {
        running = true
        frame = requestAnimationFrame(loop)
      } else if (!visible) {
        running = false
        cancelAnimationFrame(frame)
      }
    })
    observer.observe(canvas)
    frame = requestAnimationFrame(loop)

    return () => {
      running = false
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", onMove)
      document.removeEventListener("pointerleave", onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
