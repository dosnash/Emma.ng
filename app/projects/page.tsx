import type { Metadata } from "next"
import PageIntro from "@/components/PageIntro"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Browse Emmanuel Ovansa's portfolio of conversion-focused websites and web apps: SaaS, e-commerce and service platforms built with Next.js, React and WordPress."
}

export default function ProjectsPage() {
  return (
    <>
      <PageIntro eyebrow={`Selected work · ${projects.length} projects`} title="Websites that" accent="do the work.">
        Websites, e-commerce builds, SaaS pages and service platforms shipped for real brands
        across the UK, Canada, the US and beyond.
      </PageIntro>

      <section className="gutter bg-paper pb-32">
        <div className="grid gap-x-8 gap-y-20 border-t border-ink/10 pt-16 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={project.slug} className={index % 2 === 1 ? "md:mt-28" : ""}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
