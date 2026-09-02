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
  frostmourne: {
    beginner: {
      description:
        "A frost-runed blade said to steal the souls of those it slays. Handle with caution.",
      effects: ["Chance to chill enemies on hit."],
    },
    intermediate: {
      description:
        "Frostmourne drains the life of its victims, trapping their souls within the blade itself.",
      effects: [
        "Frost damage +20%",
        "Chance to freeze enemies solid",
        "Steals a sliver of enemy health on hit",
      ],
    },
    expert: {
      description:
        "Frostmourne is a runeblade of terrible power, forged to bind the wielder to an undying will. Every soul it claims fuels its wrath.",
      effects: [
        "Frost damage +45%",
        "Soul harvest heals the wielder",
        "Chance to raise a fallen enemy as a temporary ally",
        "Immune to fear effects",
      ],
    },
  },
  shadowmourne: {
    beginner: {
      description: "An axe hungry for souls, said to grow stronger with every kill.",
      effects: ["Chance to consume a soul on kill for bonus damage."],
    },
    intermediate: {
      description:
        "Shadowmourne feeds on the souls of the fallen, each one making the blade sharper and deadlier.",
      effects: [
        "Attack power +20% per soul consumed (stacks)",
        "Chance to unleash a shadow flame",
      ],
    },
    expert: {
      description:
        "Shadowmourne, forged from a fallen tyrant's own weapon, is unmatched in its hunger. Wielding it means feeding it, endlessly.",
      effects: [
        "Attack power +35% per soul consumed (stacks up to 5)",
        "Shadow flame explosion on execute",
        "Fear nearby enemies on critical strike",
      ],
    },
  },
  atiesh: {
    beginner: {
      description:
        "An ancient staff humming with arcane power. Ideal for spellcasters seeking more mana.",
      effects: ["Restores mana over time."],
    },
    intermediate: {
      description:
        "Atiesh amplifies the wielder's magic, letting spells summon more power for less mana.",
      effects: ["Mana regeneration +30%", "Spell critical chance +5%"],
    },
    expert: {
      description:
        "Atiesh, carried by every Guardian of Tirisfal, channels centuries of arcane mastery. It can even tear open a portal to Karazhan.",
      effects: [
        "Mana regeneration +60%",
        "Summons a temporary portal for escape",
        "All spell damage +15%",
        "Grants a random spell school buff to nearby allies",
      ],
    },
  },
  warglaivesofazzinoth: {
    beginner: {
      description: "A pair of fel-green glaives, quick and vicious in melee.",
      effects: ["Bonus damage against demons."],
    },
    intermediate: {
      description:
        "The Warglaives of Azzinoth cut through flesh and fel alike, granting the wielder demonic speed.",
      effects: [
        "Attack speed +20%",
        "Fel damage on hit",
        "Bonus damage against demons +25%",
      ],
    },
    expert: {
      description:
        "Once wielded by Illidan Stormrage himself, these twin glaives channel raw demonic fury. Few survive their dance of blades.",
      effects: [
        "Attack speed +35%",
        "Chance to strike twice per swing",
        "Fel damage +50% against demons",
        "Short burst of flight on activation",
      ],
    },
  },
  dragonwrath: {
    beginner: {
      description:
        "A staff radiant with draconic magic, said to hold the spirit of a dragon within.",
      effects: ["Occasionally duplicates a spell cast."],
    },
    intermediate: {
      description:
        "Dragonwrath channels a dragon's own power, letting spells echo with extra force.",
      effects: ["Chance to duplicate a damage spell", "Spell power +20%"],
    },
    expert: {
      description:
        "Forged from the sacrifice of the dragon Tarecgosa, Dragonwrath lets its wielder transform into a dragon and unleash devastating magic.",
      effects: [
        "Chance to duplicate any spell cast",
        "Spell power +40%",
        "Transform into a dragon for a short flight",
        "Immune to silence while active",
      ],
    },
  },
  fangsofthefather: {
    beginner: {
      description: "A matched pair of curved daggers, fast and silent.",
      effects: ["Bonus damage from behind."],
    },
    intermediate: {
      description:
        "The Fangs of the Father strike twice as fast as any blade, rewarding a stealthy approach.",
      effects: ["Attack speed +25%", "Bonus damage from stealth +30%"],
    },
    expert: {
      description:
        "Earned by hunting the corrupted dragonflight itself, these twin daggers reward speed and precision above all else.",
      effects: [
        "Attack speed +40%",
        "Guaranteed critical strike from stealth",
        "Poison coats every hit",
        "Restores energy on kill",
      ],
    },
  },
  queldelar: {
    beginner: {
      description: "A prismatic blade, elegant and well balanced, favored by scouts.",
      effects: ["Bonus damage against the undead."],
    },
    intermediate: {
      description:
        "Quel'Delar was forged as a symbol against the Scourge, and still cuts deep into anything unliving.",
      effects: ["Damage against undead +25%", "Chance to blind an enemy on hit"],
    },
    expert: {
      description:
        "Purified after being corrupted by the Lich King, Quel'Delar now radiates the resolve of everyone who fought to reclaim it.",
      effects: [
        "Damage against undead +50%",
        "Purifying strike removes one enemy buff",
        "Grants a shield after a killing blow",
        "Immune to curses for 5 seconds",
      ],
    },
  },
};
