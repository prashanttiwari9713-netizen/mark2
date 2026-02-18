'use client'

import { BookOpen, Calendar, MapPin } from 'lucide-react'

const education = [
  {
    school: 'Gyan Ganga College of Technology (GGCT)',
    degree: 'Bachelor of Engineering (B.E.) in Computer Science Engineering',
    period: '2023 – 2027',
    location: 'Jabalpur, Madhya Pradesh',
    cgpa: 'CGPA: 7.2/10',
    description: 'Pursuing Computer Science Engineering with focus on IoT systems, software development, and entrepreneurship initiatives.'
  }
]

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary neon-text text-center mb-12">Education</h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="relative bg-card border border-primary/30 rounded-lg overflow-hidden hover:neon-border transition-all duration-300">
              {/* Header */}
              <div className="p-6 border-b border-primary/20">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg mt-1">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground font-mono">{edu.degree}</h3>
                      <p className="text-primary font-mono text-sm mt-1">{edu.school}</p>
                    </div>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} className="text-primary" />
                    <span className="font-mono">{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={16} className="text-primary" />
                    <span className="font-mono">{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="font-mono text-primary">{edu.cgpa}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="p-6">
                <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                  <span className="text-primary">{">"}</span> {edu.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
