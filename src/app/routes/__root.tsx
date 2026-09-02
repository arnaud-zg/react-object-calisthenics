import { createRootRoute, Outlet } from "@tanstack/react-router";
import { MotionConfig } from "motion/react";
import { lazy, Suspense } from "react";
import { SITE_CONFIG } from "@/config/site.config";
import Header from "@/ui/components/Header";

const TanStackRouterDevtools = import.meta.env.DEV
  ? lazy(() =>
      import("@tanstack/react-router-devtools").then((module) => ({
        default: module.TanStackRouterDevtools,
      })),
    )
  : () => null;

export const Route = createRootRoute({
  component: () => (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <div className="flex flex-1 flex-col">
          <Outlet />
        </div>
        <footer className="border-t bg-muted/30 px-4 py-6 text-center text-sm text-muted-foreground sm:px-10">
          <p>
            A demo by{" "}
            <a
              href={SITE_CONFIG.author.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 hover:text-foreground"
            >
              {SITE_CONFIG.author.name}
            </a>
            , illustrating Object Calisthenics in a React front end.
          </p>
        </footer>
        {import.meta.env.DEV && (
          <Suspense fallback={null}>
            <TanStackRouterDevtools />
          </Suspense>
        )}
      </div>
    </MotionConfig>
  ),
});
