/**
 * The Umami analytics wiring. `umamiWebsiteId` reads the same VITE_UMAMI_WEBSITE_ID
 * environment variable that vite.config.ts uses to add Umami's script tag (see
 * .env.example), so there is exactly one place to change it. Unset, there is no analytics.
 * `events` centralizes the event-name taxonomy that was previously a scattered set of string
 * literals.
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
    increaseQuantity: "shopping-cart.increase-quantity",
    decreaseQuantity: "shopping-cart.decrease-quantity",
    removeItem: "shopping-cart.remove-item",
    contactLinkClick: "contact.link-click",
    addToCart: "product.add-to-cart",
    watchVideo: "product.watch-video",
    readLore: "product.read-lore",
    webVital: "web-vitals.report",
    openDevSettings: "dev-settings.open",
    switchWelcomeSurveyStorage: "dev-settings.switch-welcome-survey-storage",
  },
} as const;
