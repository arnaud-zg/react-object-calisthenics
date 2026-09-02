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
  rhokdelar: {
    beginner: {
      description:
        "A living bow grown from ancient wood, said to bloom fresh flowers with every shot.",
      effects: ["Bonus damage against demons."],
    },
    intermediate: {
      description:
        "Rhok'delar was grown by the Ancients of Felwood themselves, its living wood channeling nature's own strength into every arrow.",
      effects: [
        "Attack speed +15%",
        "Poison damage on hit",
        "Bonus damage against demons +20%",
      ],
    },
    expert: {
      description:
        "Grown by the Ancients to arm a hunter who avenged them, Rhok'delar has since felled a black dragon and countless Legion agents. It never stops blooming.",
      effects: [
        "Attack speed +30%",
        "Entangling roots on critical strike",
        "Bonus damage against demons +40%",
        "Regenerates health while drawn",
      ],
    },
  },
  aluneth: {
    beginner: {
      description:
        "An ancient staff carved from enchanted wood, humming with contained arcane power.",
      effects: ["Restores mana over time."],
    },
    intermediate: {
      description:
        "Aluneth channels centuries of arcane knowledge, letting its wielder bind and unleash raw magic with ease.",
      effects: ["Mana regeneration +35%", "Spell damage +15%"],
    },
    expert: {
      description:
        "Once used by Aegwynn to imprison a malevolent entity within its wood, Aluneth now channels the full weight of the Guardians' arcane legacy.",
      effects: [
        "Mana regeneration +70%",
        "Spell damage +30%",
        "Chance to unleash a burst of pure arcane energy",
        "Reduces the cost of the next spell to zero",
      ],
    },
  },
  felomelorn: {
    beginner: {
      description:
        "An ancient elven blade wreathed in flame, said to have survived being shattered.",
      effects: ["Fire damage on hit."],
    },
    intermediate: {
      description:
        "Felo'melorn was shattered against Frostmourne and reforged in vengeance, its blade now burning with the fire of its wielder's fury.",
      effects: ["Fire damage +25%", "Attack speed +10%", "Chance to ignite enemies"],
    },
    expert: {
      description:
        "Forged anew by Kael'thas from the ashes of his father's sword, Felo'melorn burns with the combined rage of the Sunstrider line.",
      effects: [
        "Fire damage +45%",
        "Attack speed +20%",
        "Ignites the ground beneath struck enemies",
        "Immune to fire damage while active",
      ],
    },
  },
  fangsofashamane: {
    beginner: {
      description: "A pair of feral fangs, said to carry the spirit of a great panther.",
      effects: ["Bonus damage while shapeshifted."],
    },
    intermediate: {
      description:
        "The Fangs of Ashamane let their wielder move and strike with the speed and ferocity of the Wild God they're named for.",
      effects: [
        "Attack speed +20%",
        "Bleed damage over time",
        "Bonus damage while shapeshifted +20%",
      ],
    },
    expert: {
      description:
        "Torn from Ashamane, one of the first Wild Gods to fall defending Azeroth, these fangs grant their wielder her untamed, primal fury.",
      effects: [
        "Attack speed +35%",
        "Bleed damage +50%",
        "Chance to shift into a supernatural cat form",
        "Restores health on critical strike",
      ],
    },
  },
  scytheofelune: {
    beginner: {
      description:
        "A curved staff blessed by the moon goddess, humming with balanced nature and arcane power.",
      effects: ["Restores mana over time."],
    },
    intermediate: {
      description:
        "The Scythe of Elune channels both moonlight and starlight, letting its wielder balance devastating magic with steady control.",
      effects: ["Spell power +20%", "Mana regeneration +25%"],
    },
    expert: {
      description:
        "Forged from Goldrinn's fang and Elune's own staff, and tied to the origin of the worgen curse, the Scythe of Elune now channels pure, purified balance magic.",
      effects: [
        "Spell power +40%",
        "Mana regeneration +50%",
        "Alternates between lunar and solar empowerment",
        "Immune to silence while channeling",
      ],
    },
  },
  mawofthedamned: {
    beginner: {
      description: "An ancient axe that drains the life from those it strikes.",
      effects: ["Drains a portion of enemy health on hit."],
    },
    intermediate: {
      description:
        "Maw of the Damned feeds on its victims' vital energy, channeling it back into its wielder.",
      effects: ["Life drain +20%", "Attack speed +10%"],
    },
    expert: {
      description:
        "Forged by the Legion to corrupt whoever wielded it, this axe still carries the ravenous, trapped soul of its creator.",
      effects: [
        "Life drain +40%",
        "Attack speed +20%",
        "Chance to feast on an enemy's soul for bonus damage",
        "Immune to fear while feeding",
      ],
    },
  },
  apocalypse: {
    beginner: {
      description: "A corrupted blade that spreads disease with every cut.",
      effects: ["Chance to inflict a plague on hit."],
    },
    intermediate: {
      description:
        "Apocalypse was forged by dreadlords to corrupt its wielder, spreading undeath wherever it strikes.",
      effects: ["Plague damage +25%", "Chance to raise a minor undead servant"],
    },
    expert: {
      description:
        "Sealed away by the Guardian Alodi after a dreadlord's corruption, Apocalypse now unleashes undeath and plague on a scale few can withstand.",
      effects: [
        "Plague damage +50%",
        "Summons undead servants on kill",
        "Spreads plague to nearby enemies",
        "Immune to disease effects",
      ],
    },
  },
  clawsofursoc: {
    beginner: {
      description: "A pair of massive claws torn from a great bear demigod.",
      effects: ["Bonus damage while in bear form."],
    },
    intermediate: {
      description:
        "The Claws of Ursoc channel the demigod's protective fury, rewarding those who stand their ground.",
      effects: ["Damage reduction +15%", "Bonus damage while in bear form +20%"],
    },
    expert: {
      description:
        "Torn from Ursoc after his fall to the corrupted Emerald Nightmare, these claws let their wielder become a living avatar of his rage and protection.",
      effects: [
        "Damage reduction +30%",
        "Bonus damage while in bear form +40%",
        "Taunts all nearby enemies on activation",
        "Reflects a portion of damage taken",
      ],
    },
  },
  ghanir: {
    beginner: {
      description: "A living branch that hums with restorative energy.",
      effects: ["Heals the wielder over time."],
    },
    intermediate: {
      description:
        "G'Hanir channels the life-giving power of the Emerald Dream to knit wounds closed.",
      effects: ["Healing done +20%", "Mana regeneration +15%"],
    },
    expert: {
      description:
        "Cut from the first tree ever gifted to druids, G'Hanir remains eternally tied to the Emerald Dream, its healing power nearly boundless.",
      effects: [
        "Healing done +40%",
        "Mana regeneration +30%",
        "Periodically blooms to heal all nearby allies",
        "Immune to silence while channeling",
      ],
    },
  },
  stromkar: {
    beginner: {
      description: "A greatsword once carried by the first warlord to unite humanity.",
      effects: ["Bonus damage against multiple enemies."],
    },
    intermediate: {
      description:
        "Strom'kar rewards a warrior's raw strength and resolve, breaking through armor and will alike.",
      effects: ["Attack power +20%", "Armor penetration +15%"],
    },
    expert: {
      description:
        "Lost after King Thoradin used it to subdue a horror from beyond, Strom'kar now returns to break the enemies of humanity once more.",
      effects: [
        "Attack power +35%",
        "Armor penetration +30%",
        "Cleaves through all enemies in front of the wielder",
        "Fear immunity while enraged",
      ],
    },
  },
  titanstrike: {
    beginner: {
      description: "A techno-magical rifle blending titan machinery with raw power.",
      effects: ["Bonus damage against beasts."],
    },
    intermediate: {
      description:
        "Titanstrike channels titan-forged engineering into devastating, precise shots.",
      effects: ["Ranged attack power +20%", "Chance to fire a piercing shot"],
    },
    expert: {
      description:
        "Engineered by Keeper Mimiron himself, Titanstrike protects Azeroth's wildlife with the same destructive precision the titans once used to shape worlds.",
      effects: [
        "Ranged attack power +35%",
        "Piercing shots hit all enemies in a line",
        "Calls a lightning strike on critical hits",
        "Immune to knockback while firing",
      ],
    },
  },
  thasdorah: {
    beginner: {
      description: "A heirloom bow carved from an ancient elven tree.",
      effects: ["Bonus damage at long range."],
    },
    intermediate: {
      description:
        "Thas'dorah channels the precision and legacy of generations of Windrunner rangers.",
      effects: ["Ranged attack power +20%", "Critical strike chance +5%"],
    },
    expert: {
      description:
        "Once carried by Ranger Captain Alleria Windrunner before it vanished into Outland, Thas'dorah restores its wielder to the legacy of Quel'Thalas's greatest archers.",
      effects: [
        "Ranged attack power +35%",
        "Critical strike chance +10%",
        "Arrows split to strike additional enemies",
        "Grants stealth after a killing shot",
      ],
    },
  },
  talonclaw: {
    beginner: {
      description: "A tribal spear blessed by an ancient wild spirit.",
      effects: ["Bonus damage against beasts."],
    },
    intermediate: {
      description:
        "Talonclaw channels the wild's own fury, rewarding hunters who fight alongside nature.",
      effects: ["Attack speed +15%", "Bonus damage against beasts +20%"],
    },
    expert: {
      description:
        "Blessed over millennia by Wild Gods including the eagle spirit Ohn'ahra, Talonclaw is both weapon and sacred covenant with the wild.",
      effects: [
        "Attack speed +25%",
        "Bonus damage against beasts +35%",
        "Summons a spectral eagle to aid the wielder",
        "Grants brief flight on activation",
      ],
    },
  },
  truthguard: {
    beginner: {
      description: "An unbreakable shield forged by titanic watchers.",
      effects: ["Reduces incoming damage."],
    },
    intermediate: {
      description: "Truthguard exposes deception and shields the righteous from harm.",
      effects: ["Block chance +15%", "Damage reduction +15%"],
    },
    expert: {
      description:
        "Forged by Tyr and Archaedas to expose a traitorous keeper's corruption, Truthguard remains an unbreakable symbol of justice against any lie.",
      effects: [
        "Block chance +30%",
        "Damage reduction +30%",
        "Reflects a portion of blocked damage",
        "Removes one harmful effect on block",
      ],
    },
  },
  tuure: {
    beginner: {
      description: "A crystal mace holding a shard of naaru light.",
      effects: ["Heals the wielder's allies over time."],
    },
    intermediate: {
      description:
        "T'uure channels naaru radiance to shelter and heal those under its light.",
      effects: ["Healing done +20%", "Shields the wielder's target"],
    },
    expert: {
      description:
        "Once used to shield draenei refugees from annihilating demons, T'uure now channels naaru light to protect and heal on a much greater scale.",
      effects: [
        "Healing done +40%",
        "Shields all nearby allies",
        "Periodic burst of holy light heals the group",
        "Immune to shadow damage while channeling",
      ],
    },
  },
  xalatath: {
    beginner: {
      description: "An ancient dagger that whispers unsettling secrets.",
      effects: ["Bonus shadow damage on hit."],
    },
    intermediate: {
      description:
        "Xal'atath carries a fragment of an Old God's mind, murmuring forbidden knowledge to its wielder.",
      effects: ["Shadow damage +25%", "Chance to fear an enemy on hit"],
    },
    expert: {
      description:
        "A living fragment of the Black Empire's consciousness, Xal'atath weaponizes the very madness it whispers into raw destructive power.",
      effects: [
        "Shadow damage +45%",
        "Fears all nearby enemies on critical strike",
        "Whispers grant bonus insight (increased critical chance)",
        "Immune to fear effects",
      ],
    },
  },
  ulthalesh: {
    beginner: {
      description: "A scythe-staff forged in the fires of a shattered world.",
      effects: ["Drains life from the target over time."],
    },
    intermediate: {
      description:
        "Ulthalesh slowly consumes the souls of those it strikes, feeding its wielder's power.",
      effects: ["Damage over time +25%", "Life drain +15%"],
    },
    expert: {
      description:
        "Forged by Sargeras himself and named for the last soul it ever devoured, Ulthalesh consumes enemies' very essence, one agonizing moment at a time.",
      effects: [
        "Damage over time +45%",
        "Life drain +30%",
        "Spreads damage over time effects to nearby enemies",
        "Summons a fragment of a devoured soul to fight alongside the wielder",
      ],
    },
  },
  thesilverhand: {
    beginner: {
      description: "A titan-forged mace carried by legendary paladins.",
      effects: ["Heals the wielder's allies on hit."],
    },
    intermediate: {
      description:
        "The Silver Hand channels the sacred authority of the order it's named for, healing and inspiring allies.",
      effects: ["Healing done +20%", "Mana regeneration +15%"],
    },
    expert: {
      description:
        "Once wielded by Keeper Tyr and later Uther the Lightbringer, the Silver Hand answers its wielder's call to justice with overwhelming holy power.",
      effects: [
        "Healing done +40%",
        "Mana regeneration +30%",
        "Periodically blesses all nearby allies",
        "Grants immunity to fear for the wielder and allies",
      ],
    },
  },
};
