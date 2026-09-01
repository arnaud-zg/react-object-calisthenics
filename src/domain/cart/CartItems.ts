import { CartItem } from "@/domain/cart/CartItem";
import { Money } from "@/domain/cart/value-objects/Money";
import type { Product } from "@/domain/cart/value-objects/Product/Product";
import { Quantity } from "@/domain/cart/value-objects/Quantity";

/**
 * First-class collection wrapping the cart's CartItem[]. Cart delegates every
 * find/map/filter/reduce over its items here instead of doing them inline.
 */
export class CartItems {
  private constructor(private readonly items: readonly CartItem[]) {}

  static empty(): CartItems {
    return new CartItems([]);
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  toArray(): readonly CartItem[] {
    return this.items;
  }

  totalQuantity(): Quantity {
    return this.items.reduce(
      (total, item) => total.add(item.quantity()),
      new Quantity(0),
    );
  }

  totalPrice(): Money {
    return this.items.reduce((total, item) => total.add(item.totalPrice()), new Money(0));
  }

  addOrIncrement(product: Product): CartItems {
    const existing = this.find(product.displayId());

    if (existing) {
      return this.replace(existing.increaseQuantity());
    }
    return new CartItems([...this.items, new CartItem(product, new Quantity(1))]);
  }

  increaseQuantity(itemId: string): CartItems {
    return this.updateItem(itemId, (item) => item.increaseQuantity());
  }

  decreaseQuantity(itemId: string): CartItems {
    return this.updateItem(itemId, (item) => item.decreaseQuantity());
  }

  remove(itemId: string): CartItems {
    return new CartItems(this.items.filter((item) => item.id() !== itemId));
  }

  private find(itemId: string): CartItem | undefined {
    return this.items.find((item) => item.id() === itemId);
  }

  private replace(updatedItem: CartItem): CartItems {
    return new CartItems(
      this.items.map((item) => (item.id() === updatedItem.id() ? updatedItem : item)),
    );
  }

  private updateItem(itemId: string, update: (item: CartItem) => CartItem): CartItems {
    const existing = this.find(itemId);

    if (!existing) {
      return this;
    }
    return this.replace(update(existing));
  }
}
