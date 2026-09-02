import { Money } from "@/domain/cart/value-objects/Money";
import {
  ExtraResources,
  ImageUrl,
  KnowledgeContent,
  Product,
  ProductId,
  ProductName,
} from "@/domain/cart/value-objects/Product/Product";
import {
  Effect,
  ProfileDetails,
  Stats,
} from "@/domain/cart/value-objects/Product/ProductDetails";

/**
 * A minimal, valid Product for domain tests that don't care about its knowledge content,
 * only its identity and price. Cart.spec.ts and CartItem.spec.ts both used to build this
 * by hand, repeating the same five-level nesting for every fixture.
 */
export function aProduct(
  overrides: Partial<{
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    iconUrl: string;
  }> = {},
): Product {
  const profile = new ProfileDetails("A test product profile.", new Stats(1, 1, 1), [
    new Effect("Test effect"),
  ]);

  return new Product(
    new ProductId(overrides.id ?? "test-product"),
    new ProductName(overrides.name ?? "Test Product"),
    new Money(overrides.price ?? 100),
    new ImageUrl(overrides.imageUrl ?? "https://example.com/image.png"),
    new ImageUrl(overrides.iconUrl ?? "https://example.com/icon.png"),
    new KnowledgeContent(profile, profile, profile),
    new ExtraResources("https://example.com/lore", "https://example.com/video"),
  );
}
