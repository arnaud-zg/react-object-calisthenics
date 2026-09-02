import { expect, request, test } from "@playwright/test";

const PAGES = ["./", "shopping-cart/", "fr/", "fr/shopping-cart/"];

for (const path of PAGES) {
  test(`${path} hydrates without console or page errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
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
