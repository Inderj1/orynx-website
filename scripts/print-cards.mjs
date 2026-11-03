// Print artwork for the NFC cards and stickers, from lib/hello-cards.json.
// Writes print/<name>/front|back.{pdf,png} and print/stickers/*.{pdf,png}.
// Run `pnpm cards` first (the card backs reuse public/hello/**/qr.svg), then `pnpm print-cards`.
//
// Sizes include bleed; keep text inside the safe area. Cards: ISO CR80 85.6 x 54 mm + 3 mm bleed.
// Phone sticker: 30 mm round + 2 mm bleed. Stand sticker: 60 x 60 mm + 2 mm bleed.
// PDFs are RGB with fonts embedded; printers convert to CMYK.

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT = path.join(ROOT, "print");
const CHROME = process.env.CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const cards = JSON.parse(fs.readFileSync(path.join(ROOT, "lib/hello-cards.json"), "utf8"));

const stripMeta = (svg) => svg.replace(/<metadata>[\s\S]*?<\/metadata>/, "").replace(/<\?xml[^>]*>/, "");
const logoDark = stripMeta(fs.readFileSync(path.join(ROOT, "public/assets/orynx-logo.svg"), "utf8"));
const logoLight = stripMeta(fs.readFileSync(path.join(ROOT, "public/assets/orynx-logo-light.svg"), "utf8"));
const qr = (dir) => fs.readFileSync(path.join(ROOT, "public", dir, "qr.svg"), "utf8");

const RING = (outer) => `<svg viewBox="4 7 34 34" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke-linecap="round">
  <circle cx="21" cy="24" r="15" stroke="${outer}" stroke-width="2.35" stroke-dasharray="76 18.25" transform="rotate(-22 21 24)"/>
  <circle cx="21" cy="24" r="11.5" stroke="#63a6c4" stroke-width="2.35" stroke-dasharray="57 15.26" transform="rotate(112 21 24)"/>
  <circle cx="21" cy="24" r="8" stroke="#d9856f" stroke-width="2.35" stroke-dasharray="38 12.27" transform="rotate(228 21 24)"/></g></svg>`;

// Contactless waves: the symbol people recognise as "tap here".
const TAP = (color) => `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round">
  <path d="M7 8.5a5 5 0 0 1 0 7"/><path d="M10.5 6a9 9 0 0 1 0 12"/><path d="M14 3.5a13 13 0 0 1 0 17"/></svg>`;

function page({ w, h, body, round = false }) {
  return `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500&family=JetBrains+Mono:wght@400&display=block" rel="stylesheet">
<style>
  @page { size: ${w}mm ${h}mm; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: ${w}mm; height: ${h}mm; overflow: hidden; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { font-family: "Instrument Sans", sans-serif; color: #1b1f38; position: relative; ${round ? "border-radius: 50%;" : ""} }
  .mono { font-family: "JetBrains Mono", monospace; }
  .abs { position: absolute; }
  svg { display: block; }
</style></head><body>${body}</body></html>`;
}

// Card: 91.6 x 60 mm with 3 mm bleed. Safe area starts 3 mm bleed + 4 mm inset = 7 mm.
const CARD = { w: 91.6, h: 60 };

function cardFront({ eyebrow = "ORYNX", name, sub, lines }) {
  return page({
    ...CARD,
    body: `<div class="abs" style="inset:0;background:#343b62"></div>
<div class="abs" style="left:7mm;top:7mm;height:6mm">${logoLight.replace("<svg ", '<svg style="height:6mm;width:auto" ')}</div>
<div class="abs" style="left:7mm;top:19mm;right:7mm;color:#fff">
  <div class="mono" style="display:flex;align-items:center;gap:2mm;font-size:5.5pt;color:#c9cde0;letter-spacing:.04em">
    <span style="width:5mm;height:.25mm;background:#d9856f;display:block"></span>${eyebrow}</div>
  <div style="font-size:15pt;line-height:1.1;margin-top:2mm">${name}</div>
  <div style="font-size:7pt;color:#c9cde0;margin-top:1mm">${sub}</div>
</div>
<div class="abs mono" style="left:7mm;bottom:7mm;right:7mm;font-size:6pt;line-height:1.55;color:#fff">
  ${lines.map((l) => `<div>${l}</div>`).join("")}
</div>`,
  });
}

function cardBack({ qrSvg, url }) {
  return page({
    ...CARD,
    body: `<div class="abs" style="inset:0;background:#ffffff"></div>
<div class="abs" style="left:7mm;top:50%;transform:translateY(-50%);width:34mm;height:34mm">${qrSvg.replace("<svg ", '<svg style="width:34mm;height:34mm" ')}</div>
<div class="abs" style="left:45mm;right:7mm;top:50%;transform:translateY(-50%)">
  <div style="width:7mm;height:7mm">${TAP("#d9856f")}</div>
  <div style="font-size:12pt;line-height:1.15;margin-top:2mm">Tap or scan.</div>
  <div style="font-size:7pt;color:#4f5875;margin-top:1mm;line-height:1.35">Save the contact or book a demo.</div>
  <div class="mono" style="font-size:5.5pt;color:#a2472f;margin-top:3mm;word-break:break-all">${url}</div>
</div>
<div class="abs" style="right:7mm;bottom:6mm;height:3.5mm">${logoDark.replace("<svg ", '<svg style="height:3.5mm;width:auto" ')}</div>`,
  });
}

// Phone sticker: 34 mm square canvas, 30 mm circle trim, 2 mm bleed.
const phoneSticker = page({
  w: 34, h: 34, round: true,
  body: `<div class="abs" style="inset:0;background:#343b62;border-radius:50%"></div>
<div class="abs" style="left:50%;top:7.5mm;transform:translateX(-50%);width:11mm;height:11mm">${RING("#c9cde0")}</div>
<div class="abs" style="left:0;right:0;top:20.5mm;display:flex;justify-content:center;align-items:center;gap:1mm;color:#fff">
  <div style="width:3.2mm;height:3.2mm">${TAP("#d9856f")}</div>
  <div class="mono" style="font-size:5pt;letter-spacing:.06em">TAP</div>
</div>`,
});

// Stand sticker: 64 x 64 mm canvas, 60 mm square trim, 2 mm bleed. Safe area at 6 mm.
const standSticker = page({
  w: 64, h: 64,
  body: `<div class="abs" style="inset:0;background:#343b62"></div>
<div class="abs" style="left:6mm;top:6mm;height:5mm">${logoLight.replace("<svg ", '<svg style="height:5mm;width:auto" ')}</div>
<div class="abs" style="right:6mm;top:5.5mm;width:6mm;height:6mm">${TAP("#d9856f")}</div>
<div class="abs" style="left:50%;top:15mm;transform:translateX(-50%);width:31mm;height:31mm;background:#fff;padding:0">${qr("hello").replace("<svg ", '<svg style="width:31mm;height:31mm" ')}</div>
<div class="abs" style="left:6mm;right:6mm;bottom:6mm;text-align:center;color:#fff">
  <div style="font-size:11pt">Tap or scan.</div>
  <div class="mono" style="font-size:5pt;color:#c9cde0;margin-top:1mm">orynx.ai/hello</div>
</div>`,
});

const jobs = [
  {
    dir: "orynx",
    front: cardFront({
      eyebrow: "DESK · CLINIC",
      name: cards.org.name,
      sub: cards.org.tagline,
      lines: [cards.org.email, cards.org.phoneDisplay, "orynx.ai"],
    }),
    back: cardBack({ qrSvg: qr("hello"), url: "orynx.ai/hello" }),
  },
  ...cards.people.map((p) => ({
    dir: p.slug.replace(/-[a-z0-9]+$/, ""),
    front: cardFront({
      name: `${p.firstName} ${p.lastName}`,
      sub: p.role,
      lines: [p.email, ...(p.phoneDisplay ? [p.phoneDisplay] : []), "orynx.ai"],
    }),
    back: cardBack({ qrSvg: qr(`hello/${p.slug}`), url: `orynx.ai/hello/${p.slug}` }),
  })),
];

function render(html, file, w, h) {
  const htmlFile = `${file}.html`;
  fs.writeFileSync(htmlFile, html);
  const common = ["--headless", "--disable-gpu", "--hide-scrollbars", "--virtual-time-budget=8000", "--run-all-compositor-stages-before-draw"];
  execFileSync(CHROME, [...common, "--no-pdf-header-footer", `--print-to-pdf=${file}.pdf`, `file://${htmlFile}`], { stdio: "ignore" });
  // Proof PNG at 300 dpi.
  const px = (mm) => Math.round((mm / 25.4) * 96);
  execFileSync(CHROME, [...common, `--window-size=${px(w)},${px(h)}`, "--force-device-scale-factor=3.125", `--screenshot=${file}.png`, `file://${htmlFile}`], { stdio: "ignore" });
  fs.rmSync(htmlFile);
}

for (const job of jobs) {
  const dir = path.join(OUT, job.dir);
  fs.mkdirSync(dir, { recursive: true });
  render(job.front, path.join(dir, "front"), CARD.w, CARD.h);
  render(job.back, path.join(dir, "back"), CARD.w, CARD.h);
  console.log(`print/${job.dir}/  front + back`);
}
fs.mkdirSync(path.join(OUT, "stickers"), { recursive: true });
render(phoneSticker, path.join(OUT, "stickers", "phone-30mm"), 34, 34);
render(standSticker, path.join(OUT, "stickers", "stand-60mm"), 64, 64);
console.log("print/stickers/  phone-30mm + stand-60mm");
