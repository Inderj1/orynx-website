"use client";

import { useEffect, useState } from "react";
// Hero globe. Two versions are kept: the original ASCII sphere (./animated-sphere,
// backup in /backup) and the logo-derived Open Orbit globe (./animated-globe).
// Swap the import and the <HeroGlobeScene /> mount below to switch.
import { HeroGlobeScene } from "./hero-globe-scene";

const words = ["runs the work.", "answers.", "coordinates.", "follows through."];

/* Workflow-state colours: Listen blue · Understand indigo · Act amber · Escalate coral */
const signal = [
  { title: "Listen", meta: "Calls · messages", dot: "bg-brand-blue" },
  { title: "Understand", meta: "Context · urgency", dot: "bg-brand-indigo" },
  { title: "Act", meta: "Book · update · follow up", dot: "bg-brand-amber" },
  { title: "Escalate", meta: "Human judgment", dot: "bg-brand-coral" },
];

const proof = [
  { value: "24/7", label: "Every call and message covered" },
  { value: "5 channels", label: "One shared operational view" },
  { value: "2 products", label: "Business and healthcare kept distinct" },
  { value: "100%", label: "Actions logged and reviewable" },
];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setWordIndex((i) => (i + 1) % words.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <>
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-28 pb-4 lg:py-40">
        {/* Eyebrow */}
        <div 
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="w-8 h-px bg-brand-coral" />
            Applied AI for operations and clinics
          </span>
        </div>
        
        {/* Main headline */}
        <div className="mb-10">
          <h1 
            className={`text-5xl md:text-6xl lg:text-7xl font-display leading-[1] tracking-tighter transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block">The front desk</span>
            <span className="block">
              that{" "}
              <span className="relative inline-block text-brand-coral-ink">
                <span key={wordIndex} className="inline-flex whitespace-nowrap">
                  {words[wordIndex].split("").map((char, i) => (
                    <span
                      key={`${wordIndex}-${i}`}
                      className="inline-block animate-char-in"
                      style={{
                        animationDelay: `${i * 40}ms`,
                      }}
                    >
                      {char === " " ? " " : char}
                    </span>
                  ))}
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-brand-coral/25" />
              </span>
            </span>
          </h1>
        </div>
        
        {/* Description */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          <p 
            className={`text-xl lg:text-[26px] text-muted-foreground leading-relaxed max-w-xl text-pretty transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Orynx answers, coordinates and follows through across calls, messages, 
            schedules and records—then brings a person in exactly when judgment matters.
          </p>
        </div>

        {/* Signal strip */}
        <div
          aria-label="Orynx workflow"
          className={`hidden md:grid grid-cols-[1fr_1.05fr_1.45fr_0.9fr] w-full max-w-xl mt-12 lg:mt-14 border border-foreground/10 divide-x divide-foreground/10 transition-all duration-700 delay-[400ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {signal.map((step) => (
            <div key={step.title} className="flex items-start gap-1.5 px-2.5 py-2.5">
              <span className={`mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${step.dot}`} />
              <div>
                <span className="block font-display text-base leading-tight">{step.title}</span>
                <span className="block text-[10px] leading-snug font-mono text-muted-foreground whitespace-nowrap mt-0.5">{step.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Globe scene: stacked under the text on small screens, pinned right on large */}
      <div className="relative z-0 mx-auto mt-6 mb-4 w-full max-w-[440px] aspect-square px-4 sm:px-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:mx-0 lg:mt-0 lg:mb-0 lg:w-[800px] lg:h-[800px] lg:max-w-none lg:px-0 pointer-events-none">
        <HeroGlobeScene />
      </div>
    </section>

      {/* Proof marquee - full width outside container */}
      <div
        aria-label="Platform highlights"
        className={`relative py-8 border-y border-foreground/10 overflow-hidden transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex gap-16 marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16" aria-hidden={i === 1 || undefined}>
              {proof.map((stat) => (
                <div key={`${stat.value}-${i}`} className="flex items-baseline gap-4">
                  <span className="text-3xl lg:text-4xl font-display">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
