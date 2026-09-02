import { COMMERCE_CONFIG } from "@/config/commerce.config";
import type { Money } from "@/domain/cart/value-objects/Money";

const { copperPerSilver, silverPerGold } = COMMERCE_CONFIG.currency;
const copperPerGold = copperPerSilver * silverPerGold;

/**
 * The gold/silver/copper breakdown of a copper-denominated Money amount. Converting
 * copper into denominations is this class's only job, formatting the result is
 * GoldSilverCopperFormatter's.
 */
export class GoldSilverCopperAmount {
  private constructor(
    private readonly _gold: number,
    private readonly _silver: number,
    private readonly _copper: number,
  ) {}

  static fromCopper(amount: Money): GoldSilverCopperAmount {
    const safeCopper = Math.round(amount.toAmount());

    const gold = Math.floor(safeCopper / copperPerGold);
    const remainderAfterGold = safeCopper - gold * copperPerGold;

    const silver = Math.floor(remainderAfterGold / copperPerSilver);
    const remainingCopper = remainderAfterGold - silver * copperPerSilver;

    return new GoldSilverCopperAmount(gold, silver, remainingCopper);
  }

  gold(): number {
    return this._gold;
  }

  silver(): number {
    return this._silver;
  }

  copper(): number {
    return this._copper;
  }

  hasGold(): boolean {
    return this._gold > 0;
  }

  hasSilver(): boolean {
    return this._silver > 0;
  }
}
