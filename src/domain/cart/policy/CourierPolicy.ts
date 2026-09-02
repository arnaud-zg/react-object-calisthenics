import { COMMERCE_CONFIG } from "@/config/commerce.config";
import { Money } from "@/domain/cart/value-objects/Money";

/**
 * Azeroth's Finest Wares delivers by flight-master courier, not by parcel carrier, so the
 * domain speaks of a courier fee rather than shipping.
 */
export class CourierPolicy {
  static readonly FREE_COURIER_THRESHOLD = new Money(
    COMMERCE_CONFIG.freeCourierThreshold,
  );
  static readonly COURIER_FEE = new Money(COMMERCE_CONFIG.courierFee);

  static calculate(subtotal: Money): Money {
    return subtotal.isAtLeast(CourierPolicy.FREE_COURIER_THRESHOLD)
      ? new Money(0)
      : CourierPolicy.COURIER_FEE;
  }
}
