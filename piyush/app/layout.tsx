import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ThreeBackground } from "@/components/three-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Piyush Mishra - Full-Stack Developer Portfolio",
  description:
    "Driven Full-Stack Developer and Data Analyst with strong expertise in the MERN stack, Java, and Python. Proficient in building responsive web applications and leveraging AI/ML and data visualization tools like Power BI, Tableau, and Pandas.",
  keywords: [
    "Piyush Mishra",
    "Full-Stack Developer",
    "Web Developer",
    "React.js",
    "Node.js",
    "MongoDB",
    "JavaScript",
    "AI/ML",
    "Data Analyst",
    "Portfolio",
    "Python",
    "Power BI",
    "Tableau",
    "Machine Learning"
  ],
  openGraph: {
    title: "Piyush Mishra - Full-Stack Developer Portfolio",
    description:
      "Driven Full-Stack Developer and Data Analyst with strong expertise in the MERN stack, Java, and Python. Proficient in developing responsive web applications and leveraging AI/ML and data visualization tools like Power BI, Tableau, and Pandas. Built projects including an LMS, Quiz App, and Weather App.",
    url: "https://your-portfolio-url.com", // Replace with actual portfolio URL
    siteName: "Piyush Mishra Portfolio",
    images: [
      {
        url: "/placeholder.svg", // Replace with a real image if available
        width: 800,
        height: 600,
        alt: "Piyush Mishra Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piyush Mishra - Full-Stack Developer Portfolio",
    description:
      "Full-Stack Developer & Data Analyst skilled in MERN, Java, Python, and AI/ML. Certified and experienced in building web apps and data visualizations.",
    images: ["/placeholder.svg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ThreeBackground />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
