import { Trophy, Rocket, Building, Heart } from "lucide-react"

const experiences = [
  {
    title: "Campus Ambassador – eDC, IIT Delhi",
    description:
      "Dec 2025 – Feb 2026 | Represented eDC IIT Delhi on campus for BECon 2026. Fostered connections between students and the entrepreneurial ecosystem through outreach and awareness initiatives.",
    icon: Rocket,
  },
  {
    title: "Marketing Team Member – InspireX E-Cell, GGCT",
    description:
      "Jul 2025 – Dec 2025 | Executed marketing campaigns and developed content strategies. Managed social media engagement and promotional activities to boost participation in E-Cell events.",
    icon: Trophy,
  },
  {
    title: "Volunteering Team – NASA Space App, Jabalpur",
    description:
      "Oct 2025 | Assisted in event execution and participant coordination during the NASA Space App hackathon. Supported networking and logistics for smooth event operations.",
    icon: Heart,
  },
  {
    title: "Organizer Team – Gyan Ganga College of Technology",
    description:
      "Nov 2024 – Dec 2024 | Organized the TechQuest Quiz Competition during the college's annual fest. Handled event planning, coordination, and participant engagement.",
    icon: Building,
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary neon-text text-center mb-12">Experience</h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-0.5" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-2 md:-translate-x-2 neon-border z-10" />

                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="bg-card border border-primary/30 rounded-lg p-6 hover:neon-border transition-all duration-300 animate-glitch">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <exp.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground font-mono">{exp.title}</h3>
                    </div>
                    <p className="text-muted-foreground font-mono text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
