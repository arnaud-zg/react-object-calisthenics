import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { useImmutableInstance } from "immutable-instance";
import { ShoppingCart as ShoppingCartIcon, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { type FC, type RefObject, useState } from "react";
import { ANALYTICS_CONFIG } from "@/config/analytics.config";
import { SITE_CONFIG } from "@/config/site.config";
import { PRODUCT_CATALOG } from "@/data/products";
import { Cart } from "@/domain/cart/Cart";
import { goldSilverCopperFormatter } from "@/domain/currency/GoldSilverCopperFormatter";
import { Skill } from "@/domain/welcomeSurvey/value-objects/Skill";
import { CartSummaryRow } from "@/ui/components/cart/CartSummaryRow";
import { ShoppingCartItem } from "@/ui/components/cart/ShoppingCartItem";
import { WelcomeModal } from "@/ui/components/WelcomeModal/WelcomeModal";
import type { WelcomeModalHandle } from "@/ui/components/WelcomeModal/WelcomeModal.types";
import { Badge } from "@/ui/primitives/badge";
import { Button } from "@/ui/primitives/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/ui/primitives/card";
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "@/ui/primitives/modal";
import { Separator } from "@/ui/primitives/separator";
import { ProductCard } from "./ProductCard/ProductCard";

interface ShoppingCartProps {
  welcomeModalHandle: RefObject<WelcomeModalHandle>;
}

const EAGER_IMAGE_COUNT = 3;

export const ShoppingCart: FC<ShoppingCartProps> = ({ welcomeModalHandle }) => {
  const [showCart, setShowCart] = useState(false);
  const cart = useImmutableInstance(new Cart());
  const { welcomeSurvey } = WelcomeModal.useWelcomeModalSurvey();
  const selectedProfile = welcomeSurvey?.skill ?? "beginner";

  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-foreground">Azeroth's Finest Wares</h1>
        <Button
          size="default"
          onClick={() => welcomeModalHandle.current.open()}
          className="self-start sm:self-auto"
          data-umami-event={ANALYTICS_CONFIG.events.openKnowledgeLevel}
        >
          {new Skill(welcomeSurvey?.skill ?? "beginner").label()}
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Product List */}
        <div className="lg:col-span-2">
          <div className="mb-6 flex items-center justify-between gap-2">
            <h2 className="text-2xl font-semibold text-foreground">Mystical Inventory</h2>

            <Button
              onClick={() => {
                setShowCart(true);
                const element = document.querySelector("#cart");
                const prefersReducedMotion = window.matchMedia(
                  "(prefers-reduced-motion: reduce)",
                ).matches;
                element?.scrollIntoView({
                  behavior: prefersReducedMotion ? "auto" : "smooth",
                });
              }}
              className="relative lg:hidden"
              variant="outline"
              aria-expanded={showCart}
              aria-controls="cart"
            >
              <ShoppingCartIcon className="mr-2 h-4 w-4" aria-hidden="true" />
              Cart <Badge className="ml-2">{cart.totalItems().toValue()}</Badge>
            </Button>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {PRODUCT_CATALOG.all().map((product, index) => (
              <li key={product.displayId()}>
                <ProductCard
                  product={product}
                  onAddToCart={cart.addItem}
                  profile={selectedProfile}
                  priorityImage={index < EAGER_IMAGE_COUNT}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Cart */}
        <aside
          className={`lg:col-span-1 lg:self-start ${showCart ? "block" : "hidden lg:block"}`}
          id="cart"
          aria-labelledby="cart-heading"
        >
          <Card className="sticky top-20 flex max-h-[calc(100vh-6rem)] flex-col border-0 bg-card shadow-sm">
            <CardHeader className="shrink-0 px-4 pb-0 pt-4">
              <div className="flex items-center justify-between">
                <h2
                  id="cart-heading"
                  className="text-xl font-semibold text-card-foreground"
                >
                  Your Inventory
                </h2>
                <div className="flex justify-center">
                  <Badge variant="outline" className="font-normal">
                    {cart.totalItems().toValue()} items
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowCart(false)}
                    className="rounded-full lg:hidden"
                    aria-label="Close cart"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="overflow-y-auto px-4 pt-4">
              {cart.isEmpty() ? (
                <motion.div
                  className="py-12 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, ease: [0.4, 0.0, 0.2, 1] }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{
                      duration: 0.9,
                      ease: [0.4, 0.0, 0.2, 1],
                    }}
                  >
                    <ShoppingCartIcon
                      className="mx-auto mb-4 h-12 w-12 text-muted-foreground"
                      aria-hidden="true"
                    />
                  </motion.div>
                  <motion.p
                    className="text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ duration: 0.9, ease: [0.4, 0.0, 0.2, 1] }}
                  >
                    Your inventory is empty
                  </motion.p>
                </motion.div>
              ) : (
                <>
                  <motion.ul className="space-y-3" layout>
                    <AnimatePresence initial={false}>
                      {cart.listItems().map((item) => (
                        <ShoppingCartItem
                          key={item.id()}
                          item={item}
                          onIncreaseQuantity={() => cart.increaseQuantity(item.id())}
                          onDecreaseQuantity={() => cart.decreaseQuantity(item.id())}
                          onRemoveItem={() => cart.removeItem(item.id())}
                        />
                      ))}
                    </AnimatePresence>
                  </motion.ul>

                  <Separator className="my-4" />

                  <div className="space-y-2">
                    <CartSummaryRow
                      label="Subtotal:"
                      value={goldSilverCopperFormatter.format(cart.calculateSubtotal())}
                    />
                    <CartSummaryRow
                      label="Shipping:"
                      value={
                        cart.calculateShipping().isZero() ? (
                          <Badge
                            variant="outline"
                            className="h-5 border-transparent bg-green-100 py-0 text-xs text-green-800 dark:bg-green-950 dark:text-green-300"
                          >
                            Free
                          </Badge>
                        ) : (
                          goldSilverCopperFormatter.format(cart.calculateShipping())
                        )
                      }
                    />
                    <CartSummaryRow
                      label="Tax:"
                      value={goldSilverCopperFormatter.format(cart.calculateTax())}
                    />
                  </div>

                  <Separator className="my-3" />

                  <CartSummaryRow
                    label="Total:"
                    value={goldSilverCopperFormatter.format(cart.calculateTotal())}
                    emphasized
                    live
                  />

                  <AnimatePresence>
                    {!cart.remainingForFreeShipping().isZero() && (
                      <motion.div
                        className="mt-3 rounded-md border border-border bg-muted p-2 text-xs text-muted-foreground"
                        initial={{ opacity: 0, height: 0, padding: 0, margin: 0 }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                          padding: "0.5rem",
                          marginTop: "0.75rem",
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                          padding: 0,
                          margin: 0,
                          overflow: "hidden",
                        }}
                        transition={{
                          duration: 0.5,
                          opacity: { duration: 0.4 },
                          height: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] },
                        }}
                        layout
                      >
                        <span>
                          Add{" "}
                          {goldSilverCopperFormatter.format(
                            cart.remainingForFreeShipping(),
                          )}{" "}
                          more to earn free delivery by griffin!
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </CardContent>

            <CardFooter className="shrink-0 px-4 pb-4 pt-2">
              <Modal>
                <ModalTrigger className="flex-1" asChild>
                  <Button
                    disabled={cart.isEmpty()}
                    className="w-full"
                    size="default"
                    data-umami-event={ANALYTICS_CONFIG.events.completePurchase}
                  >
                    Complete Purchase
                  </Button>
                </ModalTrigger>

                <ModalContent className="rounded-2xl shadow-lg">
                  <ModalHeader>
                    <ModalTitle className="text-center text-xl font-semibold">
                      🎉 End of the Demo
                    </ModalTitle>
                    <ModalDescription className="mt-2 text-center text-base">
                      Thanks for checking this out! Feel free to reach out if you'd like
                      to <b>discuss</b> or <b>collaborate</b> with me.
                    </ModalDescription>
                  </ModalHeader>

                  <div className="mt-4 flex justify-center gap-2">
                    {/* GitHub icon button */}
                    <Button asChild size="icon" variant="outline">
                      <a
                        href={SITE_CONFIG.author.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Arnaud's GitHub profile (opens in a new tab)"
                        onClick={() => {
                          window.umami?.track(ANALYTICS_CONFIG.events.contactLinkClick, {
                            platform: "github",
                          });
                        }}
                      >
                        <GitHubLogoIcon className="h-5 w-5" aria-hidden="true" />
                      </a>
                    </Button>

                    {/* LinkedIn icon button */}
                    <Button asChild size="icon" variant="outline">
                      <a
                        href={SITE_CONFIG.author.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Arnaud's LinkedIn profile (opens in a new tab)"
                        onClick={() => {
                          window.umami?.track(ANALYTICS_CONFIG.events.contactLinkClick, {
                            platform: "linkedin",
                          });
                        }}
                      >
                        <LinkedInLogoIcon className="h-5 w-5" aria-hidden="true" />
                      </a>
                    </Button>
                  </div>
                </ModalContent>
              </Modal>
            </CardFooter>
          </Card>
        </aside>
      </div>
    </div>
  );
};
