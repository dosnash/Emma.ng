import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { ContactButton } from "@/components/ContactModal"
import MotionReveal from "@/components/MotionReveal"
import SplitReveal, { Eyebrow } from "@/components/motion/SplitReveal"
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
  const index = projects.findIndex((item) => item.slug === params.slug)
  if (index === -1) {
    notFound()
  }
  const project = projects[index]
  const next = projects[(index + 1) % projects.length]
  const host = project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")

  return (
    <>
      <section className="gutter relative overflow-hidden bg-paper pb-16 pt-32 md:pt-36">
        <div className="dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,#000_10%,transparent_60%)]" aria-hidden="true" />
        <div className="relative">
          <div className="flex items-center justify-between gap-4 border-b border-ink/10 pb-6 text-[13px]">
            <Link href="/projects" className="group inline-flex items-center gap-2 text-ink">
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true" />
              <span className="link-line">All projects</span>
            </Link>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-sweep inline-flex items-center gap-2 bg-ink px-4 py-2.5 text-white [--sweep:var(--brand)]"
            >
              Visit live site
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-14">
            <span className="rounded-full border border-brand/30 px-3 py-1 text-[12px] text-brand">{project.industry}</span>
            <SplitReveal
              as="h1"
              onMount
              className="display mt-6 text-[clamp(56px,9vw,150px)]"
              segments={[project.name]}
            />
            <p className="mt-6 max-w-2xl text-[clamp(18px,1.6vw,22px)] leading-[1.55] text-muted">
              {project.description}
            </p>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-y-8 border-t border-ink/10 pt-8 text-[14px] md:grid-cols-4">
            <div>
              <dt className="eyebrow text-muted">Industry</dt>
              <dd className="mt-2 text-ink">{project.industry}</dd>
            </div>
            <div>
              <dt className="eyebrow text-muted">Role</dt>
              <dd className="mt-2 text-ink">Design &amp; development</dd>
            </div>
            <div>
              <dt className="eyebrow text-muted">Stack</dt>
              <dd className="mt-2 text-ink">{project.tags.join(", ")}</dd>
            </div>
            <div>
              <dt className="eyebrow text-muted">Live at</dt>
              <dd className="mt-2">
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="link-line text-brand">
                  {host}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="gutter bg-paper pb-24">
        <MotionReveal direction="scale" className="rounded-[6px] bg-navy p-3 sm:p-6 md:p-10">
          <div className="mb-3 flex items-center gap-1.5 px-1" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="ml-3 rounded-full bg-white/10 px-3 py-0.5 text-[11px] text-sky">{host}</span>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[4px] bg-white">
            <ProjectImage
              project={project}
              alt={`${project.name} homepage screenshot`}
              sizes="(min-width: 1024px) 90vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        </MotionReveal>
      </section>

      <section className="gutter bg-paper pb-28">
        <div className="grid gap-12 border-t border-ink/10 pt-16 md:grid-cols-[240px_1fr]">
          <Eyebrow className="text-brand">The brief</Eyebrow>
          <MotionReveal>
            <p className="text-[clamp(22px,2.2vw,32px)] leading-[1.45] tracking-[-0.02em] text-ink">
              {project.overview}
            </p>
          </MotionReveal>
        </div>

        <div className="mt-24 grid gap-12 border-t border-ink/10 pt-16 md:grid-cols-[240px_1fr]">
          <Eyebrow className="text-brand">What I delivered</Eyebrow>
          <ol className="grid gap-px overflow-hidden rounded-[6px] bg-ink/10 sm:grid-cols-3">
            {project.services.map((service, serviceIndex) => (
              <li key={service} className="bg-paper p-6 md:p-8">
                <MotionReveal delay={serviceIndex * 0.08}>
                  <span className="font-serif text-[36px] italic leading-none text-brand">
                    {String(serviceIndex + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-8 text-[20px] font-medium tracking-tight text-ink">{service}</p>
                </MotionReveal>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-24 flex flex-col items-start gap-6 rounded-[6px] bg-mist p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <p className="text-[clamp(24px,2.6vw,36px)] tracking-[-0.03em] text-ink">
            Want something like this <span className="font-serif italic text-brand">for your brand?</span>
          </p>
          <ContactButton className="btn-sweep inline-flex min-h-[54px] shrink-0 items-center gap-2.5 bg-brand px-7 text-[14px] font-medium text-white [--sweep:var(--ink)]">
            Start your project
          </ContactButton>
        </div>
      </section>

      <section className="bg-navy text-white">
        <Link href={`/projects/${next.slug}`} className="gutter group grid items-center gap-10 py-20 md:grid-cols-[1fr_1fr] md:py-28">
          <div>
            <p className="eyebrow text-sky">Next project</p>
            <p className="display mt-5 text-[clamp(48px,7vw,110px)] transition-transform duration-700 ease-out-expo group-hover:translate-x-3">
              {next.name}
              <ArrowUpRight className="ml-3 inline h-[0.5em] w-[0.5em] text-sky transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
            </p>
            <p className="mt-4 text-[14px] text-sky/80">{next.industry}</p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[4px] bg-white/10">
            <ProjectImage
              project={next}
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover object-top opacity-80 transition duration-[1.1s] ease-out-expo group-hover:scale-[1.04] group-hover:opacity-100"
            />
          </div>
        </Link>
      </section>
    </>
  )
}
