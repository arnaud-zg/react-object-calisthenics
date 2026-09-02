import { createContext, type ReactNode, useCallback, useContext, useState } from "react";
import {
  DEFAULT_WELCOME_SURVEY_STORAGE_KEY,
  isWelcomeSurveyStorageKey,
  type WelcomeSurveyStorageKey,
} from "@/config/welcomeSurveyStorageKeys";

const STORAGE_KEY = "dev-settings.welcome-survey-storage";

function readStoredWelcomeSurveyStorageKey(): WelcomeSurveyStorageKey {
  if (typeof localStorage === "undefined") return DEFAULT_WELCOME_SURVEY_STORAGE_KEY;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored && isWelcomeSurveyStorageKey(stored)
      ? stored
      : DEFAULT_WELCOME_SURVEY_STORAGE_KEY;
  } catch {
    return DEFAULT_WELCOME_SURVEY_STORAGE_KEY;
  }
}

interface DevSettingsContextValue {
  welcomeSurveyStorageKey: WelcomeSurveyStorageKey;
  setWelcomeSurveyStorageKey: (key: WelcomeSurveyStorageKey) => void;
}

/**
 * Defaults match storage.config.ts's own default, so components and their tests behave
 * the same with or without a provider above them.
 */
const DevSettingsContext = createContext<DevSettingsContextValue>({
  welcomeSurveyStorageKey: DEFAULT_WELCOME_SURVEY_STORAGE_KEY,
  setWelcomeSurveyStorageKey: () => {},
});

interface DevSettingsProviderProps {
  children: ReactNode;
}

/**
 * Lets a visitor pick which concrete WelcomeStorageRepository backs the welcome survey,
 * live, from the developer settings modal: a runtime demonstration that the domain and
 * the UI only ever depend on the WelcomeStorageRepository interface.
 */
export function DevSettingsProvider({ children }: DevSettingsProviderProps) {
  const [welcomeSurveyStorageKey, setKey] = useState<WelcomeSurveyStorageKey>(
    readStoredWelcomeSurveyStorageKey,
  );

  const setWelcomeSurveyStorageKey = useCallback((key: WelcomeSurveyStorageKey) => {
    setKey(key);

    try {
      localStorage.setItem(STORAGE_KEY, key);
    } catch {
      // Storage can be unavailable (private browsing); the choice just won't persist.
    }
  }, []);

  return (
    <DevSettingsContext.Provider
      value={{ welcomeSurveyStorageKey, setWelcomeSurveyStorageKey }}
    >
      {children}
    </DevSettingsContext.Provider>
  );
}

export function useDevSettings(): DevSettingsContextValue {
  return useContext(DevSettingsContext);
}
