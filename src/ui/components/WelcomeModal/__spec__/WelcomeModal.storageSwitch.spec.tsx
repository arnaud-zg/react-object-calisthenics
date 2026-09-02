import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { DevSettingsModal } from "@/ui/components/DevSettingsModal";
import { WelcomeModal } from "@/ui/components/WelcomeModal/WelcomeModal";
import { DevSettingsProvider } from "@/ui/devSettings/DevSettingsContext";

const DEV_SETTINGS_KEY = "dev-settings.welcome-survey-storage";
const WELCOME_SURVEY_KEY = "welcome_survey";

function Harness() {
  const { ref } = WelcomeModal.useWelcomeModalHandle();

  return (
    <>
      <DevSettingsModal />
      <WelcomeModal
        title="Choose Your Knowledge Level"
        description="Tell us how familiar you are."
        ref={ref}
      />
    </>
  );
}

function renderHarness() {
  return render(
    <DevSettingsProvider>
      <Harness />
    </DevSettingsProvider>,
  );
}

async function saveSurvey(user: ReturnType<typeof userEvent.setup>, skill: string) {
  await user.selectOptions(screen.getByRole("combobox"), skill);
  await user.click(screen.getByRole("button", { name: "Continue" }));
}

describe("switching the welcome survey storage implementation live", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("keeps showing the same survey switching between TanStack Store and Local Storage, since both read the same key in the same shape", async () => {
    const user = userEvent.setup();
    renderHarness();

    await saveSurvey(user, "beginner");
    expect(JSON.parse(localStorage.getItem(WELCOME_SURVEY_KEY) ?? "")).toEqual({
      survey: { skill: "beginner" },
    });

    await user.click(screen.getByRole("button", { name: "Developer settings" }));
    await user.click(screen.getByRole("radio", { name: "Local Storage" }));
    await user.keyboard("{Escape}");

    // Local Storage's own repository reads the exact same key TanStack Store just wrote,
    // so the survey is already there: the welcome modal has no reason to reopen.
    expect(screen.queryByRole("combobox")).not.toBeInTheDocument();
  });

  it("persists through Zustand's own envelope, not the plain shape the other two use", async () => {
    localStorage.setItem(DEV_SETTINGS_KEY, "zustand");
    const user = userEvent.setup();
    renderHarness();

    await saveSurvey(user, "expert");

    const stored = JSON.parse(localStorage.getItem(WELCOME_SURVEY_KEY) ?? "");
    expect(stored).toMatchObject({ state: { survey: { skill: "expert" } } });
    expect(stored).not.toEqual({ survey: { skill: "expert" } });
  });
});
