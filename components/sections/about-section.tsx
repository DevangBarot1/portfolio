"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText, Sparkles } from "lucide-react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Three.js",
    "Tailwind CSS",
    "Node.js",
    "Framer Motion",
    "UI/UX Design",
    "Next.js",
  ]

  return (
    <section id="about" className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="section-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6 text-center">
            {/* Title with Icon */}
            <div>
              <h2 className="text-2xl font-medium text-primary mb-4 flex items-center justify-center gap-3">
                <Sparkles className="w-8 h-8 text-yellow-400" />
                About Me
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Creative Developer & Designer</h3>
            </div>

            {/* Inspirational Quote */}
            <blockquote className="italic text-foreground/70 max-w-xl mx-auto border-l-4 border-primary pl-6 text-lg">
              “Design is not just what it looks like and feels like. Design is how it works.” – Steve Jobs
            </blockquote>

            {/* About Me Description */}
            <p className="text-foreground/80 max-w-2xl mx-auto text-lg">
              I'm a passionate developer with expertise in creating immersive digital experiences. With a background in both design and development, I bridge the gap between aesthetics and functionality to build applications that are not only visually stunning but also highly performant.
            </p>

            <p className="text-foreground/80 max-w-2xl mx-auto text-lg">
              My approach combines technical precision with creative problem-solving, allowing me to tackle complex challenges and deliver innovative solutions that exceed expectations.
            </p>

            {/* Personal Fun Fact */}
            <p className="text-sm text-muted-foreground max-w-xl mx-auto mt-4">
              When I’m not coding, I’m probably sketching UI ideas, exploring 3D design, or sipping chai and nerding out about new tech.
            </p>

            {/* Skills Section */}
            <div className="pt-8">
              <h4 className="text-2xl font-semibold mb-4 text-WHITE-800">Skills & Expertise</h4>
              <motion.div
                className="flex flex-wrap justify-center gap-4"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.05 },
                  },
                }}
              >
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-5 py-2 rounded-full text-lg bg-primary/10 border border-primary/20"
                    variants={itemVariants}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* View Resume Button */}
            <div className="flex justify-center mt-8">
              <Button asChild className="mt-6" variant="outline">
                <a href="/resume_final.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg">
                  <FileText className="mr-2 h-5 w-5" />
                  View Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
