import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.ts";

interface CreateAppRouterOptions {
  history?: Parameters<typeof createRouter>[0]["history"];
  basepath?: string;
  scrollRestoration?: boolean;
  /**
   * Our prerender script renders each page with router.ssr unset, so the root route isn't
   * wrapped in its own Suspense boundary (see router-core's canWrapInSuspense: it only skips
   * that wrapper when isServer or router.ssr is set). The client router must agree on the same
   * shape when hydrating that markup, or React sees a Suspense boundary appear from nowhere.
   * There's no public constructor option for this, so it's set on the instance directly.
   */
  hydratingPrerenderedContent?: boolean;
}

export function createAppRouter(options: CreateAppRouterOptions = {}) {
  const router = createRouter({
    routeTree,
    context: {},
    basepath: options.basepath,
    history: options.history,
    defaultPreload: "intent",
    scrollRestoration: options.scrollRestoration ?? true,
    defaultStructuralSharing: true,
    defaultPreloadStaleTime: 0,
  });

  if (options.hydratingPrerenderedContent) {
    router.ssr = { manifest: undefined };
  }

  return router;
}

export type AppRouter = ReturnType<typeof createAppRouter>;

declare module "@tanstack/react-router" {
  interface Register {
    router: AppRouter;
  }
}
