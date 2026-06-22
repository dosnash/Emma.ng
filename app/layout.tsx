import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ContactModalProvider } from "@/components/ContactModal"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
})

export const metadata: Metadata = {
  title: {
    default: "Emma.ng | Web Designer & Developer",
    template: "%s | Emma.ng"
  },
  description:
    "A modern portfolio for launching fast, conversion-focused websites for small businesses and startups.",
  metadataBase: new URL("https://emma.ng")
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContactModalProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  )
}
