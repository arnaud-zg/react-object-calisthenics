import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { applyTheme, getStoredTheme, storeTheme } from "../theme";

describe("theme", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("getStoredTheme", () => {
    it("should default to system when nothing was stored", () => {
      expect(getStoredTheme()).toBe("system");
    });

    it("should return the stored light or dark theme", () => {
      localStorage.setItem("theme", "dark");
      expect(getStoredTheme()).toBe("dark");

      localStorage.setItem("theme", "light");
      expect(getStoredTheme()).toBe("light");
    });

    it("should treat an unrecognized stored value as system", () => {
      localStorage.setItem("theme", "sepia");
      expect(getStoredTheme()).toBe("system");
    });
  });

  describe("storeTheme", () => {
    it("should persist an explicit light or dark choice", () => {
      storeTheme("dark");
      expect(localStorage.getItem("theme")).toBe("dark");
    });

    it("should clear storage when switching back to system", () => {
      localStorage.setItem("theme", "dark");
      storeTheme("system");
      expect(localStorage.getItem("theme")).toBeNull();
    });
  });

  describe("applyTheme", () => {
    it("should add the dark class when the theme is dark", () => {
      applyTheme("dark");
      expect(document.documentElement.classList.contains("dark")).toBe(true);
    });

    it("should remove the dark class when the theme is light", () => {
      document.documentElement.classList.add("dark");
      applyTheme("light");
      expect(document.documentElement.classList.contains("dark")).toBe(false);
    });

    it("should follow the OS preference when the theme is system", () => {
      vi.spyOn(window, "matchMedia").mockReturnValue({
        matches: true,
        media: "",
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      });

      applyTheme("system");

      expect(document.documentElement.classList.contains("dark")).toBe(true);
    });
  });
});
