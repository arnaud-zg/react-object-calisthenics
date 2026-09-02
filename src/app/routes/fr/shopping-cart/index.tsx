import { createFileRoute } from "@tanstack/react-router";
import { ShoppingCartPage } from "@/ui/pages/ShoppingCartPage";

export const Route = createFileRoute("/fr/shopping-cart/")({
  component: ShoppingCartPage,
});
