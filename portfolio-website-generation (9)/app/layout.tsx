import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist_Mono, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prashant Tiwari | Cyber-Focused Developer",
  description:
    "Computer Science Engineer & Cyber-focused Developer portfolio showcasing skills in cyber security, web development, IoT, and innovative technology solutions.",
  keywords: ["Prashant Tiwari", "Cyber Security", "Web Developer", "Computer Science Engineer", "IoT", "Portfolio"],
  authors: [{ name: "Prashant Tiwari" }],
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-light-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: "/apple-icon.jpg",
  },
}

export const viewport: Viewport = {
  themeColor: "#00ff41",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-mono antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}
