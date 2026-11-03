import { test } from "node:test";
import assert from "node:assert/strict";
import { passLink } from "./pass-link.ts";

test("a pass link field keeps the address as its value and adds a tappable anchor", () => {
  assert.deepEqual(passLink("card", "Share this card", "https://orynx.ai/hello/theo-tuc7k/"), {
    key: "card",
    label: "Share this card",
    value: "https://orynx.ai/hello/theo-tuc7k/",
    attributedValue: "<a href='https://orynx.ai/hello/theo-tuc7k/'>orynx.ai/hello/theo-tuc7k/</a>",
  });
});

test("the anchor text drops the scheme but keeps the rest of the address", () => {
  const field = passLink("linkedin", "LinkedIn", "https://www.linkedin.com/in/theonymfi-s-6a997a50/");
  assert.equal(
    field.attributedValue,
    "<a href='https://www.linkedin.com/in/theonymfi-s-6a997a50/'>www.linkedin.com/in/theonymfi-s-6a997a50/</a>",
  );
});
