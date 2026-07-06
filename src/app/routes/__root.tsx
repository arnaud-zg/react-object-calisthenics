import Header from "@/ui/components/Header";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { MotionConfig } from "framer-motion";

export const Route = createRootRoute({
  component: () => (
    <MotionConfig reducedMotion="user">
      <div className="flex flex-col min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </MotionConfig>
  ),
});
