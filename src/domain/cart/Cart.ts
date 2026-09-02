import { CartItems } from "@/domain/cart/CartItems";
import { ShippingPolicy } from "@/domain/cart/policy/ShippingPolicy";
import { TaxPolicy } from "@/domain/cart/policy/TaxPolicy";
import { Money } from "@/domain/cart/value-objects/Money";
import type { Product } from "@/domain/cart/value-objects/Product/Product";
import type { Quantity } from "@/domain/cart/value-objects/Quantity";
import type { CartItem } from "./CartItem";

/**
 * Immutable shopping cart that encapsulates its behavior and state.
 */
export class Cart {
  constructor(private readonly items: CartItems = CartItems.empty()) {}

  isEmpty(): boolean {
    return this.items.isEmpty();
  }

  totalItems(): Quantity {
    return this.items.totalQuantity();
  }

  listItems(): readonly CartItem[] {
    return this.items.toArray();
  }

  calculateSubtotal(): Money {
    return this.items.totalPrice();
  }

  calculateShipping(): Money {
    return ShippingPolicy.calculate(this.calculateSubtotal());
  }

  calculateTax(): Money {
    return TaxPolicy.calculate(this.calculateSubtotal());
  }

  calculateTotal(): Money {
    return this.calculateSubtotal()
      .add(this.calculateTax())
      .add(this.calculateShipping());
  }

  remainingForFreeShipping(): Money {
    const subtotal = this.calculateSubtotal();

    if (subtotal.isAtLeast(ShippingPolicy.SHIPPING_THRESHOLD)) {
      return new Money(0);
    }
    return ShippingPolicy.SHIPPING_THRESHOLD.subtract(subtotal);
  }

  addItem(product: Product): Cart {
    return new Cart(this.items.addOrIncrement(product));
  }

  increaseQuantity(itemId: string): Cart {
    return new Cart(this.items.increaseQuantity(itemId));
  }

  decreaseQuantity(itemId: string): Cart {
    return new Cart(this.items.decreaseQuantity(itemId));
  }

  removeItem(itemId: string): Cart {
    return new Cart(this.items.remove(itemId));
  }
}
