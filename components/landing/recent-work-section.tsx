import { ArrowUpRight } from "lucide-react";
import { recentWork } from "@/lib/services";

/* Delivered projects. Server component: data lives in lib/services.ts. */
export function RecentWorkSection() {
  return (
    <section id="work" className="relative py-24 lg:py-32 border-t border-foreground/10 scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-brand-coral" />
            Recent work
          </span>
          <h2 className="text-3xl lg:text-5xl font-display tracking-tight">
            Built for local businesses.
            <br />
            <span className="text-brand-coral-ink">Running today.</span>
          </h2>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
          {recentWork.map((project, idx) => (
            <article key={project.name} className="flex flex-col p-8 lg:p-12 bg-background">
              <span className="font-mono text-xs text-brand-coral-ink">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl lg:text-3xl text-foreground mt-2">{project.name}</h3>
              <p className="text-sm text-muted-foreground mt-2 font-mono uppercase tracking-widest">
                {project.kind}
              </p>

              <p className="text-muted-foreground leading-relaxed mt-8 mb-8">{project.summary}</p>

              <ul className="flex flex-wrap gap-2 mb-8" aria-label="What we delivered">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="px-3 py-1 rounded-full border border-foreground/15 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {project.links && project.links.length > 0 && (
                <div className="mt-auto pt-6 border-t border-foreground/10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 font-medium hover:text-brand-coral-ink hover:underline underline-offset-4 transition-colors"
                    >
                      {link.label}
                      <ArrowUpRight className="w-4 h-4 text-brand-coral-ink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
