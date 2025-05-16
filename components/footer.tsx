"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, ArrowUp, Code, Briefcase, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/Muhammad-Zakii", label: "GitHub" },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/muhammad-zaki-14100a221",
      label: "LinkedIn",
    },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/muhammadzkki", label: "Instagram" },
  ]

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  const professionalValues = [
    {
      icon: <Code className="h-5 w-5 text-primary" />,
      title: "Clean Code",
      description: "I believe in writing clean, maintainable code that follows best practices and industry standards.",
    },
    {
      icon: <Briefcase className="h-5 w-5 text-primary" />,
      title: "Professional Growth",
      description: "Continuously learning and staying updated with the latest technologies and development trends.",
    },
    {
      icon: <Lightbulb className="h-5 w-5 text-primary" />,
      title: "Problem Solving",
      description: "Passionate about solving complex problems with elegant and efficient solutions.",
    },
  ]

  return (
    <footer className="bg-muted/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="#home" className="text-2xl font-bold mb-4 inline-block">
              Portfolio<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              A passionate developer focused on creating interactive and user-friendly web applications.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ y: -5 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">My Professional Values</h3>
            <div className="space-y-4">
              {professionalValues.map((value, index) => (
                <div key={index} className="flex gap-3">
                  <div className="mt-1">{value.icon}</div>
                  <div>
                    <h4 className="font-medium">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Muhammad Zaki. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to top"
          >
            Back to top <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
