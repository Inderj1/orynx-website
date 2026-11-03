"use client";

import { useEffect, useRef, useState } from "react";
import { BadgePoundSterling, Handshake, Ruler } from "lucide-react";

const values = [
  {
    icon: Handshake,
    label: "01 · PERSONAL",
    accent: "bg-brand-blue",
    title: "You deal with us directly.",
    description: "The people doing the work, online or in person, from first chat to launch.",
  },
  {
    icon: Ruler,
    label: "02 · TAILORED",
    accent: "bg-brand-amber",
    title: "Built around your business.",
    description: "We start from how you work, not from a template.",
  },
  {
    icon: BadgePoundSterling,
    label: "03 · FAIR",
    accent: "bg-brand-coral",
    title: "Competitive, fixed prices.",
    description: "Agreed before we start, with the option to spread the cost.",
  },
];

export function ValuesSection() {
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
    <section
      id="values"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-foreground/[0.02] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24 grid lg:grid-cols-2 gap-8 lg:items-end">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-brand-coral" />
              How we work with you
            </span>
            <h2
              className={`text-3xl lg:text-5xl font-display tracking-tight transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Three promises to every client.
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl lg:justify-self-end">
            What you can expect, whatever the size of the job.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`relative p-6 border border-foreground/10 hover:border-foreground/20 transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span aria-hidden="true" className={`absolute -top-px -left-px -right-px h-0.5 ${value.accent}`} />
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-foreground/10 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <value.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-xs uppercase tracking-widest text-brand-coral-ink mb-1">
                    {value.label}
                  </span>
                  <h3 className="font-display text-2xl mb-2 group-hover:translate-x-1 transition-transform duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
