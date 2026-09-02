import { Money } from "@/domain/cart/value-objects/Money";
import {
  ExtraResources,
  ImageUrl,
  KnowledgeContent,
  Product,
  ProductId,
  ProductName,
} from "@/domain/cart/value-objects/Product/Product";
import {
  Effect,
  ProfileDetails,
  Stats,
} from "@/domain/cart/value-objects/Product/ProductDetails";

interface StatBlock {
  power: number;
  durability: number;
  manaBoost: number;
}

interface ProfileBlueprint {
  description: string;
  stats: StatBlock;
  effects: string[];
}

interface ProductBlueprint {
  id: string;
  name: string;
  priceInCopper: number;
  imageUrl: string;
  loreLink: string;
  videoUrl: string;
  beginner: ProfileBlueprint;
  intermediate: ProfileBlueprint;
  expert: ProfileBlueprint;
}

function buildProfile(blueprint: ProfileBlueprint): ProfileDetails {
  const { power, durability, manaBoost } = blueprint.stats;

  return new ProfileDetails(
    blueprint.description,
    new Stats(power, durability, manaBoost),
    blueprint.effects.map((effect) => new Effect(effect)),
  );
}

function buildProduct(blueprint: ProductBlueprint): Product {
  const knowledge = new KnowledgeContent(
    buildProfile(blueprint.beginner),
    buildProfile(blueprint.intermediate),
    buildProfile(blueprint.expert),
  );

  return new Product(
    new ProductId(blueprint.id),
    new ProductName(blueprint.name),
    new Money(blueprint.priceInCopper),
    new ImageUrl(blueprint.imageUrl),
    knowledge,
    new ExtraResources(blueprint.loreLink, blueprint.videoUrl),
  );
}

/**
 * First-class collection wrapping the shop's Product[], instead of a bare exported array.
 */
export class ProductCatalog {
  private constructor(private readonly products: readonly Product[]) {}

  static of(blueprints: ProductBlueprint[]): ProductCatalog {
    return new ProductCatalog(blueprints.map(buildProduct));
  }

  all(): readonly Product[] {
    return this.products;
  }

  findById(productId: string): Product | undefined {
    return this.products.find((product) => product.displayId() === productId);
  }
}

export const PRODUCT_CATALOG = ProductCatalog.of([
  {
    id: "thunderfury",
    name: "Thunderfury, Blessed Blade of the Windseeker",
    priceInCopper: 115105,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/c/c9/Thunderfury%2C_Blessed_Blade_of_the_Windseeker.JPG",
    loreLink:
      "https://wowpedia.fandom.com/wiki/Thunderfury,_Blessed_Blade_of_the_Windseeker",
    videoUrl: "https://www.youtube.com/embed/2TGRpvb5Nos",
    beginner: {
      description:
        "A legendary sword that channels the power of storms. Wield it to summon lightning upon your foes.",
      stats: { power: 150, durability: 50, manaBoost: 0 },
      effects: ["Chance to strike enemies with lightning."],
    },
    intermediate: {
      description:
        "Thunderfury is forged with elemental fury. Great for battle, with bonus lightning damage and attack speed.",
      stats: { power: 300, durability: 100, manaBoost: 10 },
      effects: [
        "Increases attack speed by 15%",
        "Lightning damage with each hit",
        "Chance to slow enemies",
      ],
    },
    expert: {
      description:
        "Thunderfury, Blessed Blade of the Windseeker, is a legendary weapon of immense power. It channels elemental air, unleashing lightning with each strike. Its artifact status is confirmed by its rarity and crafting requirements.",
      stats: { power: 500, durability: 150, manaBoost: 25 },
      effects: [
        "Attack speed +25%",
        "Unleashes chain lightning on critical strikes",
        "Chance to silence enemies",
        "Grants immunity to silence for 5 seconds",
      ],
    },
  },
  {
    id: "ashbringer",
    name: "Ashbringer",
    priceInCopper: 288527,
    imageUrl: "https://static.wikia.nocookie.net/wowpedia/images/a/a6/Ashbringer_TCG.jpg",
    loreLink: "https://wowpedia.fandom.com/wiki/Ashbringer",
    videoUrl: "https://www.youtube.com/embed/lso8Ygk4rKc",
    beginner: {
      description:
        "A holy sword blessed to purge the undead. Known for its radiant power.",
      stats: { power: 200, durability: 70, manaBoost: 0 },
      effects: ["Bonus against undead enemies."],
    },
    intermediate: {
      description:
        "Ashbringer channels holy energy to smite foes, cleansing corruption and undead.",
      stats: { power: 350, durability: 140, manaBoost: 20 },
      effects: ["Holy damage +25%", "Undead vulnerability."],
    },
    expert: {
      description:
        "Ashbringer is the embodiment of righteousness. It delivers devastating holy strikes and vanquishes evil.",
      stats: { power: 600, durability: 220, manaBoost: 40 },
      effects: [
        "Holy damage +50%",
        "Instant kill chance on undead",
        "Grant blessing to allies",
      ],
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
    beginner: {
      description: "A molten hammer forged in elemental fire, granting immense strength.",
      stats: { power: 220, durability: 80, manaBoost: 0 },
      effects: ["Fire damage over time."],
    },
    intermediate: {
      description:
        "Sulfuras channels molten fire into devastating blows that incinerate enemies.",
      stats: { power: 400, durability: 160, manaBoost: 0 },
      effects: ["Fire blast chance", "Burn enemies for 10s"],
    },
    expert: {
      description:
        "Sulfuras is a weapon of pure elemental fury, capable of burning armies with a single strike.",
      stats: { power: 700, durability: 300, manaBoost: 0 },
      effects: [
        "Fire damage +70%",
        "Area of effect burn",
        "Ignite enemies on critical strike",
      ],
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
    beginner: {
      description: "A holy hammer that heals allies with each strike.",
      stats: { power: 160, durability: 60, manaBoost: 20 },
      effects: ["Heals allies on hit."],
    },
    intermediate: {
      description: "Val'anyr channels holy energy to protect allies in battle.",
      stats: { power: 320, durability: 140, manaBoost: 40 },
      effects: ["Heal over time for allies.", "Shield chance"],
    },
    expert: {
      description:
        "Val'anyr is a divine relic that grants immense healing and protection to allies.",
      stats: { power: 580, durability: 220, manaBoost: 60 },
      effects: [
        "Massive healing over time",
        "Full shield on critical hits",
        "Grant immunity to all debuffs for 5 seconds",
      ],
    },
  },
  {
    id: "doomhammer",
    name: "Doomhammer",
    priceInCopper: 363651,
    imageUrl: "https://static.wikia.nocookie.net/wowpedia/images/a/a2/Doomhammer_TCG.jpg",
    loreLink: "https://wowpedia.fandom.com/wiki/Doomhammer",
    videoUrl: "https://www.youtube.com/embed/htTWpEk_XDk",
    beginner: {
      description: "A mighty hammer that channels elemental earth power.",
      stats: { power: 170, durability: 80, manaBoost: 10 },
      effects: ["Shockwave on impact."],
    },
    intermediate: {
      description: "Doomhammer enhances the wielder’s strength and earth-based magic.",
      stats: { power: 340, durability: 160, manaBoost: 20 },
      effects: ["Shockwave radius +15%", "Stun chance on heavy attacks"],
    },
    expert: {
      description:
        "Doomhammer is the ultimate weapon of war, capable of shaking the very earth.",
      stats: { power: 610, durability: 300, manaBoost: 40 },
      effects: [
        "Shockwave radius +50%",
        "Stun all enemies within range",
        "Damage immunity for 3 seconds after a heavy attack",
      ],
    },
  },
]);
