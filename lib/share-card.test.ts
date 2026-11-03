import { test } from "node:test";
import assert from "node:assert/strict";
import { shareCardData } from "./share-card.ts";

test("a person's card shares their name, role and page", () => {
  const data = shareCardData({
    person: { firstName: "Theo", lastName: "Raptaki", role: "Chief Marketing Officer" },
    url: "https://orynx.ai/hello/theo-tuc7k/",
  });
  assert.deepEqual(data, {
    title: "Theo Raptaki, Orynx",
    text: "Theo Raptaki, Chief Marketing Officer at Orynx.",
    url: "https://orynx.ai/hello/theo-tuc7k/",
  });
});

test("the company card shares the tagline and page", () => {
  const data = shareCardData({
    org: { name: "Orynx", tagline: "Applied AI for service businesses and clinics" },
    url: "https://orynx.ai/hello/",
  });
  assert.deepEqual(data, {
    title: "Orynx",
    text: "Orynx. Applied AI for service businesses and clinics.",
    url: "https://orynx.ai/hello/",
  });
});
