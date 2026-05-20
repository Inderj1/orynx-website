import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const SITE_URL = "https://orynx.co.uk"

const routes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/agents", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/case-studies", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/how-it-works", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/insights", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/products", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/products/ambient-scribe", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/products/autoprd", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/products/call-center-ai", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/products/commbridge", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/products/compliance-os", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/products/diawound-ai", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/products/ehr-bridge", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/products/medsynth", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/products/openeyes-cloud", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/products/orynx-education", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/solutions", priority: 0.8, changeFrequency: "monthly" as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
