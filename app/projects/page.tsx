import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { ContactButton } from "@/components/ContactModal"
import MotionReveal from "@/components/MotionReveal"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore shipped websites and web apps built for businesses and startups."
}

export default function ProjectsPage() {
  return (
    <>
      <section className="overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <MotionReveal className="relative max-w-5xl overflow-hidden pb-8">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#ff5535]">
              Selected work
            </p>
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[#0a0a0a] sm:text-4xl">
              Projects & case studies
            </h1>
            <div className="heading-ghost pointer-events-none absolute bottom-0 left-0 flex w-max gap-8 text-2xl font-extrabold tracking-tight text-black/[0.04] sm:text-4xl">
              <span>Projects & case studies</span>
              <span>Projects & case studies</span>
              <span>Projects & case studies</span>
            </div>
          </MotionReveal>

          <p className="mt-2 max-w-3xl text-base leading-7 text-[#52525b]">
            Explore selected websites, e-commerce builds, SaaS pages, and service platforms
            shipped for real brands.
          </p>

          {/* <div className="mt-8 rounded-lg border border-[#ffd6ce] bg-[#fff1ee] px-6 py-5 text-center">
            <p className="text-lg font-bold italic leading-8 text-[#a52f1d]">
              A portfolio of conversion-focused websites across WordPress, WooCommerce, React,
              Next.js, SEO, and business service platforms.
            </p>
          </div> */}

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-lg border border-[#ffd6ce] bg-[#fff1ee] px-6 py-12 text-center sm:px-10">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#0a0a0a] sm:text-3xl">
            Ready to start your project?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#52525b]">
            Let&apos;s build something polished, fast, and easy for your customers to use.
          </p>
          <ContactButton className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ff5535] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#e8482c]">
            Get Started
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ContactButton>
        </div>
      </section>
    </>
  )
}
