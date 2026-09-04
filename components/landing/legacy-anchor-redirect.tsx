"use client";

import { useEffect } from "react";

/**
 * Hash fragments never reach the server, so old in-page anchors have to be
 * remapped in the browser. Renders nothing.
 */
export function LegacyAnchorRedirect({ map }: { map: Record<string, string> }) {
  useEffect(() => {
    const apply = () => {
      const from = window.location.hash.replace(/^#/, "");
      const to = map[from];
      if (!to) return;
      const target = document.getElementById(to);
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${to}`);
      target?.scrollIntoView({ behavior: "auto", block: "start" });
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, [map]);
  return null;
}
