/**
 * Just the names of the WelcomeSurvey storage implementations and which one is active by
 * default: no import of the concrete repository classes themselves. DevSettingsContext
 * renders on every route (via the root layout), so it depends on this file rather than on
 * storage.config.ts directly, keeping pages that never open the settings modal (the home
 * page, for instance) from paying for zustand, TanStack Store, and zod in their bundle.
 */
export const WELCOME_SURVEY_STORAGE_KEYS = [
  "localStorage",
  "tanstackStore",
  "zustand",
] as const;

export type WelcomeSurveyStorageKey = (typeof WELCOME_SURVEY_STORAGE_KEYS)[number];

export const DEFAULT_WELCOME_SURVEY_STORAGE_KEY: WelcomeSurveyStorageKey =
  "tanstackStore";

export function isWelcomeSurveyStorageKey(
  value: string,
): value is WelcomeSurveyStorageKey {
  return (WELCOME_SURVEY_STORAGE_KEYS as readonly string[]).includes(value);
}
