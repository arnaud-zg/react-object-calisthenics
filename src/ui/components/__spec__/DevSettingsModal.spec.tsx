import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { DevSettingsModal } from "@/ui/components/DevSettingsModal";
import { DevSettingsProvider } from "@/ui/devSettings/DevSettingsContext";

function renderDevSettingsModal() {
  return render(
    <DevSettingsProvider>
      <DevSettingsModal />
    </DevSettingsProvider>,
  );
}

describe("DevSettingsModal", () => {
  beforeEach(() => {
    localStorage.removeItem("dev-settings.welcome-survey-storage");
  });

  it("should list every welcome survey storage implementation with the default one selected", async () => {
    const user = userEvent.setup();
    renderDevSettingsModal();

    await user.click(screen.getByRole("button", { name: "Developer settings" }));

    expect(screen.getByRole("radio", { name: "TanStack Store" })).toBeChecked();
    expect(screen.getByRole("radio", { name: "Local Storage" })).not.toBeChecked();
    expect(screen.getByRole("radio", { name: "Zustand" })).not.toBeChecked();
  });

  it("should switch the selected implementation and persist the choice", async () => {
    const user = userEvent.setup();
    renderDevSettingsModal();

    await user.click(screen.getByRole("button", { name: "Developer settings" }));
    await user.click(screen.getByRole("radio", { name: "Local Storage" }));

    expect(screen.getByRole("radio", { name: "Local Storage" })).toBeChecked();
    expect(localStorage.getItem("dev-settings.welcome-survey-storage")).toBe(
      "localStorage",
    );
  });
});
