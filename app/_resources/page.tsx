import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import MotionReveal from "@/components/MotionReveal"
import PageIntro from "@/components/PageIntro"
import { resources } from "@/lib/resources"

export const metadata: Metadata = {
  title: "Free Resources & Guides",
  description:
    "Free practical guides by Emmanuel Ovansa for founders and businesses, covering SaaS landing pages, Next.js performance and high-converting web design."
}

export default function ResourcesPage() {
  return (
    <>
      <PageIntro eyebrow="Free guides" title="Practical notes for" accent="better launches.">
        Focused playbooks for founders and businesses that want cleaner websites, stronger
        messaging and more confident launch decisions.
      </PageIntro>

      <section className="gutter bg-paper pb-32">
        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((resource, index) => (
            <MotionReveal key={resource.slug} delay={index * 0.1}>
              <Link
                href={`/resources/${resource.slug}`}
                className="group relative flex h-full min-h-[460px] flex-col justify-between overflow-hidden rounded-[6px] bg-white p-8 ring-1 ring-ink/10 transition-colors duration-500 hover:bg-navy hover:text-white md:p-10"
              >
                <div className="flex items-center justify-between text-[12px]">
                  <span className="rounded-full border border-brand/30 px-3 py-1 text-brand transition-colors group-hover:border-sky/40 group-hover:text-sky">
                    {resource.label}
                  </span>
                  <span className="text-muted transition-colors group-hover:text-sky/80">{resource.readTime}</span>
                </div>

                <div>
                  <span className="font-serif text-[56px] italic leading-none text-brand transition-colors group-hover:text-sky">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-6 text-[clamp(28px,3vw,44px)] font-normal leading-[1.08] tracking-[-0.04em]">
                    {resource.title}
                  </h2>
                  <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-muted transition-colors group-hover:text-white/70">
                    {resource.description}
                  </p>
                  <ul className="mt-6 space-y-2 border-t border-ink/10 pt-6 text-[14px] transition-colors group-hover:border-white/15">
                    {resource.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-3">
                        <span className="h-1 w-1 rounded-full bg-amber" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium">
                    Read the guide
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </MotionReveal>
          ))}
        </div>
      </section>
    </>
  )
}
