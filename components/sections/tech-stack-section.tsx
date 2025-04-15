"use client";

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiFramer,
  SiThreedotjs,
  SiVercel,
} from "react-icons/si"

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "Three.js", icon: SiThreedotjs, color: "#ffffff" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
]

export default function TechStackSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="tech" className="py-20 relative overflow-hidden">
      <div className="section-padding">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-medium text-primary mb-2">Tech Stack</h2>
            <h3 className="text-3xl md:text-4xl font-bold">Technologies I Work With</h3>
            <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
              I leverage modern technologies to build fast, responsive, and visually stunning web applications.
            </p>
          </motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glassmorphism rounded-lg p-6 flex flex-col items-center justify-center text-center"
            >
              <tech.icon size={50} color={tech.color} className="mb-4" />
              <h4 className="font-medium">{tech.name}</h4>
            </motion.div>
          ))}
        </div>

        {/* Floating background elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  )
}

