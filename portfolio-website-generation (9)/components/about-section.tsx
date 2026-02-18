export default function AboutSection() {
  const aboutPoints = [
    "Motivated and detail-oriented Computer Science Engineering student",
    "Strong foundation in software development, problem-solving, and teamwork",
    "Skilled in programming, IoT systems, and web technologies",
    "Passionate about innovation, entrepreneurship, and hackathons",
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary neon-text text-center mb-12">About</h2>

        {/* Terminal Window */}
        <div className="bg-card border border-primary/30 rounded-lg overflow-hidden neon-border">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-primary/30">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-primary" />
            </div>
            <span className="text-muted-foreground text-sm font-mono ml-4">about_prashant.sh</span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm sm:text-base space-y-4">
            <div className="text-muted-foreground">
              <span className="text-primary">root@system</span>
              <span className="text-foreground">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-foreground">$ cat about.txt</span>
            </div>

            <div className="border-l-2 border-primary/50 pl-4 space-y-4">
              {aboutPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-primary">{">"}</span>
                  <p className="text-foreground">{point}</p>
                </div>
              ))}
            </div>

            <div className="text-muted-foreground mt-6">
              <span className="text-primary">root@system</span>
              <span className="text-foreground">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-foreground">$ _</span>
              <span className="animate-blink border-r-2 border-primary ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
