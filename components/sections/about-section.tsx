"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

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
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="section-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Developer portrait"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/80 to-transparent" />
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
              className="absolute -bottom-6 -right-6 md:bottom-10 md:right-10 glassmorphism rounded-full p-6 shadow-lg"
            >
              <div className="text-center">
                <span className="block text-3xl font-bold text-primary">5+</span>
                <span className="text-sm">Years Experience</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="text-xl font-medium text-primary mb-2">About Me</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Creative Developer & Designer</h3>
            </div>

            <p className="text-foreground/80">
              I'm a passionate developer with expertise in creating immersive digital experiences. With a background in
              both design and development, I bridge the gap between aesthetics and functionality to build applications
              that are not only visually stunning but also highly performant.
            </p>

            <p className="text-foreground/80">
              My approach combines technical precision with creative problem-solving, allowing me to tackle complex
              challenges and deliver innovative solutions that exceed expectations.
            </p>

            <div className="pt-4">
              <h4 className="text-xl font-semibold mb-3">Skills & Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 rounded-full text-sm bg-primary/10 border border-primary/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <Button className="mt-4" variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

