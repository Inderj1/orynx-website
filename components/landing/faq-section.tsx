"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly can Orynx go live?",
    answer: "Most Conductor workspaces can begin handling calls and messages within a week. Clinic deployments include a focused clinical validation before they touch patient workflows.",
  },
  {
    question: "Will it sound like a robot?",
    answer: "No. Orynx learns your services, policies and tone, and it hands off the moment a conversation needs a person.",
  },
  {
    question: "Do we remain in control?",
    answer: "Yes. Automated actions are logged, reviewable and overridable. Your team can step into any conversation or workflow at any time.",
  },
  {
    question: "Is Orynx Clinic designed for patient data?",
    answer: "Clinic is built for clinical environments with encryption, audit trails and access controls designed to support UK and EU GDPR, the NHS Data Security and Protection Toolkit and the Caldicott principles. Your deployment is reviewed against your specific requirements.",
  },
];

export function FaqSection() {
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
    <section id="faq" ref={sectionRef} className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Header */}
          <div
            className={`lg:col-span-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
              Questions
            </span>
            <h2 className="font-display text-3xl lg:text-5xl tracking-tight text-foreground mb-6">
              The practical
              <br />
              answers.
            </h2>
            <p className="text-lg text-muted-foreground">
              What teams usually want to know before they put Orynx into a real workflow.
            </p>
          </div>

          {/* Questions: native <details> so every answer is in the server-rendered DOM */}
          <div
            className={`lg:col-span-8 border-t border-foreground/10 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {faqs.map((faq, index) => (
              <details key={faq.question} name="faq" className="group border-b border-foreground/10">
                <summary className="flex items-start justify-between gap-4 py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden font-display text-xl lg:text-2xl tracking-tight">
                  <span className="flex items-baseline gap-6">
                    <span className="font-mono text-xs text-brand-coral-ink shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className="w-5 h-5 shrink-0 translate-y-0.5 text-brand-coral-ink transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="pb-8 pl-12 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
