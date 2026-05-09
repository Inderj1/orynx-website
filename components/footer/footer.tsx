"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const footerLinks = {
  Products: [
    { label: "STRATAX AI Enterprise", href: "/products/stratax-ai" },
    { label: "LEDGERLY PRO", href: "/products/ledgerly-ai" },
    { label: "LEDGERLY FIELD", href: "/products/ledgerly-field" },
  ],
  Solutions: [
    { label: "Manufacturing", href: "/solutions" },
    { label: "Finance", href: "/solutions" },
    { label: "Retail", href: "/solutions" },
    { label: "Healthcare", href: "/solutions" },
    { label: "Supply Chain", href: "/solutions" },
  ],
  Platform: [
    { label: "Technology", href: "/how-it-works" },
    { label: "Agents SDK", href: "/agents" },
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
              <a href="/" className="flex items-center mb-4">
                <Image
                  src="/stratax.png"
                  alt="StrataxAI"
                  width={160}
                  height={40}
                  className="h-8 w-auto brightness-0 invert"
                />
              </a>
              <p className="text-background/60 text-sm leading-relaxed max-w-xs">
                The intelligence layer that makes your data platforms self-learning, conversational, and profitable.
              </p>
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
            &copy; {new Date().getFullYear()} StrataxAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
