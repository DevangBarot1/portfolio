"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroBackground from "@/components/3d/hero-background"

export default function HeroSection() {
  const constraintsRef = useRef(null)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <HeroBackground />
      </div>

      {/* Content */}
      <div className="section-padding z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h2 className="text-xl md:text-2xl font-medium text-primary mb-2">Hello, I'm</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-gradient">Devang Barot</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          I’m a Full-Stack Web Developer based in India, building seamless, high-performance digital experiences where creativity meets technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <Button asChild size="lg" className="px-8">
            <a href="#projects">View My Work</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">Get In Touch</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <ArrowDown className="text-primary" size={30} />
      </motion.div>
    </section>
  )
}

