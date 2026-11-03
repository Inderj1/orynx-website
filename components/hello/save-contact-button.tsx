"use client";

import { useState } from "react";
import { isAndroid } from "@/lib/android-contact";

/* "Save contact". iPhone opens the .vcf as a contact card straight away. Android downloads it and shows a
   brief toast that is easy to miss, so after the tap the page says what to do next (see lib/android-contact.ts).
   Chrome blocks web pages from opening the native new-contact form, so a download is the best Android has. */
export function SaveContactButton({ href }: { href: string }) {
  const [downloaded, setDownloaded] = useState(false);
  return (
    <>
      <a
        href={href}
        onClick={() => {
          if (isAndroid(navigator.userAgent)) setDownloaded(true);
        }}
        className="flex items-center justify-center h-12 rounded-full bg-primary-foreground text-primary text-base mb-3"
      >
        Save contact
      </a>
      {downloaded && (
        <p role="status" className="text-sm leading-relaxed text-primary-foreground/70 mb-3">
          Downloaded. Open it from your notifications to add it to Contacts.
        </p>
      )}
    </>
  );
}
