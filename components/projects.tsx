"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Projects() {
  const categories = ["All", "Web", "E-commerce", "AI/ML"]
  const [activeCategory, setActiveCategory] = useState("All")

  const projects = [
    {
      id: 1,
      title: "Restaurant Website",
      description:
        "Built a fully functional restaurant website using React and Redux for state management and EmailJS for email integration.",
      image: "/images/restaurant.png",
      category: "Web",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "EmailJS"],
      codeLink: "https://github.com/Muhammad-Zakii/restaurant-website",
    },
    {
      id: 2,
      title: "Auction System for Digital Assets",
      description:
        "Developed an auction system that allows users to sell and purchase digital assets like websites, domains, online businesses and projects.",
      image: "/images/auction.png",
      category: "Web",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      codeLink: "https://github.com/Muhammad-Zakii/ProjectHub",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Designed and coded a personal portfolio website to showcase my skills and projects.",
      image: "/images/portfolio.png",
      category: "Web",
      technologies: ["Next.js", ],
      codeLink: "https://github.com/Muhammad-Zakii/my-portfolio-v3",
    },
   
    {
      id: 5,
      title: "Rental Equipment UAE Website",
      description:
        "Designed and developed a website for rental equipment services in UAE, offering a user-friendly platform for equipment browsing and rental services.",
      image: "/images/rental-equipment.png",
      category: "Web",
      technologies: ["React", "Node.js", "MongoDB"],
      codeLink: "https://github.com/Muhammad-Zakii/rentalequipmentuae",
    },
    {
      id: 6,
      title: "Shopzonebysmt E-commerce Platform",
      description:
        "Developed an e-commerce platform providing a seamless shopping experience with features for browsing products, adding to cart, and secure checkout.",
      image: "/images/shopzone.png",
      category: "E-commerce",
      technologies: ["React", "MUI", "EmailJS"],
      codeLink: "https://github.com/Muhammad-Zakii/shopzonebysmt",
    },
    {
      id: 7,
      title: "AI-Powered Sentiment Analyzer",
      description:
        "Created an AI tool that analyzes text (tweets, reviews, etc.) and predicts whether the sentiment is positive, negative, or neutral.",
      image: "/placeholder.svg?height=600&width=800",
      category: "AI/ML",
      technologies: ["Python", "TensorFlow", "NLP", "React"],
      codeLink: "https://github.com/Muhammad-Zakii/AI-Powered-Sentiment-Analyzer",
    },
    {
      id: 8,
      title: "Air Base Radar System",
      description:
        "Developed a radar monitoring system for air base operations, providing real-time tracking and analysis of aerial activities.",
      image: "/images/radar.png",
      category: "AI/ML",
      technologies: ["Python", "Machine Learning", "Signal Processing", "Data Visualization"],
      codeLink: "https://github.com/Muhammad-Zakii/Air-base-radar",
    },
  ]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent projects and creative works. Each project represents my passion for creating meaningful
            and impactful digital experiences.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <Card className="overflow-hidden h-full group">
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" /> View Code
                        </a>
                      </Button>
                    </div>
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-medium py-1 px-2 rounded">
                      {project.category}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
