import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ANALYTICS_CONFIG } from "@/config/analytics.config";
import { SITE_CONFIG } from "@/config/site.config";
import { createAppRouter } from "./router.ts";
import "@/styles/styles.css";
import reportWebVitals from "../reportWebVitals.ts";

const params = new URLSearchParams(window.location.search);
const p = params.get("p");
if (p) {
  window.history.replaceState({}, "", p);
}

const rootElement = document.getElementById("app");
if (rootElement) {
  const wasPrerendered = Boolean(rootElement.innerHTML);
  const router = createAppRouter({
    basepath: SITE_CONFIG.basePath,
    hydratingPrerenderedContent: wasPrerendered,
  });
  const app = (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );

  // A prerendered page's matched route must be resolved before hydrating, otherwise the
  // client's first pass renders a pending state that doesn't match the markup already sent.
  if (wasPrerendered) {
    await router.load();
    ReactDOM.hydrateRoot(rootElement, app);
  } else {
    ReactDOM.createRoot(rootElement).render(app);
  }
}

reportWebVitals((metric) => {
  window.umami?.track(ANALYTICS_CONFIG.events.webVital, {
    name: metric.name,
    value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
    rating: metric.rating,
  });
});
