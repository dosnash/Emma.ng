import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Check } from "lucide-react"
import { ContactButton } from "@/components/ContactModal"
import MotionReveal from "@/components/MotionReveal"
import SplitReveal from "@/components/motion/SplitReveal"
import { resources } from "@/lib/resources"

type ResourcePageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const resource = resources.find((item) => item.slug === params.slug)
  if (!resource) {
    return { title: "Resource Not Found" }
  }
  return {
    title: `${resource.title} | Free Guide`,
    description: resource.description
  }
}

export function generateStaticParams() {
  return resources.map((resource) => ({
    slug: resource.slug
  }))
}

export default function ResourcePage({ params }: ResourcePageProps) {
  const resource = resources.find((item) => item.slug === params.slug)

  if (!resource) {
    notFound()
  }

  return (
    <>
      <section className="gutter relative overflow-hidden bg-paper pb-16 pt-32 md:pt-36">
        <div className="dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,#000_10%,transparent_60%)]" aria-hidden="true" />
        <div className="relative">
          <div className="border-b border-ink/10 pb-6 text-[13px]">
            <Link href="/resources" className="group inline-flex items-center gap-2 text-ink">
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true" />
              <span className="link-line">All guides</span>
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-3 text-[12px]">
            <span className="rounded-full border border-brand/30 px-3 py-1 text-brand">{resource.label}</span>
            <span className="text-muted">{resource.readTime}</span>
          </div>
          <SplitReveal
            as="h1"
            onMount
            className="display mt-6 max-w-5xl text-[clamp(44px,6.5vw,104px)]"
            segments={[resource.title]}
          />
          <p className="mt-6 max-w-2xl text-[clamp(18px,1.6vw,22px)] leading-[1.55] text-muted">
            {resource.description}
          </p>
          <p className="mt-8 text-[14px] text-ink">
            <span className="eyebrow mr-3 text-muted">For</span>
            {resource.audience}
          </p>
        </div>
      </section>

      <section className="gutter bg-paper pb-28">
        <ul className="grid gap-px overflow-hidden rounded-[6px] bg-ink/10 md:grid-cols-3">
          {resource.highlights.map((highlight, index) => (
            <li key={highlight} className="bg-navy p-7 text-white">
              <MotionReveal delay={index * 0.08}>
                <Check className="h-5 w-5 text-amber" aria-hidden="true" />
                <p className="mt-6 text-[18px] leading-snug tracking-tight">{highlight}</p>
              </MotionReveal>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-24 max-w-3xl">
          {resource.sections.map((section, index) => (
            <MotionReveal key={section.title}>
              <article className="border-t border-ink/10 py-14">
                <span className="font-serif text-[44px] italic leading-none text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-5 text-[clamp(28px,3vw,42px)] font-normal leading-[1.1] tracking-[-0.04em] text-ink">
                  {section.title}
                </h2>
                <p className="mt-5 text-[17px] leading-[1.75] text-muted">{section.body}</p>
                <ul className="mt-8 space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-4 text-[15px] leading-[1.65] text-ink">
                      <span className="mt-[3px] grid h-5 w-5 flex-none place-items-center rounded-full bg-brand text-white">
                        <Check className="h-3 w-3" aria-hidden="true" />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </MotionReveal>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-6 rounded-[6px] bg-mist p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <p className="text-[clamp(24px,2.6vw,36px)] tracking-[-0.03em] text-ink">
            Want this applied <span className="font-serif italic text-brand">to your website?</span>
          </p>
          <ContactButton className="btn-sweep inline-flex min-h-[54px] shrink-0 items-center gap-2.5 bg-brand px-7 text-[14px] font-medium text-white [--sweep:var(--ink)]">
            Start your project
          </ContactButton>
        </div>
      </section>
    </>
  )
}
