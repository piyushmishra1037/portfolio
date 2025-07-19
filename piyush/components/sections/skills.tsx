"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Server, Database, PenToolIcon as Tool, BarChart } from "lucide-react"
import { motion } from "framer-motion"

const skillsData = [
  {
    category: "Languages",
    icon: Code,
    items: ["JavaScript", "Java", "Python"],
  },
  {
    category: "Frontend",
    icon: Palette,
    items: ["HTML", "CSS", "React.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Databases",
    icon: Database,
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools & Methods",
    icon: Tool,
    items: ["REST APIs", "Git", "GitHub", "Agile", "JWT", "SDLC"],
  },
  {
    category: "Data/Analytics",
    icon: BarChart,
    items: ["Power BI", "Tableau", "Excel"],
  },
]

export function Skills() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.category}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 border-primary/20">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <skill.icon className="h-8 w-8 text-primary" />
                <CardTitle className="text-xl font-semibold text-foreground">{skill.category}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
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
