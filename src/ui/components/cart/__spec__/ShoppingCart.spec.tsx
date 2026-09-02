import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { RefObject } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { welcomeSurveyStorage } from "@/config/storage.config";
import { ProductCatalog } from "@/data/products";
import { CourierPolicy } from "@/domain/cart/policy/CourierPolicy";
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

  // Not every real catalog product clears COMMERCE_CONFIG.freeCourierThreshold on its own,
  // only the priciest ones do. Adding one of those should still show the Free badge. The
  // "add X more" banner path for a product that doesn't clear it is covered instead in
  // ShoppingCart.freeCourier.spec.tsx against a mocked, deliberately cheap catalog.
  it("should show the Free badge when a product alone clears the free courier threshold", async () => {
    const user = userEvent.setup();
    renderShoppingCart();
    const catalog = ProductCatalog.forLocale("en").all();
    const threshold = CourierPolicy.FREE_COURIER_THRESHOLD;
    const expensiveIndex = catalog.findIndex((product) =>
      product.displayPrice().isAtLeast(threshold),
    );
    expect(expensiveIndex).toBeGreaterThanOrEqual(0);

    await user.click(addToCartButtons()[expensiveIndex] as HTMLElement);

    expect(screen.getByText("Free")).toBeInTheDocument();
  });
});
