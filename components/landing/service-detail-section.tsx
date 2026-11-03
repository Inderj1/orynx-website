import type { ReactNode } from "react";
import { Check } from "lucide-react";
import type { Service } from "@/lib/services";

type ServiceDetailSectionProps = {
  service: Service;
  /** Optional extra below the summary, such as a link to the products. */
  children?: ReactNode;
};

/* One service in full: sticky copy on the left, "What's included" list box on the right.
   Server component: no reveal, so it reads the same with or without JavaScript. */
export function ServiceDetailSection({ service, children }: ServiceDetailSectionProps) {
  return (
    <section id={service.id} className="relative py-16 lg:py-24 scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24 items-start">
          {/* Left: copy */}
          <div className="lg:sticky lg:top-32 self-start">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-brand-coral" />
              {service.label}
            </span>
            <h2 className="text-3xl lg:text-5xl font-display tracking-tight mb-8">{service.title}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">{service.summary}</p>
            {children && <div className="mt-10">{children}</div>}
          </div>

          {/* Right: what's included */}
          <div className="border border-foreground/10 bg-card">
            <div className="px-6 py-4 border-b border-foreground/10">
              <span className="text-sm font-mono text-muted-foreground">What’s included</span>
            </div>
            <ul>
              {service.included.map((item) => (
                <li
                  key={item}
                  className="px-6 py-4 border-b border-foreground/10 last:border-b-0 flex items-start gap-3"
                >
                  <Check className="w-4 h-4 text-brand-coral-ink mt-1 shrink-0" aria-hidden="true" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
