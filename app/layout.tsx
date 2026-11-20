import type { Metadata, Viewport } from "next"
import { Instrument_Serif, Manrope } from "next/font/google"
import "./globals.css"
import { ContactModalProvider } from "@/components/ContactModal"
import Footer from "@/components/Footer"
import GlassNav from "@/components/GlassNav"
import Navbar from "@/components/Navbar"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap"
})

export const metadata: Metadata = {
  title: {
    default: "Emmanuel Ovansa | Web Designer & Frontend Developer",
    template: "%s | Emmanuel Ovansa"
  },
  description:
    "Emmanuel Ovansa designs and builds fast, conversion-focused websites and web apps for startups and small businesses.",
  metadataBase: new URL("https://emma.ng")
}

export const viewport: Viewport = {
  themeColor: "#0b1533"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${instrumentSerif.variable}`}>
      <body>
        <ContactModalProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <GlassNav />
        </ContactModalProvider>
      </body>
    </html>
  )
}
