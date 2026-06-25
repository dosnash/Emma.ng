import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen, Clock } from "lucide-react"
import MotionReveal from "@/components/MotionReveal"
import { resources } from "@/lib/resources"

export const metadata: Metadata = {
  title: "Free Resources & Guides",
  description:
    "Free practical guides by Emmanuel Ovansa for founders and businesses — covering SaaS landing pages, Next.js performance, and high-converting web design."
}

export default function ResourcesPage() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#2a52c4]">Resources</p>
        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[#0a0a0a] sm:text-4xl">
          Practical guides for better launches.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-[#52525b]">
          Two focused resources for founders and businesses that want cleaner websites, stronger
          messaging, and more confident launch decisions.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {resources.map((resource, index) => (
            <MotionReveal key={resource.slug} delay={index * 0.08}>
              <article className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-[#eff3fd] px-3 py-1 text-xs font-bold text-[#2a52c4]">
                  {resource.label}
                </span>
                <span className="inline-flex items-center gap-2 text-xs font-bold text-[#52525b]">
                  <Clock className="h-3.5 w-3.5 text-[#2a52c4]" aria-hidden="true" />
                  {resource.readTime}
                </span>
              </div>

              <BookOpen className="mt-8 h-8 w-8 text-[#2a52c4]" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[#0a0a0a]">
                {resource.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-[#52525b]">{resource.description}</p>

              <div className="mt-6 space-y-3">
                {resource.highlights.map((highlight) => (
                  <p key={highlight} className="rounded-xl bg-[#f7f9fe] border border-[#2a52c4]/5 px-4 py-3 text-sm font-bold text-[#0a0a0a]">
                    {highlight}
                  </p>
                ))}
              </div>

              <Link
                href={`/resources/${resource.slug}`}
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#2a52c4] transition hover:text-[#1c3fa6]"
              >
                Open resource
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
