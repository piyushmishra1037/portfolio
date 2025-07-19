"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const projectsData = [
  {
    title: "Learning Management System (LMS)",
    duration: "June 2024 – July 2024",
    description:
      "MERN stack full-stack system with student/instructor dashboards. JWT-secured REST APIs for auth. MongoDB schema for users, courses, enrollments. Razorpay integration for payments.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["MERN Stack", "JWT", "MongoDB", "Razorpay"],
  },
  {
    title: "Weather App",
    duration: "May 2024",
    description:
      "Built with HTML, CSS, vanilla JS. OpenWeatherMap API for real-time weather. Geolocation + search, animated UI, error handling.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
  },
]

export function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 border-primary/20">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-t-lg object-cover w-full h-48"
              />
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.duration}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
