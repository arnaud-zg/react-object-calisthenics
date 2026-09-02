// This file has no jsdom environment override, so it runs in vitest's default node
// environment, which has no localStorage. That intentionally proves the module is safe
// to import and use during a server-side render (see the SEO PR later in the stack).
import { describe, expect, it, vi } from "vitest";
import { TanStackStoreWelcomeSurveyRepository } from "../TanstackStoreWelcomeSurvey.repository";

// TanStackStoreWelcomeSurveyRepository wraps one module-level store shared by every
// instance, so these tests read back whatever the previous one just wrote rather than
// assuming a clean starting state.
describe("TanStackStoreWelcomeSurveyRepository (no localStorage)", () => {
  it("should be importable and constructible without a DOM", () => {
    expect(() => new TanStackStoreWelcomeSurveyRepository()).not.toThrow();
  });

  it("should save and read back a survey in memory", () => {
    const repository = new TanStackStoreWelcomeSurveyRepository();

    repository.saveSurvey({ skill: "expert" });

    expect(repository.getSurvey()).toEqual({ skill: "expert" });
  });

  it("should notify and allow unsubscribing", () => {
    const repository = new TanStackStoreWelcomeSurveyRepository();
    const listener = vi.fn();
    const unsubscribe = repository.subscribe(listener);

    repository.saveSurvey({ skill: "beginner" });
    expect(listener).toHaveBeenCalledTimes(1);

    unsubscribe();
    repository.saveSurvey({ skill: "intermediate" });
    expect(listener).toHaveBeenCalledTimes(1);
  });
});
