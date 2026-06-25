import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ExternalLink, Layers, Sparkles } from "lucide-react"
import { ContactButton } from "@/components/ContactModal"
import ProjectImage from "@/components/ProjectImage"
import { projects } from "@/lib/projects"

type ProjectDetailPageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const project = projects.find((item) => item.slug === params.slug)
  if (!project) {
    return { title: "Project Not Found" }
  }
  return {
    title: `${project.name} | Case Study`,
    description: project.description
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }))
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((item) => item.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[#52525b]">
            <Link href="/" className="transition hover:text-[#2a52c4]">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/projects" className="transition hover:text-[#2a52c4]">
              Projects
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#0a0a0a]">{project.name}</span>
          </nav>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#eff3fd] px-3 py-1 text-xs font-bold text-[#2a52c4]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2a52c4]">
                {project.industry}
              </p>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0a0a0a] sm:text-4xl">
                {project.name}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-[#52525b]">
                {project.description}
              </p>
            </div>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2a52c4] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1c3fa6]"
            >
              Visit live project
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10 overflow-hidden rounded-xl border border-[#2a52c4]/15 bg-[#eff3fd] p-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-white">
              <ProjectImage
                project={project}
                alt={`${project.name} homepage screenshot`}
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fe] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.48fr_1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2a52c4]">
              Project overview
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0a0a0a]">
              What the website needed to do
            </h2>
          </div>
          <div>
            <p className="text-lg leading-9 text-[#52525b]">{project.overview}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {project.services.map((service) => (
                <div
                  key={service}
                  className="rounded-lg border border-[#2a52c4]/15 bg-white p-4"
                >
                  <Sparkles className="h-4 w-4 text-[#2a52c4]" aria-hidden="true" />
                  <p className="mt-3 text-sm font-black text-[#0a0a0a]">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2a52c4]">
                Homepage preview
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0a0a0a]">
                Nav, hero, and first impression
              </h2>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#2a52c4]/20 px-4 py-2 text-sm font-bold text-[#52525b]">
              <Layers className="h-4 w-4 text-[#2a52c4]" aria-hidden="true" />
              Live capture
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-[#2a52c4]/15 bg-[#eff3fd] p-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-white">
              <ProjectImage
                project={project}
                alt={`${project.name} homepage nav and hero capture`}
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[24px] border border-[#2a52c4]/20 bg-[#eff3fd] px-6 py-12 text-center sm:px-10">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#0a0a0a] sm:text-3xl">
            Want to build something similar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#52525b]">
            Share your idea and get a clear path from concept to launch.
          </p>
          <ContactButton className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2a52c4] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1c3fa6]">
            Start your project
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ContactButton>
        </div>
      </section>
    </>
  )
}
