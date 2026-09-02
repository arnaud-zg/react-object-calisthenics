import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { welcomeSurveyStorage } from "@/config/storage.config";
import { WelcomeModal } from "@/ui/components/WelcomeModal/WelcomeModal";

function Wrapper() {
  const { ref } = WelcomeModal.useWelcomeModalHandle();

  return (
    <WelcomeModal
      title="Choose Your Knowledge Level"
      description="Tell us how familiar you are."
      ref={ref}
    />
  );
}

describe("WelcomeModal", () => {
  beforeEach(() => {
    welcomeSurveyStorage.saveSurvey(null);
  });

  it("should open automatically when no survey has been saved yet", () => {
    render(<Wrapper />);

    expect(screen.getByText("Choose Your Knowledge Level")).toBeInTheDocument();
  });

  it("should not auto-open once a survey already exists", () => {
    welcomeSurveyStorage.saveSurvey({ skill: "expert" });

    render(<Wrapper />);

    expect(screen.queryByText("Choose Your Knowledge Level")).not.toBeInTheDocument();
  });

  it("should save the selected skill and close the modal", async () => {
    const user = userEvent.setup();
    render(<Wrapper />);

    await user.selectOptions(screen.getByRole("combobox"), "intermediate");
    await user.click(screen.getByRole("button", { name: "Continue" }));

    expect(welcomeSurveyStorage.getSurvey()).toEqual({ skill: "intermediate" });
    expect(screen.queryByText("Choose Your Knowledge Level")).not.toBeInTheDocument();
  });
});
