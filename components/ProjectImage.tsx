"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import type { Project } from "@/lib/projects"

type ProjectImageProps = {
  project: Project
  className?: string
  sizes: string
  alt?: string
}

export default function ProjectImage({
  project,
  className = "object-cover object-top",
  sizes,
  alt
}: ProjectImageProps) {
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
  }, [project.screenshot])

  if (failed) {
    return (
      <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-[#fff7f5] to-[#ffe1d9] p-6 text-center">
        <div>
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#ff5535] text-base font-extrabold text-white">
            {project.name
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 2)}
          </span>
          <p className="mt-3 text-sm font-bold text-[#0a0a0a]">{project.name}</p>
          <p className="mt-1 text-xs text-[#52525b]">Live preview temporarily unavailable</p>
        </div>
      </div>
    )
  }

  return (
    <Image
      src={project.screenshot}
      alt={alt ?? `${project.name} homepage preview`}
      fill
      unoptimized
      sizes={sizes}
      className={className}
      onError={() => setFailed(true)}
    />
  )
}
