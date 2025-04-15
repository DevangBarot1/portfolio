"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  interface FormEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise<void>((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="section-padding">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-medium text-primary mb-2">Contact</h2>
            <h3 className="text-3xl md:text-4xl font-bold">Get In Touch</h3>
            <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
            </p>
          </motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
              <p className="text-foreground/80 mb-8">
                Feel free to reach out through any of the following channels. I'm always open to discussing new
                projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="text-sm font-medium text-foreground/60">Email</h5>
                  <p className="font-medium">todevangbarot@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="text-sm font-medium text-foreground/60">Phone</h5>
                  <p className="font-medium">+91 9322396278</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="text-sm font-medium text-foreground/60">Location</h5>
                  <p className="font-medium">Mumbai, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glassmorphism rounded-lg p-8"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                <p className="text-foreground/80 mb-6">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={5} required />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

