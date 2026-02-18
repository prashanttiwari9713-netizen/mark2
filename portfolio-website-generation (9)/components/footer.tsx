import { Github, Linkedin, Mail, Twitter } from "lucide-react"

const socialLinks = [
  {
    icon: Mail,
    href: "mailto:prashanttiwari9713@gmail.com",
    label: "Email",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/prashant-tiwari-856832306",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/prashant-tiwari",
    label: "GitHub",
  },
]

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-primary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-muted-foreground font-mono text-sm">
            <span className="text-primary">©</span> 2025 | <span className="text-primary">System Online</span> –
            Prashant Tiwari
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-2 text-muted-foreground hover:text-primary hover:neon-text transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Terminal-style signature */}
        <div className="mt-6 text-center">
          <p className="text-muted-foreground font-mono text-xs">
            <span className="text-primary">{">"}</span> Crafted with <span className="text-destructive">♥</span> and
            lots of <span className="text-primary">{"</code>"}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
