"use client"

import Link from "next/link"
import { ChevronDown, Mail, Menu, X } from "lucide-react"
import { useState } from "react"
import { useContactModal } from "@/components/ContactModal"

const navigationItems = [
  { label: "Projects", href: "/projects", dropdown: false },
  { label: "Services", href: "/#services", dropdown: true },
  { label: "Resources", href: "/resources", dropdown: true }
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { openContactModal } = useContactModal()

  return (
    <header className="sticky top-0 z-40 bg-white px-4 py-2 sm:px-6 sm:py-4 lg:px-8">
      <div className="mx-auto flex h-11 w-full max-w-5xl items-center justify-between rounded-lg border border-[#ffd6ce] bg-white px-4">
        <Link href="/" className="text-[12px] font-black tracking-normal text-[#0a0a0a]">
          <span className="text-[#ff5535]">Emma</span>.ng
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#0a0a0a] transition hover:text-[#ff5535]"
            >
              {item.label}
              {item.dropdown ? <ChevronDown className="h-3 w-3" aria-hidden="true" /> : null}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={openContactModal}
            className="inline-flex h-8 items-center gap-2 rounded-full bg-[#ff5535] px-5 text-[12px] font-bold text-white transition hover:bg-[#e8482c]"
          >
            <Mail className="h-3.5 w-3.5 stroke-[2.4]" aria-hidden="true" />
            Contact
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="grid h-9 w-9 place-items-center rounded-md border border-[#ffd6ce] text-[#0a0a0a] transition hover:bg-[#ff5535]/5 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="mx-auto mt-2 max-w-5xl rounded-lg border border-[#ffd6ce] bg-white px-4 pb-5 pt-3 lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between rounded-md px-3 py-3 text-sm font-semibold text-[#0a0a0a] transition hover:bg-[#ff5535]/5 hover:text-[#ff5535]"
              >
                {item.label}
                {item.dropdown ? <ChevronDown className="h-4 w-4" aria-hidden="true" /> : null}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(false)
                openContactModal()
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#ff5535] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#e8482c]"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
