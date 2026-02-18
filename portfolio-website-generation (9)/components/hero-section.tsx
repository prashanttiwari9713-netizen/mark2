"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Terminal, Mail, Download } from "lucide-react"

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "PRASHANT TIWARI"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 150)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Scanline effect overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,65,0.1)_50%)] bg-[length:100%_4px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block">
              <span className="text-muted-foreground font-mono text-sm">{"// initializing system..."}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary animate-pulse-glow-text">
              {displayText}
              <span className="animate-blink border-r-2 border-primary ml-1" />
            </h1>

            <h2 className="text-xl sm:text-2xl text-foreground font-mono">Computer Science Engineering Student</h2>

            <p className="text-muted-foreground font-mono text-sm sm:text-base max-w-lg mx-auto lg:mx-0">
              <span className="text-primary">{">"}</span> IoT Enthusiast | Software Developer | Entrepreneurship Focused
            </p>

            <div className="bg-card/50 border border-primary/30 rounded-lg p-4 font-mono text-sm max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Terminal size={14} className="text-primary" />
                <span>system@prashant:~$</span>
              </div>
              <p className="text-foreground">
                Motivated student skilled in Java, C++, HTML/CSS | Passionate about IoT systems, problem-solving, and
                entrepreneurship
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/resume.pdf"
                download="Prashant_Tiwari_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm uppercase tracking-wider rounded border border-primary hover:bg-primary/90 neon-border transition-all duration-300 animate-glitch"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-mono text-sm uppercase tracking-wider rounded border border-secondary hover:bg-secondary/90 red-glow transition-all duration-300"
              >
                <Mail size={18} />
                Initiate Contact
              </a>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl animate-pulse" />

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary neon-border animate-float">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ooooo-Hg4Vf0rTD7djwkauQnYdeao9YrYXPw.jpeg"
                  alt="Prashant Tiwari"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
