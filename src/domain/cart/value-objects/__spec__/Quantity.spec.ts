import { describe, expect, it } from "vitest";
import { Quantity } from "../Quantity";

describe("Quantity", () => {
  it("should create a Quantity with a positive value", () => {
    const initialQuantity = new Quantity(5);
    expect(initialQuantity.toValue()).toBe(5);
  });

  it("should throw an error if initialized with a negative value", () => {
    expect(() => new Quantity(-1)).toThrowError("Quantity cannot be negative");
  });

  it("should add two Quantities correctly", () => {
    const firstQuantity = new Quantity(3);
    const secondQuantity = new Quantity(7);
    const totalQuantity = firstQuantity.add(secondQuantity);

    expect(totalQuantity.toValue()).toBe(10);
  });

  it("should increment the quantity by 1", () => {
    const originalQuantity = new Quantity(2);
    const incrementedQuantity = originalQuantity.increment();

    expect(incrementedQuantity.toValue()).toBe(3);
  });

  it("should decrement the quantity by 1", () => {
    const originalQuantity = new Quantity(5);
    const decrementedQuantity = originalQuantity.decrement();

    expect(decrementedQuantity.toValue()).toBe(4);
  });

  it("should throw an error when trying to decrement 0", () => {
    const zeroQuantity = new Quantity(0);
    expect(() => zeroQuantity.decrement()).toThrowError("Quantity cannot be less than 0");
  });

  it("should report whether it is at least or at most another quantity", () => {
    expect(new Quantity(5).isAtLeast(new Quantity(5))).toBe(true);
    expect(new Quantity(6).isAtLeast(new Quantity(5))).toBe(true);
    expect(new Quantity(4).isAtLeast(new Quantity(5))).toBe(false);

    expect(new Quantity(5).isAtMost(new Quantity(5))).toBe(true);
    expect(new Quantity(4).isAtMost(new Quantity(5))).toBe(true);
    expect(new Quantity(6).isAtMost(new Quantity(5))).toBe(false);
  });

  it("should clamp to the minimum when below it", () => {
    const clamped = new Quantity(0).clampBetween(new Quantity(1), new Quantity(10));
    expect(clamped.toValue()).toBe(1);
  });

  it("should clamp to the maximum when above it", () => {
    const clamped = new Quantity(50).clampBetween(new Quantity(1), new Quantity(10));
    expect(clamped.toValue()).toBe(10);
  });

  it("should pass through unchanged when already within bounds", () => {
    const withinBounds = new Quantity(7);
    const clamped = withinBounds.clampBetween(new Quantity(1), new Quantity(10));
    expect(clamped).toBe(withinBounds);
  });

  it("should be immutable (methods return a new instance)", () => {
    const baseQuantity = new Quantity(3);
    const incrementedQuantity = baseQuantity.increment();

    expect(incrementedQuantity).not.toBe(baseQuantity);
    expect(baseQuantity.toValue()).toBe(3);
    expect(incrementedQuantity.toValue()).toBe(4);
  });
});
