"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const activity = [
  { id: "01", title: "Incoming service call qualified", meta: "Customer · boiler breakdown", state: "Ready to book", tone: "bg-brand-blue" },
  { id: "02", title: "Clinical message escalated", meta: "Patient portal · human review", state: "Assigned", tone: "bg-brand-coral" },
  { id: "03", title: "Invoice matched to completed job", meta: "Books · calendar · payment", state: "Synced", tone: "bg-brand-amber" },
  { id: "04", title: "Cancellation slot filled", meta: "Priority list · SMS", state: "Confirmed", tone: "bg-brand-amber" },
];

export function ControlSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % activity.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="control" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-brand-coral" />
              Visible by design
            </span>
            <h2 className="text-3xl lg:text-5xl font-display tracking-tight mb-8">
              Automation without
              <br />
              the black box.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Every action is timestamped, reviewable and reversible. 
              Your team can step into a conversation or workflow at any time.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-brand-indigo-deep text-primary-foreground px-8 h-14 text-base rounded-full group"
            >
              <Link href="/products">
                See how control works
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Right: Activity feed */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            aria-label="Illustrative Orynx activity feed"
          >
            <div className="border border-foreground/10">
              {/* Header */}
              <div className="px-6 py-4 border-b border-foreground/10 flex items-center justify-between">
                <span className="text-sm font-mono text-muted-foreground">Live activity</span>
                <span className="flex items-center gap-2 text-xs font-mono text-brand-blue-ink">
                  <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                  Monitoring
                </span>
              </div>

              {/* Items */}
              <div>
                {activity.map((item, index) => (
                  <div
                    key={item.id}
                    className={`px-6 py-5 border-b border-foreground/5 last:border-b-0 flex items-center justify-between gap-6 transition-all duration-300 ${
                      activeItem === index ? "bg-foreground/[0.02]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <span className="font-mono text-xs text-muted-foreground w-6 shrink-0">{item.id}</span>
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 transition-colors duration-300 ${
                          activeItem === index ? item.tone : "bg-foreground/20"
                        }`}
                      />
                      <div className="min-w-0">
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.meta}</div>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground text-right max-w-[40%]">{item.state}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
