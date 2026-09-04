"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const boundary = [
  { marker: "AI", title: "Routine scheduling request", meta: "Known rules · sufficient context", state: "Automate" },
  { marker: "H", title: "Clinical or sensitive question", meta: "Judgment · consent · uncertainty", state: "Hand off" },
  { marker: "AI", title: "Invoice and job record match", meta: "Verified identifiers · audit trail", state: "Automate" },
  { marker: "H", title: "Customer exception", meta: "Policy conflict · relationship context", state: "Hand off" },
];

export function BoundarySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="boundary" ref={sectionRef} className="relative py-24 lg:py-32 overflow-clip">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-brand-coral" />
              Our operating boundary
            </span>
            <h2 className="text-3xl lg:text-5xl font-display tracking-tight mb-8">
              Human where
              <br />
              <span className="text-brand-coral-ink">it matters.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Orynx handles routine, well-defined work and creates a clean handoff whenever
              context, consent, empathy or professional judgment is required.
            </p>
          </div>

          {/* Right: Decision boundary */}
          <div
            className={`min-w-0 lg:sticky lg:top-32 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            aria-label="Illustrative Orynx decision boundary"
          >
            <div className="border border-foreground/10">
              {/* Header */}
              <div className="px-6 py-4 border-b border-foreground/10 flex items-center justify-between">
                <span className="text-sm font-mono text-muted-foreground">Decision boundary</span>
                <span className="flex items-center gap-2 text-xs font-mono text-brand-blue-ink">
                  <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                  Always active
                </span>
              </div>

              {/* Rows */}
              <div>
                {boundary.map((item, index) => (
                  <div
                    key={item.title}
                    className={`px-6 py-5 border-b border-foreground/5 last:border-b-0 flex items-center justify-between gap-6 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 80 + 300}ms` }}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <span
                        className={`shrink-0 w-8 h-8 flex items-center justify-center font-mono text-xs ${
                          item.marker === "AI"
                            ? "bg-brand-blue-ink text-background"
                            : "border border-brand-coral text-brand-coral-ink"
                        }`}
                      >
                        {item.marker}
                      </span>
                      <div className="min-w-0">
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.meta}</div>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground text-right">{item.state}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="mt-6 flex items-center gap-6 text-sm">
              <Link href="/#control" className="text-foreground hover:underline underline-offset-4 decoration-brand-coral-ink">
                See the activity log
              </Link>
              <span className="text-foreground/20">|</span>
              <Link href="/contact" className="text-muted-foreground hover:text-brand-coral-ink">
                Talk to the team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
