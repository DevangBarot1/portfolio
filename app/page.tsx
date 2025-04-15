import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ApproachSection from "@/components/sections/approach-section"
import ProjectsSection from "@/components/sections/projects-section"
import TechStackSection from "@/components/sections/tech-stack-section"
import ContactSection from "@/components/sections/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <AboutSection />
      <ApproachSection />
      <ProjectsSection />
      <TechStackSection />
      <ContactSection />
    </div>
  )
}

