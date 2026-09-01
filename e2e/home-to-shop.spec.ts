import { expect, test } from "@playwright/test";

test("visitor can get from the home page to the shop", async ({ page }) => {
  await page.goto("./");

  await expect(
    page.getByRole("heading", { name: "Maintainable Frontend Architecture with React" }),
  ).toBeVisible();

  await page.getByRole("link", { name: /Try the Shopping Cart Experience/ }).click();
  await expect(page).toHaveURL(/\/shopping-cart\/?$/);

  // The knowledge-level survey opens automatically on a first visit and hides the rest
  // of the page from assistive tech (and from role-based locators) while it is open.
  await page.getByRole("combobox").selectOption("beginner");
  await page.getByRole("button", { name: "Continue" }).click();

  await expect(page.getByRole("heading", { name: "Mystical Inventory" })).toBeVisible();
});
