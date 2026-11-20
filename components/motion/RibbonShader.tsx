"use client"

import { useEffect, useRef, useState } from "react"
import WaveRibbons from "@/components/motion/WaveRibbons"

/**
 * Full-screen flowing 3D ribbons, rendered per pixel in a WebGL fragment shader.
 * Wide folded bands sweep diagonally across the hero; each band is shaded like a
 * curved sheet (soft key light, specular sheen on the rims, ambient occlusion where
 * it tucks under the band above), then graded through the brand blues.
 * Falls back to the 2D canvas version when WebGL is unavailable.
 */

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`

const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;

const float W = 0.27;           // ribbon width, in screen heights
const float F1 = 3.6;           // main wave frequency along the ribbons
const float F2 = 7.4;

// how far the ribbon field is pushed sideways at position u (k = ribbon index, gives slight phase drift)
float disp(float u, float k, float t) {
  return 0.13 * sin(u * F1 + k * 0.12 + t)
       + 0.028 * sin(u * F2 - k * 0.20 + t * 1.6);
}
float dDisp(float u, float k, float t) {
  return 0.13 * F1 * cos(u * F1 + k * 0.12 + t)
       + 0.028 * F2 * cos(u * F2 - k * 0.20 + t * 1.6);
}

// matte brand-blue grade: deep navy shadows, brand blue body, soft periwinkle light
vec3 grade(float x) {
  vec3 c0 = vec3(0.010, 0.022, 0.075);
  vec3 c1 = vec3(0.035, 0.080, 0.260);
  vec3 c2 = vec3(0.090, 0.180, 0.500);
  vec3 c3 = vec3(0.170, 0.310, 0.720);
  vec3 c4 = vec3(0.420, 0.560, 0.960);
  x = clamp(x, 0.0, 1.0);
  if (x < 0.28) return mix(c0, c1, x / 0.28);
  if (x < 0.55) return mix(c1, c2, (x - 0.28) / 0.27);
  if (x < 0.82) return mix(c2, c3, (x - 0.55) / 0.27);
  return mix(c3, c4, (x - 0.82) / 0.18);
}

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float t = uTime * 0.11 + uMouse.x * 0.4;

  // ribbons run from lower-left to upper-right
  float a = -0.50 + uMouse.y * 0.03;
  float ca = cos(a), sa = sin(a);
  float u = ca * p.x - sa * p.y;
  float v = sa * p.x + ca * p.y;

  // invert the displacement to find which ribbon this pixel sits on
  float k = v / W;
  float w = v - disp(u, k, t);
  k = w / W; w = v - disp(u, k, t);
  k = w / W; w = v - disp(u, k, t);

  float band = w / W;
  float id = floor(band);
  float f = fract(band);   // 0 = lower (front, lit) edge, 1 = upper edge tucked under the next ribbon

  // fold lighting: the wave tilts each sheet toward or away from a light above-left
  float slope = dDisp(u, id + f, t);
  vec3 n = normalize(vec3(-slope * 1.35, 0.30 * (0.5 - f), 1.0));
  vec3 L = normalize(vec3(-0.55, 0.55, 0.62));
  float diff = max(dot(n, L), 0.0);

  // soft cast shadow from the ribbon lying on top (falls onto the upper part of this one)
  float shadow = 1.0 - 0.72 * pow(smoothstep(0.45, 1.0, f), 1.6);

  // thin raised edge catching light along the front of each ribbon
  float rim = smoothstep(0.035, 0.0, f) * 0.55 + smoothstep(0.10, 0.0, f) * 0.12;

  float lum = (0.16 + diff * 0.86) * shadow + rim * (0.5 + diff);
  lum *= (0.94 + 0.08 * sin(id * 2.1 + 0.6)) * 0.9;

  // light pools toward the upper right, falls off lower left
  vec2 uv = gl_FragCoord.xy / uRes;
  lum *= 0.70 + 0.40 * smoothstep(-0.1, 1.1, uv.x * 0.55 + uv.y * 0.75);

  vec3 col = grade(lum);

  // gentle vignette + fine grain for a rendered, photographic finish
  float vig = smoothstep(1.3, 0.3, length((uv - 0.5) * vec2(1.05, 1.0)));
  col *= mix(0.62, 1.0, vig);
  col += (hash(gl_FragCoord.xy + fract(uTime * 7.0)) - 0.5) * 0.022;

  gl_FragColor = vec4(col, 1.0);
}
`

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, src)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.warn(gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }
  return shader
}

export default function RibbonShader({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [fallback, setFallback] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext("webgl", { antialias: false, premultipliedAlpha: false })
    if (!gl) {
      setFallback(true)
      return
    }

    const vs = compile(gl, gl.VERTEX_SHADER, VERT)
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG)
    const program = gl.createProgram()
    if (!vs || !fs || !program) {
      setFallback(true)
      return
    }
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      setFallback(true)
      return
    }
    gl.useProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const aPos = gl.getAttribLocation(program, "aPos")
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(program, "uRes")
    const uTime = gl.getUniformLocation(program, "uTime")
    const uMouse = gl.getUniformLocation(program, "uMouse")

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 }
    let frame = 0
    let running = true
    const start = performance.now()

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      const rect = canvas.getBoundingClientRect()
      canvas.width = Math.max(1, Math.floor(rect.width * dpr))
      canvas.height = Math.max(1, Math.floor(rect.height * dpr))
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    const render = (now: number) => {
      mouse.x += (mouse.tx - mouse.x) * 0.04
      mouse.y += (mouse.ty - mouse.y) * 0.04
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform1f(uTime, reduceMotion ? 6 : (now - start) / 1000 + 6)
      gl.uniform2f(uMouse, mouse.x, mouse.y)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

    const loop = (now: number) => {
      if (!running) return
      render(now)
      frame = requestAnimationFrame(loop)
    }

    const onMove = (event: PointerEvent) => {
      mouse.tx = event.clientX / window.innerWidth - 0.5
      mouse.ty = event.clientY / window.innerHeight - 0.5
    }

    resize()
    const onResize = () => {
      resize()
      render(performance.now())
    }
    window.addEventListener("resize", onResize)

    if (reduceMotion) {
      render(performance.now())
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
    frame = requestAnimationFrame(loop)

    return () => {
      running = false
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener("resize", onResize)
      window.removeEventListener("pointermove", onMove)
    }
  }, [])

  if (fallback) return <WaveRibbons className={className} />
  return <canvas ref={canvasRef} aria-hidden="true" className={className} />
}
