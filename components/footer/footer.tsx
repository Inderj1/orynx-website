"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Youtube } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  Products: ["STRATAX AI Enterprise", "LEDGERLY PRO", "LEDGERLY FIELD", "Integrations", "Changelog"],
  Solutions: ["Manufacturing", "Finance", "Retail", "Healthcare", "Supply Chain"],
  Resources: ["Documentation", "Blog", "Case Studies", "Webinars", "API Reference"],
  Company: ["About", "Careers", "Press", "Partners", "Contact"],
}

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 mb-8 lg:mb-0">
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
              <p className="text-background/60 text-sm leading-relaxed mb-6 max-w-xs">
                The intelligence layer that makes your data platforms self-learning, conversational, and profitable.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-background/20 hover:text-background transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
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
                {links.map((link) => {
                  const linkMap: Record<string, string> = {
                    "STRATAX AI Enterprise": "/products/stratax-ai",
                    "LEDGERLY PRO": "/products/ledgerly-ai",
                    "LEDGERLY FIELD": "/products/ledgerly-field",
                    "Integrations": "/products",
                    "Manufacturing": "/solutions",
                    "Finance": "/solutions",
                    "Retail": "/solutions",
                    "Healthcare": "/solutions",
                    "Supply Chain": "/solutions",
                  }
                  return (
                    <li key={link}>
                      <a
                        href={linkMap[link] || "#"}
                        className="text-sm text-background/60 hover:text-teal transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              &copy; {new Date().getFullYear()} StrataxAI. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-background/50">
              <a href="#" className="hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
