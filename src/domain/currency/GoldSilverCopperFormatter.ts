import { COMMERCE_CONFIG } from "@/config/commerce.config";
import type { Money } from "@/domain/cart/value-objects/Money";

const { copperPerSilver, silverPerGold } = COMMERCE_CONFIG.currency;
const copperPerGold = copperPerSilver * silverPerGold;

/**
 * Converts copper-based Money values into Azeroth-style currency
 * (Gold, Silver, Copper) and formats them for display.
 */
class GoldSilverCopperFormatter {
  convertCopper(copper: Money) {
    const safeCopper = Math.round(copper.toAmount());

    const gold = Math.floor(safeCopper / copperPerGold);
    const remainderAfterGold = safeCopper - gold * copperPerGold;

    const silver = Math.floor(remainderAfterGold / copperPerSilver);
    const remainingCopper = remainderAfterGold - silver * copperPerSilver;

    return { gold, silver, copper: remainingCopper };
  }

  format(amount: Money): string {
    const { gold, silver, copper } = this.convertCopper(amount);

    const formatted: string[] = [];

    if (gold > 0) formatted.push(`${gold} 🟡`);
    if (silver > 0 || gold > 0) formatted.push(`${silver} ⚪`);
    formatted.push(`${copper} 🟤`);

    return formatted.join(" ");
  }
}

export const goldSilverCopperFormatter = new GoldSilverCopperFormatter();
