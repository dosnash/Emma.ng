"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion"
import { useRef } from "react"
import ProjectImage from "@/components/ProjectImage"
import type { Project } from "@/lib/projects"

const themes = [
  { card: "bg-navy text-white", meta: "text-sky", chip: "border-white/20 text-white/80", frame: "bg-white/10" },
  { card: "bg-mist text-ink", meta: "text-brand", chip: "border-ink/15 text-ink/70", frame: "bg-white" },
  { card: "bg-brand text-white", meta: "text-sky", chip: "border-white/25 text-white/85", frame: "bg-white/15" },
  { card: "bg-white text-ink", meta: "text-brand", chip: "border-ink/15 text-ink/70", frame: "bg-mist" }
]

/** Full-width project cards that pin and stack as you scroll, the ones underneath easing back. */
export default function WorkStack({ projects }: { projects: Project[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })

  return (
    <div ref={ref} className="relative">
      {projects.map((project, index) => (
        <StackCard
          key={project.slug}
          project={project}
          index={index}
          total={projects.length}
          progress={scrollYProgress}
        />
      ))}
    </div>
  )
}

function StackCard({
  project,
  index,
  total,
  progress
}: {
  project: Project
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const reduceMotion = useReducedMotion()
  const theme = themes[index % themes.length]
  const targetScale = 1 - (total - index - 1) * 0.04
  const scale = useTransform(progress, [index / total, 1], [1, targetScale])

  return (
    <div className="sticky top-0 flex min-h-[100svh] items-center py-6 md:py-10">
      <motion.article
        style={reduceMotion ? { top: 0 } : { scale, top: `${index * 22}px` }}
        className={`group relative w-full origin-top overflow-hidden rounded-[6px] shadow-[0_-20px_60px_-30px_rgba(7,11,26,0.45)] ${theme.card}`}
      >
        <Link
          href={`/projects/${project.slug}`}
          className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:p-14"
        >
          <div className="flex flex-col justify-between gap-10">
            <div>
              <div className={`flex items-center justify-between text-[12px] ${theme.meta}`}>
                <span className="eyebrow">{project.industry}</span>
                <span className="font-serif text-[22px] italic">
                  {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
                </span>
              </div>
              <h3 className="display mt-6 text-[clamp(38px,5vw,76px)]">{project.name}</h3>
              <p className="mt-5 max-w-md text-[15px] leading-[1.7] opacity-80">{project.description}</p>
            </div>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <ul className="flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <li key={service} className={`rounded-full border px-3 py-1 text-[12px] ${theme.chip}`}>
                    {service}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-2 text-[14px] font-medium">
                <span className="link-line">View case study</span>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-current transition-transform duration-500 ease-out-expo group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </span>
            </div>
          </div>

          <div className={`rounded-[4px] p-2 sm:p-3 ${theme.frame}`}>
            <div className="mb-2 flex gap-1.5 px-1" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-current opacity-25" />
              <span className="h-2.5 w-2.5 rounded-full bg-current opacity-25" />
              <span className="h-2.5 w-2.5 rounded-full bg-current opacity-25" />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[3px] bg-white">
              <ProjectImage
                project={project}
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover object-top transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.04]"
              />
            </div>
          </div>
        </Link>
      </motion.article>
    </div>
  )
}
