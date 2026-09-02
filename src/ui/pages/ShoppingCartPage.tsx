import { useTranslations } from "@/i18n/LocaleContext";
import { ShoppingCart } from "@/ui/components/cart/ShoppingCart";
import { WelcomeModal } from "@/ui/components/WelcomeModal/WelcomeModal";

export function ShoppingCartPage() {
  const { ref } = WelcomeModal.useWelcomeModalHandle();
  const t = useTranslations();

  return (
    <main
      id="main-content"
      className="relative flex-1 bg-muted/30 py-8 px-4 sm:px-6 lg:px-8"
    >
      <ShoppingCart welcomeModalHandle={ref} />
      <WelcomeModal
        title={t.welcomeModal.title}
        description={t.welcomeModal.description}
        ref={ref}
      />
    </main>
  );
}
