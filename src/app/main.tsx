import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ANALYTICS_CONFIG } from "@/config/analytics.config";
import { SITE_CONFIG } from "@/config/site.config";
// Import the generated route tree
import { routeTree } from "./routeTree.gen.ts";
import "@/styles/styles.css";
import reportWebVitals from "../reportWebVitals.ts";

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {},
  basepath: SITE_CONFIG.basePath,
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Recover original route if redirected from 404.html
const params = new URLSearchParams(window.location.search);
const p = params.get("p");

if (p) {
  // Replace the current history entry with the original path
  window.history.replaceState({}, "", p);
}

// Render the app
const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}

// Forward Core Web Vitals to Umami. window.umami is undefined until the analytics
// script has loaded, so this is a safe no-op if it never does.
reportWebVitals((metric) => {
  window.umami?.track(ANALYTICS_CONFIG.events.webVital, {
    name: metric.name,
    value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
    rating: metric.rating,
  });
});
