// iPhone shows a .vcf inline as a contact card. Android only downloads it, so the card page tells
// Android visitors where the file went. Any Android browser behaves this way, so match them all.
export function isAndroid(ua: string): boolean {
  return /\bAndroid\b/.test(ua);
}
