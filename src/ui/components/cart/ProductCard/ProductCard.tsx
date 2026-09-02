import type {
  KnowledgeProfile,
  Product,
} from "@/domain/cart/value-objects/Product/Product";
import { Card } from "@/ui/primitives/card";
import { ProductCardContent } from "./ProductCardContent";
import { ProductCardFooter } from "./ProductCardFooter";
import { ProductCardHeader } from "./ProductCardHeader";
import { ProductCardImage } from "./ProductCardImage";

interface ProductCardProps {
  product: Product;
  profile: KnowledgeProfile;
  onAddToCart: (product: Product) => void;
  priorityImage?: boolean;
}

export function ProductCard({
  product,
  profile,
  onAddToCart,
  priorityImage = false,
}: ProductCardProps) {
  return (
    <Card className="h-full overflow-hidden transition-all hover:shadow-lg gap-1">
      <ProductCardImage product={product} priority={priorityImage} />
      <ProductCardHeader product={product} />
      <ProductCardContent product={product} profile={profile} />
      <ProductCardFooter product={product} profile={profile} onAddToCart={onAddToCart} />
    </Card>
  );
}
