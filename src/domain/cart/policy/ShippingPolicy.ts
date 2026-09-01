import { COMMERCE_CONFIG } from "@/config/commerce.config";
import { Money } from "@/domain/cart/value-objects/Money";

export class ShippingPolicy {
  static readonly SHIPPING_THRESHOLD = new Money(COMMERCE_CONFIG.freeShippingThreshold);
  static readonly SHIPPING_COST = new Money(COMMERCE_CONFIG.shippingCost);

  static calculate(subtotal: Money): Money {
    return subtotal.isAtLeast(ShippingPolicy.SHIPPING_THRESHOLD)
      ? new Money(0)
      : ShippingPolicy.SHIPPING_COST;
  }
}
