import { Money } from "@/domain/cart/value-objects/Money";

export class ShippingPolicy {
  static SHIPPING_THRESHOLD = new Money(300);
  static SHIPPING_COST = new Money(25);

  static calculate(subtotal: Money): Money {
    return subtotal.toAmount() >= ShippingPolicy.SHIPPING_THRESHOLD.toAmount()
      ? new Money(0)
      : ShippingPolicy.SHIPPING_COST;
  }
}
