"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    number: "01",
    tag: "Business operations",
    title: "Orynx Conductor",
    description: "An AI operations layer for HVAC, plumbing, electrical and other service teams. It watches the business across every system and handles the work that should not need supervision.",
    points: [
      "Answers calls and messages",
      "Books the jobs that pay first",
      "Keeps schedules, invoices and follow-ups in sync",
    ],
    cta: "Explore Conductor",
    href: "/products#conductor",
    visual: "conductor",
    tone: { dot: "bg-brand-blue", visual: "text-brand-blue" },
  },
  {
    number: "02",
    tag: "Clinical operations",
    title: "Orynx Clinic",
    description: "An AI clinic assistant built around patient workflows. It handles the administration surrounding care while leaving clinical judgment exactly where it belongs.",
    points: [
      "Drafts ambient clinical notes",
      "Supports triage, scheduling and reminders",
      "Escalates clinical decisions to the care team",
    ],
    cta: "Explore Clinic",
    href: "/products#clinic",
    visual: "care",
    tone: { dot: "bg-brand-coral", visual: "text-brand-coral" },
  },
];

/* Conductor: one operating context watching every connected system. */
function ConductorVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <circle cx="100" cy="80" r="12" fill="currentColor">
        <animate attributeName="r" values="12;14;12" dur="2s" repeatCount="indefinite" />
      </circle>
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i * 60) * (Math.PI / 180);
        const radius = 50;
        // Rounded so server and client render identical attribute strings.
        const nx = Math.round((100 + Math.cos(angle) * radius) * 100) / 100;
        const ny = Math.round((80 + Math.sin(angle) * radius) * 100) / 100;
        return (
          <g key={i}>
            <line
              x1="100"
              y1="80"
              x2={nx}
              y2={ny}
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.3;0.8;0.3"
                dur="2s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
              />
            </line>
            <circle
              cx={nx}
              cy={ny}
              r="6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <animate
                attributeName="r"
                values="6;8;6"
                dur="2s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        );
      })}
      <circle cx="100" cy="80" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0">
        <animate attributeName="r" values="20;60" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/* Clinic: patient and clinician kept in sync, with the clinician's judgment in the loop. */
function CareVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <g>
        <rect x="30" y="50" width="50" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="55" y="85" textAnchor="middle" fontSize="20" fontFamily="monospace" fill="currentColor">P</text>
        <circle cx="55" cy="35" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
      </g>
      <g>
        <rect x="120" y="50" width="50" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="145" y="85" textAnchor="middle" fontSize="20" fontFamily="monospace" fill="currentColor">Dr</text>
        <circle cx="145" cy="35" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
      </g>
      <line x1="80" y1="80" x2="120" y2="80" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="0;-8" dur="0.5s" repeatCount="indefinite" />
      </line>
      <circle r="4" fill="currentColor">
        <animateMotion dur="1.5s" repeatCount="indefinite">
          <mpath href="#carePath" />
        </animateMotion>
      </circle>
      <path id="carePath" d="M 80 80 L 120 80" fill="none" />
      <g transform="translate(100, 130)">
        <circle r="6" fill="none" stroke="currentColor" strokeWidth="2">
          <animate attributeName="r" values="6;10;6" dur="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

function ProductRow({ product, index }: { product: typeof products[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      id={product.visual}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 border-b border-foreground/10">
        {/* Number */}
        <div className="shrink-0">
          <span className="font-mono text-sm text-brand-coral-ink">{product.number}</span>
        </div>
        
        {/* Content */}
        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              <span className={`w-1.5 h-1.5 rounded-full ${product.tone.dot}`} />
              {product.tag}
            </span>
            <h3 className="text-2xl lg:text-3xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
              {product.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {product.description}
            </p>
            <ul className="space-y-2 mb-8">
              {product.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm">
                  <span className={`w-3 h-px ${product.tone.dot}`} />
                  {point}
                </li>
              ))}
            </ul>
            <Link href={product.href} className="inline-flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4 decoration-brand-coral-ink">
              {product.cta}
              <ArrowRight className="w-4 h-4 text-brand-coral-ink transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className={`w-48 h-40 ${product.tone.visual}`} aria-hidden="true">
              {product.visual === "care" ? <CareVisual /> : <ConductorVisual />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      id="products"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24 grid lg:grid-cols-2 gap-8 lg:items-end">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-brand-coral" />
              Two focused products
            </span>
            <h2
              className={`text-3xl lg:text-5xl font-display tracking-tight transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              One standard for
              <br />
              <span className="text-brand-coral-ink">getting work done.</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl lg:justify-self-end">
            Orynx Conductor runs the operational front desk for service businesses. 
            Orynx Clinic removes the administrative drag around clinical work. 
            Each is purpose-built for its environment.
          </p>
        </div>

        {/* Products List */}
        <div>
          {products.map((product, index) => (
            <ProductRow key={product.number} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
