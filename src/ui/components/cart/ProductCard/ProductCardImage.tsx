import type { Product } from "@/domain/cart/value-objects/Product/Product";

interface ProductCardImageProps {
  product: Product;
  /** The first cards above the fold should load eagerly instead of competing with the LCP image. */
  priority?: boolean;
}

export const ProductCardImage = ({
  product,
  priority = false,
}: ProductCardImageProps) => {
  return (
    <div className="aspect-[4/3] relative overflow-hidden bg-muted">
      <img
        src={product.displayImage()}
        // Decorative: the product name right below already conveys the same information,
        // announcing it twice would be redundant for screen reader users.
        alt=""
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="object-cover w-full h-full transition-transform hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100"
      />
      <img
        src={product.displayIcon()}
        alt=""
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="absolute bottom-2 left-2 h-10 w-10 rounded-md border-2 border-background bg-background object-cover shadow-md sm:h-12 sm:w-12"
      />
    </div>
  );
};
