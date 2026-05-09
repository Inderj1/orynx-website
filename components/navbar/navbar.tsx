"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type NavLink = {
  label: string
  href: string
  hasDropdown?: boolean
}

const productLinks = [
  { label: "STRATAX AI Enterprise", href: "/products/stratax-ai", desc: "AI Operating System" },
  { label: "LEDGERLY PRO", href: "/products/ledgerly-ai", desc: "AR Automation" },
  { label: "LEDGERLY FIELD", href: "/products/ledgerly-field", desc: "Field Operations" },
]

const navLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "Agents SDK", href: "/agents" },
  { label: "Technology", href: "/how-it-works" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const productsTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-background transition-[border-color,box-shadow] duration-200",
          isScrolled
            ? "border-b border-rule"
            : "border-b border-transparent"
        )}
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <nav className="flex items-center h-16 lg:h-[72px]">
            {/* Wordmark */}
            <a
              href="/"
              className="flex items-center group flex-shrink-0 group-hover:opacity-80 transition-opacity"
              aria-label="Stratax Labs — home"
            >
              <Image
                src="/labs-ai.svg"
                alt="Stratax Labs"
                width={1250}
                height={354}
                priority
                className="h-12 lg:h-14 w-auto"
              />
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1 ml-auto">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => {
                      if (productsTimeout.current) clearTimeout(productsTimeout.current)
                      setIsProductsOpen(true)
                    }}
                    onMouseLeave={() => {
                      productsTimeout.current = setTimeout(() => setIsProductsOpen(false), 160)
                    }}
                  >
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-1 px-3 py-2 text-[15px] font-medium text-ink-soft hover:text-ink transition-colors duration-150"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          isProductsOpen && "rotate-180"
                        )}
                      />
                    </a>
                    {isProductsOpen && (
                      <div
                        className="absolute top-full left-0 pt-2"
                        role="menu"
                      >
                        <div className="w-[320px] bg-background border border-rule rounded-md shadow-[0_8px_24px_-8px_rgba(0,27,58,0.12)] overflow-hidden">
                          {productLinks.map((product) => (
                            <a
                              key={product.label}
                              href={product.href}
                              className="flex items-baseline justify-between gap-4 px-5 py-4 hover:bg-surface transition-colors duration-150 border-b border-rule last:border-b-0"
                              role="menuitem"
                            >
                              <div>
                                <div className="text-[14px] font-semibold text-ink">{product.label}</div>
                                <div className="text-[12px] text-ink-muted mt-0.5">{product.desc}</div>
                              </div>
                              <ArrowUpRight className="w-4 h-4 text-ink-muted flex-shrink-0 mt-1" />
                            </a>
                          ))}
                          <a
                            href="/products"
                            className="flex items-center justify-between px-5 py-3 bg-surface hover:bg-rule transition-colors duration-150 text-[12px] font-mono uppercase tracking-[0.14em] text-ink-soft"
                            role="menuitem"
                          >
                            View all products
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-3 py-2 text-[15px] font-medium text-ink-soft hover:text-ink transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden ml-auto p-2 -mr-2 text-ink hover:bg-surface rounded transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-16 lg:hidden overflow-y-auto">
          <div className="px-6 py-8 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-4 border-b border-rule"
                >
                  <span className="font-display text-2xl font-semibold text-ink tracking-[-0.02em]">
                    {link.label}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-ink-muted" />
                </a>
                {link.hasDropdown && (
                  <div className="pl-2 py-2 space-y-2">
                    {productLinks.map((product) => (
                      <a
                        key={product.label}
                        href={product.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2"
                      >
                        <div className="text-[14px] font-semibold text-ink">{product.label}</div>
                        <div className="text-[12px] text-ink-muted mt-0.5">{product.desc}</div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
