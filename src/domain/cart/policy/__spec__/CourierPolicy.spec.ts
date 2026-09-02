import { describe, expect, it } from "vitest";
import { Money } from "@/domain/cart/value-objects/Money";
import { CourierPolicy } from "../CourierPolicy";

const threshold = CourierPolicy.FREE_COURIER_THRESHOLD.toAmount();
const fee = CourierPolicy.COURIER_FEE.toAmount();

describe("CourierPolicy", () => {
  it("should return 0 courier fee if subtotal is equal to or above the threshold", () => {
    const subtotalAtThreshold = new Money(threshold);
    const subtotalAboveThreshold = new Money(threshold + 100);

    expect(CourierPolicy.calculate(subtotalAtThreshold).toAmount()).toBe(0);
    expect(CourierPolicy.calculate(subtotalAboveThreshold).toAmount()).toBe(0);
  });

  it("should return the courier fee if subtotal is below the threshold", () => {
    const subtotalBelowThreshold = new Money(threshold - 100);
    const courierFee = CourierPolicy.calculate(subtotalBelowThreshold);

    expect(courierFee.toAmount()).toBe(fee);
  });

  it("should correctly handle edge case just below threshold", () => {
    const subtotalJustBelow = new Money(threshold - 0.01);
    const courierFee = CourierPolicy.calculate(subtotalJustBelow);
    expect(courierFee.toAmount()).toBe(fee);
  });

  it("should correctly handle edge case just above threshold", () => {
    const subtotalJustAbove = new Money(threshold + 0.01);
    const courierFee = CourierPolicy.calculate(subtotalJustAbove);
    expect(courierFee.toAmount()).toBe(0);
  });
});
