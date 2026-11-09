/**
 * Site analytics: Umami Cloud, cookieless, so it needs no consent banner.
 * Pure helpers live here so `node --test` can import them; the browser side is
 * components/analytics.tsx.
 *
 * The website ID comes from the Umami dashboard (Settings → Websites). It is
 * public (it ships in every page), so it lives in the code like the Web3Forms
 * key. While it is empty or malformed, nothing loads and the privacy policy
 * says the site has no analytics.
 */
export const UMAMI_WEBSITE_ID = "6eb3b011-c710-4794-8b79-97af391a8376";

export const UMAMI_SCRIPT_SRC = "https://cloud.umami.is/script.js";

/** Umami only records visits on these hosts, so local dev and Amplify previews stay out of the numbers. */
export const UMAMI_DOMAINS = "orynx.ai,www.orynx.ai";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

export const isValidWebsiteId = (id: string) => UUID_RE.test(id.trim());

export const ANALYTICS_ON = isValidWebsiteId(UMAMI_WEBSITE_ID);

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

export type Campaign = Partial<Record<(typeof UTM_KEYS)[number] | "landing_page" | "referrer", string>>;

const clip = (value: string, max = 200) => value.trim().slice(0, max);

/**
 * Where a visitor came from, read once when they land: the UTM tags on the
 * link, the page they landed on and the site that sent them (only when it is
 * another site). Only fields that have a value are returned.
 */
export function readCampaign(landingUrl: string, referrer: string): Campaign {
  const out: Campaign = {};
  let url: URL;
  try {
    url = new URL(landingUrl);
  } catch {
    return out;
  }
  for (const key of UTM_KEYS) {
    const value = url.searchParams.get(key);
    if (value && value.trim()) out[key] = clip(value);
  }
  out.landing_page = clip(url.pathname + url.search, 300);
  if (referrer) {
    try {
      const ref = new URL(referrer);
      if (ref.hostname !== url.hostname) out.referrer = clip(ref.origin + ref.pathname, 300);
    } catch {
      // Not a URL: leave it out.
    }
  }
  return out;
}

export type ClickEvent = { name: string; data: Record<string, string> };

/**
 * Which clicks count as events: email and phone links, any link to the contact
 * page, and links to other sites. Everything else (ordinary navigation) is
 * already a page view.
 */
export function classifyClick(href: string, pageUrl: string, label: string, from: string): ClickEvent | null {
  const text = clip(label.replace(/\s+/g, " "), 60);
  if (href.startsWith("mailto:")) return { name: "email_click", data: { address: href.slice(7).split("?")[0], from } };
  if (href.startsWith("tel:")) return { name: "phone_click", data: { from } };
  let target: URL;
  let page: URL;
  try {
    page = new URL(pageUrl);
    target = new URL(href, page);
  } catch {
    return null;
  }
  if (target.protocol !== "http:" && target.protocol !== "https:") return null;
  if (target.hostname === page.hostname) {
    if (/^\/contact\/?$/.test(target.pathname) && !/^\/contact\/?$/.test(page.pathname)) {
      return { name: "contact_cta", data: { label: text, from } };
    }
    return null;
  }
  return { name: "outbound_click", data: { host: target.hostname, from } };
}
