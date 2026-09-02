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
  frostmourne: {
    beginner: {
      description:
        "Une lame gravée de runes de givre, réputée pour voler l'âme de ceux qu'elle terrasse. À manier avec prudence.",
      effects: ["Chance de glacer les ennemis au contact."],
    },
    intermediate: {
      description:
        "Frostmourne draine la vie de ses victimes, emprisonnant leur âme au sein même de la lame.",
      effects: [
        "Dégâts de givre +20 %",
        "Chance de geler complètement les ennemis",
        "Vole un peu de vie à l'ennemi à chaque coup",
      ],
    },
    expert: {
      description:
        "Frostmourne est une lame runique d'une puissance terrible, forgée pour lier son porteur à une volonté immortelle. Chaque âme qu'elle réclame nourrit sa colère.",
      effects: [
        "Dégâts de givre +45 %",
        "La récolte d'âmes soigne le porteur",
        "Chance de relever un ennemi tombé comme allié temporaire",
        "Immunité à la peur",
      ],
    },
  },
  shadowmourne: {
    beginner: {
      description:
        "Une hache avide d'âmes, réputée pour devenir plus puissante à chaque victime.",
      effects: ["Chance d'absorber une âme à l'élimination pour des dégâts bonus."],
    },
    intermediate: {
      description:
        "Shadowmourne se nourrit des âmes des vaincus, chacune rendant la lame plus tranchante et plus mortelle.",
      effects: [
        "Puissance d'attaque +20 % par âme absorbée (cumulable)",
        "Chance de déchaîner une flamme d'ombre",
      ],
    },
    expert: {
      description:
        "Shadowmourne, forgée à partir de l'arme d'un tyran déchu, est insatiable. La manier, c'est la nourrir, sans fin.",
      effects: [
        "Puissance d'attaque +35 % par âme absorbée (jusqu'à 5 cumuls)",
        "Explosion de flamme d'ombre à l'exécution",
        "Effraie les ennemis proches lors des coups critiques",
      ],
    },
  },
  atiesh: {
    beginner: {
      description:
        "Un bâton ancien vibrant de pouvoir arcanique. Idéal pour les lanceurs de sorts en quête de mana.",
      effects: ["Régénère le mana au fil du temps."],
    },
    intermediate: {
      description:
        "Atiesh amplifie la magie de son porteur, permettant aux sorts de puiser plus de puissance pour moins de mana.",
      effects: ["Régénération de mana +30 %", "Chance de coup critique de sort +5 %"],
    },
    expert: {
      description:
        "Atiesh, porté par chaque Gardien de Tirisfal, canalise des siècles de maîtrise arcanique. Il peut même ouvrir un portail vers Karazhan.",
      effects: [
        "Régénération de mana +60 %",
        "Invoque un portail temporaire pour fuir",
        "Dégâts de tous les sorts +15 %",
        "Accorde un bonus d'école de magie aléatoire aux alliés proches",
      ],
    },
  },
  warglaivesofazzinoth: {
    beginner: {
      description:
        "Une paire de glaives verts et infernaux, rapides et vicieux au corps à corps.",
      effects: ["Dégâts bonus contre les démons."],
    },
    intermediate: {
      description:
        "Les Lame-glaives d'Azzinoth tranchent la chair comme la fel, offrant à leur porteur une vitesse démoniaque.",
      effects: [
        "Vitesse d'attaque +20 %",
        "Dégâts fel au contact",
        "Dégâts bonus contre les démons +25 %",
      ],
    },
    expert: {
      description:
        "Jadis maniées par Illidan Storm-rage lui-même, ces glaives jumelles canalisent une fureur démoniaque brute. Rares sont ceux qui survivent à leur danse mortelle.",
      effects: [
        "Vitesse d'attaque +35 %",
        "Chance de frapper deux fois par coup",
        "Dégâts fel +50 % contre les démons",
        "Courte envolée à l'activation",
      ],
    },
  },
  dragonwrath: {
    beginner: {
      description:
        "Un bâton rayonnant de magie draconique, réputé abriter l'esprit d'un dragon.",
      effects: ["Duplique occasionnellement un sort lancé."],
    },
    intermediate: {
      description:
        "Dragonwrath canalise la puissance d'un dragon, permettant aux sorts de résonner avec une force accrue.",
      effects: ["Chance de dupliquer un sort de dégâts", "Puissance des sorts +20 %"],
    },
    expert: {
      description:
        "Forgé grâce au sacrifice du dragon Tarecgosa, Dragonwrath permet à son porteur de se transformer en dragon et de déchaîner une magie dévastatrice.",
      effects: [
        "Chance de dupliquer n'importe quel sort lancé",
        "Puissance des sorts +40 %",
        "Transformation en dragon pour un court vol",
        "Immunité au silence pendant la transformation",
      ],
    },
  },
  fangsofthefather: {
    beginner: {
      description: "Une paire de dagues incurvées assorties, rapides et silencieuses.",
      effects: ["Dégâts bonus dans le dos."],
    },
    intermediate: {
      description:
        "Les Crocs du Père frappent deux fois plus vite que n'importe quelle lame, récompensant une approche furtive.",
      effects: ["Vitesse d'attaque +25 %", "Dégâts bonus depuis la discrétion +30 %"],
    },
    expert: {
      description:
        "Obtenues en traquant l'escadrille de dragons corrompue elle-même, ces dagues jumelles récompensent avant tout la vitesse et la précision.",
      effects: [
        "Vitesse d'attaque +40 %",
        "Coup critique garanti depuis la discrétion",
        "Chaque coup empoisonne la cible",
        "Restaure de l'énergie à l'élimination",
      ],
    },
  },
  queldelar: {
    beginner: {
      description:
        "Une lame prismatique, élégante et bien équilibrée, appréciée des éclaireurs.",
      effects: ["Dégâts bonus contre les morts-vivants."],
    },
    intermediate: {
      description:
        "Quel'Delar fut forgée comme symbole contre le Fléau, et entaille toujours aussi profondément tout ce qui n'est pas vivant.",
      effects: [
        "Dégâts contre les morts-vivants +25 %",
        "Chance d'aveugler un ennemi au contact",
      ],
    },
    expert: {
      description:
        "Purifiée après avoir été corrompue par le Roi-Liche, Quel'Delar rayonne désormais de la détermination de tous ceux qui se sont battus pour la reconquérir.",
      effects: [
        "Dégâts contre les morts-vivants +50 %",
        "Le coup purificateur retire un bonus à l'ennemi",
        "Accorde un bouclier après un coup fatal",
        "Immunité aux malédictions pendant 5 secondes",
      ],
    },
  },
};
