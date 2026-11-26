import type { Locale } from "@/i18n/Locale";
import type { Messages } from "@/i18n/messages/en";
import type { ReactNode } from "react";
import { createContext, useContext, useEffect } from "react";

import { DEFAULT_LOCALE } from "@/i18n/Locale";
import { en } from "@/i18n/messages/en";
import { fr } from "@/i18n/messages/fr";

const MESSAGES: Record<Locale, Messages> = { en, fr };

const LocaleContext = createContext<Locale>(DEFAULT_LOCALE);

interface LocaleProviderProps {
  locale: Locale;
  children: ReactNode;
}

/**
 * Each route decides its own locale (routes are locale-prefixed, see src/app/routes/fr),
 * and provides it here so any component underneath can translate without prop drilling.
 */
export function LocaleProvider({ locale, children }: LocaleProviderProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

/** Defaults to English outside a provider, so components and their tests don't need one. */
export function useLocale(): Locale {
  return useContext(LocaleContext);
}

export function useTranslations(): Messages {
  return MESSAGES[useLocale()];
}
