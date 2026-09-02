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
  iconUrl: string;
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
    iconUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/3/36/Inv_sword_39.png/revision/latest?cb=20061228065536",
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
    iconUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/5/51/Inv_sword_48.png/revision/latest?cb=20060925163613",
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
    iconUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/d/da/Inv_hammer_unique_sulfuras.png/revision/latest?cb=20061008190413",
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
    iconUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/6/6f/Inv_mace_99.png/revision/latest?cb=20090228101257",
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
    iconUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/5/5c/Inv_mace_1h_doomhammer.png/revision/latest?cb=20141002093239",
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
    iconUrl:
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
    iconUrl:
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
    iconUrl:
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
    iconUrl:
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
    iconUrl:
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
    iconUrl:
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
    iconUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/2/23/Inv_sword_155.png/revision/latest?cb=20091028204852",
    loreLink: "https://wowpedia.fandom.com/wiki/Quel%27Delar",
    videoUrl: "https://www.youtube.com/embed/_F87LtO0CJQ",
    stats: {
      beginner: { power: 150, durability: 90, manaBoost: 10 },
      intermediate: { power: 290, durability: 170, manaBoost: 30 },
      expert: { power: 500, durability: 280, manaBoost: 55 },
    },
  },
  {
    id: "rhokdelar",
    name: "Rhok'delar, Longbow of the Ancient Keepers",
    priceInCopper: 220000,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/c/c3/Inv_weapon_bow_01.png/revision/latest?cb=20070113180135",
    iconUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/c/c3/Inv_weapon_bow_01.png/revision/latest?cb=20070113180135",
    loreLink:
      "https://wowpedia.fandom.com/wiki/Rhok%27delar,_Longbow_of_the_Ancient_Keepers",
    videoUrl: "https://www.youtube.com/embed/E2l7SMWpNCM",
    stats: {
      beginner: { power: 180, durability: 90, manaBoost: 0 },
      intermediate: { power: 330, durability: 170, manaBoost: 15 },
      expert: { power: 570, durability: 280, manaBoost: 30 },
    },
  },
  {
    id: "aluneth",
    name: "Aluneth, Greatstaff of the Magna",
    priceInCopper: 520000,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/6/6b/Inv_staff_2h_artifactaegwynsstaff_d_01.png/revision/latest?cb=20180824090639",
    iconUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/6/6b/Inv_staff_2h_artifactaegwynsstaff_d_01.png/revision/latest?cb=20180824090639",
    loreLink: "https://wowpedia.fandom.com/wiki/Aluneth,_Greatstaff_of_the_Magna",
    videoUrl: "https://www.youtube.com/embed/l_rbg8uXWq8",
    stats: {
      beginner: { power: 90, durability: 40, manaBoost: 220 },
      intermediate: { power: 170, durability: 80, manaBoost: 400 },
      expert: { power: 290, durability: 130, manaBoost: 650 },
    },
  },
  {
    id: "felomelorn",
    name: "Felo'melorn",
    priceInCopper: 480000,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/4/48/Inv_sword_1h_artifactfelomelorn_d_01.png/revision/latest?cb=20160801223428",
    iconUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/4/48/Inv_sword_1h_artifactfelomelorn_d_01.png/revision/latest?cb=20160801223428",
    loreLink: "https://wowpedia.fandom.com/wiki/Felo%27melorn",
    videoUrl: "https://www.youtube.com/embed/zjLYTs8pzIY",
    stats: {
      beginner: { power: 160, durability: 70, manaBoost: 100 },
      intermediate: { power: 300, durability: 140, manaBoost: 220 },
      expert: { power: 520, durability: 230, manaBoost: 380 },
    },
  },
  {
    id: "fangsofashamane",
    name: "Fangs of Ashamane",
    priceInCopper: 260000,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/4/44/Inv_knife_1h_artifactfrostsaber_d_01.png/revision/latest?cb=20160615154015",
    iconUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/4/44/Inv_knife_1h_artifactfrostsaber_d_01.png/revision/latest?cb=20160615154015",
    loreLink: "https://wowpedia.fandom.com/wiki/Fangs_of_Ashamane",
    videoUrl: "https://www.youtube.com/embed/0-fJh8aN_RM",
    stats: {
      beginner: { power: 195, durability: 45, manaBoost: 0 },
      intermediate: { power: 360, durability: 95, manaBoost: 10 },
      expert: { power: 630, durability: 160, manaBoost: 20 },
    },
  },
  {
    id: "scytheofelune",
    name: "Scythe of Elune",
    priceInCopper: 540000,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/a/a3/Scythe_of_Elune.jpg/revision/latest?cb=20171231184527",
    iconUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/a/a3/Scythe_of_Elune.jpg/revision/latest?cb=20171231184527",
    loreLink: "https://wowpedia.fandom.com/wiki/Scythe_of_Elune",
    videoUrl: "https://www.youtube.com/embed/7sGCaGvXnM4",
    stats: {
      beginner: { power: 110, durability: 50, manaBoost: 200 },
      intermediate: { power: 200, durability: 100, manaBoost: 370 },
      expert: { power: 340, durability: 160, manaBoost: 600 },
    },
  },
  {
    id: "mawofthedamned",
    name: "Maw of the Damned",
    priceInCopper: 310000,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/2/2d/Maw_of_the_Damned_interface.jpg/revision/latest/scale-to-width-down/800?cb=20180628051715",
    iconUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/c/c5/Inv_axe_2h_artifactmaw_d_01.png/revision/latest?cb=20151208175807",
    loreLink: "https://wowpedia.fandom.com/wiki/Maw_of_the_Damned",
    videoUrl: "https://www.youtube.com/embed/Zn0DGAPAu_8",
    stats: {
      beginner: { power: 150, durability: 190, manaBoost: 0 },
      intermediate: { power: 280, durability: 350, manaBoost: 15 },
      expert: { power: 480, durability: 580, manaBoost: 30 },
    },
  },
  {
    id: "apocalypse",
    name: "Apocalypse",
    priceInCopper: 400000,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/5/5c/Apocalypse_interface.jpg/revision/latest/scale-to-width-down/800?cb=20180628051544",
    iconUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/f/f3/Inv_sword_2h_artifactsoulrend_d_01.png/revision/latest?cb=20151208175754",
    loreLink: "https://wowpedia.fandom.com/wiki/Apocalypse_(artifact)",
    videoUrl: "https://www.youtube.com/embed/nC_kCBFhGK8",
    stats: {
      beginner: { power: 190, durability: 160, manaBoost: 5 },
      intermediate: { power: 350, durability: 300, manaBoost: 15 },
      expert: { power: 600, durability: 500, manaBoost: 30 },
    },
  },
  {
    id: "clawsofursoc",
    name: "Claws of Ursoc",
    priceInCopper: 340000,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/2/29/Claws_of_Ursoc_interface.jpg/revision/latest?cb=20180628051600",
    iconUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/d/d6/Inv_hand_1h_artifactursoc_d_01.png/revision/latest?cb=20180818180835",
    loreLink: "https://wowpedia.fandom.com/wiki/Claws_of_Ursoc",
    videoUrl: "https://www.youtube.com/embed/0f3FuAYScHU",
    stats: {
      beginner: { power: 130, durability: 210, manaBoost: 10 },
      intermediate: { power: 240, durability: 390, manaBoost: 20 },
      expert: { power: 410, durability: 640, manaBoost: 35 },
    },
  },
  {
    id: "ghanir",
    name: "G'Hanir, the Mother Tree",
    priceInCopper: 460000,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/d/d4/G%27Hanir_interface.jpg/revision/latest/scale-to-width-down/800?cb=20180628051659",
    iconUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/e/e4/Inv_staff_2h_artifactnordrassil_d_01.png/revision/latest?cb=20180818181424",
    loreLink: "https://wowpedia.fandom.com/wiki/G%27Hanir,_the_Mother_Tree",
    videoUrl: "https://www.youtube.com/embed/e8mFzDUARUw",
    stats: {
      beginner: { power: 70, durability: 90, manaBoost: 210 },
      intermediate: { power: 130, durability: 170, manaBoost: 390 },
      expert: { power: 220, durability: 280, manaBoost: 640 },
    },
  },
  {
    id: "stromkar",
    name: "Strom'kar, the Warbreaker",
    priceInCopper: 350000,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/a/a1/Eu_weapon-warrior-01_strom%27kar_the_warbreaker.jpg/revision/latest?cb=20230102211443",
    iconUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/a/a7/Inv_sword_2h_artifactarathor_d_01.png/revision/latest?cb=20151206135211",
    loreLink: "https://wowpedia.fandom.com/wiki/Strom%27kar,_the_Warbreaker",
    videoUrl: "https://www.youtube.com/embed/3rSl3Iv8X9w",
    stats: {
      beginner: { power: 210, durability: 100, manaBoost: 0 },
      intermediate: { power: 390, durability: 190, manaBoost: 10 },
      expert: { power: 660, durability: 320, manaBoost: 20 },
    },
  },
  {
    id: "titanstrike",
    name: "Titanstrike",
    priceInCopper: 330000,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/6/64/Titanstrike_interface.jpg/revision/latest/scale-to-width-down/800?cb=20180628055357",
    iconUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/5/5f/Inv_firearm_2h_artifactlegion_d_01.png/revision/latest?cb=20151209170623",
    loreLink: "https://wowpedia.fandom.com/wiki/Titanstrike",
    videoUrl: "https://www.youtube.com/embed/VkNO4gQe9Sc",
    stats: {
      beginner: { power: 200, durability: 70, manaBoost: 0 },
      intermediate: { power: 370, durability: 130, manaBoost: 10 },
      expert: { power: 630, durability: 220, manaBoost: 20 },
    },
  },
  {
    id: "thasdorah",
    name: "Thas'dorah, Legacy of the Windrunners",
    priceInCopper: 310000,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/9/9d/Thas%27dorah_concept.jpg/revision/latest/scale-to-width-down/402?cb=20190920195401",
    iconUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/c/c1/Inv_bow_1h_artifactwindrunner_d_01.png/revision/latest?cb=20180818180612",
    loreLink: "https://wowpedia.fandom.com/wiki/Thas%27dorah,_Legacy_of_the_Windrunners",
    videoUrl: "https://www.youtube.com/embed/Kxif0rrlgdw",
    stats: {
      beginner: { power: 205, durability: 75, manaBoost: 0 },
      intermediate: { power: 380, durability: 140, manaBoost: 10 },
      expert: { power: 650, durability: 230, manaBoost: 25 },
    },
  },
  {
    id: "talonclaw",
    name: "Talonclaw, Spear of the Wild Gods",
    priceInCopper: 290000,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/b/bf/Talonclaw_in_Stormheim.jpg/revision/latest/scale-to-width-down/621?cb=20190531204103",
    iconUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/f/f0/Inv_polearm_2h_artifacteagle_d_01.png/revision/latest?cb=20180818181252",
    loreLink: "https://wowpedia.fandom.com/wiki/Talonclaw,_Spear_of_the_Wild_Gods",
    videoUrl: "https://www.youtube.com/embed/sIhqF3_NgBI",
    stats: {
      beginner: { power: 190, durability: 90, manaBoost: 0 },
      intermediate: { power: 350, durability: 170, manaBoost: 10 },
      expert: { power: 600, durability: 280, manaBoost: 25 },
    },
  },
  {
    id: "truthguard",
    name: "Truthguard",
    priceInCopper: 270000,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/0/0e/Truthguard_interface.jpg/revision/latest/scale-to-width-down/800?cb=20180628053943",
    iconUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/f/f9/Inv_shield_1h_artifactnorgannon_d_01.png/revision/latest?cb=20151206134135",
    loreLink: "https://wowpedia.fandom.com/wiki/Truthguard",
    videoUrl: "https://www.youtube.com/embed/Ijn9uC2iz9c",
    stats: {
      beginner: { power: 60, durability: 220, manaBoost: 40 },
      intermediate: { power: 110, durability: 400, manaBoost: 70 },
      expert: { power: 190, durability: 650, manaBoost: 110 },
    },
  },
  {
    id: "tuure",
    name: "T'uure, Beacon of the Naaru",
    priceInCopper: 300000,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/c/ca/T%27uure_interface.jpg/revision/latest/scale-to-width-down/800?cb=20180628051819",
    iconUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/2/22/Inv_mace_1h_artifactheartofkure_d_01.png/revision/latest?cb=20151208214734",
    loreLink: "https://wowpedia.fandom.com/wiki/T%27uure,_Beacon_of_the_Naaru",
    videoUrl: "https://www.youtube.com/embed/QcRT5KS6g8w",
    stats: {
      beginner: { power: 30, durability: 60, manaBoost: 210 },
      intermediate: { power: 60, durability: 110, manaBoost: 390 },
      expert: { power: 100, durability: 180, manaBoost: 640 },
    },
  },
  {
    id: "xalatath",
    name: "Xal'atath, Blade of the Black Empire",
    priceInCopper: 400000,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/6/62/Xal%27atath_interface.jpg/revision/latest/scale-to-width-down/800?cb=20180628051835",
    iconUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/8/81/Inv_knife_1h_artifactcthun_d_01.png/revision/latest?cb=20151208214717",
    loreLink: "https://wowpedia.fandom.com/wiki/Xal%27atath,_Blade_of_the_Black_Empire",
    videoUrl: "https://www.youtube.com/embed/hb_KX7cNCzs",
    stats: {
      beginner: { power: 185, durability: 50, manaBoost: 90 },
      intermediate: { power: 340, durability: 100, manaBoost: 170 },
      expert: { power: 580, durability: 165, manaBoost: 280 },
    },
  },
  {
    id: "ulthalesh",
    name: "Ulthalesh, the Deadwind Harvester",
    priceInCopper: 420000,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/4/42/Ulthalesh_interface.jpg/revision/latest/scale-to-width-down/800?cb=20180628054136",
    iconUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/6/61/Inv_staff_2h_artifactdeadwind_d_01.png/revision/latest?cb=20180824090702",
    loreLink: "https://wowpedia.fandom.com/wiki/Ulthalesh,_the_Deadwind_Harvester",
    videoUrl: "https://www.youtube.com/embed/ff047HSfpzY",
    stats: {
      beginner: { power: 100, durability: 45, manaBoost: 190 },
      intermediate: { power: 190, durability: 90, manaBoost: 360 },
      expert: { power: 320, durability: 145, manaBoost: 590 },
    },
  },
  {
    id: "thesilverhand",
    name: "The Silver Hand",
    priceInCopper: 380000,
    imageUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/f/f5/The_Silver_Hand_interface.jpg/revision/latest/scale-to-width-down/800?cb=20180628053816",
    iconUrl:
      "https://static.wikia.nocookie.net/wowpedia/images/2/2c/Inv_mace_2h_artifactsilverhand_d_01.png/revision/latest?cb=20151206134707",
    loreLink: "https://wowpedia.fandom.com/wiki/The_Silver_Hand_(artifact)",
    videoUrl: "https://www.youtube.com/embed/5si6IDcYyAM",
    stats: {
      beginner: { power: 40, durability: 70, manaBoost: 200 },
      intermediate: { power: 80, durability: 130, manaBoost: 370 },
      expert: { power: 140, durability: 210, manaBoost: 610 },
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
    new ImageUrl(structure.iconUrl),
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
