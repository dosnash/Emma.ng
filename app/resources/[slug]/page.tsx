import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Target } from "lucide-react"
import { ContactButton } from "@/components/ContactModal"
import { resources } from "@/lib/resources"

type ResourcePageProps = {
  params: {
    slug: string
  }
}

export const metadata: Metadata = {
  title: "Resource",
  description: "A practical website resource for better launches and conversions."
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
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#ff5535] transition hover:text-[#e8482c]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to resources
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.42fr] lg:items-end">
            <div>
              <span className="rounded-full bg-[#fff1ee] px-3 py-1 text-xs font-bold text-[#ff5535]">
                {resource.label}
              </span>
              <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[#0a0a0a] sm:text-4xl">
                {resource.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-[#52525b]">
                {resource.description}
              </p>
            </div>

            <div className="rounded-lg border border-[#ffd6ce] bg-[#fff7f5] p-5">
              <p className="inline-flex items-center gap-2 text-sm font-bold text-[#0a0a0a]">
                <Clock className="h-4 w-4 text-[#ff5535]" aria-hidden="true" />
                {resource.readTime}
              </p>
              <p className="mt-4 inline-flex items-start gap-2 text-sm font-semibold leading-6 text-[#52525b]">
                <Target className="mt-1 h-4 w-4 flex-none text-[#ff5535]" aria-hidden="true" />
                {resource.audience}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff7f5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {resource.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-lg border border-[#ffd6ce] bg-white p-5"
              >
                <CheckCircle2 className="h-5 w-5 text-[#ff5535]" aria-hidden="true" />
                <p className="mt-4 text-base font-black leading-7 text-[#0a0a0a]">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-6">
            {resource.sections.map((section, index) => (
              <article
                key={section.title}
                className="rounded-lg border border-[#ffd6ce] bg-white p-6 sm:p-8"
              >
                <p className="text-sm font-black text-[#ff5535]">0{index + 1}</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0a0a0a]">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-[#52525b]">{section.body}</p>
                <div className="mt-6 grid gap-3">
                  {section.bullets.map((bullet) => (
                    <p
                      key={bullet}
                      className="flex gap-3 rounded-lg bg-[#fff7f5] px-4 py-3 text-sm font-semibold leading-6 text-[#0a0a0a]"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 flex-none text-[#ff5535]"
                        aria-hidden="true"
                      />
                      {bullet}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-lg border border-[#ffd6ce] bg-[#fff1ee] px-6 py-12 text-center sm:px-10">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#0a0a0a] sm:text-3xl">
            Want me to apply this to your website?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#52525b]">
            I can help you turn the checklist into a polished launch plan for your brand.
          </p>
          <ContactButton className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ff5535] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#e8482c]">
            Start your project
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ContactButton>
        </div>
      </section>
    </>
  )
}
