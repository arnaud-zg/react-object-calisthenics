/**
 * The shop's business rules, in one place. CourierPolicy, TaxPolicy, CartItem, and
 * GoldSilverCopperFormatter all read their numbers from here instead of hardcoding them.
 */
export const COMMERCE_CONFIG = {
  taxRate: 0.07,
  freeCourierThreshold: 300,
  courierFee: 25,
  quantityPerItem: {
    min: 1,
    max: 10,
  },
  currency: {
    copperPerSilver: 100,
    silverPerGold: 100,
  },
} as const;
