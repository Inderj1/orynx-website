"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const roles = [
  "automating finance",
  "connecting ERPs",
  "analyzing data",
  "scaling operations",
  "optimizing workflows",
]

const heroAvatars = [
  { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64&h=64&fit=crop&crop=face", alt: "Team member" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face", alt: "Team member" },
  { src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=face", alt: "Team member" },
  { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face", alt: "Team member" },
]

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typeSpeed = isDeleting ? 40 : 80
    const pauseDelay = isDeleting ? 200 : 1500

    if (!isDeleting && displayText === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseDelay)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
      )
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, roleIndex, isDeleting])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Dot grid background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 50%, transparent 0%, hsl(30 15% 98%) 70%),
            radial-gradient(circle, hsl(218 30% 88% / 0.08) 0.5px, transparent 0.5px)
          `,
          backgroundSize: "100% 100%, 40px 40px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-20">
          {/* Left Column — Text */}
          <div className="space-y-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 text-teal border border-teal/20 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
                </span>
                The AI Operating System for Enterprise
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] text-balance"
              style={{ letterSpacing: "-0.05em" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Enterprise AI that&apos;s{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-teal to-amber-500 bg-clip-text text-transparent">
                  {displayText}
                </span>
                <span className="typing-cursor" />
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The intelligence layer that makes data platforms self-learning, conversational, and profitable. Measurable financial impact — without replacing your existing systems.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="/pricing">
                <Button
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 group px-8 shadow-lg shadow-foreground/10 transition-all hover:shadow-xl hover:shadow-foreground/15"
                >
                  Get a Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="/how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-muted group bg-transparent transition-all hover:border-teal/30"
                >
                  <Play className="mr-2 h-4 w-4" />
                  See How It Works
                </Button>
              </a>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex -space-x-2">
                {heroAvatars.map((avatar, i) => (
                  <motion.div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background shadow-sm overflow-hidden"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                  >
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                Trusted by enterprise teams worldwide
              </div>
            </motion.div>
          </div>

          {/* Right Column — Terminal Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 80, damping: 20 }}
          >
            {/* Glow behind terminal */}
            <div className="absolute inset-0 bg-teal/5 blur-3xl rounded-full scale-110" />

            <div className="relative rounded-xl border border-border bg-card/60 backdrop-blur-lg shadow-xl hover-lift transition-all duration-300">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-gold/60" />
                  <div className="w-3 h-3 rounded-full bg-teal/60" />
                </div>
                <span className="ml-2 text-xs text-muted-foreground font-mono">
                  terminal://stratax-ai
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-5 md:p-6 font-mono">
                {/* Init command */}
                <motion.div
                  className="text-xs text-muted-foreground/60 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  $ initialize --system stratax-ai
                </motion.div>

                {/* STRATAX display */}
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <div
                    className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground/50 leading-none"
                    style={{ fontFamily: 'var(--font-space-mono)', letterSpacing: '0.08em' }}
                  >
                    STRATAX
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground/50 mt-1.5 tracking-widest uppercase">
                    AI Operating System
                  </div>
                </motion.div>

                {/* Separator */}
                <div className="border-t border-border/60 my-4" />

                {/* Status grid */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs md:text-sm">
                  {[
                    { label: "erp_connectors", value: "40", color: "text-teal", delay: 0.9 },
                    { label: "ai_modules", value: "CAMP", color: "text-gold", delay: 0.95 },
                    { label: "agents", value: "10 active", color: "text-coral", delay: 1.0 },
                    { label: "context_strategies", value: "17+", color: "text-teal", delay: 1.05 },
                    { label: "graph_memory", value: "4 networks", color: "text-gold", delay: 1.1 },
                    { label: "write_back", value: "live", color: "text-coral", delay: 1.15 },
                    { label: "accuracy", value: "99.5%", color: "text-teal", delay: 1.2 },
                    { label: "sdk_languages", value: "4", color: "text-gold", delay: 1.25 },
                  ].map((item) => (
                    <motion.div
                      key={item.label}
                      className="flex items-center justify-between gap-2 text-muted-foreground"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: item.delay }}
                    >
                      <span className="flex items-center gap-1.5 truncate">
                        <span className="text-teal/40">&gt;</span>
                        <span className="truncate">{item.label}:</span>
                      </span>
                      <span className={`${item.color} font-semibold whitespace-nowrap tabular-nums`}>{item.value}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Status bar */}
                <motion.div
                  className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mt-4 pt-3 border-t border-border/40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.35 }}
                >
                  <span className="text-teal/40">&gt;</span>
                  <span>status:</span>
                  <span className="text-emerald-500 font-semibold ml-auto flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    all systems operational
                  </span>
                </motion.div>

                {/* Blinking cursor */}
                <motion.div
                  className="mt-4 text-teal/60 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <span className="typing-cursor">$</span>
                </motion.div>
              </div>
            </div>

            {/* Floating badge — top right: v2.0 */}
            <motion.div
              className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full border border-teal/40 bg-teal/15 backdrop-blur-sm text-xs font-mono text-teal font-semibold shadow-lg"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.0, type: "spring", stiffness: 100 }}
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                v2.0
              </motion.div>
            </motion.div>

            {/* Floating badge — bottom left: Enterprise Ready */}
            <motion.div
              className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-full border border-border bg-card backdrop-blur-sm text-xs font-mono text-muted-foreground shadow-lg"
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
            >
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                Enterprise Ready
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <motion.div
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-xs text-muted-foreground font-mono tracking-widest uppercase">
          scroll
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-teal/60 to-transparent"
          animate={{ scaleY: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
