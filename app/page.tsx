import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import Hero from "@/components/home/Hero"
import Services from "@/components/home/Services"
import WorkStack from "@/components/home/WorkStack"
import CountUp from "@/components/motion/CountUp"
import ScrollWords from "@/components/motion/ScrollWords"
import SplitReveal, { Eyebrow } from "@/components/motion/SplitReveal"
import MotionReveal from "@/components/MotionReveal"
import { projects } from "@/lib/projects"
// import { resources } from "@/lib/resources"
import { clients, stats } from "@/lib/site"

export const metadata: Metadata = {
  title: {
    absolute: "Emmanuel Ovansa | Web Designer & Frontend Developer"
  },
  description:
    "Web design, WordPress and frontend development for startups and small businesses. Fast, modern websites from idea to live in 2 to 4 weeks."
}

const featuredSlugs = ["chelsea-pharmacy", "doubleai", "tabor-engineering", "shes-happy-hair"]

export default function HomePage() {
  const featured = featuredSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => !!project)

  return (
    <>
      <Hero />

      {/* Client marquee */}
      <section className="border-b border-ink/10 bg-paper py-10" aria-label="Clients">
        <p className="gutter eyebrow text-muted">Trusted by founders and teams at</p>
        <div className="marquee mt-6 overflow-hidden">
          <div className="marquee-track flex w-max items-center">
            {[...clients, ...clients].map((client, index) => (
              <span
                key={`${client}-${index}`}
                className="flex items-center whitespace-nowrap text-[clamp(26px,3vw,40px)] tracking-tight text-ink/80"
                aria-hidden={index >= clients.length ? true : undefined}
              >
                <span className={index % 2 ? "font-serif italic" : "font-medium"}>{client}</span>
                <span className="mx-8 text-brand md:mx-12" aria-hidden="true">
                  ✳
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Statement + stats */}
      <section className="gutter bg-paper py-28 md:py-40">
        <div className="grid gap-10 md:grid-cols-[200px_1fr]">
          <Eyebrow className="text-brand">About</Eyebrow>
          <ScrollWords
            className="display text-[clamp(30px,3.9vw,60px)] !leading-[1.15] !tracking-[-0.04em]"
            highlight={["quality", "founders", "customers"]}
            text="I deliver quality websites for founders across the globe. Clean design, fast code and a clear path from first click to paying customers, without the agency overhead."
          />
        </div>

        <dl className="mt-24 grid grid-cols-2 border-t border-ink/10 md:grid-cols-4">
          {stats.map((stat, index) => (
            <MotionReveal
              key={stat.label}
              delay={index * 0.08}
              className={`flex flex-col-reverse border-b border-ink/10 py-8 pr-4 md:border-b-0 md:py-10 ${
                index > 0 ? "md:border-l md:pl-8" : ""
              } ${index % 2 === 1 ? "border-l pl-6 md:pl-8" : ""}`}
            >
              <dt className="mt-3 text-[13px] leading-snug text-muted">{stat.label}</dt>
              <dd className="display text-[clamp(48px,6vw,88px)] text-ink">
                <CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
              </dd>
            </MotionReveal>
          ))}
        </dl>
      </section>

      {/* Selected work */}
      <section id="work" className="gutter bg-paper pb-16">
        <div className="flex flex-col gap-6 border-t border-ink/10 pt-16 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow className="text-brand">Selected work</Eyebrow>
            <SplitReveal
              className="display mt-6 text-[clamp(44px,6.5vw,104px)]"
              segments={["Projects I've", { text: "shipped.", className: "font-serif italic text-brand" }]}
            />
          </div>
          <Link href="/projects" className="group inline-flex items-center gap-2 text-[14px] font-medium text-ink">
            <span className="link-line">All projects ({projects.length})</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-6">
          <WorkStack projects={featured} />
        </div>
      </section>

      <Services />

      {/* Guides index (hidden for now — uncomment to restore)
      <section id="guides" className="gutter bg-paper py-28 md:py-40">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow className="text-brand">Free guides</Eyebrow>
            <SplitReveal
              className="display mt-6 text-[clamp(40px,5vw,76px)]"
              segments={["Notes for", { text: "better launches.", className: "font-serif italic text-brand" }]}
            />
            <p className="mt-6 max-w-sm text-[15px] leading-[1.7] text-muted">
              Practical playbooks I wrote for founders who want cleaner websites and stronger
              messaging.
            </p>
          </div>

          <ul className="border-t border-ink/15">
            {resources.map((resource, index) => (
              <li key={resource.slug} className="border-b border-ink/15">
                <MotionReveal delay={index * 0.08}>
                  <Link
                    href={`/resources/${resource.slug}`}
                    className="group relative flex items-center gap-6 overflow-hidden py-8 md:py-10"
                  >
                    <span
                      className="absolute inset-0 origin-bottom scale-y-0 bg-mist transition-transform duration-500 ease-out-expo group-hover:scale-y-100"
                      aria-hidden="true"
                    />
                    <span className="relative font-serif text-[28px] italic text-brand md:px-4">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="relative flex-1">
                      <span className="flex flex-wrap items-center gap-3 text-[12px] text-muted">
                        <span className="rounded-full border border-brand/30 px-2.5 py-0.5 text-brand">{resource.label}</span>
                        {resource.readTime}
                      </span>
                      <span className="mt-3 block text-[clamp(22px,2.4vw,32px)] font-medium leading-tight tracking-tight text-ink">
                        {resource.title}
                      </span>
                    </span>
                    <span className="relative mr-2 grid h-12 w-12 flex-none place-items-center rounded-full border border-ink/15 text-ink transition-all duration-500 ease-out-expo group-hover:rotate-45 group-hover:border-brand group-hover:bg-brand group-hover:text-white md:mr-4">
                      <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </Link>
                </MotionReveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
      */}
    </>
  )
}
