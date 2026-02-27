"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"

const stats: { value: number; suffix: string; label: string; prefix?: string; color: string }[] = [
  { value: 40, suffix: "", label: "ERP connectors", color: "teal" },
  { value: 17, suffix: "+", label: "Context strategies", color: "coral" },
  { value: 10, suffix: "", label: "Intelligent agents", color: "gold" },
  { value: 4, suffix: "", label: "AI modules (CAMP)", color: "teal" },
]

function AnimatedCounter({
  value,
  suffix,
  prefix,
  isInView
}: {
  value: number
  suffix: string
  prefix?: string
  isInView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  const displayValue = Math.round(count)

  return (
    <span>
      {prefix}{displayValue}{suffix}
    </span>
  )
}

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-foreground relative overflow-hidden">
      {/* Subtle tech background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=600&fit=crop"
          alt=""
          fill
          className="object-cover opacity-[0.07]"
        />
      </div>
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-2 ${
                  stat.color === "teal" ? "text-teal" :
                  stat.color === "coral" ? "text-coral" :
                  "text-gold"
                }`}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  isInView={isInView}
                />
              </div>
              <div className="text-background/70 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
