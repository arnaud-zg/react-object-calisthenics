import { describe, expect, it } from "vitest";
import { Skill } from "../Skill";

describe("Skill", () => {
  it("should return the correct skill level", () => {
    const skill = new Skill("beginner");
    expect(skill.level()).toBe("beginner");
  });

  it("should update skill and return a new Skill instance", () => {
    const skill = new Skill("beginner");
    const updatedSkill = skill.update("expert");

    // Original instance should remain unchanged
    expect(skill.level()).toBe("beginner");

    // Updated instance should have new skill
    expect(updatedSkill.level()).toBe("expert");

    // Ensure it's a new instance
    expect(updatedSkill).not.toBe(skill);
  });

  it("should throw a ZodError when updating with an invalid skill", () => {
    const skill = new Skill("beginner");

    expect(() => skill.update("novice" as never)).toThrowError("invalid_union");
  });
});
