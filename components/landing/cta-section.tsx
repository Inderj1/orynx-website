"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedTetrahedron } from "./animated-tetrahedron";

type CtaLink = { href: string; label: string };

type CtaSectionProps = {
  eyebrow?: string;
  titleLines?: string[];
  body?: string;
  primary?: CtaLink;
  /* Pass null to render no secondary action. */
  secondary?: CtaLink | null;
  note?: string;
};

type CtaAnchorProps = React.ComponentPropsWithoutRef<"a"> & { href: string };

/* Renders next/link for internal routes, a plain anchor for mailto/tel/external.
   Spreads the remaining props so Button's `asChild` Slot can inject its classes. */
function CtaAnchor({ href, children, ...rest }: CtaAnchorProps) {
  return href.startsWith("/") ? (
    <Link href={href} {...rest}>
      {children}
    </Link>
  ) : (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}

export function CtaSection({
  eyebrow = "See it on your workflow",
  titleLines = ["Give the busywork", "somewhere else to go."],
  body = "Show us how your team handles calls, scheduling and follow-up today. We’ll show you where Orynx can take over—and where it should not.",
  primary = { href: "/contact", label: "Book a demo" },
  secondary = { href: "/products#compare", label: "Compare products" },
  note,
}: CtaSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-foreground transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(52,59,98,0.15), transparent 40%)`
            }}
          />
          
          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left content */}
              <div className="flex-1">
                <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                  <span className="w-8 h-px bg-brand-coral" />
                  {eyebrow}
                </span>
                <h2 className="text-3xl lg:text-5xl font-display tracking-tight mb-8 leading-[0.95]">
                  {titleLines.map((line, i) => (
                    <span key={line} className={i === titleLines.length - 1 && titleLines.length > 1 ? "text-brand-coral-ink" : undefined}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </h2>

                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl">
                  {body}
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-brand-indigo-deep text-primary-foreground px-8 h-14 text-base rounded-full group"
                  >
                    <CtaAnchor href={primary.href}>
                      {primary.label}
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </CtaAnchor>
                  </Button>
                  {secondary && (
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5 hover:border-brand-coral-ink hover:text-brand-coral-ink"
                    >
                      <CtaAnchor href={secondary.href}>{secondary.label}</CtaAnchor>
                    </Button>
                  )}
                </div>

                {note && (
                  <p className="text-sm text-muted-foreground mt-8 font-mono">
                    {note}
                  </p>
                )}
              </div>

              {/* Right animation */}
              <div className="hidden lg:flex items-center justify-center w-[500px] h-[500px] -mr-16">
                <AnimatedTetrahedron />
              </div>
            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-brand-coral/40" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-brand-coral/40" />
        </div>
      </div>
    </section>
  );
}
