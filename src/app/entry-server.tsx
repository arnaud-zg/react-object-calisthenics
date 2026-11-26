import { StrictMode } from "react";
import { createMemoryHistory, RouterProvider } from "@tanstack/react-router";
import { prerenderToNodeStream } from "react-dom/static";

import { createAppRouter } from "./router.ts";

export { getHomeSeoMeta, getShopSeoMeta, listProductsForSeo } from "./seo-data.ts";

/**
 * Route components are code-split behind Suspense (autoCodeSplitting), which
 * renderToString cannot wait for: it bails out to the fallback. prerenderToNodeStream
 * resolves every Suspense boundary before returning, which is what static prerendering needs.
 * Returns the raw Node stream; scripts/prerender.mjs (plain Node, not type-checked against
 * browser lib types) is responsible for reading it into a string.
 */
export async function render(url: string) {
  const router = createAppRouter({
    // Vite's base: SITE_CONFIG.basePath, or the preview's folder when Shiplane sets BASE_PATH.
    basepath: import.meta.env.BASE_URL,
    history: createMemoryHistory({ initialEntries: [url] }),
    scrollRestoration: false,
  });

  await router.load();

  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );

  return prelude;
}
