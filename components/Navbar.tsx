"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/site"

const links = [
  { label: "Work", href: "/projects" },
  { label: "Services", href: "/#services" }
  // { label: "Guides", href: "/resources" }
]

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`grid h-9 w-9 place-items-center bg-brand font-serif text-[22px] italic leading-none text-white ${className}`}
      aria-hidden="true"
    >
      E
    </span>
  )
}

/** Header sits over the top of every page; light on the dark home hero, dark elsewhere. */
export default function Navbar() {
  const pathname = usePathname()
  const onDark = pathname === "/"
  const tone = onDark ? "text-white" : "text-ink"

  return (
    <header className={`gutter absolute inset-x-0 top-0 z-40 ${tone}`}>
      <div className="flex items-center justify-between py-6">
        <Link href="/" className="group flex items-center gap-3" aria-label="Emma.ng home">
          <BrandMark className="transition-transform duration-500 ease-out-expo group-hover:rotate-[-8deg]" />
          <span className="text-[15px] font-semibold tracking-tight">
            Emma<span className={onDark ? "text-sky" : "text-brand"}>.ng</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-10 text-[13px] md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`link-line pb-0.5 transition-opacity hover:opacity-100 ${
                pathname.startsWith(link.href) && link.href !== "/" ? "opacity-100" : "opacity-75"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1.5 border px-4 py-2 transition-colors duration-300 ${
              onDark
                ? "border-white/30 hover:border-white hover:bg-white hover:text-ink"
                : "border-ink/20 hover:border-brand hover:bg-brand hover:text-white"
            }`}
          >
            Let&apos;s talk
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  )
}
