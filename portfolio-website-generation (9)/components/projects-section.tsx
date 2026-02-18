import { ExternalLink, Github, Cpu, Users } from "lucide-react"

const projects = [
  {
    title: "Predictive Maintenance System using IoT",
    subtitle: "IoT Based",
    description:
      "Developed an IoT-based system to predict equipment failures using sensor data and analytics. Focused on real-time monitoring and predictive maintenance to improve operational efficiency.",
    icon: Cpu,
    tags: ["IoT", "Sensors", "Analytics", "Real-time Monitoring"],
  },
  {
    title: "Crowdsourced Civic Issue Reporting System",
    subtitle: "Community Driven",
    description:
      "Designed a web platform for citizens to report civic issues and track resolution progress. Implemented user authentication, issue categorization, and admin dashboards for efficient management.",
    icon: Users,
    tags: ["Web Platform", "Authentication", "Admin Dashboard", "Community"],
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary neon-text text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-card border border-primary/30 rounded-lg overflow-hidden hover:neon-border transition-all duration-500"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-primary/20">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground font-mono">{project.title}</h3>
                      <span className="text-sm text-primary">{project.subtitle}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                      <Github size={18} />
                    </button>
                    <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                  <span className="text-primary">{">"}</span> {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 border border-primary/30 rounded text-xs font-mono text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
