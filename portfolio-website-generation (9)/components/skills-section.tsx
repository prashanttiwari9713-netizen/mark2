import { Shield, Code, Cpu, Cloud, Users, Lightbulb } from "lucide-react"

const technicalSkills = [
  { name: "Java", icon: Code },
  { name: "C++", icon: Code },
  { name: "HTML & CSS", icon: Code },
  { name: "IoT Systems", icon: Cpu },
  { name: "Software Development", icon: Lightbulb },
]

const toolsAndPlatforms = [
  { name: "MS Office", icon: Cloud },
  { name: "Google Workspace", icon: Cloud },
]

const professionalSkills = [
  { name: "Leadership", icon: Users },
  { name: "Communication", icon: Users },
  { name: "Event Management", icon: Users },
  { name: "Problem Solving", icon: Lightbulb },
]

function SkillCard({ name, icon: Icon }: { name: string; icon: typeof Code }) {
  return (
    <div className="group bg-card border border-primary/30 rounded-lg p-4 hover:neon-border transition-all duration-300 animate-glitch">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <span className="text-foreground font-mono text-sm">{name}</span>
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary neon-text text-center mb-12">Skills</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary font-mono flex items-center gap-2">
              <span className="text-muted-foreground">//</span> Technical Skills
            </h3>
            <div className="space-y-3">
              {technicalSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary font-mono flex items-center gap-2">
              <span className="text-muted-foreground">//</span> Tools & Platforms
            </h3>
            <div className="space-y-3">
              {toolsAndPlatforms.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary font-mono flex items-center gap-2">
              <span className="text-muted-foreground">//</span> Professional
            </h3>
            <div className="space-y-3">
              {professionalSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
