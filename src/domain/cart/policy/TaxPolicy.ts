import { COMMERCE_CONFIG } from "@/config/commerce.config";
import { Money } from "@/domain/cart/value-objects/Money";

export class TaxPolicy {
  static readonly RATE = COMMERCE_CONFIG.taxRate;

  static calculate(subtotal: Money): Money {
    return new Money(subtotal.toAmount() * TaxPolicy.RATE);
  }
}
