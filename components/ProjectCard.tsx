"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import ProjectImage from "@/components/ProjectImage"
import type { Project } from "@/lib/projects"

type ProjectCardProps = {
  project: Project
  index?: number
}

/** Collection-style card: large cover, then a title row with a quiet link. */
export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1, delay: (index % 2) * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="relative aspect-[16/11] overflow-hidden rounded-[6px] bg-mist">
          <div className="absolute inset-[6%] overflow-hidden rounded-[4px] shadow-[0_30px_60px_-30px_rgba(7,11,26,0.5)] transition-transform duration-[1.1s] ease-out-expo group-hover:scale-[1.035]">
            <ProjectImage
              project={project}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-ink backdrop-blur">
            {project.industry}
          </span>
          <span className="absolute bottom-4 right-4 grid h-12 w-12 translate-y-3 place-items-center rounded-full bg-brand text-white opacity-0 transition-all duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
        <div className="mt-5 flex items-baseline justify-between gap-6">
          <h3 className="text-[clamp(26px,2.6vw,40px)] font-normal tracking-[-0.04em] text-ink">
            {project.name}
          </h3>
          <span className="shrink-0 text-[13px] text-muted">{project.tags.join(" · ")}</span>
        </div>
        <p className="mt-2 max-w-xl text-[14px] leading-[1.65] text-muted">{project.description}</p>
      </Link>
    </motion.article>
  )
}
