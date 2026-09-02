import { useImmutableInstance } from "immutable-instance";
import { createContext, type ReactNode, useContext } from "react";
import { Cart } from "@/domain/cart/Cart";

const CartContext = createContext<Cart | null>(null);

interface CartProviderProps {
  children: ReactNode;
}

/**
 * Mounted once above the router's <Outlet>, so the cart survives client-side
 * navigation. This matters for the locale switcher: /shopping-cart and
 * /fr/shopping-cart are distinct routes that both render ShoppingCartPage, so
 * without a provider above the route tree, switching locale would unmount
 * the page (and any cart state local to it) and remount it empty.
 */
export function CartProvider({ children }: CartProviderProps) {
  const cart = useImmutableInstance(new Cart());

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
}

/** Defaults to a local cart outside a provider, so components and their tests don't need one. */
export function useCart(): Cart {
  const context = useContext(CartContext);
  const fallback = useImmutableInstance(new Cart());

  return context ?? fallback;
}
