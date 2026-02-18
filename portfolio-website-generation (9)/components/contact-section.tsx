"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Linkedin, Send, Terminal, CheckCircle, Upload, X } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDragOver, setIsDragOver] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type === "application/pdf") {
      setResumeFile(file)
    } else if (file) {
      alert("Please upload a PDF file")
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = () => {
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    const file = e.dataTransfer.files?.[0]
    if (file && file.type === "application/pdf") {
      setResumeFile(file)
    } else if (file) {
      alert("Please upload a PDF file")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form and show success
    setFormData({ name: "", email: "", message: "" })
    setResumeFile(null)
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary neon-text text-center mb-12">Contact</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card border border-primary/30 rounded-lg overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-primary/30">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <span className="text-muted-foreground text-sm font-mono ml-4">contact_info.sh</span>
              </div>

              <div className="p-6 font-mono text-sm space-y-4">
                <div className="text-muted-foreground">
                  <span className="text-primary">$</span> cat contact_info.txt
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:prashanttiwari9713@gmail.com"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="group-hover:neon-text transition-all">prashanttiwari9713@gmail.com</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/prashant-tiwari-856832306"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                    <span className="group-hover:neon-text transition-all">LinkedIn Profile</span>
                  </a>
                </div>

                <div className="text-muted-foreground mt-4">
                  <span className="text-primary">$</span> _
                  <span className="animate-blink border-r-2 border-primary ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-primary/30 rounded-lg overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-primary/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              <span className="text-muted-foreground text-sm font-mono ml-4">send_message.sh</span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 space-y-4">
                  <CheckCircle className="w-16 h-16 text-primary animate-pulse" />
                  <p className="text-primary font-mono text-center neon-text">Message transmitted successfully!</p>
                  <p className="text-muted-foreground font-mono text-sm text-center">I will get back to you soon.</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm mb-4">
                    <Terminal size={14} className="text-primary" />
                    <span>Initiate secure connection...</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-primary font-mono text-sm mb-2">{">"} name:</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-input border border-primary/30 rounded px-4 py-2 text-foreground font-mono text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_10px_rgba(0,255,65,0.3)] transition-all"
                        placeholder="Enter your name..."
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className="block text-primary font-mono text-sm mb-2">{">"} email:</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-input border border-primary/30 rounded px-4 py-2 text-foreground font-mono text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_10px_rgba(0,255,65,0.3)] transition-all"
                        placeholder="Enter your email..."
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className="block text-primary font-mono text-sm mb-2">{">"} message:</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                        className="w-full bg-input border border-primary/30 rounded px-4 py-2 text-foreground font-mono text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_10px_rgba(0,255,65,0.3)] transition-all resize-none"
                        placeholder="Enter your message..."
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className="block text-primary font-mono text-sm mb-2">{">"} resume (optional):</label>
                      <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`relative border-2 border-dashed rounded px-4 py-6 text-center transition-all ${
                          isDragOver
                            ? "border-primary bg-primary/10"
                            : "border-primary/30 bg-input hover:border-primary/50"
                        } ${isSubmitting ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                      >
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={handleFileChange}
                          disabled={isSubmitting}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <div className="flex flex-col items-center gap-2">
                          <Upload size={20} className="text-primary" />
                          {resumeFile ? (
                            <div className="flex items-center gap-2">
                              <span className="text-foreground font-mono text-sm">{resumeFile.name}</span>
                              <button
                                type="button"
                                onClick={() => setResumeFile(null)}
                                disabled={isSubmitting}
                                className="text-primary hover:text-destructive transition-colors"
                              >
                                <X size={16} />
                              </button>
                            </div>
                          ) : (
                            <>
                              <p className="text-foreground font-mono text-sm">Drop PDF or click to upload</p>
                              <p className="text-muted-foreground font-mono text-xs">Max 10MB</p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-mono text-sm uppercase tracking-wider rounded border border-secondary hover:bg-secondary/90 hover:shadow-[0_0_15px_rgba(139,0,0,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-secondary-foreground border-t-transparent rounded-full animate-spin" />
                          Transmitting...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Transmit Message
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
