"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Menu, X, ArrowRight, BrainCircuit, BookOpen, MapPin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const productLinks = [
  { label: "STRATAX AI Enterprise", href: "/products/stratax-ai", desc: "AI Operating System", icon: BrainCircuit, color: "teal" },
  { label: "LEDGERLY PRO", href: "/products/ledgerly-ai", desc: "AR Automation", icon: BookOpen, color: "gold" },
  { label: "LEDGERLY FIELD", href: "/products/ledgerly-field", desc: "Field Operations", icon: MapPin, color: "coral" },
]

const navLinks = [
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "Solutions", href: "/solutions" },
  { label: "Agents SDK", href: "/agents" },
  { label: "Technology", href: "/how-it-works" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const productsTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { scrollY } = useScroll()

  // Teal accent line width grows as you scroll
  const accentWidth = useTransform(scrollY, [0, 100], ["0%", "100%"])
  const accentOpacity = useTransform(scrollY, [0, 60], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className={cn(
          "mx-auto transition-all duration-500 ease-out",
          isScrolled
            ? "max-w-3xl mt-3 px-0"
            : "max-w-screen-2xl mt-0 px-6 lg:px-12"
        )}>
          <nav className={cn(
            "relative flex items-center justify-between transition-all duration-500 ease-out",
            isScrolled
              ? "h-14 px-5 rounded-full border border-border/60 bg-background/70 backdrop-blur-xl shadow-lg shadow-black/[0.06]"
              : "h-16 lg:h-20 px-0 rounded-none border-transparent bg-transparent"
          )}>
            {/* Teal accent line — grows on scroll (full-width mode only) */}
            {!isScrolled && (
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-teal/80 via-teal to-teal/80"
                style={{ width: accentWidth, opacity: accentOpacity }}
              />
            )}

            {/* Teal glow ring on scrolled pill */}
            {isScrolled && (
              <div className="absolute inset-0 rounded-full ring-1 ring-teal/10 pointer-events-none" />
            )}

            {/* Logo */}
            <a href="/" className="flex items-center flex-shrink-0 group">
              <Image
                src="/stratax.png"
                alt="StrataxAI"
                width={160}
                height={40}
                className={cn(
                  "w-auto transition-all duration-500 group-hover:opacity-80",
                  isScrolled ? "h-6" : "h-8"
                )}
                priority
              />
            </a>

            {/* Desktop Navigation */}
            <div className={cn(
              "hidden lg:flex items-center gap-0.5 transition-all duration-500",
              isScrolled ? "mx-3" : "mx-8"
            )}>
              {navLinks.map((link) => (
                link.hasDropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => {
                      if (productsTimeout.current) clearTimeout(productsTimeout.current)
                      setIsProductsOpen(true)
                    }}
                    onMouseLeave={() => {
                      productsTimeout.current = setTimeout(() => setIsProductsOpen(false), 200)
                    }}
                  >
                    <a
                      href={link.href}
                      className={cn(
                        "relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 group inline-flex items-center gap-1",
                        "text-foreground/70 hover:text-foreground",
                        "hover:bg-teal/[0.06]"
                      )}
                    >
                      {link.label}
                      <ChevronDown className={cn(
                        "w-3 h-3 transition-transform duration-200",
                        isProductsOpen && "rotate-180"
                      )} />
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-teal scale-0 group-hover:scale-100 transition-transform duration-200" />
                    </a>
                    <AnimatePresence>
                      {isProductsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 w-72 bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-xl shadow-black/[0.08] p-2 z-50"
                        >
                          {productLinks.map((product) => (
                            <a
                              key={product.label}
                              href={product.href}
                              className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-muted/60 transition-colors duration-150 group/item"
                            >
                              <div className={`w-8 h-8 rounded-lg bg-${product.color}/10 text-${product.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                <product.icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-foreground">{product.label}</div>
                                <div className="text-xs text-muted-foreground">{product.desc}</div>
                              </div>
                            </a>
                          ))}
                          <div className="border-t border-border mt-1 pt-1">
                            <a
                              href="/products"
                              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted/60 transition-colors duration-150 text-xs font-medium text-muted-foreground hover:text-foreground"
                            >
                              View all products <ArrowRight className="w-3 h-3" />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 group",
                      "text-foreground/70 hover:text-foreground",
                      "hover:bg-teal/[0.06]"
                    )}
                  >
                    {link.label}
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-teal scale-0 group-hover:scale-100 transition-transform duration-200" />
                  </a>
                )
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
              <a
                href="#"
                className={cn(
                  "text-sm font-semibold text-foreground/60 hover:text-foreground transition-all duration-300 px-3 py-1.5 rounded-full hover:bg-foreground/[0.04]",
                  isScrolled ? "hidden" : "block"
                )}
              >
                Sign In
              </a>
              <Button
                size="sm"
                className={cn(
                  "bg-teal text-white hover:bg-teal/90 rounded-full px-5 font-semibold shadow-sm shadow-teal/25 transition-all duration-300 group",
                  "hover:shadow-lg hover:shadow-teal/30 hover:scale-[1.02] active:scale-[0.98]",
                  isScrolled && "px-4 text-xs"
                )}
              >
                Get a Demo
                <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-full transition-all duration-200",
                isMobileMenuOpen
                  ? "bg-foreground/10 text-foreground rotate-90"
                  : "text-foreground hover:bg-foreground/[0.05]"
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 lg:hidden"
          >
            <div className="container mx-auto px-6 py-6">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <div key={link.label}>
                    <motion.a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, type: "spring", stiffness: 200 }}
                      className="text-lg font-bold text-foreground py-4 px-4 rounded-xl hover:bg-teal/[0.05] transition-colors flex items-center justify-between group"
                    >
                      {link.label}
                      <ArrowRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-teal group-hover:translate-x-1 transition-all duration-200" />
                    </motion.a>
                    {link.hasDropdown && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.06 + 0.1 }}
                        className="pl-4 flex flex-col gap-0.5 mb-2"
                      >
                        {productLinks.map((product) => (
                          <a
                            key={product.label}
                            href={product.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 py-2.5 px-4 rounded-lg hover:bg-muted/60 transition-colors"
                          >
                            <div className={`w-7 h-7 rounded-md bg-${product.color}/10 text-${product.color} flex items-center justify-center flex-shrink-0`}>
                              <product.icon className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-foreground">{product.label}</div>
                              <div className="text-xs text-muted-foreground">{product.desc}</div>
                            </div>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </nav>
              <motion.div
                className="flex flex-col gap-3 mt-8 px-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <Button variant="outline" className="w-full justify-center bg-transparent rounded-xl h-12 font-semibold">
                  Sign In
                </Button>
                <Button className="w-full justify-center bg-teal text-white hover:bg-teal/90 rounded-xl h-12 shadow-md shadow-teal/20 font-semibold group">
                  Get a Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  )
}
