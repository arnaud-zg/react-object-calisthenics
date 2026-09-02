import { describe, expect, it } from "vitest";
import { Quantity } from "@/domain/cart/value-objects/Quantity";
import { CartItem } from "../CartItem";
import { aProduct } from "./productFixtures";

const PRODUCT = aProduct({
  id: "thunderfury",
  name: "Thunderfury, Blessed Blade of the Windseeker",
  price: 485,
  imageUrl: "https://example.com/thunderfury.jpg",
});

describe("CartItem", () => {
  const initialQuantity = new Quantity(5);
  const cartItem = new CartItem(PRODUCT, initialQuantity);

  it("should return correct id, name, image and quantity", () => {
    expect(cartItem.id()).toBe("thunderfury");
    expect(cartItem.name()).toBe("Thunderfury, Blessed Blade of the Windseeker");
    expect(cartItem.image()).toBe("https://example.com/thunderfury.jpg");
    expect(cartItem.quantity().toValue()).toBe(5);
  });

  it("should increase quantity correctly up to MAX_QUANTITY", () => {
    const increased = cartItem.increaseQuantity();
    expect(increased.quantity().toValue()).toBe(6);

    // Increase to max
    let maxed = increased;
    for (let i = 0; i < 10; i++) {
      maxed = maxed.increaseQuantity();
    }
    expect(maxed.quantity().toValue()).toBe(CartItem.MAX_QUANTITY.toValue());

    // Cannot exceed MAX_QUANTITY
    const stillMax = maxed.increaseQuantity();
    expect(stillMax.quantity().toValue()).toBe(CartItem.MAX_QUANTITY.toValue());
  });

  it("should decrease quantity correctly down to MIN_QUANTITY", () => {
    const decreased = cartItem.decreaseQuantity();
    expect(decreased.quantity().toValue()).toBe(4);

    // Decrease to min
    let minItem = new CartItem(PRODUCT, new Quantity(3));
    for (let i = 0; i < 10; i++) {
      minItem = minItem.decreaseQuantity();
    }
    expect(minItem.quantity().toValue()).toBe(CartItem.MIN_QUANTITY.toValue());

    // Cannot go below MIN_QUANTITY
    const stillMin = minItem.decreaseQuantity();
    expect(stillMin.quantity().toValue()).toBe(CartItem.MIN_QUANTITY.toValue());
  });

  it("should update quantity and clamp between min and max", () => {
    const tooLow = new Quantity(0);
    const updatedLow = cartItem.updateQuantity(tooLow);
    expect(updatedLow.quantity().toValue()).toBe(CartItem.MIN_QUANTITY.toValue());

    const tooHigh = new Quantity(50);
    const updatedHigh = cartItem.updateQuantity(tooHigh);
    expect(updatedHigh.quantity().toValue()).toBe(CartItem.MAX_QUANTITY.toValue());

    const valid = new Quantity(7);
    const updatedValid = cartItem.updateQuantity(valid);
    expect(updatedValid.quantity().toValue()).toBe(7);
  });

  it("should calculate total price correctly", () => {
    const cart = new CartItem(PRODUCT, new Quantity(3));
    const total = cart.totalPrice();
    expect(total.toAmount()).toBe(1455);
  });
});
