/** @vitest-environment jsdom */
import { beforeEach, describe, expect, it, vi } from "vitest";
import { WELCOME_SURVEY_KEY } from "@/domain/welcomeSurvey/WelcomeSurveyStore.config";
import { LocalStorageWelcomeSurveyRepository } from "../LocalStorageWelcomeSurvey.repository";

describe("LocalStorageWelcomeSurveyRepository", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should return null when nothing has been saved yet", () => {
    const repository = new LocalStorageWelcomeSurveyRepository();

    expect(repository.getSurvey()).toBeNull();
  });

  it("should persist and read back a saved survey", () => {
    const repository = new LocalStorageWelcomeSurveyRepository();

    repository.saveSurvey({ skill: "expert" });

    expect(repository.getSurvey()).toEqual({ skill: "expert" });
  });

  it("should read a survey that was written to storage by another instance", () => {
    const writer = new LocalStorageWelcomeSurveyRepository();
    writer.saveSurvey({ skill: "intermediate" });

    const reader = new LocalStorageWelcomeSurveyRepository();

    expect(reader.getSurvey()).toEqual({ skill: "intermediate" });
  });

  it("should fall back to null for malformed stored data", () => {
    localStorage.setItem(WELCOME_SURVEY_KEY, "not json");
    const repository = new LocalStorageWelcomeSurveyRepository();

    expect(repository.getSurvey()).toBeNull();
  });

  it("should notify subscribers when a survey is saved", () => {
    const repository = new LocalStorageWelcomeSurveyRepository();
    const listener = vi.fn();
    repository.subscribe(listener);

    repository.saveSurvey({ skill: "beginner" });

    expect(listener).toHaveBeenCalledTimes(1);
  });

  it("should stop notifying once unsubscribed", () => {
    const repository = new LocalStorageWelcomeSurveyRepository();
    const listener = vi.fn();
    const unsubscribe = repository.subscribe(listener);
    unsubscribe();

    repository.saveSurvey({ skill: "beginner" });

    expect(listener).not.toHaveBeenCalled();
  });
});
