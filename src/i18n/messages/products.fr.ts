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
  rhokdelar: {
    beginner: {
      description: "Un arc vivant façonné de bois ancien, réputé fleurir à chaque tir.",
      effects: ["Dégâts bonus contre les démons."],
    },
    intermediate: {
      description:
        "Rhok'delar fut cultivé par les Anciens de Feralas eux-mêmes, son bois vivant canalisant la force de la nature dans chaque flèche.",
      effects: [
        "Vitesse d'attaque +15 %",
        "Dégâts de poison au contact",
        "Dégâts bonus contre les démons +20 %",
      ],
    },
    expert: {
      description:
        "Cultivé par les Anciens pour armer un chasseur chargé de les venger, Rhok'delar a depuis terrassé un dragon noir et d'innombrables agents de la Légion. Il ne cesse jamais de fleurir.",
      effects: [
        "Vitesse d'attaque +30 %",
        "Racines entravantes lors des coups critiques",
        "Dégâts bonus contre les démons +40 %",
        "Régénère de la vie lorsqu'il est bandé",
      ],
    },
  },
  aluneth: {
    beginner: {
      description:
        "Un bâton ancien taillé dans du bois enchanté, vibrant d'un pouvoir arcanique contenu.",
      effects: ["Régénère le mana au fil du temps."],
    },
    intermediate: {
      description:
        "Aluneth canalise des siècles de savoir arcanique, permettant à son porteur de lier et de libérer la magie brute avec aisance.",
      effects: ["Régénération de mana +35 %", "Dégâts de sort +15 %"],
    },
    expert: {
      description:
        "Jadis utilisé par Aegwynn pour emprisonner une entité malveillante dans son bois, Aluneth canalise désormais tout l'héritage arcanique des Gardiens.",
      effects: [
        "Régénération de mana +70 %",
        "Dégâts de sort +30 %",
        "Chance de déchaîner une explosion d'énergie arcanique pure",
        "Réduit le coût du prochain sort à zéro",
      ],
    },
  },
  felomelorn: {
    beginner: {
      description:
        "Une ancienne lame elfique enveloppée de flammes, réputée avoir survécu à sa propre destruction.",
      effects: ["Dégâts de feu au contact."],
    },
    intermediate: {
      description:
        "Felo'melorn fut brisée contre Frostmourne puis reforgée dans la vengeance, sa lame brûlant désormais de la fureur de son porteur.",
      effects: [
        "Dégâts de feu +25 %",
        "Vitesse d'attaque +10 %",
        "Chance d'enflammer les ennemis",
      ],
    },
    expert: {
      description:
        "Reforgée par Kael'thas à partir des cendres de l'épée de son père, Felo'melorn brûle de la rage combinée de la lignée Sunstrider.",
      effects: [
        "Dégâts de feu +45 %",
        "Vitesse d'attaque +20 %",
        "Enflamme le sol sous les ennemis touchés",
        "Immunité aux dégâts de feu pendant l'activation",
      ],
    },
  },
  fangsofashamane: {
    beginner: {
      description:
        "Une paire de crocs féraux, réputés porter l'esprit d'une grande panthère.",
      effects: ["Dégâts bonus sous forme animale."],
    },
    intermediate: {
      description:
        "Les Crocs d'Ashamane permettent à leur porteur de se mouvoir et de frapper avec la vitesse et la férocité du Dieu sauvage dont ils portent le nom.",
      effects: [
        "Vitesse d'attaque +20 %",
        "Dégâts de saignement au fil du temps",
        "Dégâts bonus sous forme animale +20 %",
      ],
    },
    expert: {
      description:
        "Arrachés à Ashamane, l'un des premiers Dieux sauvages tombés en défendant Azeroth, ces crocs accordent à leur porteur sa fureur primitive et indomptée.",
      effects: [
        "Vitesse d'attaque +35 %",
        "Dégâts de saignement +50 %",
        "Chance de se transformer en forme féline surnaturelle",
        "Restaure de la vie lors des coups critiques",
      ],
    },
  },
  scytheofelune: {
    beginner: {
      description:
        "Un bâton incurvé béni par la déesse lune, vibrant d'un pouvoir équilibré entre nature et magie arcanique.",
      effects: ["Régénère le mana au fil du temps."],
    },
    intermediate: {
      description:
        "La Faux d'Elune canalise à la fois le clair de lune et la lumière des étoiles, permettant à son porteur d'équilibrer une magie dévastatrice avec un contrôle constant.",
      effects: ["Puissance des sorts +20 %", "Régénération de mana +25 %"],
    },
    expert: {
      description:
        "Forgée à partir d'un croc de Goldrinn et du bâton d'Elune elle-même, et liée à l'origine de la malédiction des Worgens, la Faux d'Elune canalise désormais une magie d'équilibre pure et purifiée.",
      effects: [
        "Puissance des sorts +40 %",
        "Régénération de mana +50 %",
        "Alterne entre les charges lunaire et solaire",
        "Immunité au silence pendant la canalisation",
      ],
    },
  },
  mawofthedamned: {
    beginner: {
      description: "Une hache antique qui draine la vie de ceux qu'elle frappe.",
      effects: ["Draine une partie de la vie de l'ennemi au contact."],
    },
    intermediate: {
      description:
        "Maw of the Damned se nourrit de l'énergie vitale de ses victimes, la renvoyant vers son porteur.",
      effects: ["Drain de vie +20 %", "Vitesse d'attaque +10 %"],
    },
    expert: {
      description:
        "Forgée par la Légion pour corrompre quiconque la manie, cette hache porte toujours l'âme vorace et prisonnière de son créateur.",
      effects: [
        "Drain de vie +40 %",
        "Vitesse d'attaque +20 %",
        "Chance de se repaître de l'âme d'un ennemi pour des dégâts bonus",
        "Immunité à la peur pendant l'absorption",
      ],
    },
  },
  apocalypse: {
    beginner: {
      description: "Une lame corrompue qui propage la maladie à chaque coup.",
      effects: ["Chance d'infliger une peste au contact."],
    },
    intermediate: {
      description:
        "Apocalypse fut forgée par des seigneurs-dragons pour corrompre son porteur, répandant la non-mort à chaque frappe.",
      effects: [
        "Dégâts de peste +25 %",
        "Chance de relever un serviteur mort-vivant mineur",
      ],
    },
    expert: {
      description:
        "Scellée par le Gardien Alodi après la corruption d'un seigneur-dragon, Apocalypse déchaîne désormais la non-mort et la peste à une échelle que peu peuvent supporter.",
      effects: [
        "Dégâts de peste +50 %",
        "Invoque des serviteurs morts-vivants à l'élimination",
        "Propage la peste aux ennemis proches",
        "Immunité aux effets de maladie",
      ],
    },
  },
  clawsofursoc: {
    beginner: {
      description: "Une paire de griffes massives arrachées à un demi-dieu ours.",
      effects: ["Dégâts bonus sous forme d'ours."],
    },
    intermediate: {
      description:
        "Les Griffes d'Ursoc canalisent la fureur protectrice du demi-dieu, récompensant ceux qui tiennent leur position.",
      effects: ["Réduction des dégâts +15 %", "Dégâts bonus sous forme d'ours +20 %"],
    },
    expert: {
      description:
        "Arrachées à Ursoc après sa chute face au Cauchemar d'Émeraude corrompu, ces griffes permettent à leur porteur de devenir un avatar vivant de sa rage et de sa protection.",
      effects: [
        "Réduction des dégâts +30 %",
        "Dégâts bonus sous forme d'ours +40 %",
        "Provoque tous les ennemis proches à l'activation",
        "Renvoie une partie des dégâts subis",
      ],
    },
  },
  ghanir: {
    beginner: {
      description: "Une branche vivante qui vibre d'une énergie régénératrice.",
      effects: ["Soigne le porteur au fil du temps."],
    },
    intermediate: {
      description:
        "G'Hanir canalise le pouvoir vivifiant du Rêve d'Émeraude pour refermer les blessures.",
      effects: ["Soins prodigués +20 %", "Régénération de mana +15 %"],
    },
    expert: {
      description:
        "Coupée du tout premier arbre offert aux druides, G'Hanir reste éternellement liée au Rêve d'Émeraude, son pouvoir de guérison presque sans limite.",
      effects: [
        "Soins prodigués +40 %",
        "Régénération de mana +30 %",
        "Fleurit périodiquement pour soigner tous les alliés proches",
        "Immunité au silence pendant la canalisation",
      ],
    },
  },
  stromkar: {
    beginner: {
      description:
        "Une épée à deux mains jadis portée par le premier seigneur de guerre à unifier l'humanité.",
      effects: ["Dégâts bonus contre plusieurs ennemis."],
    },
    intermediate: {
      description:
        "Strom'kar récompense la force brute et la détermination d'un guerrier, brisant armures et volontés.",
      effects: ["Puissance d'attaque +20 %", "Pénétration d'armure +15 %"],
    },
    expert: {
      description:
        "Perdue après que le roi Thoradin l'utilisa pour soumettre une horreur venue d'ailleurs, Strom'kar revient briser une fois de plus les ennemis de l'humanité.",
      effects: [
        "Puissance d'attaque +35 %",
        "Pénétration d'armure +30 %",
        "Frappe en cône tous les ennemis devant le porteur",
        "Immunité à la peur en furie",
      ],
    },
  },
  titanstrike: {
    beginner: {
      description:
        "Un fusil technomagique alliant mécanique des titans et puissance brute.",
      effects: ["Dégâts bonus contre les bêtes."],
    },
    intermediate: {
      description:
        "Titanstrike canalise une ingénierie forgée par les titans en tirs dévastateurs et précis.",
      effects: [
        "Puissance d'attaque à distance +20 %",
        "Chance de tirer un projectile perforant",
      ],
    },
    expert: {
      description:
        "Conçu par le Gardien Mimiron lui-même, Titanstrike protège la faune d'Azeroth avec la même précision destructrice que les titans employaient pour façonner les mondes.",
      effects: [
        "Puissance d'attaque à distance +35 %",
        "Les tirs perforants touchent tous les ennemis alignés",
        "Provoque un éclair sur les coups critiques",
        "Immunité au recul en tirant",
      ],
    },
  },
  thasdorah: {
    beginner: {
      description: "Un arc ancestral taillé dans un arbre elfique.",
      effects: ["Dégâts bonus à longue portée."],
    },
    intermediate: {
      description:
        "Thas'dorah canalise la précision et l'héritage de générations de rôdeuses Coursevent.",
      effects: ["Puissance d'attaque à distance +20 %", "Chance de coup critique +5 %"],
    },
    expert: {
      description:
        "Jadis portée par la Capitaine rôdeuse Alleria Coursevent avant de disparaître à Outreterre, Thas'dorah restaure l'héritage des plus grands archers de Quel'Thalas.",
      effects: [
        "Puissance d'attaque à distance +35 %",
        "Les flèches se divisent pour toucher des ennemis supplémentaires",
        "Accorde la discrétion après un tir fatal",
      ],
    },
  },
  talonclaw: {
    beginner: {
      description: "Une lance tribale bénie par un ancien esprit sauvage.",
      effects: ["Dégâts bonus contre les bêtes."],
    },
    intermediate: {
      description:
        "Talonclaw canalise la fureur de la nature elle-même, récompensant les chasseurs qui combattent aux côtés de la nature.",
      effects: ["Vitesse d'attaque +15 %", "Dégâts bonus contre les bêtes +20 %"],
    },
    expert: {
      description:
        "Bénie à travers les millénaires par des Dieux sauvages dont l'esprit-aigle Ohn'ahra, Talonclaw est à la fois une arme et un pacte sacré avec la nature.",
      effects: [
        "Vitesse d'attaque +25 %",
        "Dégâts bonus contre les bêtes +35 %",
        "Invoque un aigle spectral pour aider le porteur",
        "Accorde un bref vol à l'activation",
      ],
    },
  },
  truthguard: {
    beginner: {
      description: "Un bouclier incassable forgé par des gardiens titanesques.",
      effects: ["Réduit les dégâts entrants."],
    },
    intermediate: {
      description: "Truthguard expose la tromperie et protège les justes du danger.",
      effects: ["Chance de blocage +15 %", "Réduction des dégâts +15 %"],
    },
    expert: {
      description:
        "Forgé par Tyr et Archaedas pour exposer la corruption d'un gardien traître, Truthguard demeure un symbole incassable de justice face à tout mensonge.",
      effects: [
        "Chance de blocage +30 %",
        "Réduction des dégâts +30 %",
        "Renvoie une partie des dégâts bloqués",
        "Retire un effet néfaste lors d'un blocage",
      ],
    },
  },
  tuure: {
    beginner: {
      description: "Une masse de cristal renfermant un éclat de lumière naaru.",
      effects: ["Soigne les alliés du porteur au fil du temps."],
    },
    intermediate: {
      description:
        "T'uure canalise l'éclat naaru pour protéger et soigner ceux qui se tiennent sous sa lumière.",
      effects: ["Soins prodigués +20 %", "Accorde un bouclier à la cible du porteur"],
    },
    expert: {
      description:
        "Jadis utilisée pour protéger des réfugiés draeneï de démons annihilateurs, T'uure canalise désormais la lumière naaru pour protéger et soigner à bien plus grande échelle.",
      effects: [
        "Soins prodigués +40 %",
        "Accorde un bouclier à tous les alliés proches",
        "Une lumière sacrée périodique soigne le groupe",
        "Immunité aux dégâts d'ombre pendant la canalisation",
      ],
    },
  },
  xalatath: {
    beginner: {
      description: "Une dague ancienne qui murmure des secrets troublants.",
      effects: ["Dégâts d'ombre bonus au contact."],
    },
    intermediate: {
      description:
        "Xal'atath porte un fragment de l'esprit d'un Dieu ancien, murmurant un savoir interdit à son porteur.",
      effects: ["Dégâts d'ombre +25 %", "Chance d'effrayer un ennemi au contact"],
    },
    expert: {
      description:
        "Fragment vivant de la conscience de l'Empire Noir, Xal'atath transforme la folie même qu'elle murmure en une puissance destructrice brute.",
      effects: [
        "Dégâts d'ombre +45 %",
        "Effraie tous les ennemis proches lors des coups critiques",
        "Ses murmures accordent un bonus de perspicacité (chance de critique accrue)",
        "Immunité aux effets de peur",
      ],
    },
  },
  ulthalesh: {
    beginner: {
      description: "Un bâton-faux forgé dans les flammes d'un monde brisé.",
      effects: ["Draine la vie de la cible au fil du temps."],
    },
    intermediate: {
      description:
        "Ulthalesh consume lentement les âmes de ceux qu'il frappe, nourrissant le pouvoir de son porteur.",
      effects: ["Dégâts sur la durée +25 %", "Drain de vie +15 %"],
    },
    expert: {
      description:
        "Forgé par Sargeras lui-même et nommé d'après la dernière âme qu'il a jamais dévorée, Ulthalesh consume l'essence même des ennemis, un instant agonisant à la fois.",
      effects: [
        "Dégâts sur la durée +45 %",
        "Drain de vie +30 %",
        "Propage les effets de dégâts sur la durée aux ennemis proches",
        "Invoque un fragment d'âme dévorée pour combattre aux côtés du porteur",
      ],
    },
  },
  thesilverhand: {
    beginner: {
      description: "Une masse forgée par les titans, portée par de légendaires paladins.",
      effects: ["Soigne les alliés du porteur au contact."],
    },
    intermediate: {
      description:
        "La Main d'Argent canalise l'autorité sacrée de l'ordre dont elle porte le nom, soignant et inspirant les alliés.",
      effects: ["Soins prodigués +20 %", "Régénération de mana +15 %"],
    },
    expert: {
      description:
        "Jadis maniée par le Gardien Tyr puis par Uther le Porteur de Lumière, la Main d'Argent répond à l'appel de justice de son porteur avec une puissance sacrée écrasante.",
      effects: [
        "Soins prodigués +40 %",
        "Régénération de mana +30 %",
        "Bénit périodiquement tous les alliés proches",
        "Accorde l'immunité à la peur au porteur et à ses alliés",
      ],
    },
  },
};
