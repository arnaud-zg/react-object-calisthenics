import { describe, expect, it } from "vitest";
import { localizedPath } from "../localizedPath";

describe("localizedPath", () => {
  it("should map the English home page to the French one", () => {
    expect(localizedPath("/", "fr")).toBe("/fr/");
  });

  it("should map the French home page back to English", () => {
    expect(localizedPath("/fr/", "en")).toBe("/");
    expect(localizedPath("/fr", "en")).toBe("/");
  });

  it("should map the English shopping cart to the French one", () => {
    expect(localizedPath("/shopping-cart", "fr")).toBe("/fr/shopping-cart");
    expect(localizedPath("/shopping-cart/", "fr")).toBe("/fr/shopping-cart/");
  });

  it("should map the French shopping cart back to English", () => {
    expect(localizedPath("/fr/shopping-cart", "en")).toBe("/shopping-cart");
  });

  it("should be a no-op when already on the requested locale", () => {
    expect(localizedPath("/shopping-cart", "en")).toBe("/shopping-cart");
    expect(localizedPath("/fr/shopping-cart", "fr")).toBe("/fr/shopping-cart");
  });
});
