"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const contactEmail = "hello@orynx.ai";
const emails = ["hello@orynx.ai", "sales@orynx.ai", "care@orynx.ai"];
const productOptions = ["Not sure yet", "Orynx Conductor", "Orynx Care"];
const nextSteps = [
  "We review the workflow and match it to the right product.",
  "We spend 20 minutes showing Orynx against your process.",
  "If there is a fit, we define a narrow pilot and clear success measures.",
];

const fieldClass =
  "w-full bg-transparent border border-foreground/15 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-ring transition-colors";
const labelClass = "block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2";

const trim = (value: FormDataEntryValue | null) => String(value ?? "").trim();

// Web3Forms accepts submissions straight from the browser, which is what lets
// this stay a pure static export with no server route.
const WEB3FORMS_ACCESS_KEY = "f656e7e3-c47a-4f40-a611-f3375b052645";

type ContactSectionProps = {
  /** "embedded" (default) renders the full section with its own heading; "page" assumes a PageHero above it. */
  variant?: "page" | "embedded";
};

export function ContactSection({ variant = "embedded" }: ContactSectionProps) {
  const isPage = variant === "page";
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const payload = Object.fromEntries(data) as Record<string, string>;
    const name = trim(data.get("name"));
    const product = trim(data.get("product"));

    setSubmitting(true);
    setStatus("");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Orynx demo request${name ? ` \u2014 ${name}` : ""}${product ? ` (${product})` : ""}`,
          from_name: name || "Orynx website",
          ...payload,
        }),
      });
      const json = await response.json();
      if (response.ok && json.success) {
        setSubmitted(true);
        setStatus("Thanks \u2014 your request is with the team. We\u2019ll reply within one working day.");
        form.reset();
      } else {
        setStatus(json.message || `Something went wrong. Please try again, or email ${contactEmail}.`);
      }
    } catch {
      setStatus(`Something went wrong. Please try again, or email ${contactEmail}.`);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id={isPage ? undefined : "contact"}
      ref={sectionRef}
      className={
        isPage
          ? "relative pt-4 lg:pt-8 pb-24 lg:pb-32"
          : "relative py-24 lg:py-32 border-t border-foreground/10"
      }
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {!isPage && (
              <>
                <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                  <span className="w-8 h-px bg-brand-coral" />
                  Talk to the team
                </span>
                <h2 className="text-3xl lg:text-5xl font-display tracking-tight mb-8">
                  Bring us the workflow.
                  <br />
                  <span className="text-brand-coral-ink">We’ll bring the questions.</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                  Tell us what your team handles today, where it breaks down, and which 
                  decisions must remain human. We’ll reply within one working day.
                </p>
              </>
            )}

            <div className="grid gap-px bg-foreground/10 border border-foreground/10">
              <div className="bg-background p-6">
                <span className={labelClass}><span className="inline-block w-5 h-px bg-brand-coral align-middle mr-2" />Direct contact</span>
                <h3 className="font-display text-2xl mb-3">Prefer email?</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  {emails.map((address) => (
                    <a key={address} href={`mailto:${address}`} className="hover:text-brand-coral-ink hover:underline underline-offset-4 transition-colors">
                      {address}
                    </a>
                  ))}
                </div>
              </div>
              <div className="bg-background p-6">
                <span className={labelClass}><span className="inline-block w-5 h-px bg-brand-coral align-middle mr-2" />What happens next</span>
                <h3 className="font-display text-2xl mb-3">A short, useful conversation.</h3>
                <ol className="space-y-2">
                  {nextSteps.map((step, index) => (
                    <li key={step} className="flex gap-4 text-sm text-muted-foreground">
                      <span className="font-mono text-xs text-brand-coral-ink shrink-0 mt-0.5">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-background p-6">
                <span className={labelClass}><span className="inline-block w-5 h-px bg-brand-coral align-middle mr-2" />What to bring</span>
                <h3 className="font-display text-2xl mb-3">The messy version is useful.</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Call volumes, scheduling constraints, current tools and the exceptions your 
                  team handles manually are more valuable than a polished requirements document.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form (first in the flow below lg, where it is the page's primary action) */}
          <div
            className={`order-first lg:order-none transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <form onSubmit={handleSubmit} className="border border-foreground/10">
              <div className="px-6 py-4 border-b border-foreground/10">
                <span className="text-sm font-mono text-muted-foreground">Request a demo</span>
              </div>

              <div className="p-6 lg:p-8 grid sm:grid-cols-2 gap-5">
                <h2 className="sm:col-span-2 font-display text-2xl mb-2">Start with your real workflow.</h2>
                <div>
                  <label htmlFor="name" className={labelClass}>Full name</label>
                  <input id="name" name="name" type="text" autoComplete="name" placeholder="Jordan Lee" required className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Work email</label>
                  <input id="email" name="email" type="email" autoComplete="email" placeholder="jordan@company.com" required className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="company" className={labelClass}>Company or clinic</label>
                  <input id="company" name="company" type="text" autoComplete="organization" placeholder="Acme Co." required className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone <span className="normal-case tracking-normal">(optional)</span></label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+1 555 000 0000" className={fieldClass} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="product" className={labelClass}>Which product?</label>
                  <div className="relative">
                    <select
                      id="product"
                      name="product"
                      defaultValue={productOptions[0]}
                      className={`${fieldClass} appearance-none pr-10 cursor-pointer`}
                    >
                      {productOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    <ChevronDown
                      aria-hidden="true"
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelClass}>What should Orynx help handle?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about the calls, scheduling, messages or documentation taking time from your team."
                    className={`${fieldClass} resize-y`}
                  />
                </div>
                <div className="sm:col-span-2 pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="w-full bg-primary hover:bg-brand-indigo-deep text-primary-foreground h-14 text-base rounded-full group disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending\u2026" : submitted ? "Send another request" : "Send my demo request"}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <p className="text-xs text-muted-foreground mt-4 font-mono">
                    Sent straight to the Orynx team. We reply within one working day.
                  </p>
                  <p className="text-sm mt-3 min-h-5" aria-live="polite">{status}</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
