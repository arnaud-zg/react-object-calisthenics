import { BookOpenText, Clapperboard, ShoppingCart } from "lucide-react";
import { ANALYTICS_CONFIG } from "@/config/analytics.config";
import type {
  KnowledgeProfile,
  Product,
} from "@/domain/cart/value-objects/Product/Product";
import { Button } from "@/ui/primitives/button";
import { CardFooter } from "@/ui/primitives/card";
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "@/ui/primitives/modal";

interface ProductCardFooterProps {
  product: Product;
  profile: KnowledgeProfile;
  onAddToCart: (product: Product) => void;
}

export function ProductCardFooter({
  product,
  profile,
  onAddToCart,
}: ProductCardFooterProps) {
  const loreLink = product.getLoreLink();
  const videoUrl = product.getVideoUrl();
  const productName = product.displayName();

  return (
    <CardFooter className="p-4 pt-0 flex flex-col gap-2">
      <Button
        onClick={() => {
          onAddToCart(product);
          window.umami?.track(ANALYTICS_CONFIG.events.addToCart, {
            productId: product.displayId(),
          });
        }}
        className="w-full flex items-center justify-center gap-2"
        variant="default"
      >
        <ShoppingCart className="h-4 w-4" /> Add to Cart
      </Button>

      <Modal>
        <ModalTrigger className="flex-1" asChild>
          <Button
            className="w-full flex items-center justify-center gap-2"
            variant="link"
            onClick={() => {
              window.umami?.track(ANALYTICS_CONFIG.events.watchVideo, {
                productId: product.displayId(),
              });
            }}
          >
            <Clapperboard className="h-4 w-4" /> Watch Video
          </Button>
        </ModalTrigger>

        <ModalContent className="rounded-2xl shadow-lg sm:max-w-2xl">
          <ModalHeader>
            <ModalTitle className="text-center text-xl font-semibold">
              {productName}
            </ModalTitle>
            <ModalDescription className="text-center">
              Lore video for {productName}.
            </ModalDescription>
          </ModalHeader>
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              className="h-full w-full"
              src={videoUrl}
              title={`${productName} lore video`}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </ModalContent>
      </Modal>

      {profile !== "beginner" && (
        <Button
          asChild
          className="w-full flex items-center justify-center gap-2"
          variant="link"
        >
          <a
            href={loreLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read the lore of ${productName} (opens in a new tab)`}
            onClick={() => {
              window.umami?.track(ANALYTICS_CONFIG.events.readLore, {
                productId: product.displayId(),
              });
            }}
          >
            <BookOpenText className="h-4 w-4" /> Read Lore
          </a>
        </Button>
      )}
    </CardFooter>
  );
}
