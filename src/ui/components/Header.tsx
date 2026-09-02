import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { useLocale, useTranslations } from "@/i18n/LocaleContext";
import { LanguageSwitcher } from "@/ui/components/LanguageSwitcher";
import { ThemeToggle } from "@/ui/components/ThemeToggle";

// Header renders on every route, including the home page, which otherwise never needs
// Radix Dialog. Lazy-loading keeps that dependency out of the home page's own bundle.
const DevSettingsModal = lazy(() =>
  import("@/ui/components/DevSettingsModal").then((module) => ({
    default: module.DevSettingsModal,
  })),
);

const navLinkClassName =
  "rounded-sm px-1 py-1 text-foreground outline-none transition-colors duration-200 hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

export default function Header() {
  const locale = useLocale();
  const t = useTranslations();
  const homePath = locale === "fr" ? "/fr" : "/";
  const shoppingCartPath = locale === "fr" ? "/fr/shopping-cart" : "/shopping-cart";

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-background/95 px-4 shadow-sm backdrop-blur-sm sm:px-10">
      <nav
        aria-label={t.nav.mainNavigation}
        className="flex flex-row gap-4 font-semibold sm:gap-6"
      >
        <Link
          to={homePath}
          className={navLinkClassName}
          activeProps={{
            "aria-current": "page",
            className: "underline underline-offset-4",
          }}
          activeOptions={{ exact: true }}
          onClick={() => window.umami?.track("header.home")}
        >
          {t.nav.home}
        </Link>
        <Link
          to={shoppingCartPath}
          className={navLinkClassName}
          activeProps={{
            "aria-current": "page",
            className: "underline underline-offset-4",
          }}
          onClick={() => window.umami?.track("header.shopping-cart")}
        >
          {t.nav.shoppingCart}
        </Link>
      </nav>

      <div className="flex items-center gap-1">
        <LanguageSwitcher />
        <ThemeToggle />
        <Suspense fallback={null}>
          <DevSettingsModal />
        </Suspense>
        <a
          href="https://github.com/arnaud-zg/react-object-calisthenics"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.nav.viewSourceOnGithub}
          className="flex h-11 w-11 items-center justify-center rounded-full text-foreground outline-none transition-colors duration-200 hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          data-umami-event="header.github"
        >
          <GitHubLogoIcon className="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
