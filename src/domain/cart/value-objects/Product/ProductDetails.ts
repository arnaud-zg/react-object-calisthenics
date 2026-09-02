export class Effect {
  constructor(private readonly _value: string) {}

  toValue(): string {
    return this._value;
  }
}

export type StatKey = "power" | "durability" | "manaBoost";

export interface NamedStat {
  key: StatKey;
  value: number;
}

export class Stats {
  constructor(
    private readonly _power: number,
    private readonly _durability: number,
    private readonly _manaBoost: number,
  ) {
    if (_power < 0 || _durability < 0 || _manaBoost < 0) {
      throw new Error("Stats cannot be negative");
    }
  }

  increasePower(amount: number): Stats {
    return new Stats(this._power + amount, this._durability, this._manaBoost);
  }

  /**
   * Only the stats worth showing: zero-value ones are omitted rather than rendered as 0.
   * Returns keys, not display labels, translating them is the UI's job.
   */
  list(): NamedStat[] {
    const stats: NamedStat[] = [
      { key: "power", value: this._power },
      { key: "durability", value: this._durability },
      { key: "manaBoost", value: this._manaBoost },
    ];
    return stats.filter((stat) => stat.value > 0);
  }
}

/**
 * The description, stats, and effects for one knowledge level of a product. A product's
 * lore link and video live on Product itself (see ExtraResources), they don't vary by
 * knowledge level.
 */
export class ProfileDetails {
  constructor(
    private readonly _description: string,
    private readonly _stats: Stats,
    private readonly _effects: Effect[],
  ) {}

  describe(): string {
    return this._description;
  }

  listStats(): NamedStat[] {
    return this._stats.list();
  }

  listEffects(): string[] {
    return this._effects.map((effect) => effect.toValue());
  }
}
