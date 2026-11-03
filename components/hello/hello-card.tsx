import Link from "next/link";
import cards from "@/lib/hello-cards.json";
import { shareCardData } from "@/lib/share-card";
import { SaveContactButton } from "./save-contact-button";
import { ShareButton } from "./share-button";

export type HelloPerson = (typeof cards.people)[number];

type Row = { label: string; href: string; dot?: "blue" | "coral" };

const dotClass = { blue: "bg-brand-blue", coral: "bg-brand-coral" };

function RowBox({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <div className="border border-primary-foreground/15 mt-4">
      <div className="flex items-center justify-between px-4 py-3 border-b border-primary-foreground/15 font-mono text-xs text-primary-foreground/70">
        <span>{title}</span>
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-blue" />
          ORYNX
        </span>
      </div>
      {rows.map((row) => (
        <a
          key={row.href}
          href={row.href}
          className="flex items-center justify-between px-4 py-3 border-b border-primary-foreground/15 last:border-b-0 hover:bg-primary-foreground/5 transition-colors"
        >
          <span className="inline-flex items-center gap-2 break-all">
            {row.dot && <span className={`w-2 h-2 rounded-full shrink-0 ${dotClass[row.dot]}`} />}
            {row.label}
          </span>
          <span className="text-brand-coral ml-4" aria-hidden="true">→</span>
        </a>
      ))}
    </div>
  );
}

/* Conference contact card: what someone sees after scanning a QR code, a Wallet pass or tapping an NFC card.
   person omitted = the public Orynx card at /hello. */
export function HelloCard({ person }: { person?: HelloPerson }) {
  const { org, siteUrl } = cards;
  const base = person ? `/hello/${person.slug}/` : "/hello/";
  const site = { label: siteUrl.replace("https://", ""), href: "/" };
  const vcf = `${base}contact.vcf`;
  const share = shareCardData(person ? { person, url: `${siteUrl}${base}` } : { org, url: `${siteUrl}${base}` });

  const reach: Row[] = person
    ? [
        { label: person.email, href: `mailto:${person.email}` },
        ...(person.phone ? [{ label: person.phoneDisplay!, href: `tel:${person.phone}` }] : []),
        { label: "LinkedIn", href: person.linkedin },
        site,
      ]
    : [
        { label: org.email, href: `mailto:${org.email}` },
        { label: org.phoneDisplay, href: `tel:${org.phone}` },
        { label: "LinkedIn", href: org.linkedin },
        site,
      ];

  return (
    <main className="min-h-screen bg-primary text-primary-foreground">
      <div className="max-w-md mx-auto px-6 py-10 min-h-screen flex flex-col">
        <Link href="/" aria-label="ORYNX home">
          <img src="/assets/orynx-logo-light.svg" alt="ORYNX" className="h-8 w-auto" />
        </Link>

        <span className="inline-flex items-center gap-3 text-sm font-mono text-primary-foreground/70 mt-10 mb-4">
          <span className="w-8 h-px bg-brand-coral" />
          ORYNX
        </span>

        <h1 className="text-4xl tracking-tight leading-tight">
          {person ? `${person.firstName} ${person.lastName}` : org.name}
        </h1>
        <p className="text-base text-primary-foreground/70 mt-2 mb-8">{person ? person.role : org.tagline}</p>

        <SaveContactButton href={vcf} />
        <Link
          href="/contact/"
          className="flex items-center justify-center h-12 rounded-full border border-primary-foreground/25 text-base"
        >
          Book a demo
        </Link>
        <ShareButton {...share} />

        <RowBox title={person ? `REACH ${person.firstName.toUpperCase()}` : "REACH ORYNX"} rows={reach} />

        {!person && (
          <RowBox
            title="PRODUCTS"
            rows={[
              { label: "Orynx Desk", href: "/products/#desk", dot: "blue" },
              { label: "Orynx Clinic", href: "/products/#clinic", dot: "coral" },
            ]}
          />
        )}

        <p className="mt-auto pt-10 text-sm leading-relaxed text-primary-foreground/70">
          Orynx takes the work however it arrives, acts on it, and brings a person in when judgment matters.
        </p>
      </div>
    </main>
  );
}
