import type { Money } from "@/domain/cart/value-objects/Money";
import { GoldSilverCopperAmount } from "@/domain/currency/GoldSilverCopperAmount";

/**
 * Formats a copper-based Money value as Azeroth-style currency (Gold, Silver, Copper).
 * Conversion itself lives in GoldSilverCopperAmount, this class only renders it.
 */
class GoldSilverCopperFormatter {
  format(amount: Money): string {
    const converted = GoldSilverCopperAmount.fromCopper(amount);
    const parts: string[] = [];

    if (converted.hasGold()) parts.push(`${converted.gold()} 🟡`);
    if (converted.hasSilver() || converted.hasGold())
      parts.push(`${converted.silver()} ⚪`);
    parts.push(`${converted.copper()} 🟤`);

    return parts.join(" ");
  }
}

export const goldSilverCopperFormatter = new GoldSilverCopperFormatter();
