/** @vitest-environment jsdom */
import { describe, expect, it, vi } from "vitest";
import { ZustandWelcomeSurveyRepository } from "../ZustandWelcomeSurvey.repository";

describe("ZustandWelcomeSurveyRepository", () => {
  it("should save and read back a survey", () => {
    const repository = new ZustandWelcomeSurveyRepository();

    repository.saveSurvey({ skill: "expert" });

    expect(repository.getSurvey()).toEqual({ skill: "expert" });
  });

  it("should share state across instances, same as the other repositories", () => {
    const writer = new ZustandWelcomeSurveyRepository();
    writer.saveSurvey({ skill: "intermediate" });

    const reader = new ZustandWelcomeSurveyRepository();

    expect(reader.getSurvey()).toEqual({ skill: "intermediate" });
  });

  it("should notify subscribers when a survey is saved", () => {
    const repository = new ZustandWelcomeSurveyRepository();
    const listener = vi.fn();
    const unsubscribe = repository.subscribe(listener);

    repository.saveSurvey({ skill: "beginner" });
    expect(listener).toHaveBeenCalledTimes(1);

    unsubscribe();
    repository.saveSurvey({ skill: "expert" });
    expect(listener).toHaveBeenCalledTimes(1);
  });
});
