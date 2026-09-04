"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedOrbits } from "./animated-orbits";

export function StorySection() {
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
    <section id="story" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Copy */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-brand-coral" />
              Why we started
            </span>
            <h2 className="text-3xl lg:text-5xl font-display tracking-tight mb-8">
              Busywork is not a measure of care or commitment.
            </h2>
            <div className="space-y-6 mb-10">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Strong service businesses and clinical teams lose hours every day to phones,
                follow-ups, rescheduling and duplicate entry. The work is essential, but the
                repetition is not.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Orynx exists to give that time back. The software stays patient, consistent and
                alert; people keep the relationships, judgment and accountability.
              </p>
            </div>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
            >
              See how the products work
              <ArrowRight className="w-4 h-4 text-brand-coral-ink transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right: Orbits */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="w-full max-w-md aspect-square border border-foreground/10 lg:justify-self-end lg:ml-auto">
              <AnimatedOrbits />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
