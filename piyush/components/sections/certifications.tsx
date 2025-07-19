"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const certificationsData = [
  { name: "MERN Stack", issuer: "Coding Blocks" },
  { name: "Cybersecurity", issuer: "Cisco" },
  { name: "Generative AI", issuer: "Microsoft + LinkedIn" },
  { name: "Python for Data Science", issuer: "IBM" },
  { name: "Software Testing", issuer: "Simplilearn" },
  { name: "Lean Six Sigma", issuer: "Six Sigma Online" },
  { name: "Master Data Management", issuer: "TCS iON" },
]

const awardsData = [{ name: "Best Performer in Cricket & Handball", level: "College Level" }]

export function Certifications() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="certifications" className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">Certifications & Awards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {certificationsData.map((cert) => (
                  <li key={cert.name}>
                    <strong>{cert.name}</strong> from {cert.issuer}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Awards</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {awardsData.map((award) => (
                  <li key={award.name}>
                    <strong>{award.name}</strong> ({award.level})
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
