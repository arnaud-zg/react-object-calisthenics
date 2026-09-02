import {
  createMemoryHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { routeTree } from "@/app/routeTree.gen";
import { welcomeSurveyStorage } from "@/config/storage.config";

function renderAppAt(initialLocation: string) {
  const router = createRouter({
    routeTree,
    context: {},
    history: createMemoryHistory({ initialEntries: [initialLocation] }),
  });
  return render(<RouterProvider router={router} />);
}

describe("App routing and i18n", () => {
  beforeEach(() => {
    // A saved survey keeps the welcome modal from covering the page under test.
    welcomeSurveyStorage.saveSurvey({ skill: "beginner" });
  });

  it("should render the English home page with English nav labels", async () => {
    renderAppAt("/");

    expect(
      await screen.findByRole("heading", {
        name: "Maintainable Frontend Architecture with React",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Shopping Cart" })).toBeInTheDocument();
  });

  it("should render the French home page with French nav labels", async () => {
    renderAppAt("/fr/");

    expect(
      await screen.findByRole("heading", {
        name: "Une architecture frontend maintenable avec React",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Accueil" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Panier" })).toBeInTheDocument();
  });

  it("should switch from English to French and keep the same page", async () => {
    const user = userEvent.setup();
    renderAppAt("/shopping-cart");

    await screen.findByRole("heading", { name: "Mystical Inventory" });

    await user.click(screen.getByRole("link", { name: "Français" }));

    expect(
      await screen.findByRole("heading", { name: "Inventaire Mystique" }),
    ).toBeInTheDocument();
  });

  it("should render the French shopping cart page", async () => {
    renderAppAt("/fr/shopping-cart");

    expect(
      await screen.findByRole("heading", { name: "Inventaire Mystique" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Votre Inventaire" })).toBeInTheDocument();
  });
});
