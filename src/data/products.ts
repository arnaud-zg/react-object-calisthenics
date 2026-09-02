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
