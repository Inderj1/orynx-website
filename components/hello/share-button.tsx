"use client";

import { useState } from "react";
import type { ShareCard } from "@/lib/share-card";

/* "Share this card": opens the phone's share sheet with the card link, so a team member can send their card
   by Messages, WhatsApp, Mail or AirDrop and a visitor can pass it on. Browsers without a share sheet copy
   the link instead, and if even that is refused the link is shown to copy by hand. */
export function ShareButton({ title, text, url }: ShareCard) {
  const [note, setNote] = useState<"" | "copied" | "link">("");

  const onClick = async () => {
    try {
      if (typeof navigator.share === "function") {
        await navigator.share({ title, text, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setNote("copied");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return; // closed the sheet
      setNote("link");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-center h-12 rounded-full border border-primary-foreground/25 text-base mt-3"
      >
        Share this card
      </button>
      {note === "copied" && (
        <p role="status" className="text-sm leading-relaxed text-primary-foreground/70 mt-3">
          Link copied.
        </p>
      )}
      {note === "link" && (
        <p role="status" className="text-sm leading-relaxed text-primary-foreground/70 mt-3 break-all">
          Copy this link: {url}
        </p>
      )}
    </>
  );
}
