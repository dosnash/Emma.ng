import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen, Clock } from "lucide-react"
import MotionReveal from "@/components/MotionReveal"
import { resources } from "@/lib/resources"

export const metadata: Metadata = {
  title: "Resources",
  description: "Free tools and guides to help you launch websites faster."
}

export default function ResourcesPage() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#ff5535]">Resources</p>
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
              <article className="rounded-lg border border-[#ffd6ce] bg-white p-6 transition-colors hover:border-[#ff5535]/45">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-[#fff1ee] px-3 py-1 text-xs font-bold text-[#ff5535]">
                  {resource.label}
                </span>
                <span className="inline-flex items-center gap-2 text-xs font-bold text-[#52525b]">
                  <Clock className="h-3.5 w-3.5 text-[#ff5535]" aria-hidden="true" />
                  {resource.readTime}
                </span>
              </div>

              <BookOpen className="mt-8 h-8 w-8 text-[#ff5535]" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[#0a0a0a]">
                {resource.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-[#52525b]">{resource.description}</p>

              <div className="mt-6 space-y-3">
                {resource.highlights.map((highlight) => (
                  <p key={highlight} className="rounded-lg bg-[#fff7f5] px-4 py-3 text-sm font-bold text-[#0a0a0a]">
                    {highlight}
                  </p>
                ))}
              </div>

              <Link
                href={`/resources/${resource.slug}`}
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#ff5535] transition hover:text-[#e8482c]"
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
