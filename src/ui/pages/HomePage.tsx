import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ShoppingCart } from "lucide-react";
import logo from "@/assets/logo.svg";
import { ANALYTICS_CONFIG } from "@/config/analytics.config";
import { SITE_CONFIG } from "@/config/site.config";
import { useLocale, useTranslations } from "@/i18n/LocaleContext";

const secondaryLinkClassName =
  "inline-flex items-center gap-2 rounded-sm font-semibold text-foreground underline-offset-4 outline-none transition-colors duration-200 hover:text-primary hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function HomePage() {
  const locale = useLocale();
  const t = useTranslations();
  const shoppingCartPath = locale === "fr" ? "/fr/shopping-cart" : "/shopping-cart";

  return (
    <main
      id="main-content"
      className="flex flex-1 flex-col items-center justify-center gap-8 bg-gradient-to-b from-muted/40 to-background px-6 py-16 text-base text-foreground sm:text-lg md:text-xl lg:text-[1.375rem]"
    >
      <img
        src={logo}
        className="h-[20vmin] pointer-events-none"
        alt=""
        aria-hidden="true"
      />

      <div className="flex flex-col items-center gap-6">
        <h1 className="max-w-3xl text-center text-3xl font-extrabold leading-tight sm:text-4xl">
          {t.home.title}
        </h1>
        <p className="max-w-3xl text-center leading-relaxed text-muted-foreground">
          {t.home.introBeforeTerm}{" "}
          <strong className="text-foreground">{t.home.calisthenicsTerm}</strong>{" "}
          {t.home.introAfterTerm}
        </p>
        <p className="max-w-3xl text-center leading-relaxed text-muted-foreground">
          {t.home.introPart2}
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Link
          to={shoppingCartPath}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-xs transition-colors duration-200 hover:bg-primary/90 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          data-umami-event={ANALYTICS_CONFIG.events.homeShoppingCart}
        >
          <ShoppingCart className="h-5 w-5" aria-hidden="true" />
          {t.home.tryShoppingCart}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-x-6">
          <a
            href={SITE_CONFIG.articleUrl}
            target="_blank"
            rel="noreferrer"
            className={secondaryLinkClassName}
            data-umami-event={ANALYTICS_CONFIG.events.homeArticle}
          >
            <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
            {t.home.readArticle}
          </a>

          <a
            href={SITE_CONFIG.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={secondaryLinkClassName}
            data-umami-event={ANALYTICS_CONFIG.events.homeGithub}
          >
            <GitHubLogoIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
            {t.home.viewGithubProject}
          </a>
        </div>
      </div>
    </main>
  );
}
