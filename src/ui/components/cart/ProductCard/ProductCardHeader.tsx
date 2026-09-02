import type { Product } from "@/domain/cart/value-objects/Product/Product";
import { goldSilverCopperFormatter } from "@/domain/currency/GoldSilverCopperFormatter";
import { Badge } from "@/ui/primitives/badge";
import { CardHeader } from "@/ui/primitives/card";

interface ProductCardHeaderProps {
  product: Product;
}

export function ProductCardHeader({ product }: ProductCardHeaderProps) {
  const formattedPrice = goldSilverCopperFormatter.format(product.displayPrice());

  return (
    <CardHeader className="p-4 pb-0 lg:min-h-20">
      <div className="flex min-h-[85px] flex-col gap-2">
        <h3 className="text-lg font-semibold text-foreground">{product.displayName()}</h3>
        <Badge variant="secondary" className="w-fit">
          {formattedPrice}
        </Badge>
      </div>
    </CardHeader>
  );
}
