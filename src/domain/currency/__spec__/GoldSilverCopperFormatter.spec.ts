import { describe, expect, it } from "vitest";
import { Money } from "@/domain/cart/value-objects/Money";
import { goldSilverCopperFormatter } from "../GoldSilverCopperFormatter";

describe("goldSilverCopperFormatter", () => {
  it("should show only copper when there is no gold or silver", () => {
    expect(goldSilverCopperFormatter.format(new Money(0))).toBe("0 🟤");
    expect(goldSilverCopperFormatter.format(new Money(42))).toBe("42 🟤");
  });

  it("should show silver and copper once there is at least one silver", () => {
    expect(goldSilverCopperFormatter.format(new Money(1234))).toBe("12 ⚪ 34 🟤");
  });

  it("should show gold, silver, and copper for large amounts", () => {
    expect(goldSilverCopperFormatter.format(new Money(115105))).toBe("11 🟡 51 ⚪ 5 🟤");
  });

  it("should still show silver when it is 0 but gold is present", () => {
    expect(goldSilverCopperFormatter.format(new Money(10005))).toBe("1 🟡 0 ⚪ 5 🟤");
  });
});
