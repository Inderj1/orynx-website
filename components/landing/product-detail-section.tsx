"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export type ProductFeature = {
  label: string;
  title: string;
  body: string;
};

export type ProductDetail = {
  id: string;
  tag: string;
  name: string;
  body: string;
  cta: { href: string; label: string };
  features: ProductFeature[];
  workflow: string[];
  /* Conductor = blue, Clinic = coral: tints the eyebrow hairline and emits data-tone. */
  tone: "blue" | "coral";
};

const TONE_HAIRLINE: Record<ProductDetail["tone"], string> = {
  blue: "bg-brand-blue",
  coral: "bg-brand-coral",
};

/* CTA fill: Conductor keeps the indigo primary; Clinic takes text-safe coral. */
const TONE_BUTTON: Record<ProductDetail["tone"], string> = {
  blue: "bg-primary hover:bg-brand-indigo-deep",
  coral: "bg-brand-coral-ink hover:bg-brand-coral-ink-deep",
};

/* Workflow states in order: Listen blue · Understand indigo · Act amber · Escalate coral */
const WORKFLOW_DOTS = ["bg-brand-blue", "bg-brand-indigo", "bg-brand-amber", "bg-brand-coral"];

/* One product, in full: sticky copy on the left, feature stack + workflow track on the right. */
export function ProductDetailSection({
  id,
  tag,
  name,
  body,
  cta,
  features,
  workflow,
  tone,
}: ProductDetail) {
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
      id={id}
      ref={sectionRef}
      data-tone={tone}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 items-start">
          {/* Left: copy */}
          <div
            className={`lg:sticky lg:top-32 self-start transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className={`w-8 h-px ${TONE_HAIRLINE[tone]}`} />
              {tag}
            </span>
            <h2 className="text-3xl lg:text-5xl font-display tracking-tight mb-8">
              {name}
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              {body}
            </p>
            <Button
              asChild
              size="lg"
              className={`${TONE_BUTTON[tone]} text-primary-foreground px-8 h-14 text-base rounded-full group`}
            >
              <Link href={cta.href}>
                {cta.label}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Right: feature stack + workflow */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="border border-foreground/10">
              {features.map((feature, index) => (
                <article
                  key={feature.title}
                  className={`p-8 lg:p-10 border-b border-foreground/10 last:border-b-0 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 80 + 200}ms` }}
                >
                  <span className="block font-mono text-xs uppercase tracking-widest text-brand-coral-ink mb-3">
                    {feature.label}
                  </span>
                  <h3 className="font-display text-2xl mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.body}</p>
                </article>
              ))}
            </div>

            {/* Workflow track */}
            <div className="mt-6 border border-foreground/10" aria-label={`${name} workflow`}>
              <div className="flex items-center justify-between px-6 py-3 border-b border-foreground/10">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Workflow
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  01 <span className="text-brand-coral-ink">→</span> {String(workflow.length).padStart(2, "0")}
                </span>
              </div>
              {/* Two columns below sm so the uppercase mono labels never overflow their cell */}
              <ol className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 px-6 py-6 lg:px-8 lg:py-8">
                {workflow.map((node, index) => (
                  <li key={node} className="relative pr-4">
                    {/* Hairline connector to the next node (single-row layout only) */}
                    {index < workflow.length - 1 && (
                      <span className="hidden sm:block absolute top-[3px] left-3 right-0 h-px bg-foreground/20" />
                    )}
                    <span
                      className={`relative block w-[7px] h-[7px] rounded-full mb-4 transition-all duration-500 ${
                        isVisible ? WORKFLOW_DOTS[index] ?? "bg-foreground" : "bg-foreground/20"
                      }`}
                      style={{ transitionDelay: `${index * 120 + 500}ms` }}
                    />
                    <span className="block font-mono text-xs uppercase tracking-widest leading-relaxed">
                      {node}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
