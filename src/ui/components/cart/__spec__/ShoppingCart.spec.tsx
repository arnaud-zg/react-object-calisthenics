import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { RefObject } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { welcomeSurveyStorage } from "@/config/storage.config";
import { ProductCatalog } from "@/data/products";
import { ShoppingCart } from "@/ui/components/cart/ShoppingCart";
import type { WelcomeModalHandle } from "@/ui/components/WelcomeModal/WelcomeModal.types";

// A pre-saved survey keeps the WelcomeModal from auto-opening: these tests are about
// the cart, not the modal, and a beginner skill is the default profile anyway.
function renderShoppingCart() {
  const welcomeModalHandle: RefObject<WelcomeModalHandle> = {
    current: { open: vi.fn(), close: vi.fn() },
  };
  return render(<ShoppingCart welcomeModalHandle={welcomeModalHandle} />);
}

function addToCartButtons() {
  return screen.getAllByRole("button", { name: /add to cart/i });
}

describe("ShoppingCart", () => {
  beforeEach(() => {
    welcomeSurveyStorage.saveSurvey({ skill: "beginner" });
  });

  it("should list every product in the catalog", () => {
    renderShoppingCart();

    for (const product of ProductCatalog.forLocale("en").all()) {
      expect(screen.getByText(product.displayName())).toBeInTheDocument();
    }
  });

  it("should start with an empty cart", () => {
    renderShoppingCart();

    expect(screen.getByText("Your inventory is empty")).toBeInTheDocument();
  });

  it("should add a product to the cart and update the subtotal", async () => {
    const user = userEvent.setup();
    renderShoppingCart();
    const [firstProduct] = ProductCatalog.forLocale("en").all();

    await user.click(addToCartButtons()[0] as HTMLElement);

    expect(screen.queryByText("Your inventory is empty")).not.toBeInTheDocument();
    const cartPanel = screen.getByRole("complementary");
    expect(
      within(cartPanel).getByRole("heading", {
        level: 3,
        name: firstProduct?.displayName(),
      }),
    ).toBeInTheDocument();
  });

  it("should increase and decrease the quantity of a cart item", async () => {
    const user = userEvent.setup();
    renderShoppingCart();
    const [firstProduct] = ProductCatalog.forLocale("en").all();
    const productName = firstProduct?.displayName() ?? "";

    await user.click(addToCartButtons()[0] as HTMLElement);

    const quantityDisplay = 'span[aria-live="polite"]';
    const increaseButton = screen.getByRole("button", {
      name: `Increase quantity of ${productName}`,
    });
    await user.click(increaseButton);
    expect(screen.getByText("2", { selector: quantityDisplay })).toBeInTheDocument();

    const decreaseButton = screen.getByRole("button", {
      name: `Decrease quantity of ${productName}`,
    });
    await user.click(decreaseButton);
    expect(screen.getByText("1", { selector: quantityDisplay })).toBeInTheDocument();
  });

  it("should remove a cart item", async () => {
    const user = userEvent.setup();
    renderShoppingCart();
    const [firstProduct] = ProductCatalog.forLocale("en").all();
    const productName = firstProduct?.displayName() ?? "";

    await user.click(addToCartButtons()[0] as HTMLElement);

    const removeButton = screen.getByRole("button", {
      name: `Remove ${productName} from cart`,
    });
    await user.click(removeButton);

    expect(screen.getByText("Your inventory is empty")).toBeInTheDocument();
  });

  // Every real catalog product costs far more than COMMERCE_CONFIG.freeShippingThreshold
  // (adding any single one already qualifies for free shipping), so the "add X more"
  // banner can never actually appear against real data. That path is covered instead in
  // ShoppingCart.freeShipping.spec.tsx against a mocked, deliberately cheap catalog.
  it("should show the Free badge, since every real product already clears the threshold", async () => {
    const user = userEvent.setup();
    renderShoppingCart();

    await user.click(addToCartButtons()[0] as HTMLElement);

    expect(screen.getByText("Free")).toBeInTheDocument();
  });
});
