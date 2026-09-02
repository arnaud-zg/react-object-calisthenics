import type { Messages } from "./en";

export const fr: Messages = {
  common: {
    skipToMainContent: "Aller au contenu principal",
    footerBefore: "Une démo de",
    footerAfter: ", illustrant la calisthénie des objets dans une interface React.",
  },
  nav: {
    mainNavigation: "Navigation principale",
    home: "Accueil",
    shoppingCart: "Panier",
    viewSourceOnGithub: "Voir le code source sur GitHub (ouvre dans un nouvel onglet)",
  },
  home: {
    title: "Une architecture frontend maintenable avec React",
    introBeforeTerm: "Ce site est une démo pratique qui montre comment appliquer la",
    calisthenicsTerm: "Calisthénie des Objets",
    introAfterTerm:
      "dans une application front-end. Vous verrez comment garder des objets petits, simples et ciblés rend votre code React plus facile à comprendre et à maintenir.",
    introPart2:
      "Prenez quelques instants pour explorer l'expérience interactive, puis plongez dans le code pour voir ces principes en action.",
    tryShoppingCart: "Essayer l'expérience du panier d'achat",
    readArticle: "Lire mon article sur la calisthénie des objets",
    viewGithubProject: "Voir le projet sur GitHub",
  },
  skill: {
    label: {
      beginner: "✨ Explorateur Débutant",
      intermediate: "🧙‍♂️ Chercheur Adepte",
      expert: "🌌 Maître Mystique",
    },
  },
  welcomeModal: {
    title: "Choisissez votre niveau de connaissance",
    description:
      "Dites-nous à quel point vous connaissez les Plus Belles Marchandises d'Azeroth. Cela nous aide à personnaliser l'Inventaire Mystique selon votre expérience.",
    fieldLabel: "Votre niveau de connaissance :",
    placeholderOption: "-- Sélectionnez un niveau de connaissance --",
    invalidSkill: "Veuillez sélectionner un niveau de connaissance valide.",
    continue: "Continuer",
  },
  shop: {
    title: "Les Plus Belles Marchandises d'Azeroth",
    inventoryHeading: "Inventaire Mystique",
    cartButtonLabel: "Panier",
    yourInventory: "Votre Inventaire",
    itemCount: (count: number) => `${count} articles`,
    closeCart: "Fermer le panier",
    emptyInventory: "Votre inventaire est vide",
    subtotal: "Sous-total :",
    shipping: "Livraison :",
    tax: "Taxe :",
    total: "Total :",
    free: "Gratuite",
    remainingForFreeShipping: (amount: string) =>
      `Ajoutez ${amount} de plus pour obtenir la livraison gratuite par griffon !`,
    completePurchase: "Finaliser l'achat",
    endOfDemoTitle: "🎉 Fin de la démo",
    endOfDemoDescriptionBefore:
      "Merci d'avoir testé ceci ! N'hésitez pas à me contacter si vous souhaitez",
    endOfDemoDiscuss: "échanger",
    endOfDemoOr: "ou",
    endOfDemoCollaborate: "collaborer",
    endOfDemoDescriptionAfter: "avec moi.",
    githubProfileLabel: "Profil GitHub d'Arnaud (ouvre dans un nouvel onglet)",
    linkedinProfileLabel: "Profil LinkedIn d'Arnaud (ouvre dans un nouvel onglet)",
  },
  cartItem: {
    decreaseQuantityOf: (name: string) => `Diminuer la quantité de ${name}`,
    increaseQuantityOf: (name: string) => `Augmenter la quantité de ${name}`,
    removeFromCart: (name: string) => `Retirer ${name} du panier`,
  },
  product: {
    addToCart: "Ajouter au panier",
    watchVideo: "Regarder la vidéo",
    readLore: "Lire l'histoire",
    loreVideoFor: (name: string) => `Vidéo de l'histoire de ${name}.`,
    readLoreOf: (name: string) =>
      `Lire l'histoire de ${name} (ouvre dans un nouvel onglet)`,
    statsHeading: "Statistiques :",
    effectsHeading: "Effets :",
    stat: {
      power: "Puissance",
      durability: "Robustesse",
      manaBoost: "Boost de Mana",
    },
  },
  languageSwitcher: {
    label: "Langue",
    en: "English",
    fr: "Français",
  },
};
