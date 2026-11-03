// Wallet makes a back field tappable only when told to. A bare URL in `value` relies on data
// detectors, which iOS does not apply reliably, so every link field also carries an
// `attributedValue` anchor. Wallet allows only <a href> there. The anchor text is the address
// without its scheme, so the back of the pass still reads as a list of addresses.
export type PassLinkField = { key: string; label: string; value: string; attributedValue: string };

export function passLink(key: string, label: string, url: string): PassLinkField {
  const shown = url.replace(/^https?:\/\//, "");
  return { key, label, value: url, attributedValue: `<a href='${url}'>${shown}</a>` };
}
