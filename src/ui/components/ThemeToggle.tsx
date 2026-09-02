import { Moon, Sun, SunMoon } from "lucide-react";
import { useState } from "react";
import { applyTheme, getStoredTheme, storeTheme, type Theme } from "@/ui/theme/theme";

const NEXT_THEME: Record<Theme, Theme> = {
  system: "light",
  light: "dark",
  dark: "system",
};

const THEME_ICON: Record<Theme, typeof Sun> = {
  system: SunMoon,
  light: Sun,
  dark: Moon,
};

const THEME_LABEL: Record<Theme, string> = {
  system: "System",
  light: "Light",
  dark: "Dark",
};

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme());
  const Icon = THEME_ICON[theme];

  return (
    <button
      type="button"
      onClick={() => {
        const next = NEXT_THEME[theme];

        applyTheme(next);
        storeTheme(next);
        setTheme(next);
      }}
      className="flex h-11 w-11 items-center justify-center rounded-full text-foreground outline-none transition-colors duration-200 hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label={`Theme: ${THEME_LABEL[theme]}. Click to switch.`}
      data-umami-event="header.theme-toggle"
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
