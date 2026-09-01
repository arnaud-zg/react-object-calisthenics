export class Quantity {
  constructor(private readonly _value: number) {
    if (_value < 0) {
      throw new Error("Quantity cannot be negative");
    }
  }

  add(other: Quantity): Quantity {
    return new Quantity(this._value + other._value);
  }

  increment(): Quantity {
    return new Quantity(this._value + 1);
  }

  decrement(): Quantity {
    if (this._value === 0) {
      throw new Error("Quantity cannot be less than 0");
    }
    return new Quantity(this._value - 1);
  }

  clampBetween(min: Quantity, max: Quantity): Quantity {
    if (this._value < min._value) return min;
    if (this._value > max._value) return max;
    return this;
  }

  isAtLeast(other: Quantity): boolean {
    return this._value >= other._value;
  }

  isAtMost(other: Quantity): boolean {
    return this._value <= other._value;
  }

  toValue(): number {
    return this._value;
  }
}
