import type { Metadata, Viewport } from "next";
import { HelloCard } from "@/components/hello/hello-card";

export const metadata: Metadata = {
  title: "Hello",
  description: "Save the Orynx contact card, book a demo, or see Orynx Desk and Orynx Clinic.",
};

export const viewport: Viewport = { themeColor: "#343b62" };

export default function HelloPage() {
  return <HelloCard />;
}
