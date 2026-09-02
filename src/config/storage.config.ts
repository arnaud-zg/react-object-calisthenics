import {
  DEFAULT_WELCOME_SURVEY_STORAGE_KEY,
  type WelcomeSurveyStorageKey,
} from "@/config/welcomeSurveyStorageKeys";
import { LocalStorageWelcomeSurveyRepository } from "@/domain/welcomeSurvey/infrastructure/LocalStorageWelcomeSurvey.repository";
import { TanStackStoreWelcomeSurveyRepository } from "@/domain/welcomeSurvey/infrastructure/TanstackStoreWelcomeSurvey.repository";
import { ZustandWelcomeSurveyRepository } from "@/domain/welcomeSurvey/infrastructure/ZustandWelcomeSurvey.repository";
import type { WelcomeStorageRepository } from "@/domain/welcomeSurvey/WelcomeSurveyStorage.repository";

export {
  DEFAULT_WELCOME_SURVEY_STORAGE_KEY,
  isWelcomeSurveyStorageKey,
  WELCOME_SURVEY_STORAGE_KEYS,
  type WelcomeSurveyStorageKey,
} from "@/config/welcomeSurveyStorageKeys";

/**
 * Every WelcomeSurvey storage strategy, keyed by name. All three implement the same
 * WelcomeStorageRepository interface, so nothing in the domain or the UI knows which one
 * is behind it. Factories rather than shared instances, so picking a key always starts
 * that implementation fresh.
 */
export const WELCOME_SURVEY_STORAGE_IMPLEMENTATIONS = {
  localStorage: () => new LocalStorageWelcomeSurveyRepository(),
  tanstackStore: () => new TanStackStoreWelcomeSurveyRepository(),
  zustand: () => new ZustandWelcomeSurveyRepository(),
} as const satisfies Record<WelcomeSurveyStorageKey, () => WelcomeStorageRepository>;

/**
 * The default WelcomeSurvey storage instance: what the app uses before a visitor (or a
 * test) picks a different one from the developer settings modal.
 */
export const welcomeSurveyStorage: WelcomeStorageRepository =
  WELCOME_SURVEY_STORAGE_IMPLEMENTATIONS[DEFAULT_WELCOME_SURVEY_STORAGE_KEY]();
