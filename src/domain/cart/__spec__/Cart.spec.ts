import { describe, expect, it } from "vitest";
import { Cart } from "../Cart";
import { CourierPolicy } from "../policy/CourierPolicy";
import { aProduct } from "./productFixtures";

const FREE_COURIER_THRESHOLD = CourierPolicy.FREE_COURIER_THRESHOLD.toAmount();
const COURIER_FEE = CourierPolicy.COURIER_FEE.toAmount();

const PRODUCT_1 = aProduct({
  id: "thunderfury",
  name: "Thunderfury, Blessed Blade of the Windseeker",
  price: 485,
});
const PRODUCT_2 = aProduct({ id: "ashbringer", name: "Ashbringer", price: 750 });

describe("Cart", () => {
  it("should be empty when initialized without items", () => {
    const cart = new Cart();
    expect(cart.isEmpty()).toBe(true);
  });

  it("should add items to the cart", () => {
    const cart = new Cart();
    const cartAfterAdd = cart.addItem(PRODUCT_1);

    expect(cartAfterAdd.isEmpty()).toBe(false);
    const [addedItem] = cartAfterAdd.listItems();
    expect(addedItem).toBeDefined();
    expect(addedItem?.id()).toBe("thunderfury");
    expect(addedItem?.quantity().toValue()).toBe(1);
  });

  it("should increment quantity if product already exists", () => {
    let cart = new Cart();
    cart = cart.addItem(PRODUCT_1);
    cart = cart.addItem(PRODUCT_1);

    const [item] = cart.listItems();
    expect(item?.quantity().toValue()).toBe(2);
  });

  it("should increase quantity of an existing item by id", () => {
    let cart = new Cart();
    cart = cart.addItem(PRODUCT_1);
    cart = cart.increaseQuantity("thunderfury");

    const [item] = cart.listItems();
    expect(item?.quantity().toValue()).toBe(2);
  });

  it("should decrease quantity of an existing item by id", () => {
    let cart = new Cart();
    cart = cart.addItem(PRODUCT_1);
    cart = cart.addItem(PRODUCT_1);

    const cartAfterDecrease = cart.decreaseQuantity("thunderfury");
    const [item] = cartAfterDecrease.listItems();
    expect(item?.quantity().toValue()).toBe(1);
  });

  it("should not decrement below MIN_QUANTITY", () => {
    const cart = new Cart().addItem(PRODUCT_1);
    const cartAfterDecrease = cart.decreaseQuantity("thunderfury");
    const [item] = cartAfterDecrease.listItems();
    expect(item?.quantity().toValue()).toBe(1);
  });

  it("should do nothing when decreasing or increasing an id that isn't in the cart", () => {
    const cart = new Cart().addItem(PRODUCT_1);

    expect(cart.decreaseQuantity("unknown").listItems()).toHaveLength(1);
    expect(cart.increaseQuantity("unknown").listItems()).toHaveLength(1);
  });

  it("should remove an item from the cart by id", () => {
    let cart = new Cart();
    cart = cart.addItem(PRODUCT_1);
    cart = cart.addItem(PRODUCT_2);

    const cartAfterRemoval = cart.removeItem("thunderfury");
    const [remainingItem] = cartAfterRemoval.listItems();
    expect(cartAfterRemoval.listItems()).toHaveLength(1);
    expect(remainingItem?.id()).toBe("ashbringer");
  });

  it("should calculate subtotal correctly", () => {
    let cart = new Cart();
    cart = cart.addItem(PRODUCT_1);
    cart = cart.addItem(PRODUCT_2);
    cart = cart.addItem(PRODUCT_1);

    const subtotal = cart.calculateSubtotal();
    expect(subtotal.toAmount()).toBe(485 * 2 + 750); // 1720
  });

  it("should calculate total items correctly", () => {
    let cart = new Cart();
    cart = cart.addItem(PRODUCT_1);
    cart = cart.addItem(PRODUCT_1);
    cart = cart.addItem(PRODUCT_2);

    const totalItems = cart.totalItems();
    expect(totalItems.toValue()).toBe(3);
  });

  it("should calculate total with courier fee and tax when under the free threshold", () => {
    let cart = new Cart();
    cart = cart.addItem(PRODUCT_1);
    cart = cart.addItem(PRODUCT_2);

    const subtotal = cart.calculateSubtotal().toAmount();
    const courierFee = cart.calculateCourierFee().toAmount();
    const tax = cart.calculateTax().toAmount();
    const total = cart.calculateTotal().toAmount();

    // Check basic consistency
    expect(subtotal).toBe(1235);
    expect(courierFee).toBe(COURIER_FEE);
    expect(tax).toBeCloseTo(86.45);
    expect(total).toBeCloseTo(1235 + COURIER_FEE + 86.45);
  });

  it("should report how much is left to reach free courier delivery", () => {
    const cart = new Cart().addItem(aProduct({ id: "cheap", price: 100 }));

    expect(cart.remainingForFreeCourier().toAmount()).toBe(FREE_COURIER_THRESHOLD - 100);
  });

  it("should report nothing left once the free courier threshold is met", () => {
    const cart = new Cart().addItem(
      aProduct({ id: "expensive", price: FREE_COURIER_THRESHOLD }),
    );

    expect(cart.remainingForFreeCourier().toAmount()).toBe(0);
  });
});
