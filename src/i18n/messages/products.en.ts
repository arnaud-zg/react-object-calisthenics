import type { KnowledgeProfile } from "@/domain/cart/value-objects/Product/Product";

export interface ProductProfileContent {
  description: string;
  effects: string[];
}

export type ProductContent = Record<
  string,
  Record<KnowledgeProfile, ProductProfileContent>
>;

export const productContentEn: ProductContent = {
  thunderfury: {
    beginner: {
      description:
        "A legendary sword that channels the power of storms. Wield it to summon lightning upon your foes.",
      effects: ["Chance to strike enemies with lightning."],
    },
    intermediate: {
      description:
        "Thunderfury is forged with elemental fury. Great for battle, with bonus lightning damage and attack speed.",
      effects: [
        "Increases attack speed by 15%",
        "Lightning damage with each hit",
        "Chance to slow enemies",
      ],
    },
    expert: {
      description:
        "Thunderfury, Blessed Blade of the Windseeker, is a legendary weapon of immense power. It channels elemental air, unleashing lightning with each strike. Its artifact status is confirmed by its rarity and crafting requirements.",
      effects: [
        "Attack speed +25%",
        "Unleashes chain lightning on critical strikes",
        "Chance to silence enemies",
        "Grants immunity to silence for 5 seconds",
      ],
    },
  },
  ashbringer: {
    beginner: {
      description:
        "A holy sword blessed to purge the undead. Known for its radiant power.",
      effects: ["Bonus against undead enemies."],
    },
    intermediate: {
      description:
        "Ashbringer channels holy energy to smite foes, cleansing corruption and undead.",
      effects: ["Holy damage +25%", "Undead vulnerability."],
    },
    expert: {
      description:
        "Ashbringer is the embodiment of righteousness. It delivers devastating holy strikes and vanquishes evil.",
      effects: [
        "Holy damage +50%",
        "Instant kill chance on undead",
        "Grant blessing to allies",
      ],
    },
  },
  sulfuras: {
    beginner: {
      description: "A molten hammer forged in elemental fire, granting immense strength.",
      effects: ["Fire damage over time."],
    },
    intermediate: {
      description:
        "Sulfuras channels molten fire into devastating blows that incinerate enemies.",
      effects: ["Fire blast chance", "Burn enemies for 10s"],
    },
    expert: {
      description:
        "Sulfuras is a weapon of pure elemental fury, capable of burning armies with a single strike.",
      effects: [
        "Fire damage +70%",
        "Area of effect burn",
        "Ignite enemies on critical strike",
      ],
    },
  },
  valanyr: {
    beginner: {
      description: "A holy hammer that heals allies with each strike.",
      effects: ["Heals allies on hit."],
    },
    intermediate: {
      description: "Val'anyr channels holy energy to protect allies in battle.",
      effects: ["Heal over time for allies.", "Shield chance"],
    },
    expert: {
      description:
        "Val'anyr is a divine relic that grants immense healing and protection to allies.",
      effects: [
        "Massive healing over time",
        "Full shield on critical hits",
        "Grant immunity to all debuffs for 5 seconds",
      ],
    },
  },
  doomhammer: {
    beginner: {
      description: "A mighty hammer that channels elemental earth power.",
      effects: ["Shockwave on impact."],
    },
    intermediate: {
      description: "Doomhammer enhances the wielder’s strength and earth-based magic.",
      effects: ["Shockwave radius +15%", "Stun chance on heavy attacks"],
    },
    expert: {
      description:
        "Doomhammer is the ultimate weapon of war, capable of shaking the very earth.",
      effects: [
        "Shockwave radius +50%",
        "Stun all enemies within range",
        "Damage immunity for 3 seconds after a heavy attack",
      ],
    },
  },
};
