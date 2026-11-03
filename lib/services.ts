// What Orynx offers as a service, and work we have delivered.
// One source for the Services page, the services grid on Home and About,
// the footer, the contact form and the JSON-LD in app/layout.tsx.

export type Service = {
  id: "websites" | "automation" | "consulting" | "marketing";
  label: string;
  title: string;
  summary: string;
  included: string[];
};

export const services: Service[] = [
  {
    id: "websites",
    label: "01 · START HERE",
    title: "Websites and apps",
    summary: "A mobile-first website or app that brings in work and is ready for AI from day one.",
    included: [
      "Bookings, orders and card payments",
      "Your own admin to update wording and photos",
      "Set up for Google search",
      "Ready to connect AI agents when you are",
    ],
  },
  {
    id: "automation",
    label: "02 · AUTOMATE",
    title: "AI agents and automation",
    summary: "AI agents that answer enquiries, book appointments and chase follow-ups, and bring you in when judgment matters.",
    included: [
      "Calls, messages and email answered",
      "Appointments booked and reminders sent",
      "Calendar, inbox and books kept in sync",
      "A clear hand-off to you when it matters",
    ],
  },
  {
    id: "consulting",
    label: "03 · ADVISE",
    title: "Business consulting",
    summary: "A practical look at where your time goes and where AI can help first.",
    included: [
      "A working session on how you run today",
      "Where AI can save time, and where it can’t",
      "Which tools to keep, replace or connect",
      "A short, prioritised plan",
    ],
  },
  {
    id: "marketing",
    label: "04 · GROW",
    title: "Marketing advice",
    summary: "Straight advice on getting found online and turning visits into enquiries.",
    included: [
      "Google search and Business Profile",
      "Reviews, social media and email",
      "Pages that turn visits into enquiries",
      "Simple tracking of what works",
    ],
  },
];

export type RecentWork = {
  name: string;
  kind: string;
  summary: string;
  tags: string[];
  links?: { label: string; href: string }[];
};

export const recentWork: RecentWork[] = [
  {
    name: "Edinburgh Bootcamp",
    kind: "Outdoor fitness · Edinburgh",
    summary: "A website and iOS and Android apps where members book sessions, manage credits and get reminders.",
    tags: ["Website", "iOS app", "Android app"],
    links: [
      { label: "Website", href: "https://edinburghbootcamp.co.uk/" },
      { label: "App Store", href: "https://apps.apple.com/gb/app/ebc-edinburgh-bootcamp/id6800290783" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=uk.co.edinburghbootcamp.app" },
    ],
  },
  {
    name: "Fleur Noir",
    kind: "Floral studio",
    summary: "A website with collection galleries, bouquet ordering with card payment, and an admin the team runs themselves.",
    tags: ["Website", "Online ordering", "Card payments"],
  },
];
