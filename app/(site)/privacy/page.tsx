import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHero } from "@/components/landing/page-hero";
import { ANALYTICS_ON } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How ORYNX LTD collects, uses and protects personal data across orynx.ai, our outreach and our products.",
};

const UPDATED = "9 November 2026";
const CONTACT = "support@orynx.ai";

type Section = { id: string; title: string; body: ReactNode };

const mail = (
  <a href={`mailto:${CONTACT}`} className="text-brand-coral-ink underline underline-offset-4">
    {CONTACT}
  </a>
);

const list = (items: ReactNode[]) => (
  <ul className="mt-4 space-y-3">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3">
        <span className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-brand-coral" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const sections: Section[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          ORYNX LTD (&ldquo;Orynx&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a company registered in Scotland,
          company number SC809987, with its registered office at 9 Bullfinch Row, Edinburgh, EH17 8XE, United Kingdom.
        </p>
        <p>
          This policy explains how we handle personal data when you visit orynx.ai, contact us, hear from us, or use
          our products. For questions or requests about your data, email {mail}.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: list([
      <>
        <span className="text-foreground">Contact form and email.</span> Your name, work email, company and the
        message you send when you contact us or book a demo.
      </>,
      <>
        <span className="text-foreground">Business contact data for outreach.</span> Names, job titles, work email
        addresses, company details and public professional profiles (for example on LinkedIn) of people at
        organisations we think may benefit from our products, and records of our messages and your replies.
      </>,
      <>
        <span className="text-foreground">Customer account data.</span> Names, work emails and roles of the people
        who use our products, plus billing and support records.
      </>,
      <>
        <span className="text-foreground">Data in our products.</span> Calls, messages, schedules, records and
        clinical notes that our customers process through Orynx Desk and Orynx Clinic (see{" "}
        <a href="#products" className="text-brand-coral-ink underline underline-offset-4">
          our products
        </a>
        ).
      </>,
      <>
        <span className="text-foreground">Technical data.</span> Our hosting provider records standard server logs
        such as IP address, browser type and the pages requested, to keep the site secure and working.
      </>,
      ...(ANALYTICS_ON
        ? [
            <>
              <span className="text-foreground">Website analytics.</span> We use Umami, a cookieless analytics
              service, to count visits: the pages viewed, the site or campaign link that sent you, your country,
              browser and device type, and clicks on our contact links. Umami does not set cookies, does not store your
              IP address and does not follow you across other sites. When you send an enquiry, we include the campaign
              link and page you arrived on, so we know which of our posts reached you.
            </>,
          ]
        : []),
    ]),
  },
  {
    id: "how-we-use",
    title: "How we use it and why",
    body: (
      <>
        <p>Under UK GDPR we rely on these lawful bases:</p>
        {list([
          <>
            <span className="text-foreground">Contract:</span> to provide our products and support to customers, and
            to take steps you ask for before a contract, such as a demo.
          </>,
          <>
            <span className="text-foreground">Legitimate interests:</span> to reply to enquiries, to contact business
            prospects about relevant products (you can object at any time and we will stop), to keep our services
            secure, and to improve them.
          </>,
          <>
            <span className="text-foreground">Legal obligation:</span> to keep financial records and respond to
            lawful requests.
          </>,
          <>
            <span className="text-foreground">Consent:</span> where we ask for it, for example for optional
            marketing emails to individuals. You can withdraw consent at any time.
          </>,
        ])}
        <p className="mt-4">
          Every outreach email includes a way to opt out, and you can always ask us to stop by emailing {mail}.
        </p>
      </>
    ),
  },
  {
    id: "ai",
    title: "AI and automated processing",
    body: (
      <>
        <p>
          We use AI models to draft and analyse marketing content, research the questions people ask online, and
          power our products. Personal data sent to an AI provider is used only to produce the requested output, under
          contracts that stop the provider from training its models on it.
        </p>
        <p>
          We do not make decisions with legal or similarly significant effects about you based solely on automated
          processing. In our products a person stays responsible for decisions that need judgment.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    body: (
      <>
        <p>We do not sell personal data. We share it only with service providers that process it on our behalf:</p>
        {list([
          "Hosting providers, including Amazon Web Services for this website.",
          "Form handling for this website (Web3Forms), which forwards contact form messages to us by email.",
          "AI model providers, including Anthropic, and OpenAI and Google where enabled.",
          "Email delivery, communications and payment providers we use to run the business.",
          "Professional advisers, and authorities where the law requires it.",
        ])}
        <p className="mt-4">
          Each provider is bound by a contract that limits its use of the data to providing its service to us.
        </p>
      </>
    ),
  },
  {
    id: "google",
    title: "Google user data",
    body: (
      <>
        <p>
          Our internal marketing tool, Orynx Marketing, connects to the Google Ads API with an Orynx-owned Google
          account. It reads keyword planning data (search volumes and keyword ideas for topics we choose) to research
          the questions people search for. It does not read personal data about Google users, and it does not change
          any Google Ads account.
        </p>
        <p>
          Orynx&rsquo;s use and transfer of information received from Google APIs to any other app will adhere to the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            className="text-brand-coral-ink underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements. Data from Google APIs is used only to provide that feature, is
          not sold, is not used for advertising, and is not read by people except with consent, for security, or
          where the law requires it.
        </p>
        <p>
          Access can be revoked at any time from the Google account&rsquo;s{" "}
          <a
            href="https://myaccount.google.com/permissions"
            className="text-brand-coral-ink underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            third-party access settings
          </a>
          , and we delete stored Google data on request.
        </p>
      </>
    ),
  },
  {
    id: "products",
    title: "Our products",
    body: (
      <>
        <p>
          When our customers use Orynx Desk or Orynx Clinic, they decide what personal data is processed and why. For
          that data, including patient information, the customer is the controller and Orynx acts as their processor,
          following their instructions under a data processing agreement.
        </p>
        <p>
          If you are a customer&rsquo;s client or patient, please contact that organisation first about your data. We
          will help them respond to your request.
        </p>
      </>
    ),
  },
  {
    id: "transfers",
    title: "International transfers",
    body: (
      <p>
        Some of our providers process data outside the UK, for example in the United States. Where they do, we rely on
        UK adequacy regulations or the UK International Data Transfer Agreement or Addendum, with additional safeguards
        where needed.
      </p>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: list([
      "Enquiries: up to 2 years after our last contact, unless you become a customer.",
      "Outreach records: up to 2 years after our last contact, or until you ask us to stop. We keep a minimal suppression record so we do not contact you again.",
      "Customer account and billing records: for the contract and up to 6 years afterwards, as UK law requires.",
      "Product data: as set out in each customer's agreement, then deleted or returned.",
    ]),
  },
  {
    id: "security",
    title: "How we protect it",
    body: (
      <p>
        We use encryption in transit, role-based access, reviewable logs, and encrypted storage of the access tokens
        for services we connect to. Only people who need data to do their job can reach it.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Your rights",
    body: (
      <>
        <p>
          You can ask to access, correct, delete or move your data, to restrict or object to how we use it, and to
          withdraw consent. Email {mail} and we will respond within one month.
        </p>
        <p>
          You can also complain to the UK Information Commissioner&rsquo;s Office at{" "}
          <a
            href="https://ico.org.uk/make-a-complaint/"
            className="text-brand-coral-ink underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            ico.org.uk
          </a>
          . We would appreciate the chance to resolve your concern first.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <p>
        This website does not use advertising or analytics cookies
        {ANALYTICS_ON
          ? ", and stores nothing on your device. Our analytics (Umami, see What we collect) work without cookies"
          : ""}
        . If that changes, we will update this policy and ask for your consent where the law requires it.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: <p>Our website and outreach are aimed at businesses and are not directed at children under 16.</p>,
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We will post any changes on this page and update the date below. For significant changes we will tell
        customers directly.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy policy."
        titleAccent="What we collect and why."
        lede={`How ORYNX LTD handles personal data across orynx.ai, our outreach and our products. Last updated ${UPDATED}.`}
      />
      <section className="border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32 grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-24">
          <nav aria-label="On this page" className="hidden lg:block">
            <div className="sticky top-28 border border-foreground/10">
              <div className="px-5 py-4 border-b border-foreground/10 text-sm font-mono text-muted-foreground">
                On this page
              </div>
              <ol>
                {sections.map((s, i) => (
                  <li key={s.id} className="border-b border-foreground/10 last:border-b-0">
                    <a
                      href={`#${s.id}`}
                      className="flex gap-3 px-5 py-3 text-sm text-muted-foreground hover:text-brand-coral-ink transition-colors"
                    >
                      <span className="font-mono text-brand-coral-ink">{String(i + 1).padStart(2, "0")}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>
          <div className="max-w-3xl space-y-16">
            {sections.map((s, i) => (
              <article key={s.id} id={s.id} className="scroll-mt-28">
                <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-4">
                  <span className="w-8 h-px bg-brand-coral" />
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-xl lg:text-2xl mb-4">{s.title}</h2>
                <div className="space-y-4 text-base lg:text-lg leading-relaxed text-muted-foreground">{s.body}</div>
              </article>
            ))}
            <p className="text-sm font-mono text-muted-foreground border-t border-foreground/10 pt-8">
              Last updated {UPDATED} · ORYNX LTD · SC809987
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
