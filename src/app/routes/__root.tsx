import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { MotionConfig } from "motion/react";
import { lazy, Suspense } from "react";
import { SITE_CONFIG } from "@/config/site.config";
import { LocaleProvider, useTranslations } from "@/i18n/LocaleContext";
import { CartProvider } from "@/ui/components/cart/CartContext";
import Header from "@/ui/components/Header";
import { DevSettingsProvider } from "@/ui/devSettings/DevSettingsContext";

const TanStackRouterDevtools = import.meta.env.DEV
  ? lazy(() =>
      import("@tanstack/react-router-devtools").then((module) => ({
        default: module.TanStackRouterDevtools,
      })),
    )
  : () => null;

function RootLayout() {
  const t = useTranslations();

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg"
        >
          {t.common.skipToMainContent}
        </a>
        <Header />
        <div className="flex flex-1 flex-col">
          <Outlet />
        </div>
        <footer className="border-t bg-muted/30 px-4 py-6 text-center text-sm text-muted-foreground sm:px-10">
          <p>
            {t.common.footerBefore}{" "}
            <a
              href={SITE_CONFIG.author.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 hover:text-foreground"
            >
              {SITE_CONFIG.author.name}
            </a>
            {t.common.footerAfter}
          </p>
        </footer>
        {import.meta.env.DEV && (
          <Suspense fallback={null}>
            <TanStackRouterDevtools />
          </Suspense>
        )}
      </div>
    </MotionConfig>
  );
}

export const Route = createRootRoute({
  component: () => {
    const { pathname } = useLocation();
    const locale = pathname === "/fr" || pathname.startsWith("/fr/") ? "fr" : "en";

    return (
      <LocaleProvider locale={locale}>
        <DevSettingsProvider>
          <CartProvider>
            <RootLayout />
          </CartProvider>
        </DevSettingsProvider>
      </LocaleProvider>
    );
  },
});
