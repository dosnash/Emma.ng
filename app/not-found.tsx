import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Eyebrow } from "@/components/motion/SplitReveal"

export const metadata = {
  title: "Page not found"
}

export default function NotFound() {
  return (
    <section className="gutter relative flex min-h-[100svh] items-center overflow-hidden bg-paper pb-32 pt-36">
      <div
        className="dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,#000_15%,transparent_70%)]"
        aria-hidden="true"
      />
      <div className="orb orb-a right-[-10%] top-[-20%] h-[520px] w-[520px] bg-brand/20" aria-hidden="true" />
      <div className="orb orb-b bottom-[-30%] left-[-10%] h-[460px] w-[460px] bg-bright/15" aria-hidden="true" />

      <div className="relative w-full">
        <Eyebrow className="hero-fade text-brand">Error 404</Eyebrow>

        <h1 className="display mt-4 flex select-none text-[clamp(140px,27vw,400px)] !leading-[0.85] text-ink" aria-label="404">
          <span className="hero-line inline-block">
            <span style={{ ["--i" as string]: -11 }}>4</span>
          </span>
          <span className="hero-line inline-block">
            <span style={{ ["--i" as string]: -10 }} className="pl-[0.02em] pr-[0.1em] font-serif italic text-brand">
              0
            </span>
          </span>
          <span className="hero-line inline-block">
            <span style={{ ["--i" as string]: -9 }}>4</span>
          </span>
        </h1>

        <div className="mt-10 grid gap-8 border-t border-ink/10 pt-10 md:grid-cols-[1fr_auto] md:items-end">
          <div className="hero-fade" style={{ ["--i" as string]: -12 }}>
            <p className="text-[clamp(28px,3.2vw,48px)] font-normal leading-[1.1] tracking-[-0.04em] text-ink">
              This page drifted <span className="font-serif italic text-brand">off the map.</span>
            </p>
            <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-muted">
              The link may be broken or the page may have moved. Let&apos;s get you back to
              something worth seeing.
            </p>
          </div>

          <div className="hero-fade flex flex-wrap items-center gap-5" style={{ ["--i" as string]: -11 }}>
            <Link
              href="/"
              className="btn-sweep inline-flex min-h-[54px] items-center gap-2.5 bg-ink px-7 text-[14px] font-medium text-white [--sweep:var(--brand)]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to home
            </Link>
            <Link href="/projects" className="group inline-flex items-center gap-2 text-[14px] text-ink">
              <span className="link-line">See my work</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
