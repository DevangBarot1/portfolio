"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Lightbulb, Code, Rocket, BarChart4 } from "lucide-react"

const approaches = [
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Discovery",
    description:
      "Understanding the problem space through research and exploration to identify opportunities and constraints.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Development",
    description:
      "Crafting elegant solutions with clean, maintainable code that prioritizes performance and user experience.",
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Deployment",
    description:
      "Implementing robust CI/CD pipelines to ensure smooth, reliable delivery of applications to production.",
    color: "from-violet-500/20 to-indigo-500/20",
  },
  {
    icon: <BarChart4 className="h-8 w-8" />,
    title: "Optimization",
    description: "Continuously refining and improving based on analytics, user feedback, and emerging technologies.",
    color: "from-purple-500/20 to-violet-500/20",
  },
]

export default function ApproachSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="approach" className="py-20 relative overflow-hidden">
      <div className="section-padding">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-medium text-primary mb-2">My Approach</h2>
            <h3 className="text-3xl md:text-4xl font-bold">Four Phases of Action</h3>
            <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
              My systematic approach ensures that every project is executed with precision, creativity, and attention to
              detail from concept to completion.
            </p>
          </motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approaches.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glassmorphism rounded-lg p-6 relative overflow-hidden group"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-30 group-hover:opacity-50 transition-opacity`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="bg-primary/10 p-3 rounded-full inline-block mb-4 text-primary">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-foreground/80">{item.description}</p>

                {/* Phase number */}
                <div className="absolute -bottom-6 -right-6 text-8xl font-bold opacity-10">{index + 1}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline connector */}
        <div className="hidden lg:block relative h-1 max-w-4xl mx-auto mt-8">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 origin-left"
          />
        </div>
      </div>
    </section>
  )
}

