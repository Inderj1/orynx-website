"use client";

import { useEffect, useRef, useState } from "react";
import { Clock, Eye, Users } from "lucide-react";

const values = [
  {
    icon: Clock,
    label: "01 · TIME",
    accent: "bg-brand-blue",
    title: "Time is the product.",
    description: "Every capability is measured by the hours and attention it returns to a team.",
  },
  {
    icon: Eye,
    label: "02 · TRUST",
    accent: "bg-brand-amber",
    title: "Trust must be inspectable.",
    description: "Actions are visible, reviewable and reversible. Confidence comes from evidence, not a promise.",
  },
  {
    icon: Users,
    label: "03 · PEOPLE",
    accent: "bg-brand-coral",
    title: "People are not edge cases.",
    description: "Human handoff is a core operating path—not what happens when automation fails.",
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
              What we believe
            </span>
            <h2
              className={`text-3xl lg:text-5xl font-display tracking-tight transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Three rules shape every workflow.
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl lg:justify-self-end">
            Orynx should save time without obscuring decisions, impersonating people or moving
            uncertainty somewhere harder to see.
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
