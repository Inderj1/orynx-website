import { test } from "node:test";
import assert from "node:assert/strict";
import { isAndroid } from "./android-contact.ts";

const UA = {
  chromeAndroid: "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36",
  samsungInternet: "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/26.0 Chrome/122.0.0.0 Mobile Safari/537.36",
  firefoxAndroid: "Mozilla/5.0 (Android 14; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0",
  androidWebView: "Mozilla/5.0 (Linux; Android 14; Pixel 7 Build/UP1A.231005.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.0.0 Mobile Safari/537.36",
  iphoneSafari: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1",
  desktopChrome: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
};

test("Chrome on Android is Android", () => {
  assert.equal(isAndroid(UA.chromeAndroid), true);
});

test("Samsung Internet, Firefox and in-app web views on Android are Android", () => {
  assert.equal(isAndroid(UA.samsungInternet), true);
  assert.equal(isAndroid(UA.firefoxAndroid), true);
  assert.equal(isAndroid(UA.androidWebView), true);
});

test("iPhone and desktop are not Android", () => {
  assert.equal(isAndroid(UA.iphoneSafari), false);
  assert.equal(isAndroid(UA.desktopChrome), false);
});
