import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sunil Group of Industries - Integrated Steel Manufacturer Since 1983",
  description:
    "India's trusted integrated steel manufacturer delivering quality, strength, and sustainability from ore to steel. Manufacturing channels, beams, flats, rounds, squares, and billets.",
  keywords:
    "steel manufacturer, integrated steel, channels, beams, flats, rounds, squares, billets, India, Siltara, Urla, Raigarh",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
