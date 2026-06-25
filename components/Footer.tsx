import Image from "next/image";
import Link from "next/link";
import { Github, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start max-w-7xl mx-auto">
        {/* Avatar and Bio */}
        <div className="flex h-10 w-10 overflow-hidden rounded-md border border-slate-200">
          <Image
            src="/dp.png"
            alt="Emmanuel Ovansa display picture"
            width={40}
            height={40}
            className="h-full w-full object-cover"
          />
        </div>
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-[#52525b]">
          Launch fully functional custom software & apps in under 5 weeks.
          Nigeria&apos;s top-rated developer for fast, scalable, SEO-ready
          solutions.
        </p>

        {/* Navigation Links */}
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-b border-slate-100 pb-8 w-full">
          <Link
            href="/"
            className="text-xs sm:text-sm font-semibold text-[#52525b] hover:text-[#2a52c4] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-xs sm:text-sm font-semibold text-[#52525b] hover:text-[#2a52c4] transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/resources"
            className="text-xs sm:text-sm font-semibold text-[#52525b] hover:text-[#2a52c4] transition-colors"
          >
            Resources
          </Link>
          <Link
            href="/projects"
            className="text-xs sm:text-sm font-semibold text-[#52525b] hover:text-[#2a52c4] transition-colors"
          >
            Projects
          </Link>
        </div>

        {/* Bottom Socials and Copyright */}
        <div className="mt-6 flex flex-col sm:flex-row w-full sm:items-center sm:justify-between gap-4">
          <div className="flex gap-2">
            <a
              href="https://github.com/dosnash/"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-[#52525b] hover:text-[#2a52c4] hover:border-[#2a52c4]/30 hover:bg-[#2a52c4]/5 transition-all"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://x.com/emma_developer"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-[#52525b] hover:text-[#2a52c4] hover:border-[#2a52c4]/30 hover:bg-[#2a52c4]/5 transition-all"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-ovansa-584866414/"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-[#52525b] hover:text-[#2a52c4] hover:border-[#2a52c4]/30 hover:bg-[#2a52c4]/5 transition-all"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            {/* <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-[#52525b] hover:text-[#2a52c4] hover:border-[#2a52c4]/30 hover:bg-[#2a52c4]/5 transition-all"
            >
              <Youtube className="h-4 w-4" />
            </a> */}
          </div>

          <p className="text-xs sm:text-sm font-semibold text-[#52525b]">
            © Emmanuel Ovansa. All rights reserved. 2023–2026.
          </p>
        </div>
      </div>
    </footer>
  );
}
