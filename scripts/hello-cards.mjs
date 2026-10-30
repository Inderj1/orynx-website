// Builds the conference contact card files from lib/hello-cards.json into public/hello/:
//   contact.vcf   the "Save contact" file
//   qr.svg/.png   QR code for print and for a phone screenshot
//   card.pkpass   signed Apple Wallet pass (skipped if the signing files are missing)
//
// Run with `pnpm cards` after editing lib/hello-cards.json, then commit public/hello/.
// Wallet signing reads from ORYNX_WALLET_DIR (default ~/.orynx-wallet), which must hold
// pass.key, pass.cer (Pass Type ID certificate) and AppleWWDRCAG4.cer. Never commit those.

import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import QRCode from "qrcode";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const cards = JSON.parse(fs.readFileSync(path.join(ROOT, "lib/hello-cards.json"), "utf8"));
const WALLET_DIR = process.env.ORYNX_WALLET_DIR || path.join(os.homedir(), ".orynx-wallet");
const PASS_TYPE_ID = "pass.ai.orynx.card";
const TEAM_ID = "793W4F4AZB";

const INDIGO = "#343b62";
const RING = (outer) => `
  <circle cx="21" cy="24" r="15" stroke="${outer}" stroke-width="2.35" stroke-dasharray="76 18.25" transform="rotate(-22 21 24)"/>
  <circle cx="21" cy="24" r="11.5" stroke="#63a6c4" stroke-width="2.35" stroke-dasharray="57 15.26" transform="rotate(112 21 24)"/>
  <circle cx="21" cy="24" r="8" stroke="#d9856f" stroke-width="2.35" stroke-dasharray="38 12.27" transform="rotate(228 21 24)"/>`;

const allCards = [
  {
    dir: "hello",
    url: `${cards.siteUrl}/hello/`,
    serial: "orynx",
    vcard: orgVcard(cards.org),
    pass: {
      description: "Orynx contact card",
      primary: { key: "name", label: "ORYNX", value: cards.org.name },
      secondary: [{ key: "about", label: "WHAT WE DO", value: cards.org.tagline }],
      auxiliary: [
        { key: "email", label: "EMAIL", value: cards.org.email },
        { key: "phone", label: "PHONE", value: cards.org.phoneDisplay },
      ],
      back: [
        { key: "web", label: "Website", value: cards.siteUrl },
        { key: "demo", label: "Book a demo", value: `${cards.siteUrl}/contact/` },
        { key: "linkedin", label: "LinkedIn", value: cards.org.linkedin },
      ],
    },
  },
  ...cards.people.map((p) => ({
    dir: `hello/${p.slug}`,
    url: `${cards.siteUrl}/hello/${p.slug}/`,
    serial: p.slug,
    vcard: personVcard(p),
    pass: {
      description: `Orynx contact card: ${p.firstName} ${p.lastName}`,
      primary: { key: "name", label: "NAME", value: `${p.firstName} ${p.lastName}` },
      secondary: [{ key: "role", label: "ROLE", value: p.role }],
      auxiliary: [
        { key: "email", label: "EMAIL", value: p.email },
        ...(p.phone ? [{ key: "phone", label: "MOBILE", value: p.phoneDisplay }] : []),
      ],
      back: [
        { key: "web", label: "Website", value: cards.siteUrl },
        { key: "linkedin", label: "LinkedIn", value: p.linkedin },
      ],
    },
  })),
];

// vCard 3.0 is what iOS and Android Contacts both import cleanly. Lines end in CRLF.
function vcard(lines) {
  return ["BEGIN:VCARD", "VERSION:3.0", ...lines, "END:VCARD", ""].join("\r\n");
}

function orgVcard(org) {
  return vcard([
    "N:;;;;",
    `FN:${org.name}`,
    `ORG:${org.legalName}`,
    "X-ABShowAs:COMPANY",
    `EMAIL;TYPE=INTERNET,WORK:${org.email}`,
    `TEL;TYPE=WORK,VOICE:${org.phone}`,
    `URL;TYPE=WORK:${cards.siteUrl}`,
    `X-SOCIALPROFILE;TYPE=linkedin:${org.linkedin}`,
    `NOTE:${org.tagline}.`,
  ]);
}

function personVcard(p) {
  return vcard([
    `N:${p.lastName};${p.firstName};;;`,
    `FN:${p.firstName} ${p.lastName}`,
    `ORG:${cards.org.legalName}`,
    `TITLE:${p.role}`,
    `EMAIL;TYPE=INTERNET,WORK:${p.email}`,
    ...(p.phone ? [`TEL;TYPE=CELL,VOICE:${p.phone}`] : []),
    `URL;TYPE=WORK:${cards.siteUrl}`,
    `X-SOCIALPROFILE;TYPE=linkedin:${p.linkedin}`,
  ]);
}

// Indigo QR with the ring mark in a white centre square. Error correction H tolerates the covered centre.
function qrSvg(url) {
  const qr = QRCode.create(url, { errorCorrectionLevel: "H" });
  const n = qr.modules.size;
  const quiet = 4;
  const size = n + quiet * 2;
  const hole = Math.ceil(n * 0.24) | 1;
  const holeStart = quiet + (n - hole) / 2;
  let d = "";
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      const inHole = x + quiet >= holeStart - 0.5 && x + quiet < holeStart + hole + 0.5 &&
        y + quiet >= holeStart - 0.5 && y + quiet < holeStart + hole + 0.5;
      if (qr.modules.get(x, y) && !inHole) d += `M${x + quiet} ${y + quiet}h1v1h-1z`;
    }
  }
  const ringScale = (hole * 0.8) / 34;
  const ringAt = holeStart + hole * 0.1;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" shape-rendering="crispEdges">
<rect width="${size}" height="${size}" fill="#ffffff"/>
<path fill="${INDIGO}" d="${d}"/>
<g fill="none" stroke-linecap="round" shape-rendering="geometricPrecision" transform="translate(${ringAt} ${ringAt}) scale(${ringScale}) translate(-4 -7)">${RING("#46527f")}</g>
</svg>
`;
}

function walletFilesReady() {
  return ["pass.key", "pass.cer", "AppleWWDRCAG4.cer"].every((f) => fs.existsSync(path.join(WALLET_DIR, f)));
}

async function passImages() {
  const logo = fs.readFileSync(path.join(ROOT, "public/assets/orynx-logo-light.svg"));
  const icon = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><rect width="42" height="42" fill="${INDIGO}"/><g fill="none" stroke-linecap="round" transform="translate(0 -3)">${RING("#c9cde0")}</g></svg>`,
  );
  const files = {};
  for (const [scale, suffix] of [[1, ""], [2, "@2x"], [3, "@3x"]]) {
    files[`logo${suffix}.png`] = await sharp(logo, { density: 72 * scale * 2 }).resize({ height: 40 * scale }).png().toBuffer();
    files[`icon${suffix}.png`] = await sharp(icon, { density: 72 * scale * 4 }).resize(29 * scale, 29 * scale).png().toBuffer();
  }
  return files;
}

function buildPass(card, images, outFile) {
  const passJson = {
    formatVersion: 1,
    passTypeIdentifier: PASS_TYPE_ID,
    teamIdentifier: TEAM_ID,
    serialNumber: card.serial,
    organizationName: "Orynx",
    description: card.pass.description,
    backgroundColor: "rgb(52, 59, 98)",
    foregroundColor: "rgb(255, 255, 255)",
    labelColor: "rgb(201, 205, 224)",
    barcodes: [{ format: "PKBarcodeFormatQR", message: card.url, messageEncoding: "iso-8859-1", altText: card.url.replace("https://", "") }],
    generic: {
      primaryFields: [card.pass.primary],
      secondaryFields: card.pass.secondary,
      auxiliaryFields: card.pass.auxiliary,
      backFields: card.pass.back,
    },
  };

  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "orynx-pass-"));
  try {
    const files = { "pass.json": Buffer.from(JSON.stringify(passJson, null, 2)), ...images };
    const manifest = {};
    for (const [name, buf] of Object.entries(files)) {
      fs.writeFileSync(path.join(tmp, name), buf);
      manifest[name] = createHash("sha1").update(buf).digest("hex");
    }
    fs.writeFileSync(path.join(tmp, "manifest.json"), JSON.stringify(manifest));

    const certPem = path.join(tmp, "..", `orynx-signer-${process.pid}.pem`);
    const wwdrPem = path.join(tmp, "..", `orynx-wwdr-${process.pid}.pem`);
    execFileSync("openssl", ["x509", "-inform", "der", "-in", path.join(WALLET_DIR, "pass.cer"), "-out", certPem]);
    execFileSync("openssl", ["x509", "-inform", "der", "-in", path.join(WALLET_DIR, "AppleWWDRCAG4.cer"), "-out", wwdrPem]);
    execFileSync("openssl", [
      "smime", "-binary", "-sign", "-certfile", wwdrPem, "-signer", certPem,
      "-inkey", path.join(WALLET_DIR, "pass.key"), "-in", path.join(tmp, "manifest.json"),
      "-out", path.join(tmp, "signature"), "-outform", "DER",
    ]);
    fs.rmSync(certPem);
    fs.rmSync(wwdrPem);

    fs.rmSync(outFile, { force: true });
    execFileSync("zip", ["-q", "-X", "-j", outFile, ...fs.readdirSync(tmp).map((f) => path.join(tmp, f))]);
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
}

const signPasses = walletFilesReady();
const images = signPasses ? await passImages() : null;
if (!signPasses) console.warn(`Wallet signing files not found in ${WALLET_DIR}; skipping card.pkpass.`);

for (const card of allCards) {
  const out = path.join(ROOT, "public", card.dir);
  fs.mkdirSync(out, { recursive: true });
  fs.writeFileSync(path.join(out, "contact.vcf"), card.vcard);
  const svg = qrSvg(card.url);
  fs.writeFileSync(path.join(out, "qr.svg"), svg);
  await sharp(Buffer.from(svg), { density: 1200 }).resize(1200, 1200, { kernel: "nearest" }).png().toFile(path.join(out, "qr.png"));
  if (signPasses) buildPass(card, images, path.join(out, "card.pkpass"));
  console.log(`${card.url}  ->  public/${card.dir}/`);
}
