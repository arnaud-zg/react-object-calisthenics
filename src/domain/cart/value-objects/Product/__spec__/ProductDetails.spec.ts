import { describe, expect, it } from "vitest";
import { Effect, ProfileDetails, Stats } from "../ProductDetails";

describe("ProfileDetails", () => {
  const stats = new Stats(10, 20, 5);
  const effects = [new Effect("Fire damage"), new Effect("Stun enemies")];
  const profile = new ProfileDetails("Test description", stats, effects);

  it("should return the correct description", () => {
    expect(profile.describe()).toBe("Test description");
  });

  it("should return the non-zero stats", () => {
    expect(profile.listStats()).toEqual([
      { label: "Power", value: 10 },
      { label: "Durability", value: 20 },
      { label: "Mana Boost", value: 5 },
    ]);
  });

  it("should return a list of effect values", () => {
    expect(profile.listEffects()).toEqual(["Fire damage", "Stun enemies"]);
  });
});

describe("Stats", () => {
  it("should throw an error for negative values", () => {
    expect(() => new Stats(-1, 0, 0)).toThrow("Stats cannot be negative");
  });

  it("should increase power correctly", () => {
    const originalStats = new Stats(5, 10, 15);
    const newStats = originalStats.increasePower(7);
    expect(newStats.list()).toEqual([
      { label: "Power", value: 12 },
      { label: "Durability", value: 10 },
      { label: "Mana Boost", value: 15 },
    ]);
  });

  it("should list every stat that is greater than zero", () => {
    const stats = new Stats(3, 6, 9);
    expect(stats.list()).toEqual([
      { label: "Power", value: 3 },
      { label: "Durability", value: 6 },
      { label: "Mana Boost", value: 9 },
    ]);
  });

  it("should omit stats that are zero", () => {
    const stats = new Stats(3, 0, 0);
    expect(stats.list()).toEqual([{ label: "Power", value: 3 }]);
  });
});

describe("Effect", () => {
  it("should return the effect value", () => {
    const effect = new Effect("Stun enemies");
    expect(effect.toValue()).toBe("Stun enemies");
  });
});
