"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Briefcase, House, Layers, MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { WHATSAPP_URL } from "@/lib/site"

const items = [
  { label: "Home", href: "/#top", section: "top", icon: House },
  { label: "Work", href: "/#work", section: "work", icon: Briefcase },
  { label: "Services", href: "/#services", section: "services", icon: Layers }
  // { label: "Guides", href: "/#guides", section: "guides", icon: BookOpen }
]

/**
 * Floating glass pill nav. A lens slides under the active item.
 * Always visible on mobile; on desktop it appears once the hero is scrolled past.
 */
export default function GlassNav() {
  const pathname = usePathname()
  const [active, setActive] = useState(0)
  const [shown, setShown] = useState(false)

  // Active item from route (subpages) or from the section in view (home)
  useEffect(() => {
    if (pathname.startsWith("/projects")) return setActive(1)
    // if (pathname.startsWith("/resources")) return setActive(3)
    if (pathname !== "/") return setActive(0)

    const sections = items
      .map((item) => document.getElementById(item.section))
      .filter((el): el is HTMLElement => !!el)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = items.findIndex((item) => item.section === entry.target.id)
            if (index >= 0) setActive(index)
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const hrefFor = (item: (typeof items)[number]) => {
    if (pathname === "/") return item.href
    if (item.section === "work") return "/projects"
    return item.href
  }

  return (
    <nav
      aria-label="Quick navigation"
      className={`glass-nav fixed bottom-[max(18px,env(safe-area-inset-bottom))] left-1/2 z-50 grid w-[min(380px,calc(100vw-28px))] -translate-x-1/2 grid-cols-4 rounded-full p-[7px] transition-all duration-500 ease-out-expo md:w-[380px] ${
        shown ? "md:translate-y-0 md:opacity-100" : "md:pointer-events-none md:translate-y-6 md:opacity-0"
      }`}
    >
      <span
        aria-hidden="true"
        className="glass-nav-lens pointer-events-none absolute bottom-[6px] left-[7px] top-[6px] -z-0 rounded-full"
        style={{ width: "calc((100% - 14px) / 4)", transform: `translateX(${active * 100}%)` }}
      />
      {items.map((item, index) => {
        const Icon = item.icon
        const lit = index === active
        return (
          <Link
            key={item.label}
            href={hrefFor(item)}
            aria-current={lit ? "page" : undefined}
            className={`relative z-10 flex min-h-[56px] flex-col items-center justify-center gap-1 rounded-full text-[11px] transition-colors duration-500 ${
              lit ? "text-white" : "text-sky/80 hover:text-white"
            }`}
          >
            <Icon
              className={`h-5 w-5 transition-transform duration-500 ease-out-expo ${lit ? "scale-110" : ""}`}
              strokeWidth={lit ? 2.2 : 1.6}
              aria-hidden="true"
            />
            {item.label}
          </Link>
        )
      })}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="relative z-10 flex min-h-[56px] flex-col items-center justify-center gap-1 rounded-full text-[11px] text-amber transition-colors hover:text-white"
      >
        <MessageCircle className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
        Talk
      </a>
    </nav>
  )
}
