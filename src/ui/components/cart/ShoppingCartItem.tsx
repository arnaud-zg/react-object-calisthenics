import { CartItem } from "@/domain/cart/CartItem";
import { goldSilverCopperFormatter } from "@/domain/currency/GoldSilverCopperFormatter";
import { Button } from "@/ui/primitives/button";
import { Card } from "@/ui/primitives/card";
import { Separator } from "@/ui/primitives/separator";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2 } from "lucide-react";

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
  return (
    <motion.div
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
          <div className="relative w-16 h-16 rounded-md bg-gray-100 overflow-hidden flex-shrink-0">
            <img
              src={item.getImage()}
              alt={item.getName()}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col gap-2 min-w-0">
            <h4 className="font-medium text-gray-900 truncate">
              {item.getName()}
            </h4>

            <div className="flex flex-row self-end">
              <div className="flex flex-col items-end gap-1">
                <div className="text-xs text-gray-500 font-medium mr-2">
                  {goldSilverCopperFormatter.format(item.totalPrice())}
                </div>

                <div className="flex items-center border rounded-md overflow-hidden">
                  <Button
                    onClick={onDecreaseQuantity}
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 p-0 rounded-r-none hover:bg-gray-100"
                    aria-label="Decrease quantity"
                    disabled={item.getQuantity().toValue() <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>

                  <Separator orientation="vertical" />

                  <span className="px-3 py-1 min-w-[30px] text-center text-sm font-medium">
                    {item.getQuantity().toValue()}
                  </span>

                  <Separator orientation="vertical" />

                  <Button
                    onClick={onIncreaseQuantity}
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 p-0 rounded-l-none hover:bg-gray-100"
                    aria-label="Increase quantity"
                    disabled={
                      item.getQuantity().toValue() >= CartItem.MAX_QUANTITY
                    }
                  >
                    <Plus className="h-4 w-4" />
                  </Button>

                  <Separator orientation="vertical" />

                  <Button
                    onClick={onRemoveItem}
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
