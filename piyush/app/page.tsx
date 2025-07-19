import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Experience } from "@/components/sections/experience"
import { Education } from "@/components/sections/education"
import { Certifications } from "@/components/sections/certifications"
import { ContactPage } from "@/components/sections/contactus"

export default function Home() {
  return (
    <div className="relative z-10">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <ContactPage />
    </div>
  )
}
