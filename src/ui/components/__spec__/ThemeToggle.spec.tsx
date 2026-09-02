import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { ThemeToggle } from "@/ui/components/ThemeToggle";

describe("ThemeToggle", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  it("should start on system and cycle through light and dark on each click", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    const button = screen.getByRole("button", { name: /Theme: System/ });

    await user.click(button);
    expect(screen.getByRole("button", { name: /Theme: Light/ })).toBeInTheDocument();
    expect(document.documentElement.classList.contains("dark")).toBe(false);

    await user.click(screen.getByRole("button", { name: /Theme: Light/ }));
    expect(screen.getByRole("button", { name: /Theme: Dark/ })).toBeInTheDocument();
    expect(document.documentElement.classList.contains("dark")).toBe(true);

    await user.click(screen.getByRole("button", { name: /Theme: Dark/ }));
    expect(screen.getByRole("button", { name: /Theme: System/ })).toBeInTheDocument();
  });

  it("should persist the chosen theme to localStorage", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.click(screen.getByRole("button", { name: /Theme: System/ }));

    expect(localStorage.getItem("theme")).toBe("light");
  });
});
