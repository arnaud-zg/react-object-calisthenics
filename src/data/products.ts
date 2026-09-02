import { Money } from "@/domain/cart/value-objects/Money";
import {
  ExtraResources,
  ImageUrl,
  KnowledgeContent,
  type KnowledgeProfile,
  Product,
  ProductId,
  ProductName,
} from "@/domain/cart/value-objects/Product/Product";
import {
  Effect,
  ProfileDetails,
  Stats,
} from "@/domain/cart/value-objects/Product/ProductDetails";
import type { Locale } from "@/i18n/Locale";
import { productContentEn } from "@/i18n/messages/products.en";
import { productContentFr } from "@/i18n/messages/products.fr";

interface StatBlock {
  power: number;
  durability: number;
  manaBoost: number;
}

/**
 * Everything about a product that doesn't change with locale: identity, price, media,
 * and stats. Translatable description/effects text lives in the i18n message catalogs
 * instead (see src/i18n/messages/products.en.ts), keyed by this same product id.
 */
interface ProductStructure {
  id: string;
  name: string;
  priceInCopper: number;
  imageUrl: string;
  loreLink: string;
  videoUrl: string;
  stats: Record<KnowledgeProfile, StatBlock>;
}

const PRODUCT_STRUCTURES: ProductStructure[] = [
  {
    id: "thunderfury",
    name: "Thunderfury, Blessed Blade of the Windseeker",
    priceInCopper: 115105,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/c/c9/Thunderfury%2C_Blessed_Blade_of_the_Windseeker.JPG",
    loreLink:
      "https://wowpedia.fandom.com/wiki/Thunderfury,_Blessed_Blade_of_the_Windseeker",
    videoUrl: "https://www.youtube.com/embed/2TGRpvb5Nos",
    stats: {
      beginner: { power: 150, durability: 50, manaBoost: 0 },
      intermediate: { power: 300, durability: 100, manaBoost: 10 },
      expert: { power: 500, durability: 150, manaBoost: 25 },
    },
  },
  {
    id: "ashbringer",
    name: "Ashbringer",
    priceInCopper: 288527,
    imageUrl: "https://static.wikia.nocookie.net/wowpedia/images/a/a6/Ashbringer_TCG.jpg",
    loreLink: "https://wowpedia.fandom.com/wiki/Ashbringer",
    videoUrl: "https://www.youtube.com/embed/lso8Ygk4rKc",
    stats: {
      beginner: { power: 200, durability: 70, manaBoost: 0 },
      intermediate: { power: 350, durability: 140, manaBoost: 20 },
      expert: { power: 600, durability: 220, manaBoost: 40 },
    },
  },
  {
    id: "sulfuras",
    name: "Sulfuras, Hand of Ragnaros",
    priceInCopper: 31244,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/6/6e/Sulfuras_Hand_of_Ragnaros_TCG.jpg",
    loreLink: "https://wowpedia.fandom.com/wiki/Sulfuras,_Hand_of_Ragnaros",
    videoUrl: "https://www.youtube.com/embed/crNEJBci-Es",
    stats: {
      beginner: { power: 220, durability: 80, manaBoost: 0 },
      intermediate: { power: 400, durability: 160, manaBoost: 0 },
      expert: { power: 700, durability: 300, manaBoost: 0 },
    },
  },
  {
    id: "valanyr",
    name: "Val'anyr, Hammer of Ancient Kings",
    priceInCopper: 363651,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/7/76/Val%27anyr%2C_Hammer_of_Ancient_Kings_TCG.jpg",
    loreLink: "https://wowpedia.fandom.com/wiki/Val'anyr,_Hammer_of_Ancient_Kings",
    videoUrl: "https://www.youtube.com/embed/u5GX0RHW6KM",
    stats: {
      beginner: { power: 160, durability: 60, manaBoost: 20 },
      intermediate: { power: 320, durability: 140, manaBoost: 40 },
      expert: { power: 580, durability: 220, manaBoost: 60 },
    },
  },
  {
    id: "doomhammer",
    name: "Doomhammer",
    priceInCopper: 363651,
    imageUrl: "https://static.wikia.nocookie.net/wowpedia/images/a/a2/Doomhammer_TCG.jpg",
    loreLink: "https://wowpedia.fandom.com/wiki/Doomhammer",
    videoUrl: "https://www.youtube.com/embed/htTWpEk_XDk",
    stats: {
      beginner: { power: 170, durability: 80, manaBoost: 10 },
      intermediate: { power: 340, durability: 160, manaBoost: 20 },
      expert: { power: 610, durability: 300, manaBoost: 40 },
    },
  },
  {
    id: "frostmourne",
    name: "Frostmourne",
    priceInCopper: 340000,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/f/fd/Inv_sword_92.png/revision/latest?cb=20070528023922",
    loreLink: "https://wowpedia.fandom.com/wiki/Frostmourne",
    videoUrl: "https://www.youtube.com/embed/1NtqX6MBdwI",
    stats: {
      beginner: { power: 210, durability: 90, manaBoost: 0 },
      intermediate: { power: 380, durability: 170, manaBoost: 10 },
      expert: { power: 650, durability: 280, manaBoost: 20 },
    },
  },
  {
    id: "shadowmourne",
    name: "Shadowmourne",
    priceInCopper: 355000,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/6/67/Inv_axe_113.png/revision/latest?cb=20091028204515",
    loreLink: "https://wowpedia.fandom.com/wiki/Shadowmourne",
    videoUrl: "https://www.youtube.com/embed/IUPHwjj1trc",
    stats: {
      beginner: { power: 230, durability: 75, manaBoost: 0 },
      intermediate: { power: 410, durability: 150, manaBoost: 0 },
      expert: { power: 720, durability: 260, manaBoost: 10 },
    },
  },
  {
    id: "atiesh",
    name: "Atiesh, Greatstaff of the Guardian",
    priceInCopper: 250000,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/a/a3/Inv_staff_medivh.png/revision/latest?cb=20060923023240",
    loreLink: "https://wowpedia.fandom.com/wiki/Atiesh,_Greatstaff_of_the_Guardian",
    videoUrl: "https://www.youtube.com/embed/tQYnMpuqiz0",
    stats: {
      beginner: { power: 60, durability: 40, manaBoost: 200 },
      intermediate: { power: 120, durability: 80, manaBoost: 380 },
      expert: { power: 200, durability: 130, manaBoost: 620 },
    },
  },
  {
    id: "warglaivesofazzinoth",
    name: "Warglaives of Azzinoth",
    priceInCopper: 300000,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/e/eb/Inv_weapon_glave_01.png/revision/latest?cb=20070528024112",
    loreLink: "https://wowpedia.fandom.com/wiki/Warglaives_of_Azzinoth",
    videoUrl: "https://www.youtube.com/embed/WO10S7cvAMI",
    stats: {
      beginner: { power: 200, durability: 60, manaBoost: 10 },
      intermediate: { power: 370, durability: 120, manaBoost: 30 },
      expert: { power: 640, durability: 200, manaBoost: 55 },
    },
  },
  {
    id: "dragonwrath",
    name: "Dragonwrath, Tarecgosa's Rest",
    priceInCopper: 275000,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/4/4e/Stave_2h_tarecgosa_e_01stagefinal.png/revision/latest?cb=20110505115852",
    loreLink: "https://wowpedia.fandom.com/wiki/Dragonwrath,_Tarecgosa%27s_Rest",
    videoUrl: "https://www.youtube.com/embed/nv21cO_1LNc",
    stats: {
      beginner: { power: 80, durability: 40, manaBoost: 180 },
      intermediate: { power: 150, durability: 80, manaBoost: 340 },
      expert: { power: 260, durability: 130, manaBoost: 560 },
    },
  },
  {
    id: "fangsofthefather",
    name: "Fangs of the Father",
    priceInCopper: 180000,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/b/bb/Inv_knife_1h_deathwingraid_e_03.png/revision/latest?cb=20110928094409",
    loreLink: "https://wowpedia.fandom.com/wiki/Fangs_of_the_Father",
    videoUrl: "https://www.youtube.com/embed/hh_9X3zhEOA",
    stats: {
      beginner: { power: 190, durability: 40, manaBoost: 0 },
      intermediate: { power: 350, durability: 90, manaBoost: 10 },
      expert: { power: 610, durability: 150, manaBoost: 20 },
    },
  },
  {
    id: "queldelar",
    name: "Quel'Delar",
    priceInCopper: 150000,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/2/23/Inv_sword_155.png/revision/latest?cb=20091028204852",
    loreLink: "https://wowpedia.fandom.com/wiki/Quel%27Delar",
    videoUrl: "https://www.youtube.com/embed/_F87LtO0CJQ",
    stats: {
      beginner: { power: 150, durability: 90, manaBoost: 10 },
      intermediate: { power: 290, durability: 170, manaBoost: 30 },
      expert: { power: 500, durability: 280, manaBoost: 55 },
    },
  },
];

const PRODUCT_CONTENT_BY_LOCALE: Record<Locale, typeof productContentEn> = {
  en: productContentEn,
  fr: productContentFr,
};

function buildProfile(
  stats: StatBlock,
  description: string,
  effects: string[],
): ProfileDetails {
  return new ProfileDetails(
    description,
    new Stats(stats.power, stats.durability, stats.manaBoost),
    effects.map((effect) => new Effect(effect)),
  );
}

function buildProduct(structure: ProductStructure, locale: Locale): Product {
  const content = PRODUCT_CONTENT_BY_LOCALE[locale][structure.id];

  if (!content) {
    throw new Error(`Missing "${locale}" product content for "${structure.id}"`);
  }

  const knowledge = new KnowledgeContent(
    buildProfile(
      structure.stats.beginner,
      content.beginner.description,
      content.beginner.effects,
    ),
    buildProfile(
      structure.stats.intermediate,
      content.intermediate.description,
      content.intermediate.effects,
    ),
    buildProfile(
      structure.stats.expert,
      content.expert.description,
      content.expert.effects,
    ),
  );

  return new Product(
    new ProductId(structure.id),
    new ProductName(structure.name),
    new Money(structure.priceInCopper),
    new ImageUrl(structure.imageUrl),
    knowledge,
    new ExtraResources(structure.loreLink, structure.videoUrl),
  );
}

/**
 * First-class collection wrapping the shop's Product[], instead of a bare exported array.
 */
export class ProductCatalog {
  private constructor(private readonly products: readonly Product[]) {}

  static forLocale(locale: Locale): ProductCatalog {
    return new ProductCatalog(
      PRODUCT_STRUCTURES.map((structure) => buildProduct(structure, locale)),
    );
  }

  all(): readonly Product[] {
    return this.products;
  }

  findById(productId: string): Product | undefined {
    return this.products.find((product) => product.displayId() === productId);
  }
}
