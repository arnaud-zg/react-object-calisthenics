import { Link, useLocation } from "@tanstack/react-router";
import { useLocale, useTranslations } from "@/i18n/LocaleContext";

const pillClassName = (isActive: boolean) =>
  `rounded-full px-2 py-1 transition-colors ${
    isActive ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground"
  }`;

export function LanguageSwitcher() {
  const { pathname } = useLocation();
  const locale = useLocale();
  const t = useTranslations();
  const isShoppingCart = pathname.includes("shopping-cart");

  const enPath = isShoppingCart ? "/shopping-cart" : "/";
  const frPath = isShoppingCart ? "/fr/shopping-cart" : "/fr";

  return (
    <nav
      className="flex items-center gap-0.5 text-xs font-semibold"
      aria-label={t.languageSwitcher.label}
    >
      <Link
        to={enPath}
        aria-current={locale === "en" ? "page" : undefined}
        aria-label={t.languageSwitcher.en}
        className={pillClassName(locale === "en")}
        data-umami-event="header.language-en"
      >
        EN
      </Link>
      <Link
        to={frPath}
        aria-current={locale === "fr" ? "page" : undefined}
        aria-label={t.languageSwitcher.fr}
        className={pillClassName(locale === "fr")}
        data-umami-event="header.language-fr"
      >
        FR
      </Link>
    </nav>
  );
}
