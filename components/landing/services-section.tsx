"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";

type ServicesSectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  /** Second line of the heading, set in coral. */
  titleAccent?: string;
  intro?: string;
};

export function ServicesSection({
  id = "services",
  eyebrow = "What we do",
  title = "AI for small businesses.",
  titleAccent = "Starting with your website.",
  intro = "Most clients start with a website. From there we put AI to work on the enquiries, bookings and admin that fill your week. Based in Edinburgh, online or in person.",
}: ServicesSectionProps) {
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
    <section id={id} ref={sectionRef} className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20 grid lg:grid-cols-2 gap-8 lg:items-end">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-brand-coral" />
              {eyebrow}
            </span>
            <h2
              className={`text-3xl lg:text-5xl font-display tracking-tight transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {title}
              <br />
              <span className="text-brand-coral-ink">{titleAccent}</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl lg:justify-self-end">
            {intro}
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col p-6 border border-foreground/10 bg-card hover:border-foreground/20 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="block font-mono text-xs uppercase tracking-widest text-brand-coral-ink mb-3">
                {service.label}
              </span>
              <h3 className="font-display text-xl lg:text-2xl mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">{service.summary}</p>
              <Link
                href={`/services#${service.id}`}
                className="group mt-auto inline-flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
              >
                More on this
                <ArrowRight className="w-4 h-4 text-brand-coral-ink transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
