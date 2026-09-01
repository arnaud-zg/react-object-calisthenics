import { describe, expect, it } from "vitest";
import { Money } from "@/domain/cart/value-objects/Money";
import { GoldSilverCopperAmount } from "../GoldSilverCopperAmount";

describe("GoldSilverCopperAmount", () => {
  it("should convert an amount under one silver into copper only", () => {
    const amount = GoldSilverCopperAmount.fromCopper(new Money(42));

    expect(amount.gold()).toBe(0);
    expect(amount.silver()).toBe(0);
    expect(amount.copper()).toBe(42);
  });

  it("should convert an amount under one gold into silver and copper", () => {
    const amount = GoldSilverCopperAmount.fromCopper(new Money(1234));

    expect(amount.gold()).toBe(0);
    expect(amount.silver()).toBe(12);
    expect(amount.copper()).toBe(34);
  });

  it("should convert a large amount into gold, silver, and copper", () => {
    const amount = GoldSilverCopperAmount.fromCopper(new Money(115105));

    expect(amount.gold()).toBe(11);
    expect(amount.silver()).toBe(51);
    expect(amount.copper()).toBe(5);
  });

  it("should round fractional copper before converting", () => {
    const amount = GoldSilverCopperAmount.fromCopper(new Money(99.6));

    expect(amount.gold()).toBe(0);
    expect(amount.silver()).toBe(1);
    expect(amount.copper()).toBe(0);
  });

  it("should report whether it has gold or silver", () => {
    expect(GoldSilverCopperAmount.fromCopper(new Money(0)).hasGold()).toBe(false);
    expect(GoldSilverCopperAmount.fromCopper(new Money(0)).hasSilver()).toBe(false);
    expect(GoldSilverCopperAmount.fromCopper(new Money(10000)).hasGold()).toBe(true);
    expect(GoldSilverCopperAmount.fromCopper(new Money(100)).hasSilver()).toBe(true);
  });
});
