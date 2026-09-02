import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { RefObject } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { welcomeSurveyStorage } from "@/config/storage.config";
import { aProduct } from "@/domain/cart/__spec__/productFixtures";
import { ShoppingCart } from "@/ui/components/cart/ShoppingCart";
import type { WelcomeModalHandle } from "@/ui/components/WelcomeModal/WelcomeModal.types";

// COMMERCE_CONFIG.freeShippingThreshold is 300, and every real catalog product costs far
// more than that, so the "how much is left" banner can never appear against real data
// (see the note in ShoppingCart.spec.tsx). Mocking the catalog with a cheap product here
// exercises the banner the real one can't reach.
vi.mock("@/data/products", () => ({
  ProductCatalog: {
    forLocale: () => ({
      all: () => [aProduct({ id: "trinket", name: "Cheap Trinket", price: 100 })],
    }),
  },
}));

function renderShoppingCart() {
  const welcomeModalHandle: RefObject<WelcomeModalHandle> = {
    current: { open: vi.fn(), close: vi.fn() },
  };
  return render(<ShoppingCart welcomeModalHandle={welcomeModalHandle} />);
}

describe("ShoppingCart free shipping banner", () => {
  beforeEach(() => {
    welcomeSurveyStorage.saveSurvey({ skill: "beginner" });
  });

  it("should show how much is left to reach free shipping while under the threshold", async () => {
    const user = userEvent.setup();
    renderShoppingCart();

    await user.click(screen.getByRole("button", { name: /add to cart/i }));

    expect(screen.getByText(/more to earn free delivery/i)).toBeInTheDocument();
  });
});
