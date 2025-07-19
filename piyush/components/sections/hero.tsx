"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { TypingEffect } from "@/components/typing-effect"
import { motion } from "framer-motion"

export function Hero() {
  const phrases = ["Full-Stack Web Developer", "MERN Stack Enthusiast", "Problem Solver", "Code Reviewer"]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center px-4 py-16 pt-24 md:pt-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <div className="mb-6">
          <Image
            src="/placeholder.svg?height=160&width=160"
            alt="Piyush Mishra's Avatar"
            width={160}
            height={160}
            className="rounded-full mx-auto border-4 border-primary shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight">
          Hi, I'm <span className="text-primary">Piyush Mishra</span>
        </h1>
        <p className="text-xl md:text-3xl text-muted-foreground mb-8 h-8 md:h-10">
          <TypingEffect phrases={phrases} />
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">Based in Amethi, India</p>
        <div className="flex justify-center space-x-4 mb-8">
          <Button asChild variant="outline" size="icon" className="rounded-full w-12 h-12 bg-transparent">
            <a
              href="https://linkedin.com/in/your-profile-url"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" className="rounded-full w-12 h-12 bg-transparent">
            <a href="https://github.com/your-github-url" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" className="rounded-full w-12 h-12 bg-transparent">
            <a href="mailto:piyushmishra1085@gmail.com" aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed bottom-12 right-10 z-50"
      >
        <Button
          className="px-6 py-3 text-lg font-semibold rounded-full shadow-lg animate-bounce"
          onClick={scrollToContact}
        >
          Hire Me
        </Button>
      </motion.div>
    </section>
  )
}
