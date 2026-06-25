import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  ChevronRight,
  Hourglass,
  Star,
  TimerReset,
  Zap,
  AppWindow,
  Layers,
  Code2,
  TrendingUp,
} from "lucide-react";
import { ContactButton } from "@/components/ContactModal";
import HeroTextCycler from "@/components/HeroTextCycler";
import MotionReveal from "@/components/MotionReveal";
import ProjectCard from "@/components/ProjectCard";
import StaggerReveal, { StaggerItem } from "@/components/StaggerReveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: {
    absolute: "Emmanuel Ovansa | Expert Frontend Engineer",
  },
  description:
    "Web design, WordPress development, and frontend development for small businesses and startups.",
};

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
  "Push2Tek",
];

const services = [
  {
    badge: "Development",
    title: "Website Design & Development",
    description:
      "Modern, responsive websites that convert visitors into customers",
    icon: AppWindow,
    subServices: [
      {
        title: "Landing Pages",
        description:
          "High-converting single-page sites built to generate leads",
      },
      {
        title: "Business Websites",
        description: "Full multi-page websites for companies and brands",
      },
    ],
  },
  {
    badge: "Design & Development",
    title: "WordPress Development",
    description:
      "Custom WordPress themes, plugins, and complete site builds optimized for speed and SEO",
    icon: Layers,
    subServices: [
      {
        title: "Custom Themes",
        description: "Pixel-perfect WordPress themes built from scratch",
      },
      {
        title: "WooCommerce Stores",
        description: "Full e-commerce stores on WordPress",
      },
    ],
  },
  {
    badge: "Development",
    title: "Frontend Development",
    description:
      "Pixel-perfect, animated interfaces built with React and Next.js",
    icon: Code2,
    subServices: [
      {
        title: "React Development",
        description: "Component-based UIs and SPAs",
      },
      {
        title: "Next.js Websites",
        description: "Fast, SEO-ready websites with server rendering",
      },
    ],
  },
  {
    badge: "Marketing",
    title: "SEO Services",
    description:
      "Search engine optimization to boost your online visibility and attract organic traffic",
    icon: TrendingUp,
    subServices: [
      {
        title: "On-Page SEO",
        description: "Meta, structure, and content optimization",
      },
      {
        title: "Technical SEO",
        description: "Speed, crawlability, and schema markup",
      },
    ],
  },
];

export default function HomePage() {
  const featuredProjects = projects.filter((project) =>
    ["shes-happy-hair", "deomasem-movers", "shaatuu", "becomex-app"].includes(
      project.slug,
    ),
  );

  return (
    <>
      <section className="border-b-[8px] border-[#d6e0f5] bg-white px-4 pb-32 pt-[136px] sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.94fr_0.98fr] lg:gap-[76px]">
          <div className="max-w-xl">
            <StaggerReveal staggerDelay={0.09}>
              <StaggerItem>
                <div
                  className="grid h-[42px] w-[42px] place-items-center rounded-full bg-[#2a52c4] text-xl font-black text-white"
                  aria-label="Tomilola avatar"
                >
                  E
                </div>
              </StaggerItem>
              <StaggerItem>
                <h1 className="mt-6 text-[30px] md:text-[40px] font-black leading-[1.08] tracking-normal text-[#050505]">
                  Hi, I&apos;m Emma.
                  <span className="block">Web Designer & Developer</span>
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className="mt-6 max-w-[455px] text-[15px] leading-[1.7] text-[#111111]">
                  I help small businesses and startups launch fast, modern
                  websites from idea to reality in 2 to 4 weeks, so they can
                  focus on their customers.
                </p>
              </StaggerItem>
              <StaggerItem>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <div className="flex -space-x-2" aria-label="Trusted markets">
                    {["US", "NG", "UK", "EU"].map((market) => (
                      <span
                        key={market}
                        className="grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-[#0f172a] text-[9px] font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:scale-110 odd:bg-[#009b5a] even:bg-[#1644a8]"
                      >
                        {market}
                      </span>
                    ))}
                  </div>
                  <div>
                    <p className="text-[12px] font-medium leading-none text-[#5f6575]">
                      Trusted by businesses worldwide
                    </p>
                    <div
                      className="mt-1 flex gap-0.5 text-[#ffb703]"
                      aria-label="Five star rating"
                    >
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className="h-3.5 w-3.5 fill-current transition hover:scale-125"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <ContactButton className="mt-6 inline-flex h-9 items-center gap-2 rounded-full bg-[#2a52c4] px-5 text-[12px] font-black text-white transition hover:scale-105 hover:bg-[#1c3fa6] active:scale-95">
                  Let&apos;s talk now
                  <Zap className="h-4 w-4" aria-hidden="true" />
                </ContactButton>
              </StaggerItem>
            </StaggerReveal>
          </div>

          <MotionReveal
            delay={0.12}
            direction="scale"
            className="rounded-xl border border-[#2a52c4]/20 bg-white p-5 transition hover:border-[#2a52c4]/40 sm:p-6"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="min-h-[116px] rounded-lg bg-[#eff3fd] p-5 transition hover:-translate-y-0.5 hover:shadow-sm">
                <div className="grid h-7 w-7 place-items-center rounded-md bg-[#2a52c4] text-white">
                  <BarChart3
                    className="h-4 w-4 stroke-[2.4]"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-3 text-[11px] font-medium text-[#5f6575]">
                  Success rate
                </p>
                <p className="mt-2 text-[22px] font-black tracking-normal text-[#050505]">
                  98%
                </p>
              </div>

              <div className="min-h-[116px] rounded-lg bg-[#eff3fd] p-5 transition hover:-translate-y-0.5 hover:shadow-sm">
                <div className="grid h-7 w-7 place-items-center rounded-md bg-[#2a52c4] text-white">
                  <BriefcaseBusiness
                    className="h-4 w-4 stroke-[2.4]"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-3 text-[11px] font-medium text-[#5f6575]">
                  Total Projects
                </p>
                <p className="mt-2 text-[22px] font-black tracking-normal text-[#050505]">
                  22+
                </p>
              </div>

              <div className="min-h-[116px] rounded-lg bg-[#eff3fd] p-5 transition hover:-translate-y-0.5 hover:shadow-sm">
                <div className="grid h-7 w-7 place-items-center rounded-md bg-[#2a52c4] text-white">
                  <TimerReset
                    className="h-4 w-4 stroke-[2.4]"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-3 text-[11px] font-medium text-[#5f6575]">
                  Avg. Delivery Time
                </p>
                <p className="mt-2 text-[22px] font-black tracking-normal text-[#050505]">
                  2-5 weeks
                </p>
              </div>

              <div className="min-h-[116px] rounded-lg bg-[#2a52c4] p-5 text-white transition hover:-translate-y-0.5 hover:brightness-110">
                <div className="grid h-7 w-7 place-items-center rounded-md bg-white/15">
                  <Hourglass
                    className="h-4 w-4 stroke-[2.4]"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-3 text-[11px] font-medium text-white/90">
                  Experience
                </p>
                <p className="mt-2 text-[22px] font-black tracking-normal">
                  3+ yrs
                </p>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="hidden bg-white px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-7xl">
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
              I help small businesses and startups launch fast, modern websites
              from idea to reality in 2 to 4 weeks, so they can focus on their
              customers.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ContactButton className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-700 sm:w-auto">
                Let&apos;s talk now
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ContactButton>
              <div className="flex items-center gap-3 text-sm font-semibold text-[#52525b]">
                <div
                  className="flex -space-x-2 text-2xl"
                  aria-label="Trusted markets"
                >
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

      <section className="bg-[#eff3fd] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <MotionReveal className="mx-auto max-w-7xl text-center">
          <h2 className="mx-auto max-w-4xl text-[26px] font-black leading-[0.1] tracking-tight text-[#050505] sm:text-[36px] md:text-[42px] flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <span>Delivering quality</span>
            <span className="inline-block my-1 shrink-0">
              <Image
                src="/porshe.png"
                alt="Porsche car design"
                width={200}
                height={44}
                className="h-10 w-auto object-contain mix-blend-multiply sm:h-14 md:h-28"
              />
            </span>
            <span>results for Founders across the globe.</span>
          </h2>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-10 max-w-4xl mx-auto">
            <div className="text-center px-4 border-r border-black/10">
              <p className="text-[38px] sm:text-[46px] font-black leading-none text-[#050505] tracking-tight">
                3+
              </p>
              <p className="mt-3 text-[11px] sm:text-xs font-bold text-[#5f6575] uppercase tracking-wider">
                Years of Experience
              </p>
            </div>
            <div className="text-center px-4 md:border-r border-black/10">
              <p className="text-[38px] sm:text-[46px] font-black leading-none text-[#050505] tracking-tight">
                16+
              </p>
              <p className="mt-3 text-[11px] sm:text-xs font-bold text-[#5f6575] uppercase tracking-wider">
                Startups Served
              </p>
            </div>
            <div className="text-center px-4 border-r border-black/10 md:border-r border-black/10">
              <p className="text-[38px] sm:text-[46px] font-black leading-none text-[#050505] tracking-tight">
                4.8
              </p>
              <p className="mt-3 text-[11px] sm:text-xs font-bold text-[#5f6575] uppercase tracking-wider">
                Star Ratings
              </p>
            </div>
            <div className="text-center px-4">
              <p className="text-[38px] sm:text-[46px] font-black leading-none text-[#050505] tracking-tight">
                22+
              </p>
              <p className="mt-3 text-[11px] sm:text-xs font-bold text-[#5f6575] uppercase tracking-wider">
                Projects Completed
              </p>
            </div>
          </div>

          <ContactButton className="mt-14 inline-flex h-10 items-center gap-2 rounded-full bg-[#2a52c4] px-6 text-[13px] font-black text-white transition hover:scale-105 hover:bg-[#1c3fa6] active:scale-95 shadow-md shadow-[#2a52c4]/10">
            Let&apos;s talk now
            <Zap className="h-4 w-4 fill-current" aria-hidden="true" />
          </ContactButton>
        </MotionReveal>
      </section>

      {/* <section className="overflow-hidden bg-white px-4 py-18 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
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
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight text-[#0a0a0a] sm:text-3xl">
              Some projects I&apos;ve done
            </h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#2a52c4] underline decoration-[#2a52c4]/40 underline-offset-4 transition hover:decoration-[#2a52c4]"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              View All Projects
            </Link>
          </MotionReveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="bg-[#090d16] px-4 py-20 sm:px-6 sm:py-28 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-blue-500/[0.03] blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-indigo-500/[0.03] blur-[150px] pointer-events-none" />

        <div className="mx-auto max-w-7xl">
          <MotionReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Services I Offer
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-400">
              While I offer a wide range of services, here are the top four to
              keep things concise and impactful.
            </p>
          </MotionReveal>

          <StaggerReveal
            staggerDelay={0.1}
            className="mt-12 grid gap-6 grid-cols-1 lg:grid-cols-12"
          >
            {services.map((service, index) => {
              const colSpanClass =
                index === 0 || index === 3 ? "lg:col-span-5" : "lg:col-span-7";
              const IconComponent = service.icon;

              return (
                <StaggerItem
                  key={service.title}
                  className={`col-span-1 ${colSpanClass}`}
                >
                  <article className="h-full flex flex-col justify-between rounded-[24px] border border-slate-800/80 bg-slate-950/40 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700/60 hover:bg-slate-950/60 hover:shadow-2xl hover:shadow-[#2a52c4]/5 group">
                    <div>
                      {/* Header with Icon and Badge */}
                      <div className="flex items-center justify-between">
                        <div className="text-white transition-colors duration-300 group-hover:text-[#2a52c4]">
                          <IconComponent className="h-8 w-8 stroke-[1.25] transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <span className="rounded-full bg-slate-800/50 border border-slate-700/30 px-3 py-1 text-[11px] font-semibold text-slate-400 select-none">
                          {service.badge}
                        </span>
                      </div>

                      {/* Title and Description */}
                      <h3 className="mt-6 text-xl sm:text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#2a52c4]/90">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-400">
                        {service.description}
                      </p>

                      {/* Sub-services list */}
                      <div className="mt-8 border-t border-slate-800/60 pt-6">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-4 select-none">
                          Key Focus Areas
                        </p>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {service.subServices.map((subService) => (
                            <div
                              key={subService.title}
                              className="rounded-xl border border-slate-800/40 bg-slate-900/10 p-3.5 transition-all duration-300 hover:bg-slate-900/30 hover:border-slate-800/80 group/sub"
                            >
                              <h4 className="text-xs sm:text-sm font-semibold text-slate-200 transition-colors duration-300 group-hover/sub:text-[#2a52c4]">
                                {subService.title}
                              </h4>
                              <p className="mt-1 text-[11px] sm:text-xs leading-relaxed text-slate-400">
                                {subService.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerReveal>

          <ContactButton className="mx-auto mt-14 flex w-fit items-center gap-2 rounded-full bg-[#2a52c4] px-6 py-3 text-sm font-bold text-white transition hover:scale-105 hover:bg-[#1c3fa6] active:scale-95">
            Let&apos;s talk now
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ContactButton>
        </div>
      </section>

      <section className="bg-white px-4 pb-20 sm:px-6 lg:px-8">
        <MotionReveal className="mx-auto max-w-7xl rounded-[24px] border border-[#2a52c4]/20 bg-[#eff3fd] px-6 py-12 text-center sm:px-10">
          <StaggerReveal staggerDelay={0.1}>
            <StaggerItem>
              <h2 className="text-2xl font-extrabold tracking-tight text-[#0a0a0a] sm:text-3xl">
                Ready to start your project?
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#52525b]">
                Let&apos;s work together to bring your ideas to life. Get in
                touch and let&apos;s discuss how I can help you grow.
              </p>
            </StaggerItem>
            <StaggerItem>
              <ContactButton className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2a52c4] px-6 py-3 text-sm font-bold text-white transition hover:scale-105 hover:bg-[#1c3fa6] active:scale-95">
                Get Started
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ContactButton>
            </StaggerItem>
          </StaggerReveal>
        </MotionReveal>
      </section>
    </>
  );
}
