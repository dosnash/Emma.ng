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

const tagStyles = [
  "bg-[#fff1ee] text-[#ff5535]",
  "bg-[#fff1ee] text-[#ff5535]",
  "bg-[#fff1ee] text-[#ff5535]",
  "bg-[#fff1ee] text-[#ff5535]"
]

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      className="group rounded-lg border border-[#ffd6ce] bg-white p-5 transition-colors hover:border-[#ff5535]/45 sm:p-6"
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.24), ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5535]">
            {project.industry}
          </p>
          <h3 className="mt-2 text-xl font-extrabold tracking-tight text-[#0a0a0a]">
            {project.name}
          </h3>
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#ff5535] transition hover:text-[#e8482c]"
        >
          View details
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tag}
            className={`rounded-full px-3 py-1 text-xs font-bold ${tagStyles[tagIndex % tagStyles.length]}`}
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-5 max-w-3xl text-sm leading-6 text-[#52525b]">{project.description}</p>

      <div className="mt-6 w-full overflow-hidden rounded-lg border border-[#ffd6ce] bg-[#ffe1d9] p-3">
        <div className="relative aspect-video w-full overflow-hidden rounded-md bg-white">
          <ProjectImage
            project={project}
            sizes="(min-width: 1024px) 456px, 100vw"
            className={`object-cover object-top transition duration-500 group-hover:scale-[1.03] ${
              index % 2 === 0 ? "" : "brightness-[0.98]"
            }`}
          />
        </div>
      </div>
    </motion.article>
  )
}
