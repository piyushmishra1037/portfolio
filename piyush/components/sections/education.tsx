"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const educationData = [
  {
    degree: "B.Tech in Computer Science",
    university: "GLA University",
    duration: "Sep 2022 – Expected Sep 2026",
    cgpa: "6.9/10",
    details: "Engaged in tech clubs, hackathons, and workshops.",
  },
]

export function Education() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="education" className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">Education</h2>
      <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.degree}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{edu.degree}</CardTitle>
                <p className="text-muted-foreground text-sm">{edu.university}</p>
                <p className="text-muted-foreground text-sm">{edu.duration}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">CGPA: {edu.cgpa}</p>
                <p className="text-muted-foreground">{edu.details}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
