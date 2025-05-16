"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Database, Smartphone, Globe, Server, Figma, GitBranch, Cpu } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with modern frameworks.",
      technologies: ["React", "Next.js", "Vue", "HTML/CSS", "JavaScript", "TypeScript"],
    },
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "Machine Learning & AI",
      description: "Developing intelligent systems and models for data analysis and automation.",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision", "Deep Learning"],
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Backend Development",
      description: "Building robust server-side applications and APIs.",
      technologies: ["Node.js", "Express", "Python", "Django", "PHP", "Laravel"],
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Database Management",
      description: "Designing and optimizing database structures for applications.",
      technologies: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis", "Supabase"],
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Expo"],
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user experiences.",
      technologies: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "InVision"],
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "DevOps",
      description: "Implementing continuous integration and deployment pipelines.",
      technologies: ["Docker", "Kubernetes", "AWS", "Azure", "CI/CD", "Vercel"],
    },
    {
      icon: <Figma className="h-10 w-10 text-primary" />,
      title: "Design Tools",
      description: "Proficient in various design and prototyping tools.",
      technologies: ["Figma", "Sketch", "Adobe XD", "Photoshop", "Illustrator", "InVision"],
    },
    {
      icon: <GitBranch className="h-10 w-10 text-primary" />,
      title: "Version Control",
      description: "Managing code versions and collaborating with teams.",
      technologies: ["Git", "GitHub", "GitLab", "Bitbucket", "SVN", "Mercurial"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked with a range of technologies in the web development world. From back-end to design, I've
            cultivated skills in various domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground mb-4">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">My Technical Proficiency</h3>
              <p className="text-muted-foreground">A visual representation of my skills and expertise</p>
            </div>

            <div className="grid gap-6">
              {[
                { name: "JavaScript", percentage: 90 },
                { name: "React", percentage: 85 },
                { name: "Next.js", percentage: 80 },
                { name: "Node.js", percentage: 80 },
                { name: "HTML/CSS", percentage: 95 },
                { name: "Python", percentage: 75 },
                { name: "Machine Learning & AI", percentage: 70 },
                { name: "Database Management", percentage: 70 },
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary font-medium">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
