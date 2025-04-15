"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "CogniVista - Educational Platform",
    description:
      "A comprehensive suite of educational tools designed to transform how students learn and educators teach with cutting-edge features.",
    image: "/images/cognivista.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Canvas"],
    demoUrl: "https://cognivista.vercel.app/",
    githubUrl: "https://github.com/DevangBarot1/educational-platform",
  },
  {
    title: "Portfolio Dashboard",
    description:
      "Modern portfolio website for developers featuring a clean midnight blue theme, interactive elements, and responsive design.",
    image: "/images/portfolio.png",
    tags: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/DevangBarot1/portfolio",
  },
  {
    title: "Noteng",
    description:
    "A study material sharing platform built with a full-stack setup using React for the frontend and Django for the backend.Enables users to upload, browse, and download academic resources seamlessly.",
    image: "/images/noteng.png",
    tags: ["React", "Django", "Cloudinary", "MongoDB"],
    demoUrl: "https://noteng.vercel.app/",
    githubUrl: "#",
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="section-padding">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-medium text-primary mb-2">My Work</h2>
            <h3 className="text-3xl md:text-4xl font-bold">Featured Projects</h3>
            <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
              A selection of my recent work showcasing my skills and expertise in building modern, interactive web
              applications.
            </p>
          </motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glassmorphism rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/80 to-transparent opacity-60" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-foreground/80 text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-primary/10 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" /> Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" /> Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
