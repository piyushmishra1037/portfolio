"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const experienceData = [
  {
    role: "Full-Stack Developer – Project-Based Learning",
    duration: "Jan 2024 – July 2024",
    description: [
      "Agile collaboration across 4 projects.",
      "Peer code reviews and team debugging.",
      "Deployed via GitHub, Render, Netlify.",
    ],
  },
]

export function Experience() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="experience" className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">Experience</h2>
      <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
        {experienceData.map((exp, index) => (
          <motion.div
            key={exp.role}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{exp.role}</CardTitle>
                <p className="text-muted-foreground text-sm">{exp.duration}</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
