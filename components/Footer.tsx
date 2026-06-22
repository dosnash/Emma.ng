import Link from "next/link"
import { ContactButton } from "@/components/ContactModal"

const footerLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Resources", href: "/resources" }
]

export default function Footer() {
  return (
    <footer className="border-t border-[#ffd6ce] bg-white">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="text-2xl font-black tracking-tight text-[#0a0a0a]">
            Emma.ng
          </Link>
          <p className="mt-4 max-w-xl text-base leading-7 text-[#52525b]">
            Fast, modern websites for startups and small businesses that need sharp design,
            smooth frontend execution, and clear conversion paths.
          </p>
          <ContactButton className="mt-6 rounded-full bg-[#ff5535] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#e8482c]">
            Let&apos;s talk now
          </ContactButton>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-[#0a0a0a]">
              Explore
            </h2>
            <div className="mt-4 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-[#52525b] transition hover:text-[#ff5535]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-[#0a0a0a]">
              Availability
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#52525b]">
              Booking select website and frontend projects for founders, teams, and service
              businesses.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-5xl border-t border-black/10 px-4 py-5 text-center text-sm font-medium text-[#52525b] sm:px-6 lg:px-8">
        © 2026 Emma.ng. All rights reserved.
      </div>
    </footer>
  )
}
