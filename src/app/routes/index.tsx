import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ShoppingCart } from "lucide-react";
import logo from "@/assets/logo.svg";
import { ANALYTICS_CONFIG } from "@/config/analytics.config";
import { SITE_CONFIG } from "@/config/site.config";

export const Route = createFileRoute("/")({
  component: App,
});

const secondaryLinkClassName =
  "inline-flex items-center gap-2 rounded-sm font-semibold text-foreground underline-offset-4 outline-none transition-colors duration-200 hover:text-primary hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function App() {
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
          Maintainable Frontend Architecture with React
        </h1>
        <p className="max-w-3xl text-center leading-relaxed text-muted-foreground">
          This site is a hands-on demo showing how to apply{" "}
          <strong className="text-foreground">Object Calisthenics</strong> in a front-end
          app. You'll see how keeping objects small, simple, and focused makes your React
          code easier to understand and maintain.
        </p>
        <p className="max-w-3xl text-center leading-relaxed text-muted-foreground">
          Take a few moments to explore the interactive experience, then dive into the
          code to see these principles in action.
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
        <Link
          to="/shopping-cart"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-xs transition-colors duration-200 hover:bg-primary/90 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          data-umami-event={ANALYTICS_CONFIG.events.homeShoppingCart}
        >
          <ShoppingCart className="h-5 w-5" aria-hidden="true" />
          Try the Shopping Cart Experience
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>

        <a
          href={SITE_CONFIG.articleUrl}
          target="_blank"
          rel="noreferrer"
          className={secondaryLinkClassName}
          data-umami-event={ANALYTICS_CONFIG.events.homeArticle}
        >
          <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
          Read my article about object calisthenics
        </a>

        <a
          href={SITE_CONFIG.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={secondaryLinkClassName}
          data-umami-event={ANALYTICS_CONFIG.events.homeGithub}
        >
          <GitHubLogoIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
          View the GitHub project
        </a>
      </div>
    </main>
  );
}
