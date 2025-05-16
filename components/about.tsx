"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Twitter } from "lucide-react"
import Image from 'next/image'

export default function About() {
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/Muhammad-Zakii", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/muhammad-zaki-14100a221", label: "LinkedIn" },
    
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
              <Image src="/images/Myimage.jpg" alt="Profile" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full border-8 border-background bg-muted"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-lg font-bold">
                  2+ Years
                  <br />
                  Experience
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              I'm <span className="text-primary">Muhammad Zaki</span>, a passionate Developer
            </h3>
            <p className="text-muted-foreground mb-6">
            Hi, I’m Muhammad Zaki — a passionate Full Stack Developer with over a year of experience building web applications using the MERN stack and Next.js. I enjoy turning ideas into efficient, user-friendly solutions and constantly expanding my skill set.

Currently, I’m pursuing my Master’s in Computer Science at the University of Würzburg, where I’m diving deeper into software engineering, cloud computing, AI, and machine learning. I’m fascinated by how AI and ML can transform data into smart, actionable insights, and I’m eager to integrate these technologies into real-world projects.

Whether it’s creating seamless web interfaces with React and Next.js, designing robust backend systems with Node.js, or experimenting with AI models, I bring curiosity, dedication, and a problem-solving mindset to every challenge.

Outside of coding. 
            </p>
            <p className="text-muted-foreground mb-6">
            I enjoy traveling, staying active through sports like football and table tennis, and learning German. I’m excited to grow both personally and professionally, and I’m always open to new opportunities and collaborations.

Let’s build something amazing together!
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
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

           
          </motion.div>
        </div>
      </div>
    </section>
  )
}
