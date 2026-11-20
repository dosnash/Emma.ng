"use client"

import { useEffect, useRef } from "react"

/**
 * Soft 3D folded-ribbon background in brand blues.
 * Diagonal bands follow layered sine curves; each strip is lit by the curve's slope
 * so the bands read as folded fabric, with dark creases where one ribbon tucks under the next.
 * Rendered at reduced resolution and softened with a CSS blur for a rendered, photographic feel.
 */

// brightness (0..1) -> colour, navy shadows through brand blue to pale highlights
const STOPS: [number, [number, number, number]][] = [
  [0, [4, 9, 30]],
  [0.3, [11, 25, 78]],
  [0.55, [26, 58, 165]],
  [0.75, [52, 98, 222]],
  [0.9, [118, 152, 246]],
  [1, [196, 212, 255]]
]

function buildPalette() {
  const lut: string[] = []
  for (let i = 0; i < 256; i++) {
    const t = i / 255
    let a = STOPS[0]
    let b = STOPS[STOPS.length - 1]
    for (let s = 0; s < STOPS.length - 1; s++) {
      if (t >= STOPS[s][0] && t <= STOPS[s + 1][0]) {
        a = STOPS[s]
        b = STOPS[s + 1]
        break
      }
    }
    const k = (t - a[0]) / (b[0] - a[0] || 1)
    const c = a[1].map((v, j) => Math.round(v + (b[1][j] - v) * k))
    lut.push(`rgb(${c[0]},${c[1]},${c[2]})`)
  }
  return lut
}

export default function WaveRibbons({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    const palette = buildPalette()
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const RES = 0.5 // render scale; CSS blur + upscale gives a soft, rendered look
    let w = 0
    let h = 0
    let frame = 0
    let running = true
    let last = 0
    const pointer = { x: 0, tx: 0 }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      w = Math.max(1, Math.floor(rect.width * RES))
      h = Math.max(1, Math.floor(rect.height * RES))
      canvas.width = w
      canvas.height = h
    }

    const shade = (b: number) => palette[Math.max(0, Math.min(255, Math.round(b * 255)))]

    const draw = (time: number) => {
      const t = time * 0.00011 + pointer.x * 0.25
      ctx.fillStyle = palette[18]
      ctx.fillRect(0, 0, w, h)

      const D = Math.hypot(w, h) / 2 + 60
      const W = Math.max(46, Math.min(w, h) * 0.17) // ribbon width
      const amp = W * 1.7
      const step = 2

      ctx.save()
      ctx.translate(w * 0.55, h * 0.5)
      ctx.rotate(-0.62) // ribbons run bottom-left to top-right

      // boundary between ribbon k-1 and k, and its slope along u
      const edge = (k: number, u: number) =>
        k * W +
        amp * Math.sin(u * (2.4 / D) + k * 0.33 + t) +
        amp * 0.35 * Math.sin(u * (5.1 / D) - k * 0.21 + t * 1.6)
      const slope = (k: number, u: number) =>
        amp * (2.4 / D) * Math.cos(u * (2.4 / D) + k * 0.33 + t) +
        amp * 0.35 * (5.1 / D) * Math.cos(u * (5.1 / D) - k * 0.21 + t * 1.6)

      const kMin = Math.floor(-D / W) - 4
      const kMax = Math.ceil(D / W) + 4

      for (let k = kMin; k < kMax; k++) {
        for (let u = -D; u < D; u += step) {
          const top = edge(k, u)
          const bot = edge(k + 1, u)
          const span = bot - top
          if (span <= 0.5) continue
          // light comes from the upper left: rising slope catches light
          const s = (slope(k, u) + slope(k + 1, u)) * 0.5
          const squeeze = Math.min(1, span / W) // compressed folds go darker
          const base = 0.5 + Math.tanh(s * 1.15) * 0.42
          const b = base * (0.55 + 0.45 * squeeze)

          // body of the ribbon
          ctx.fillStyle = shade(b)
          ctx.fillRect(u, top, step + 0.6, span + 0.6)
          // soft lit lip along the leading edge
          ctx.fillStyle = shade(Math.min(1, b + 0.1))
          ctx.fillRect(u, bot - span * 0.38, step + 0.6, span * 0.22)
          // crease: shadow cast by the ribbon tucked above
          ctx.fillStyle = shade(b * 0.38)
          ctx.fillRect(u, top, step + 0.6, Math.min(span * 0.16, 7))
        }
      }
      ctx.restore()
    }

    const loop = (time: number) => {
      if (!running) return
      pointer.x += (pointer.tx - pointer.x) * 0.03
      // ~30fps is plenty for a slow drift
      if (time - last > 32) {
        draw(time)
        last = time
      }
      frame = requestAnimationFrame(loop)
    }

    const onMove = (event: PointerEvent) => {
      pointer.tx = event.clientX / window.innerWidth - 0.5
    }

    resize()
    const onResize = () => {
      resize()
      draw(performance.now())
    }
    window.addEventListener("resize", onResize)

    if (reduceMotion) {
      draw(0)
      return () => window.removeEventListener("resize", onResize)
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true
        frame = requestAnimationFrame(loop)
      } else if (!entry.isIntersecting) {
        running = false
        cancelAnimationFrame(frame)
      }
    })
    observer.observe(canvas)
    draw(performance.now())
    frame = requestAnimationFrame(loop)

    return () => {
      running = false
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener("resize", onResize)
      window.removeEventListener("pointermove", onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ filter: "blur(2.5px) saturate(1.1)", transform: "scale(1.04)" }}
    />
  )
}
