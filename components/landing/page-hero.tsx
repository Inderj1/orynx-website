import type { ReactNode } from "react";
import { AnimatedSphere } from "./animated-sphere";
import { AnimatedWave } from "./animated-wave";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  /** Second sentence of the headline, set in coral. */
  titleAccent?: ReactNode;
  lede?: ReactNode;
  /** Background art: the ASCII sphere on the right, or the dot-wave field along the bottom. */
  visual?: "sphere" | "wave";
  children?: ReactNode;
};

/* Sub-page hero. Server-compatible: no hooks, no client boundary. */
export function PageHero({ eyebrow, title, titleAccent, lede, visual, children }: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden ${visual ? "min-h-[560px] lg:min-h-[640px] flex items-center" : ""}`}>
      {visual === "sphere" && (
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[520px] h-[520px] lg:w-[680px] lg:h-[680px] opacity-40 pointer-events-none"
          aria-hidden="true"
        >
          <AnimatedSphere />
        </div>
      )}
      {visual === "wave" && (
        <div
          className="absolute inset-y-0 right-0 w-[58%] opacity-30 pointer-events-none"
          style={{ maskImage: "linear-gradient(to right, transparent, black 35%)", WebkitMaskImage: "linear-gradient(to right, transparent, black 35%)" }}
          aria-hidden="true"
        >
          <AnimatedWave />
        </div>
      )}

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-40 pb-20 lg:pt-44 lg:pb-24">
        <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
          <span className="w-8 h-px bg-brand-coral" />
          {eyebrow}
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1] mb-8 max-w-3xl text-balance">
          {title}
          {titleAccent && (
            <>
              {" "}
              <span className="text-brand-coral-ink">{titleAccent}</span>
            </>
          )}
        </h1>

        {lede && (
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
            {lede}
          </p>
        )}

        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
