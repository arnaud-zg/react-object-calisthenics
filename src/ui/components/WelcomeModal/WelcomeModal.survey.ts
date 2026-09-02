import { useMemo, useSyncExternalStore } from "react";
import { WELCOME_SURVEY_STORAGE_IMPLEMENTATIONS } from "@/config/storage.config";
import { WelcomeSurvey } from "@/domain/welcomeSurvey/WelcomeSurvey";
import { useDevSettings } from "@/ui/devSettings/DevSettingsContext";

export const useWelcomeModalSurvey = () => {
  const { welcomeSurveyStorageKey } = useDevSettings();

  // Recreated only when the developer settings modal picks a different implementation,
  // so switching starts that storage strategy fresh instead of inheriting stale state.
  const welcomeSurveyStorage = useMemo(
    () => WELCOME_SURVEY_STORAGE_IMPLEMENTATIONS[welcomeSurveyStorageKey](),
    [welcomeSurveyStorageKey],
  );
  const welcomeSurveyApi = useMemo(
    () => new WelcomeSurvey(welcomeSurveyStorage),
    [welcomeSurveyStorage],
  );

  const welcomeSurvey = useSyncExternalStore(
    welcomeSurveyStorage.subscribe,
    welcomeSurveyStorage.getSurvey,
    welcomeSurveyStorage.getSurvey,
  );

  return {
    welcomeSurvey,
    saveSurvey: welcomeSurveyApi.saveSurvey,
  };
};
