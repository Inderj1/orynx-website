import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { HelloCard } from "@/components/hello/hello-card";
import cards from "@/lib/hello-cards.json";

// Personal cards are unlisted: only the slugs in lib/hello-cards.json are built,
// nothing links here, they stay out of the sitemap and ask search engines not to index them.
export const dynamicParams = false;

export function generateStaticParams() {
  return cards.people.map(({ slug }) => ({ slug }));
}

const findPerson = (slug: string) => cards.people.find((p) => p.slug === slug);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const person = findPerson((await params).slug);
  return {
    title: person ? `${person.firstName} ${person.lastName}` : "Hello",
    robots: { index: false, follow: false },
  };
}

export const viewport: Viewport = { themeColor: "#343b62" };

export default async function PersonCardPage({ params }: { params: Promise<{ slug: string }> }) {
  const person = findPerson((await params).slug);
  if (!person) notFound();
  return <HelloCard person={person} />;
}
