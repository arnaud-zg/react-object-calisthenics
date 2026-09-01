import { expect, test } from "@playwright/test";

test("visitor can add a product to the cart and reach checkout", async ({ page }) => {
  await page.goto("shopping-cart/");

  // First visit: the knowledge-level survey opens automatically.
  await expect(page.getByText("Choose Your Knowledge Level")).toBeVisible();
  await page.getByRole("combobox").selectOption("beginner");
  await page.getByRole("button", { name: "Continue" }).click();
  await expect(page.getByText("Choose Your Knowledge Level")).not.toBeVisible();

  await page.getByRole("button", { name: "Add to Cart" }).first().click();
  await expect(page.getByText("Your inventory is empty")).not.toBeVisible();

  await page.getByRole("button", { name: "Complete Purchase" }).click();

  await expect(page.getByText("End of the Demo")).toBeVisible();
});
