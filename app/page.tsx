import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Hourglass,
  Star,
  TimerReset,
  Zap
} from "lucide-react"
import { ContactButton } from "@/components/ContactModal"
import HeroTextCycler from "@/components/HeroTextCycler"
import MotionReveal from "@/components/MotionReveal"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Web design, WordPress development, and frontend development for small businesses and startups."
}

const companyNames = [
  "Deomasem Movers",
  "Bemort",
  "She's Happy Hair",
  "Zephans & Co",
  "Shaatuu",
  "EEON",
  "Zoe Paris Foundation",
  "Becomex App",
  "Klonex",
  "Push2Tek"
]

const services = [
  {
    badge: "Development",
    title: "Website Design & Development",
    description: "Modern, responsive websites that convert visitors into customers",
    subServices: [
      {
        title: "Landing Pages",
        description: "High-converting single-page sites built to generate leads"
      },
      {
        title: "Business Websites",
        description: "Full multi-page websites for companies and brands"
      }
    ]
  },
  {
    badge: "Design & Development",
    title: "WordPress Development",
    description:
      "Custom WordPress themes, plugins, and complete site builds optimized for speed and SEO",
    subServices: [
      {
        title: "Custom Themes",
        description: "Pixel-perfect WordPress themes built from scratch"
      },
      {
        title: "WooCommerce Stores",
        description: "Full e-commerce stores on WordPress"
      }
    ]
  },
  {
    badge: "Development",
    title: "Frontend Development",
    description: "Pixel-perfect, animated interfaces built with React and Next.js",
    subServices: [
      {
        title: "React Development",
        description: "Component-based UIs and SPAs"
      },
      {
        title: "Next.js Websites",
        description: "Fast, SEO-ready websites with server rendering"
      }
    ]
  },
  {
    badge: "Marketing",
    title: "SEO Services",
    description: "Search engine optimization to boost your online visibility and attract organic traffic",
    subServices: [
      {
        title: "On-Page SEO",
        description: "Meta, structure, and content optimization"
      },
      {
        title: "Technical SEO",
        description: "Speed, crawlability, and schema markup"
      }
    ]
  }
]

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <>
      <section className="border-b-[8px] border-[#ffe1d9] bg-white px-4 pb-32 pt-[136px] sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl items-start gap-12 lg:grid-cols-[0.94fr_0.98fr] lg:gap-[76px]">
          <MotionReveal className="max-w-[470px]">
            <div
              className="grid h-[62px] w-[62px] place-items-center rounded-full bg-[#ff5535] text-xl font-black text-white"
              aria-label="Emma avatar"
            >
              E
            </div>
            <h1 className="mt-6 text-[30px] font-black leading-[1.08] tracking-normal text-[#050505]">
              Hi, I&apos;m Emma.
              <span className="block">Web Designer & Developer</span>
            </h1>
            <p className="mt-6 max-w-[455px] text-[15px] leading-[1.7] text-[#111111]">
              I help small businesses and startups launch fast, modern websites from idea to
              reality in 2 to 4 weeks, so they can focus on their customers.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="flex -space-x-2" aria-label="Trusted markets">
                {["US", "NG", "UK", "EU"].map((market) => (
                  <span
                    key={market}
                    className="grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-[#0f172a] text-[9px] font-black text-white shadow-sm odd:bg-[#009b5a] even:bg-[#1644a8]"
                  >
                    {market}
                  </span>
                ))}
              </div>
              <div>
                <p className="text-[12px] font-medium leading-none text-[#5f6575]">
                  Trusted by businesses worldwide
                </p>
                <div className="mt-1 flex gap-0.5 text-[#ffb703]" aria-label="Five star rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  ))}
                </div>
              </div>
            </div>

            <ContactButton className="mt-6 inline-flex h-9 items-center gap-2 rounded-full bg-[#ff5535] px-5 text-[12px] font-black text-white transition hover:bg-[#e8482c]">
              Let&apos;s talk now
              <Zap className="h-4 w-4" aria-hidden="true" />
            </ContactButton>
          </MotionReveal>

          <MotionReveal delay={0.12} className="rounded-xl border border-[#ffd6ce] bg-white p-5 sm:p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="min-h-[116px] rounded-lg bg-[#fbf5f3] p-5">
                <div className="grid h-7 w-7 place-items-center rounded-md bg-[#ff5535] text-white">
                  <BarChart3 className="h-4 w-4 stroke-[2.4]" aria-hidden="true" />
                </div>
                <p className="mt-3 text-[11px] font-medium text-[#5f6575]">Success rate</p>
                <p className="mt-2 text-[22px] font-black tracking-normal text-[#050505]">98%</p>
              </div>

              <div className="min-h-[116px] rounded-lg bg-[#fbf5f3] p-5">
                <div className="grid h-7 w-7 place-items-center rounded-md bg-[#ff5535] text-white">
                  <BriefcaseBusiness className="h-4 w-4 stroke-[2.4]" aria-hidden="true" />
                </div>
                <p className="mt-3 text-[11px] font-medium text-[#5f6575]">Total Projects</p>
                <p className="mt-2 text-[22px] font-black tracking-normal text-[#050505]">30+</p>
              </div>

              <div className="min-h-[116px] rounded-lg bg-[#fbf5f3] p-5">
                <div className="grid h-7 w-7 place-items-center rounded-md bg-[#ff5535] text-white">
                  <TimerReset className="h-4 w-4 stroke-[2.4]" aria-hidden="true" />
                </div>
                <p className="mt-3 text-[11px] font-medium text-[#5f6575]">Avg. Delivery Time</p>
                <p className="mt-2 text-[22px] font-black tracking-normal text-[#050505]">2-4 weeks</p>
              </div>

              <div className="min-h-[116px] rounded-lg bg-[#ff5535] p-5 text-white">
                <div className="grid h-7 w-7 place-items-center rounded-md bg-white/15">
                  <Hourglass className="h-4 w-4 stroke-[2.4]" aria-hidden="true" />
                </div>
                <p className="mt-3 text-[11px] font-medium text-white/90">Experience</p>
                <p className="mt-2 text-[22px] font-black tracking-normal">3+ yrs</p>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="hidden bg-white px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-green-700">
              Top-rated Web Designer & Developer
            </p>
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-[#0a0a0a]">
              Hi, I&apos;m Emma.
              <span className="mt-2 block">
                <HeroTextCycler />
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#52525b] sm:text-md sm:leading-9">
              I help small businesses and startups launch fast, modern websites from idea to
              reality in 2 to 4 weeks, so they can focus on their customers.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ContactButton className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-700 sm:w-auto">
                Let&apos;s talk now
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ContactButton>
              <div className="flex items-center gap-3 text-sm font-semibold text-[#52525b]">
                <div className="flex -space-x-2 text-2xl" aria-label="Trusted markets">
                  <span role="img" aria-label="United States">
                    🇺🇸
                  </span>
                  <span role="img" aria-label="Nigeria">
                    🇳🇬
                  </span>
                  <span role="img" aria-label="United Kingdom">
                    🇬🇧
                  </span>
                  <span role="img" aria-label="European Union">
                    🇪🇺
                  </span>
                </div>
                <span>Trusted by businesses worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff1ee] px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <MotionReveal className="mx-auto max-w-5xl text-center">
          <h2 className="mx-auto max-w-4xl text-[24px] font-extrabold leading-[1.4] tracking-normal text-[#050505] sm:text-[28px]">
            Delivering quality results for Founders across the globe.
          </h2>
          <ContactButton className="mt-14 inline-flex h-9 items-center gap-2 rounded-full bg-[#ff5535] px-5 text-[12px] font-black text-white transition hover:bg-[#e8482c]">
            Let&apos;s talk now
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ContactButton>
        </MotionReveal>
      </section>

      {/* <section className="overflow-hidden bg-white px-4 py-18 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden border-y border-black/10 py-5">
            <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
              {[...companyNames, ...companyNames].map((name, index) => (
                <span
                  key={`${name}-${index}`}
                  className="text-lg font-extrabold tracking-tight text-[#0a0a0a] sm:text-xl"
                >
                  Some companies I&apos;ve worked with
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-lg border border-[#ffd6ce] bg-[#fff7f5] py-5">
            <div className="marquee-track flex w-max gap-4 whitespace-nowrap">
              {[...companyNames, ...companyNames].map((name, index) => (
                <span
                  key={`${name}-logo-${index}`}
                  className="rounded-full border border-[#ffd6ce] bg-white px-5 py-3 text-sm font-bold text-[#52525b]"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-[#ffd6ce] bg-[#fff1ee] px-6 py-5 text-center">
            <p className="text-lg font-bold italic leading-8 text-[#a52f1d]">
              Not to brag, but one of the websites I launched in 2024 brought in 4 new
              contracts worth $85K in the first 6 weeks.
            </p>
          </div>
        </div>
      </section> */}

      <section className="bg-white px-4 py-18 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <MotionReveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight text-[#0a0a0a] sm:text-3xl">
              Some projects I&apos;ve done
            </h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#ff5535] transition hover:text-[#e8482c]"
            >
              View All Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </MotionReveal>

  <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
        </div>
      </section>

      <section id="services" className="bg-[#0f172a] px-4 py-18 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <MotionReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Services I Offer
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              While I offer a wide range of services, here are the top four to keep things concise
              and impactful.
            </p>
          </MotionReveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 sm:p-6"
              >
                <div className="grid gap-6 lg:grid-cols-[0.75fr_1.1fr] lg:items-start">
                  <div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-300">
                      {service.badge}
                    </span>
                    <h3 className="mt-4 text-2xl font-black tracking-tight text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-300">{service.description}</p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {service.subServices.map((subService) => (
                      <div
                        key={subService.title}
                        className="rounded-lg border border-white/10 bg-black/10 p-4"
                      >
                        <p className="text-sm font-black text-white">{subService.title}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {subService.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <ContactButton className="mx-auto mt-14 flex w-fit items-center gap-2 rounded-full bg-[#ff5535] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#e8482c]">
            Let&apos;s talk now
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ContactButton>
        </div>
      </section>

      <section className="bg-white px-4 pb-20 sm:px-6 lg:px-8">
        <MotionReveal className="mx-auto max-w-5xl rounded-lg border border-[#ffd6ce] bg-[#fff1ee] px-6 py-12 text-center sm:px-10">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#0a0a0a] sm:text-3xl">
            Ready to start your project?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#52525b]">
            Let&apos;s work together to bring your ideas to life. Get in touch and let&apos;s discuss
            how I can help you grow.
          </p>
          <ContactButton className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ff5535] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#e8482c]">
            Get Started
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ContactButton>
        </MotionReveal>
      </section>
    </>
  )
}
