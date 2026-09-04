import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Products: [
    { name: "Orynx Conductor", href: "/products#conductor" },
    { name: "Orynx Care", href: "/products#care" },
    { name: "Compare products", href: "/products#compare" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  "Get in touch": [
    { name: "hello@orynx.ai", href: "mailto:hello@orynx.ai" },
    { name: "Book a demo", href: "/contact" },
  ],
};

const emailLinks = [
  { name: "sales@orynx.ai", href: "mailto:sales@orynx.ai" },
  { name: "care@orynx.ai", href: "mailto:care@orynx.ai" },
];

const linkClass =
  "text-sm text-muted-foreground hover:text-brand-coral-ink transition-colors inline-flex items-center gap-2";

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <Link href="/" className="inline-flex items-center gap-2 mb-6" aria-label="ORYNX home">
                <img src="/assets/orynx-logo.svg" alt="ORYNX" className="h-9 w-auto" />
              </Link>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                Applied AI for the businesses and clinics that keep the world running.
              </p>

              {/* Email Links */}
              <div className="flex gap-6">
                {emailLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-brand-coral-ink transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      {link.href.startsWith("/") ? (
                        <Link href={link.href} className={linkClass}>
                          {link.name}
                        </Link>
                      ) : (
                        <a href={link.href} className={linkClass}>
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {year} Orynx.ai. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              Every call and message covered, 24/7
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
