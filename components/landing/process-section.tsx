/* How a project runs, plus the pricing note. Server component. */

const steps = [
  { title: "We meet", body: "Online or in person, to learn how your business works." },
  { title: "A clear proposal", body: "Scope, timeline and a fixed price." },
  { title: "We build", body: "You review it on a private preview." },
  { title: "Launch, then automate", body: "Aftercare after launch, then AI agents on the routine work when you’re ready." },
];

export function ProcessSection() {
  return (
    <section id="process" className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24 items-start">
          {/* Left: heading + pricing */}
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-brand-coral" />
              How we work
            </span>
            <h2 className="text-3xl lg:text-5xl font-display tracking-tight mb-8">
              Personal from the first chat.
              <br />
              <span className="text-brand-coral-ink">Clear on price.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Competitive, fixed prices agreed before we start, with the option to spread the cost.
            </p>
          </div>

          {/* Right: steps */}
          <ol className="border border-foreground/10 bg-card">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="px-6 py-5 lg:px-8 border-b border-foreground/10 last:border-b-0 flex items-baseline gap-6"
              >
                <span className="font-mono text-xs text-brand-coral-ink shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
