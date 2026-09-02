import { z } from "zod";

export const SkillValueSchema = z.union([
  z.literal("beginner"),
  z.literal("intermediate"),
  z.literal("expert"),
]);

export type SkillValue = z.infer<typeof SkillValueSchema>;

/**
 * Display labels live in the i18n message catalogs (t.skill.label), not here: a skill
 * level is a domain concept, its translated presentation isn't.
 */
export class Skill {
  constructor(private skillValue: SkillValue) {}

  level(): SkillValue {
    return this.skillValue;
  }

  update(skillValue: SkillValue) {
    SkillValueSchema.parse(skillValue);

    return new Skill(skillValue);
  }
}
