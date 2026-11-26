import type { WelcomeStorageRepository } from "@/domain/welcomeSurvey/WelcomeSurveyStorage.repository";
import type { WelcomeSurveyStoreState } from "@/domain/welcomeSurvey/WelcomeSurveyStore.config";
import { Store } from "@tanstack/store";

import { WELCOME_SURVEY_KEY } from "@/domain/welcomeSurvey/WelcomeSurveyStore.config";

// This module runs at import time both in the browser and, once the app is prerendered
// (see the SEO PR later in the stack), under Node during a server-side render. Node has
// no localStorage, so every access is guarded rather than assumed.
const isBrowser = typeof localStorage !== "undefined";

const loadInitialState = (): WelcomeSurveyStoreState => {
  if (!isBrowser) return { survey: null };

  try {
    const stored = localStorage.getItem(WELCOME_SURVEY_KEY);

    if (stored) {
      return JSON.parse(stored) as WelcomeSurveyStoreState;
    }
  } catch (error) {
    console.error("Failed to load welcome survey from localStorage:", error);
  }
  return { survey: null };
};

const welcomeStore = new Store<WelcomeSurveyStoreState>(loadInitialState());

welcomeStore.subscribe(() => {
  if (!isBrowser) return;

  try {
    localStorage.setItem(WELCOME_SURVEY_KEY, JSON.stringify(welcomeStore.state));
  } catch (error) {
    console.error("Failed to save welcome survey to localStorage:", error);
  }
});

export class TanStackStoreWelcomeSurveyRepository implements WelcomeStorageRepository {
  getSurvey = (): WelcomeSurveyStoreState["survey"] => {
    return welcomeStore.state.survey;
  };

  saveSurvey = (survey: WelcomeSurveyStoreState["survey"]): void => {
    welcomeStore.setState((state) => ({
      ...state,
      survey,
    }));
  };

  subscribe = (callback: () => void): (() => void) => {
    const subscription = welcomeStore.subscribe(callback);
    return () => subscription.unsubscribe();
  };
}
