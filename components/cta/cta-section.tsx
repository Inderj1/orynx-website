"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const floatingDots = [
  { size: 6, x: "10%", y: "20%", delay: 0, duration: 6 },
  { size: 4, x: "85%", y: "15%", delay: 1, duration: 7 },
  { size: 5, x: "70%", y: "75%", delay: 0.5, duration: 8 },
  { size: 3, x: "20%", y: "80%", delay: 2, duration: 5 },
  { size: 4, x: "50%", y: "10%", delay: 1.5, duration: 6.5 },
  { size: 5, x: "90%", y: "50%", delay: 0.8, duration: 7.5 },
]

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-foreground p-12 lg:p-20 overflow-hidden"
          style={{
            boxShadow: "0 0 80px rgba(var(--teal), 0.1)",
          }}
        >
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-3xl border border-teal/20" />

          {/* Subtle abstract network background */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop"
              alt=""
              fill
              className="object-cover opacity-[0.05]"
            />
          </div>

          {/* Dot grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          {/* Floating animated dots */}
          {floatingDots.map((dot, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-teal/30"
              style={{
                width: dot.size,
                height: dot.size,
                left: dot.x,
                top: dot.y,
              }}
              animate={{
                y: [0, -15, 5, -10, 0],
                x: [0, 5, -5, 3, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: dot.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: dot.delay,
              }}
            />
          ))}

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/20 text-teal text-sm font-medium mb-8"
            >
              <Shield className="w-4 h-4" />
              Enterprise-Ready
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 text-balance"
            >
              Ready to transform your{" "}
              <span className="text-teal">operational intelligence</span>?
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-background/70 mb-10 leading-relaxed"
            >
              Enterprise-grade AI that connects to your existing systems, learns from every interaction, and takes action autonomously. Start with a guided demo.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="/contact">
                <Button
                  size="lg"
                  className="bg-teal text-foreground hover:bg-teal/90 group px-8"
                >
                  Get a Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-background/30 text-background hover:bg-background/10 bg-transparent"
                >
                  Talk to an Expert
                </Button>
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 text-background/50 text-sm"
            >
              <span>SOC 2 compliant</span>
              <span className="hidden sm:inline">&bull;</span>
              <span>No data movement</span>
              <span className="hidden sm:inline">&bull;</span>
              <span>Full audit trail</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
