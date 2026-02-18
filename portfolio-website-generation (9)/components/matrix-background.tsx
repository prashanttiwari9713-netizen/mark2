"use client"

import { useEffect, useRef } from "react"

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const chars = "01"
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = new Array(columns).fill(1)

    const draw = () => {
      // Semi-transparent black to create fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Neon green color for the matrix characters
      ctx.fillStyle = "#00ff41"
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        // Random brightness variation for depth effect
        const brightness = Math.random()
        if (brightness > 0.95) {
          ctx.fillStyle = "#ffffff" // Bright white for some characters
        } else if (brightness > 0.8) {
          ctx.fillStyle = "#00ff41" // Bright green
        } else {
          ctx.fillStyle = "#008f11" // Darker green
        }

        ctx.fillText(char, x, y)

        // Reset drop to top with random chance
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 22)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-30" aria-hidden="true" />
}
