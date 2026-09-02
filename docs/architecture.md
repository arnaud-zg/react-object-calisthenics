[← Back to README](../README.md)

# Architecture

This repo exists to answer one question concretely: what does [Object
Calisthenics](https://williamdurand.fr/2013/06/03/object-calisthenics/) actually look like in a
React app, not a Java textbook. It is the code behind
[Applying Object Calisthenics principles](https://open.substack.com/pub/arnaudzg/p/applying-object-calisthenics-principles?r=iih51&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true),
built as a small but real shop (product list, cart, checkout, i18n) instead of a toy example, so
every rule below has to survive contact with actual UI state, actual persistence, actual routing.

This page is a fast map of how it is wired, not a rulebook. The full rule checklist lives in the
[README](../README.md#object-calisthenics-applied); read it, then come back here for the "why"
and the code.

## The core idea

`src/domain` has no import of React anywhere in it. It is plain TypeScript classes: `Cart`,
`Money`, `Quantity`, `CartItems`. Every method that changes state returns a new instance instead
of mutating `this`:

```ts
// src/domain/cart/Cart.ts
addItem(product: Product): Cart {
  return new Cart(this.items.addOrIncrement(product));
}
```

That single property, immutability, is what lets a plain class stand in for a `useState` value.
One hook (`useImmutableInstance`, from a small companion library the article's code produced)
proxies method calls on the instance: call `cart.addItem(product)`, it runs the real method, and
if the result is a new `Cart` it calls `setState` under the hood and returns a fresh proxy. The
component never touches `useState` or a reducer directly:

```tsx
// src/ui/components/cart/CartContext.tsx
export function CartProvider({ children }: CartProviderProps) {
  const cart = useImmutableInstance(new Cart());
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
}
```

```tsx
// src/ui/components/cart/ShoppingCart.tsx
const cart = useCart();
// ...
<ProductCard onAddToCart={cart.addItem} ... />
```

`CartProvider` is mounted once above the router's `<Outlet>` (`src/app/routes/__root.tsx`), so the
cart is one instance for the whole session, not tied to whichever page happens to be mounted.

## Three rules, in real code

The README has the full eight-rule checklist. These three are the ones that actually reshape how
you write the code, not just how it's formatted.

**Wrap primitives.** A raw `number` for money invites `price + tax` bugs where units get mixed up.
`Money` makes the operation the only way to touch the value:

```ts
// src/domain/cart/value-objects/Money.ts
add(other: Money): Money {
  return new Money(this._amount + other._amount);
}
```

**First-class collections.** `Cart` never holds a raw `CartItem[]`. It holds a `CartItems`, which
owns every find/map/filter/reduce over the array:

```ts
// src/domain/cart/CartItems.ts
totalPrice(): Money {
  return this.items.reduce((total, item) => total.add(item.totalPrice()), new Money(0));
}
```

`Cart` itself never loops over items; it delegates to `CartItems` and stays under 70 lines.

**One dot per line (Law of Demeter).** The UI calls `cart.increaseQuantity(itemId)`. It never pulls
a `Product` back out of a `CartItem` to hand to something else. `ShoppingCartItem.tsx` only ever
calls one method on `cart`, never chains through it to reach an inner object.

## Programming to an interface, not an implementation

The welcome survey (the skill-level question on first visit) is stored behind an interface, not a
concrete store:

```ts
// src/domain/welcomeSurvey/WelcomeSurveyStorage.repository.ts
export interface WelcomeStorageRepository {
  getSurvey(): WelcomeSurveyStoreState["survey"] | null;
  saveSurvey(data: WelcomeSurveyStoreState["survey"]): void;
  subscribe(callback: VoidFunction): VoidFunction;
}
```

Three implementations exist (`localStorage`, TanStack Store, Zustand), and the dev settings modal
(gear icon in the header) swaps between them live, in the running app. Nothing in
`WelcomeModal.tsx` or `Cart` changes when the backing store changes, because they only ever depend
on the interface. That's the practical payoff of small, single-responsibility classes: the seam
to swap an implementation already exists, it doesn't need to be carved out later.

## Where to go next

| Question | Where |
| --- | --- |
| How does a rule map to a file | [README § Object Calisthenics, applied](../README.md#object-calisthenics-applied) |
| Why TDD, what does the test pyramid look like | [CONTRIBUTING.md](../CONTRIBUTING.md) |
| The domain layer itself | `src/domain/` |
| How the UI consumes it | `src/ui/components/cart/` |
| The original argument, in full | [the article](https://open.substack.com/pub/arnaudzg/p/applying-object-calisthenics-principles?r=iih51&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true) |
