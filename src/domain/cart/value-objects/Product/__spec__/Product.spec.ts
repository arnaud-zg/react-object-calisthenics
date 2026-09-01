import { describe, expect, it } from "vitest";
import { Money } from "../../Money";
import { ImageUrl, KnowledgeContent, Product, ProductId, ProductName } from "../Product";
import { Effect, ExtraResources, ProfileDetails, Stats } from "../ProductDetails";

describe("Product Value Objects", () => {
  it("should create a ProductId and return value", () => {
    const productId = new ProductId("abc123");
    expect(productId.toValue()).toBe("abc123");
    expect(() => new ProductId("")).toThrow("Product ID cannot be empty");
  });

  it("should create a ProductName and return value", () => {
    const productName = new ProductName("Sword");
    expect(productName.toValue()).toBe("Sword");
    expect(() => new ProductName("")).toThrow("Product name cannot be empty");
  });

  it("should create an ImageUrl and return value", () => {
    const imageUrl = new ImageUrl("http://image.link");
    expect(imageUrl.toValue()).toBe("http://image.link");
    expect(() => new ImageUrl("")).toThrow("Image URL cannot be empty");
  });
});

describe("KnowledgeContent and Product", () => {
  const statsByLevel = {
    beginner: { power: 1, durability: 2, manaBoost: 3 },
    adventurer: { power: 4, durability: 5, manaBoost: 6 },
    expert: { power: 7, durability: 8, manaBoost: 9 },
  } as const;

  const profileFor = (level: "beginner" | "adventurer" | "expert") => {
    const { power, durability, manaBoost } = statsByLevel[level];
    return new ProfileDetails(
      `${level} tale`,
      new Stats(power, durability, manaBoost),
      [new Effect(`${level} effect`)],
      new ExtraResources(`https://lore.link/${level}`, `https://video.link/${level}`),
    );
  };

  const knowledge = new KnowledgeContent(
    profileFor("beginner"),
    profileFor("adventurer"),
    profileFor("expert"),
  );

  const product = new Product(
    new ProductId("sword01"),
    new ProductName("Excalibur"),
    new Money(500),
    new ImageUrl("http://image.link"),
    knowledge,
  );

  it("should return correct product info", () => {
    expect(product.displayId()).toBe("sword01");
    expect(product.displayName()).toBe("Excalibur");
    expect(product.displayPrice().toAmount()).toBe(500);
    expect(product.displayImage()).toBe("http://image.link");
  });

  it.each(["beginner", "adventurer", "expert"] as const)(
    "should route %s to its own profile's description, effects, stats, lore link, and video URL",
    (level) => {
      expect(product.describeProfile(level)).toBe(`${level} tale`);
      expect(product.listProfileEffects(level)).toEqual([`${level} effect`]);
      expect(product.getProfileStats(level)).toEqual(statsByLevel[level]);
      expect(product.getLoreLink(level)).toBe(`https://lore.link/${level}`);
      expect(product.getVideoUrl(level)).toBe(`https://video.link/${level}`);
    },
  );
});
