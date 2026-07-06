import type { Product } from "@/domain/cart/value-objects/Product/Product";

interface ProductCardImageProps {
  product: Product;
}

export const ProductCardImage = ({ product }: ProductCardImageProps) => {
  return (
    <div className="aspect-[4/3] relative overflow-hidden">
      <img
        src={product.displayImage()}
        alt={product.displayName()}
        loading="lazy"
        decoding="async"
        className="object-cover w-full h-full transition-transform hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100"
      />
    </div>
  );
};
