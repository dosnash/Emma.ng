import type { ReactNode } from "react"
import SplitReveal, { Eyebrow } from "@/components/motion/SplitReveal"

type PageIntroProps = {
  eyebrow: string
  title: string
  accent?: string
  children?: ReactNode
}

/** Big editorial page heading used on inner pages, with a soft dot-grid backdrop. */
export default function PageIntro({ eyebrow, title, accent, children }: PageIntroProps) {
  return (
    <section className="gutter relative overflow-hidden bg-paper pb-16 pt-40 md:pb-24 md:pt-48">
      <div
        className="dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,#000_10%,transparent_65%)]"
        aria-hidden="true"
      />
      <div className="orb orb-a right-[-10%] top-[-30%] h-[420px] w-[420px] bg-brand/15" aria-hidden="true" />
      <div className="relative">
        <Eyebrow className="text-brand">{eyebrow}</Eyebrow>
        <SplitReveal
          as="h1"
          onMount
          delay={0.1}
          className="display mt-6 max-w-5xl text-[clamp(48px,7vw,112px)]"
          segments={accent ? [title, { text: accent, className: "font-serif italic text-brand" }] : [title]}
        />
        {children ? <div className="mt-8 max-w-xl text-[16px] leading-[1.7] text-muted">{children}</div> : null}
      </div>
    </section>
  )
}
