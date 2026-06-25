import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { ContactModalProvider } from "@/components/ContactModal"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap"
})

export const metadata: Metadata = {
  title: {
    default: "Emmanuel Ovansa | Expert Frontend Engineer",
    template: "%s | Emmanuel Ovansa"
  },
  description:
    "Emmanuel Ovansa is an expert Frontend Engineer designing and building high-performance, conversion-focused web applications and custom software.",
  metadataBase: new URL("https://emma.ng")
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <ContactModalProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  )
}
