"use client"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Home, User, Code, Briefcase, GraduationCap, Award, Mail, Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

export function Navbar() {
  const { setTheme } = useTheme()
  const [isExpanded, setIsExpanded] = useState(false)
  
  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Certifications", href: "#certifications", icon: Award },
    { name: "Contact", href: "#contact", icon: Mail },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Desktop Floating Dock */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className="bg-background/20 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 shadow-2xl">
          <div className="flex items-center space-x-1">
            {/* Logo */}
            <Link 
              href="#home" 
              className="text-lg font-bold text-primary mr-4 px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-300"
              onClick={() => scrollToSection("home")}
            >
              PM
            </Link>
            
            {/* Navigation Items */}
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.name}
                  variant="ghost"
                  size="sm"
                  className="group relative px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  onClick={() => scrollToSection(item.href.substring(1))}
                >
                  <Icon className="h-4 w-4" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {item.name}
                  </span>
                </Button>
              )
            })}
            
            {/* Theme Toggle */}
            <div className="ml-2 pl-2 border-l border-white/20">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-xl border-white/20">
                  <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Floating Dock */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <div className="bg-background/20 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl">
          <div className="flex items-center">
            {/* Expandable Menu */}
            <div className={`flex items-center transition-all duration-500 ease-in-out ${isExpanded ? 'max-w-sm opacity-100' : 'max-w-0 opacity-0'} overflow-hidden`}>
              {navItems.slice(0, 6).map((item) => {
                const Icon = item.icon
                return (
                  <Button
                    key={item.name}
                    variant="ghost"
                    size="sm"
                    className="rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105 mx-1"
                    onClick={() => {
                      scrollToSection(item.href.substring(1))
                      setIsExpanded(false)
                    }}
                  >
                    <Icon className="h-3 w-3" />
                  </Button>
                )
              })}
            </div>
            
            {/* Menu Toggle Button */}
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105 m-2"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <Menu className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
            </Button>
            
            {/* Theme Toggle */}
            <div className="pr-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-xl border-white/20">
                  <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}