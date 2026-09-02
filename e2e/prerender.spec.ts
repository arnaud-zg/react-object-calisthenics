import { expect, request, test } from "@playwright/test";

const PAGES = ["./", "shopping-cart/", "fr/", "fr/shopping-cart/"];

for (const path of PAGES) {
  test(`${path} hydrates without console or page errors`, async ({ page, baseURL }) => {
    const origin = new URL(baseURL ?? "http://localhost").origin;
    const errors: string[] = [];

    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() !== "error") return;

      // Product images are hotlinked from Wowpedia; CI's shared runner IPs can get
      // rate-limited by that CDN independently of anything this app does. A same-origin
      // console error still fails the test, a cross-origin resource-load failure doesn't.
      const resourceUrl = message.location().url;
      if (resourceUrl && !resourceUrl.startsWith(origin)) return;

      errors.push(message.text());
    });

    await page.goto(path, { waitUntil: "networkidle" });

    expect(errors).toEqual([]);
  });

  test(`${path} serves rendered content without running any JavaScript`, async () => {
    const context = await request.newContext({ baseURL: undefined });
    const url = new URL(
      path,
      "http://localhost:4173/react-object-calisthenics/",
    ).toString();
    const response = await context.get(url);
    const body = await response.text();

    expect(response.ok()).toBe(true);
    expect(body).toContain('<div id="app"><div');
    expect(body).toMatch(/<title>[^<]+<\/title>/);
    await context.dispose();
  });
}
