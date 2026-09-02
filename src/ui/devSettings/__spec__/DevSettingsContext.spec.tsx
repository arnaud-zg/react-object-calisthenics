import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { DEFAULT_WELCOME_SURVEY_STORAGE_KEY } from "@/config/storage.config";
import { DevSettingsProvider, useDevSettings } from "@/ui/devSettings/DevSettingsContext";

const STORAGE_KEY = "dev-settings.welcome-survey-storage";

function ReadAndSwitch() {
  const { welcomeSurveyStorageKey, setWelcomeSurveyStorageKey } = useDevSettings();

  return (
    <button type="button" onClick={() => setWelcomeSurveyStorageKey("zustand")}>
      {welcomeSurveyStorageKey}
    </button>
  );
}

describe("DevSettingsContext", () => {
  beforeEach(() => {
    localStorage.removeItem(STORAGE_KEY);
  });

  it("should default to the same key storage.config.ts defaults to, outside a provider", () => {
    render(<ReadAndSwitch />);

    expect(screen.getByRole("button")).toHaveTextContent(
      DEFAULT_WELCOME_SURVEY_STORAGE_KEY,
    );
  });

  it("should read a previously saved choice back on mount", () => {
    localStorage.setItem(STORAGE_KEY, "localStorage");

    render(
      <DevSettingsProvider>
        <ReadAndSwitch />
      </DevSettingsProvider>,
    );

    expect(screen.getByRole("button")).toHaveTextContent("localStorage");
  });

  it("should ignore a corrupted stored value and fall back to the default", () => {
    localStorage.setItem(STORAGE_KEY, "not-a-real-implementation");

    render(
      <DevSettingsProvider>
        <ReadAndSwitch />
      </DevSettingsProvider>,
    );

    expect(screen.getByRole("button")).toHaveTextContent(
      DEFAULT_WELCOME_SURVEY_STORAGE_KEY,
    );
  });

  it("should update the context value and persist the new choice", async () => {
    const user = userEvent.setup();
    render(
      <DevSettingsProvider>
        <ReadAndSwitch />
      </DevSettingsProvider>,
    );

    await user.click(screen.getByRole("button"));

    expect(screen.getByRole("button")).toHaveTextContent("zustand");
    expect(localStorage.getItem(STORAGE_KEY)).toBe("zustand");
  });
});
