import { test } from "node:test";
import assert from "node:assert/strict";
import { classifyClick, isValidWebsiteId, readCampaign } from "./analytics.ts";

test("a website ID must be a UUID", () => {
  assert.equal(isValidWebsiteId("94db1cb1-74f4-4a40-ad6c-962362670409"), true);
  assert.equal(isValidWebsiteId(""), false);
  assert.equal(isValidWebsiteId("94db1cb1\"><script>"), false);
});

test("UTM tags, landing page and an outside referrer are kept", () => {
  assert.deepEqual(
    readCampaign(
      "https://orynx.ai/services/?utm_source=linkedin&utm_medium=social&utm_campaign=nov26&utm_content=post3",
      "https://www.linkedin.com/feed/?x=1"
    ),
    {
      utm_source: "linkedin",
      utm_medium: "social",
      utm_campaign: "nov26",
      utm_content: "post3",
      landing_page: "/services/?utm_source=linkedin&utm_medium=social&utm_campaign=nov26&utm_content=post3",
      referrer: "https://www.linkedin.com/feed/",
    }
  );
});

test("an internal referrer and empty tags are left out", () => {
  assert.deepEqual(readCampaign("https://orynx.ai/?utm_source=", "https://orynx.ai/about/"), {
    landing_page: "/?utm_source=",
  });
});

test("a broken landing URL gives nothing", () => {
  assert.deepEqual(readCampaign("not a url", ""), {});
});

const page = "https://orynx.ai/services/";

test("email and phone links are events", () => {
  assert.deepEqual(classifyClick("mailto:support@orynx.ai?subject=Hi", page, "support@orynx.ai", "/services/"), {
    name: "email_click",
    data: { address: "support@orynx.ai", from: "/services/" },
  });
  assert.deepEqual(classifyClick("tel:+447985309592", page, "Call", "/services/"), {
    name: "phone_click",
    data: { from: "/services/" },
  });
});

test("links to the contact page are CTAs, with their label", () => {
  assert.deepEqual(classifyClick("/contact", page, "  Get in\n touch ", "/services/"), {
    name: "contact_cta",
    data: { label: "Get in touch", from: "/services/" },
  });
  assert.equal(classifyClick("/contact/", "https://orynx.ai/contact/", "Contact", "/contact/"), null);
});

test("other internal links are not events; other sites are outbound", () => {
  assert.equal(classifyClick("/about/", page, "About", "/services/"), null);
  assert.equal(classifyClick("#faq", page, "FAQ", "/services/"), null);
  assert.deepEqual(classifyClick("https://uk.linkedin.com/company/orynx", page, "LinkedIn", "/services/"), {
    name: "outbound_click",
    data: { host: "uk.linkedin.com", from: "/services/" },
  });
  assert.equal(classifyClick("javascript:void(0)", page, "x", "/services/"), null);
});
