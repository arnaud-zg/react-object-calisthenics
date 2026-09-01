/**
 * The Umami analytics wiring. `umamiWebsiteId` reads the same VITE_UMAMI_WEBSITE_ID
 * environment variable that index.html interpolates into its script tag (see .env), so
 * there is exactly one place to change it. `events` centralizes the event-name taxonomy
 * that was previously a scattered set of string literals.
 */
export const ANALYTICS_CONFIG = {
  umamiWebsiteId: import.meta.env.VITE_UMAMI_WEBSITE_ID,
  events: {
    openKnowledgeLevel: "knowledge-level.open",
    selectKnowledgeLevel: "knowledge-level.select",
    homeShoppingCart: "home.shopping-cart",
    homeArticle: "home.article",
    homeGithub: "home.github",
    completePurchase: "shopping-cart.complete-purchase",
    contactLinkClick: "contact.link-click",
  },
} as const;
