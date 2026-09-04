"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
];
const contactLink = { name: "Contact", href: "/contact" };
const mobileLinks = [...navLinks, contactLink];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);
  const isActive = (href: string) =>
    !href.includes("#") && (pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)));

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled 
          ? "top-4 left-4 right-4" 
          : "top-0 left-0 right-0"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className={`mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg shadow-foreground/10 max-w-[1200px]"
            : "bg-transparent max-w-[1400px]"
        }`}
      >
        <div 
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-12 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo + primary links, left-aligned */}
          <div className="flex items-center gap-12 lg:gap-20">
          <Link href="/" className="flex items-center gap-2 group" aria-label="ORYNX home" onClick={closeMenu}>
            <img
              src="/assets/orynx-logo.svg"
              alt="ORYNX"
              className={`w-auto transition-all duration-500 ${isScrolled ? "h-7" : "h-9"}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 lg:gap-12">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm transition-colors duration-300 relative group ${
                    active ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-brand-coral transition-all duration-300 group-hover:w-full ${
                      active ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>
          </div>

          {/* Contact, right-aligned as an outlined pill */}
          <div className="hidden md:flex items-center">
            {(() => {
              const active = isActive(contactLink.href);
              return (
                <Link
                  href={contactLink.href}
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex items-center rounded-full border px-5 text-sm font-medium transition-all duration-300 ${
                    isScrolled ? "h-8 text-xs" : "h-9"
                  } ${
                    active
                      ? "border-brand-coral-ink bg-brand-coral-ink text-primary-foreground"
                      : "border-brand-coral-ink/60 text-brand-coral-ink hover:border-brand-coral-ink hover:bg-brand-coral-ink hover:text-primary-foreground"
                  }`}
                >
                  {contactLink.name}
                </Link>
              );
            })()}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle navigation"
            aria-expanded={isMobileMenuOpen}
            aria-controls="primary-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

      </nav>
      
      {/* Mobile Menu - Full Screen Overlay */}
      <div
        id="primary-menu"
        className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center gap-8">
            {mobileLinks.map((link, i) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={`text-4xl font-display transition-all duration-500 ${
                    active ? "text-foreground underline underline-offset-8 decoration-1 decoration-brand-coral" : "text-foreground hover:text-muted-foreground"
                  } ${
                    isMobileMenuOpen 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms" }}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
