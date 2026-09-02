import { Minus, Plus, Trash2 } from "lucide-react";
import { motion } from "motion/react";
import { ANALYTICS_CONFIG } from "@/config/analytics.config";
import { CartItem } from "@/domain/cart/CartItem";
import { goldSilverCopperFormatter } from "@/domain/currency/GoldSilverCopperFormatter";
import { useTranslations } from "@/i18n/LocaleContext";
import { Button } from "@/ui/primitives/button";
import { Card } from "@/ui/primitives/card";
import { Separator } from "@/ui/primitives/separator";

interface ShoppingCartItemProps {
  item: CartItem;
  onIncreaseQuantity: VoidFunction;
  onDecreaseQuantity: VoidFunction;
  onRemoveItem: VoidFunction;
}

export function ShoppingCartItem({
  item,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveItem,
}: ShoppingCartItemProps) {
  const t = useTranslations();

  return (
    <motion.li
      layout
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{
        opacity: 0,
        height: 0,
        overflow: "hidden",
        marginBottom: 0,
      }}
      transition={{
        type: "tween",
        ease: [0.4, 0.0, 0.2, 1],
        opacity: { duration: 0.3 },
        height: { duration: 0.5 },
        layout: { duration: 0.5 },
      }}
    >
      <Card className="bg-card text-card-foreground border rounded-md p-4 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex gap-4">
          <div className="relative w-16 h-16 rounded-md bg-muted overflow-hidden flex-shrink-0">
            <img
              src={item.image()}
              // Decorative: the item name right next to it already conveys the same
              // information.
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col gap-2 min-w-0">
            <h3 className="line-clamp-2 font-medium text-foreground">{item.name()}</h3>

            <div className="flex flex-row self-end">
              <div className="flex flex-col items-end gap-1">
                <div className="text-xs text-muted-foreground font-medium mr-2">
                  {goldSilverCopperFormatter.format(item.totalPrice())}
                </div>

                <div className="flex items-center border rounded-md overflow-hidden">
                  <Button
                    onClick={onDecreaseQuantity}
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 p-0 rounded-r-none hover:bg-accent"
                    aria-label={t.cartItem.decreaseQuantityOf(item.name())}
                    disabled={item.quantity().isAtMost(CartItem.MIN_QUANTITY)}
                    data-umami-event={ANALYTICS_CONFIG.events.decreaseQuantity}
                  >
                    <Minus className="h-4 w-4" aria-hidden="true" />
                  </Button>

                  <Separator orientation="vertical" />

                  <span
                    className="px-3 py-1 min-w-[30px] text-center text-sm font-medium"
                    aria-live="polite"
                  >
                    {item.quantity().toValue()}
                  </span>

                  <Separator orientation="vertical" />

                  <Button
                    onClick={onIncreaseQuantity}
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 p-0 rounded-l-none hover:bg-accent"
                    aria-label={t.cartItem.increaseQuantityOf(item.name())}
                    disabled={item.quantity().isAtLeast(CartItem.MAX_QUANTITY)}
                    data-umami-event={ANALYTICS_CONFIG.events.increaseQuantity}
                  >
                    <Plus className="h-4 w-4" aria-hidden="true" />
                  </Button>

                  <Separator orientation="vertical" />

                  <Button
                    onClick={onRemoveItem}
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                    aria-label={t.cartItem.removeFromCart(item.name())}
                    data-umami-event={ANALYTICS_CONFIG.events.removeItem}
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.li>
  );
}
