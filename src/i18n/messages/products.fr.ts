import type { ProductContent } from "@/i18n/messages/products.en";

export const productContentFr: ProductContent = {
  thunderfury: {
    beginner: {
      description:
        "Une épée légendaire qui canalise le pouvoir des tempêtes. Maniez-la pour invoquer la foudre sur vos ennemis.",
      effects: ["Chance de frapper les ennemis avec la foudre."],
    },
    intermediate: {
      description:
        "Thunderfury est forgée dans une fureur élémentaire. Idéale au combat, avec des dégâts de foudre et une vitesse d'attaque bonus.",
      effects: [
        "Augmente la vitesse d'attaque de 15 %",
        "Dégâts de foudre à chaque coup",
        "Chance de ralentir les ennemis",
      ],
    },
    expert: {
      description:
        "Thunderfury, Lame Bénie du Chasse-Vent, est une arme légendaire d'une puissance immense. Elle canalise l'élément de l'air, déchaînant la foudre à chaque coup. Son statut d'artefact est confirmé par sa rareté et les exigences de sa fabrication.",
      effects: [
        "Vitesse d'attaque +25 %",
        "Déchaîne des chaînes de foudre lors des coups critiques",
        "Chance de faire taire les ennemis",
        "Accorde l'immunité au silence pendant 5 secondes",
      ],
    },
  },
  ashbringer: {
    beginner: {
      description:
        "Une épée sacrée bénie pour purger les morts-vivants. Connue pour sa puissance radieuse.",
      effects: ["Bonus contre les ennemis morts-vivants."],
    },
    intermediate: {
      description:
        "Ashbringer canalise l'énergie sacrée pour terrasser ses ennemis, purifiant la corruption et les morts-vivants.",
      effects: ["Dégâts sacrés +25 %", "Vulnérabilité des morts-vivants."],
    },
    expert: {
      description:
        "Ashbringer est l'incarnation de la droiture. Elle inflige des coups sacrés dévastateurs et anéantit le mal.",
      effects: [
        "Dégâts sacrés +50 %",
        "Chance d'exécution instantanée sur les morts-vivants",
        "Accorde une bénédiction aux alliés",
      ],
    },
  },
  sulfuras: {
    beginner: {
      description:
        "Un marteau en fusion forgé dans le feu élémentaire, conférant une force immense.",
      effects: ["Dégâts de feu au fil du temps."],
    },
    intermediate: {
      description:
        "Sulfuras canalise le feu en fusion en coups dévastateurs qui incinèrent les ennemis.",
      effects: ["Chance d'explosion de feu", "Brûle les ennemis pendant 10s"],
    },
    expert: {
      description:
        "Sulfuras est une arme de pure fureur élémentaire, capable d'embraser des armées entières en un seul coup.",
      effects: [
        "Dégâts de feu +70 %",
        "Brûlure de zone",
        "Enflamme les ennemis lors des coups critiques",
      ],
    },
  },
  valanyr: {
    beginner: {
      description: "Un marteau sacré qui soigne les alliés à chaque coup.",
      effects: ["Soigne les alliés au contact."],
    },
    intermediate: {
      description:
        "Val'anyr canalise l'énergie sacrée pour protéger les alliés au combat.",
      effects: ["Soin continu pour les alliés.", "Chance de bouclier"],
    },
    expert: {
      description:
        "Val'anyr est une relique divine qui accorde une guérison et une protection immenses aux alliés.",
      effects: [
        "Soin massif au fil du temps",
        "Bouclier complet lors des coups critiques",
        "Accorde l'immunité à tous les affaiblissements pendant 5 secondes",
      ],
    },
  },
  doomhammer: {
    beginner: {
      description: "Un puissant marteau qui canalise le pouvoir élémentaire de la terre.",
      effects: ["Onde de choc à l'impact."],
    },
    intermediate: {
      description: "Doomhammer renforce la force de son porteur et sa magie terrestre.",
      effects: [
        "Rayon de l'onde de choc +15 %",
        "Chance d'étourdissement sur les coups lourds",
      ],
    },
    expert: {
      description:
        "Doomhammer est l'arme ultime de la guerre, capable de faire trembler la terre elle-même.",
      effects: [
        "Rayon de l'onde de choc +50 %",
        "Étourdit tous les ennemis à portée",
        "Immunité aux dégâts pendant 3 secondes après un coup lourd",
      ],
    },
  },
};
