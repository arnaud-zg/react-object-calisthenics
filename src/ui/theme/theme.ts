export type Theme = "light" | "dark" | "system";

const STORAGE_KEY = "theme";

function isStoredTheme(value: string | null): value is Extract<Theme, "light" | "dark"> {
  return value === "light" || value === "dark";
}

export function getStoredTheme(): Theme {
  if (typeof localStorage === "undefined") return "system";

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return isStoredTheme(stored) ? stored : "system";
  } catch {
    return "system";
  }
}

export function prefersDark(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

export function applyTheme(theme: Theme): void {
  if (typeof document === "undefined") return;

  const isDark = theme === "dark" || (theme === "system" && prefersDark());
  document.documentElement.classList.toggle("dark", isDark);
}

export function storeTheme(theme: Theme): void {
  if (typeof localStorage === "undefined") return;

  try {
    if (theme === "system") {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, theme);
    }
  } catch {
    // Storage can be unavailable (private browsing, quota); the toggle still works for
    // the current session via applyTheme, it just won't persist.
  }
}
