export interface Messages {
  common: {
    skipToMainContent: string;
    footerBefore: string;
    footerAfter: string;
  };
  nav: {
    mainNavigation: string;
    home: string;
    shoppingCart: string;
    viewSourceOnGithub: string;
  };
  home: {
    title: string;
    introBeforeTerm: string;
    calisthenicsTerm: string;
    introAfterTerm: string;
    introPart2: string;
    tryShoppingCart: string;
    readArticle: string;
    viewGithubProject: string;
  };
  skill: {
    label: {
      beginner: string;
      intermediate: string;
      expert: string;
    };
  };
  welcomeModal: {
    title: string;
    description: string;
    fieldLabel: string;
    placeholderOption: string;
    invalidSkill: string;
    continue: string;
  };
  shop: {
    title: string;
    inventoryHeading: string;
    cartButtonLabel: string;
    yourInventory: string;
    itemCount: (count: number) => string;
    closeCart: string;
    emptyInventory: string;
    subtotal: string;
    courierFee: string;
    tax: string;
    total: string;
    free: string;
    remainingForFreeCourier: (amount: string) => string;
    completePurchase: string;
    endOfDemoTitle: string;
    endOfDemoDescriptionBefore: string;
    endOfDemoDiscuss: string;
    endOfDemoOr: string;
    endOfDemoCollaborate: string;
    endOfDemoDescriptionAfter: string;
    githubProfileLabel: string;
    linkedinProfileLabel: string;
  };
  cartItem: {
    decreaseQuantityOf: (name: string) => string;
    increaseQuantityOf: (name: string) => string;
    removeFromCart: (name: string) => string;
  };
  product: {
    addToCart: string;
    watchVideo: string;
    readLore: string;
    loreVideoFor: (name: string) => string;
    readLoreOf: (name: string) => string;
    statsHeading: string;
    effectsHeading: string;
    stat: {
      power: string;
      durability: string;
      manaBoost: string;
    };
  };
  languageSwitcher: {
    label: string;
    en: string;
    fr: string;
  };
  seo: {
    homeDescription: string;
    shopDescription: string;
  };
  devSettings: {
    buttonLabel: string;
    title: string;
    description: string;
    welcomeSurveyStorageLegend: string;
    implementations: {
      localStorage: string;
      tanstackStore: string;
      zustand: string;
    };
  };
}

export const en: Messages = {
  common: {
    skipToMainContent: "Skip to main content",
    footerBefore: "A demo by",
    footerAfter: ", illustrating Object Calisthenics in a React front end.",
  },
  nav: {
    mainNavigation: "Main navigation",
    home: "Home",
    shoppingCart: "Shopping Cart",
    viewSourceOnGithub: "View source on GitHub (opens in a new tab)",
  },
  home: {
    title: "Maintainable Frontend Architecture with React",
    introBeforeTerm: "This site is a hands-on demo showing how to apply",
    calisthenicsTerm: "Object Calisthenics",
    introAfterTerm:
      "in a front-end app. You'll see how keeping objects small, simple, and focused makes your React code easier to understand and maintain.",
    introPart2:
      "Take a few moments to explore the interactive experience, then dive into the code to see these principles in action.",
    tryShoppingCart: "Try the Shopping Cart Experience",
    readArticle: "Read my article about object calisthenics",
    viewGithubProject: "View the GitHub project",
  },
  skill: {
    label: {
      beginner: "✨ Beginner Explorer",
      intermediate: "🧙‍♂️ Adept Seeker",
      expert: "🌌 Master Mystic",
    },
  },
  welcomeModal: {
    title: "Choose Your Knowledge Level",
    description:
      "Tell us how familiar you are with Azeroth's Finest Wares. This helps us customize the Mystical Inventory to match your experience.",
    fieldLabel: "Your knowledge level:",
    placeholderOption: "-- Select knowledge level --",
    invalidSkill: "Please select a valid skill level.",
    continue: "Continue",
  },
  shop: {
    title: "Azeroth's Finest Wares",
    inventoryHeading: "Mystical Inventory",
    cartButtonLabel: "Cart",
    yourInventory: "Your Inventory",
    itemCount: (count: number) => `${count} items`,
    closeCart: "Close cart",
    emptyInventory: "Your inventory is empty",
    subtotal: "Subtotal:",
    courierFee: "Courier Fee:",
    tax: "Tax:",
    total: "Total:",
    free: "Free",
    remainingForFreeCourier: (amount: string) =>
      `Add ${amount} more to earn free delivery by griffin!`,
    completePurchase: "Complete Purchase",
    endOfDemoTitle: "🎉 End of the Demo",
    endOfDemoDescriptionBefore:
      "Thanks for checking this out! Feel free to reach out if you'd like to",
    endOfDemoDiscuss: "discuss",
    endOfDemoOr: "or",
    endOfDemoCollaborate: "collaborate",
    endOfDemoDescriptionAfter: "with me.",
    githubProfileLabel: "Arnaud's GitHub profile (opens in a new tab)",
    linkedinProfileLabel: "Arnaud's LinkedIn profile (opens in a new tab)",
  },
  cartItem: {
    decreaseQuantityOf: (name: string) => `Decrease quantity of ${name}`,
    increaseQuantityOf: (name: string) => `Increase quantity of ${name}`,
    removeFromCart: (name: string) => `Remove ${name} from cart`,
  },
  product: {
    addToCart: "Add to Cart",
    watchVideo: "Watch Video",
    readLore: "Read Lore",
    loreVideoFor: (name: string) => `Lore video for ${name}.`,
    readLoreOf: (name: string) => `Read the lore of ${name} (opens in a new tab)`,
    statsHeading: "Stats:",
    effectsHeading: "Effects:",
    stat: {
      power: "Power",
      durability: "Durability",
      manaBoost: "Mana Boost",
    },
  },
  languageSwitcher: {
    label: "Language",
    en: "English",
    fr: "Français",
  },
  seo: {
    homeDescription:
      "Interactive React demo showing how to apply Object Calisthenics rules for maintainable, well-structured front-end code.",
    shopDescription:
      "A fantasy shop demo of Object Calisthenics: immutable domain classes, a first-class cart collection, and clean, testable React components.",
  },
  devSettings: {
    buttonLabel: "Developer settings",
    title: "Developer Settings",
    description:
      "Swap the storage behind the welcome survey to see the same domain code work unchanged against a different implementation.",
    welcomeSurveyStorageLegend: "Welcome survey storage",
    implementations: {
      localStorage: "Local Storage",
      tanstackStore: "TanStack Store",
      zustand: "Zustand",
    },
  },
};
