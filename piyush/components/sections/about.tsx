"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">About Me</h2>
        <Card className="max-w-3xl mx-auto shadow-xl border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-primary">Professional Summary</CardTitle>
          </CardHeader>
          <CardContent className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              Motivated Full-Stack Web Developer with hands-on experience in building responsive web applications using
              the MERN stack. Skilled in React.js, Node.js, MongoDB, and JWT-based RESTful APIs, with a solid foundation
              in Java and JavaScript. Certified in full-stack development, cybersecurity, and data analytics.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
