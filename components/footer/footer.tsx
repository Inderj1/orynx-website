"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const footerLinks = {
  Products: [
    { label: "EHR Bridge", href: "/products#ehr-bridge" },
    { label: "ComplianceOS", href: "/products#compliance-os" },
    { label: "Call Center AI", href: "/products#call-center-ai" },
    { label: "CommBridge", href: "/products#commbridge" },
    { label: "Orynx Agents", href: "/agents" },
  ],
  Services: [
    { label: "Web Development", href: "/services#web" },
    { label: "AI & ML Solutions", href: "/services#ai-ml" },
    { label: "LLM Integration", href: "/services#llm" },
    { label: "Custom Development", href: "/services#custom" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Solutions", href: "/solutions" },
    { label: "Technology", href: "/how-it-works" },
    { label: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a href="/" className="flex items-baseline mb-4 group">
                <span className="font-display font-bold text-background text-2xl tracking-[-0.02em]">
                  ORYNX
                </span>
              </a>
              <p className="text-background/60 text-sm leading-relaxed max-w-xs">
                Integration platforms, AI products, and custom software engineering. Edinburgh, Scotland.
              </p>
              <div className="mt-4 space-y-1 text-sm text-background/50">
                <p>admin@orynx.ai</p>
                <p>+44 7985 309592</p>
              </div>
            </motion.div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="font-semibold text-sm mb-4 text-background">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-background/60 hover:text-teal transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8">
          <p className="text-sm text-background/50 text-center">
            &copy; {new Date().getFullYear()} Orynx. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
