import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const SITE_URL = "https://orynx.ai"

// Paths carry a trailing slash to match next.config.mjs `trailingSlash: true`,
// so the sitemap lists the URLs the site actually serves.
const routes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/products/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/about/", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact/", priority: 0.6, changeFrequency: "yearly" as const },
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
