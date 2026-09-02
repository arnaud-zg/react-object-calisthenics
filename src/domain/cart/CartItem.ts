import { COMMERCE_CONFIG } from "@/config/commerce.config";
import type { Money } from "@/domain/cart/value-objects/Money";
import type { Product } from "@/domain/cart/value-objects/Product/Product";
import { Quantity } from "@/domain/cart/value-objects/Quantity";

export class CartItem {
  static readonly MAX_QUANTITY = new Quantity(COMMERCE_CONFIG.quantityPerItem.max);
  static readonly MIN_QUANTITY = new Quantity(COMMERCE_CONFIG.quantityPerItem.min);

  constructor(
    private readonly _product: Product,
    private readonly _quantity: Quantity,
  ) {}

  id(): string {
    return this._product.displayId();
  }

  name(): string {
    return this._product.displayName();
  }

  image(): string {
    return this._product.displayImage();
  }

  quantity(): Quantity {
    return this._quantity;
  }

  totalPrice(): Money {
    return this._product.displayPrice().multiply(this._quantity.toValue());
  }

  increaseQuantity(): CartItem {
    if (this._quantity.isAtLeast(CartItem.MAX_QUANTITY)) {
      return this;
    }
    return new CartItem(this._product, this._quantity.increment());
  }

  decreaseQuantity(): CartItem {
    if (this._quantity.isAtMost(CartItem.MIN_QUANTITY)) {
      return this;
    }
    return new CartItem(this._product, this._quantity.decrement());
  }

  updateQuantity(newQuantity: Quantity): CartItem {
    const clamped = newQuantity.clampBetween(
      CartItem.MIN_QUANTITY,
      CartItem.MAX_QUANTITY,
    );
    return new CartItem(this._product, clamped);
  }
}
