import { describe, expect, it } from "vitest";
import { Money } from "@/domain/cart/value-objects/Money";
import { ShippingPolicy } from "../ShippingPolicy";

const threshold = ShippingPolicy.SHIPPING_THRESHOLD.toAmount();
const cost = ShippingPolicy.SHIPPING_COST.toAmount();

describe("ShippingPolicy", () => {
  it("should return 0 shipping if subtotal is equal to or above the threshold", () => {
    const subtotalAtThreshold = new Money(threshold);
    const subtotalAboveThreshold = new Money(threshold + 100);

    expect(ShippingPolicy.calculate(subtotalAtThreshold).toAmount()).toBe(0);
    expect(ShippingPolicy.calculate(subtotalAboveThreshold).toAmount()).toBe(0);
  });

  it("should return the shipping cost if subtotal is below the threshold", () => {
    const subtotalBelowThreshold = new Money(threshold - 100);
    const shippingCost = ShippingPolicy.calculate(subtotalBelowThreshold);

    expect(shippingCost.toAmount()).toBe(cost);
  });

  it("should correctly handle edge case just below threshold", () => {
    const subtotalJustBelow = new Money(threshold - 0.01);
    const shippingCost = ShippingPolicy.calculate(subtotalJustBelow);
    expect(shippingCost.toAmount()).toBe(cost);
  });

  it("should correctly handle edge case just above threshold", () => {
    const subtotalJustAbove = new Money(threshold + 0.01);
    const shippingCost = ShippingPolicy.calculate(subtotalJustAbove);
    expect(shippingCost.toAmount()).toBe(0);
  });
});
