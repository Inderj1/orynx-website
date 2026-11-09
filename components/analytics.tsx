"use client";

import { useEffect } from "react";
import Script from "next/script";
import {
  ANALYTICS_ON,
  UMAMI_DOMAINS,
  UMAMI_SCRIPT_SRC,
  UMAMI_WEBSITE_ID,
  classifyClick,
  readCampaign,
  type Campaign,
} from "@/lib/analytics";

declare global {
  interface Window {
    umami?: { track: (name: string, data?: Record<string, string>) => void };
  }
}

/*
 * Where this visit came from, captured when the visitor lands. Kept in memory
 * only (nothing is written to the device, so no consent is needed); it lasts
 * across in-site navigation, which is client-side, and is attached to an
 * enquiry so each one says which post or campaign it came from.
 */
let campaign: Campaign | null = null;

export function getCampaign(): Campaign {
  if (campaign === null && typeof window !== "undefined") {
    campaign = readCampaign(window.location.href, document.referrer);
  }
  return campaign ?? {};
}

/** Send a custom event. Safe anywhere: does nothing when Umami is off, blocked or still loading. */
export function trackEvent(name: string, data?: Record<string, string>) {
  try {
    window.umami?.track(name, data);
  } catch {
    // A blocked tracker must never break the page.
  }
}

/** Loads Umami and turns contact, email, phone and outbound link clicks into events. Renders nothing while off. */
export function Analytics() {
  useEffect(() => {
    getCampaign();
    if (!ANALYTICS_ON) return;
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;
      const hit = classifyClick(
        link.getAttribute("href") ?? "",
        window.location.href,
        link.textContent ?? "",
        window.location.pathname
      );
      if (hit) trackEvent(hit.name, hit.data);
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!ANALYTICS_ON) return null;
  return (
    <Script
      src={UMAMI_SCRIPT_SRC}
      data-website-id={UMAMI_WEBSITE_ID}
      data-domains={UMAMI_DOMAINS}
      strategy="afterInteractive"
    />
  );
}
