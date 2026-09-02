import { useImmutableInstance } from "immutable-instance";
import { useSyncExternalStore } from "react";
import { welcomeSurveyStorage } from "@/config/storage.config";
import { WelcomeSurvey } from "@/domain/welcomeSurvey/WelcomeSurvey";

export const useWelcomeModalSurvey = () => {
  const welcomeSurvey = useSyncExternalStore(
    welcomeSurveyStorage.subscribe,
    welcomeSurveyStorage.getSurvey,
    welcomeSurveyStorage.getSurvey,
  );
  const welcomeSurveyApi = useImmutableInstance(new WelcomeSurvey(welcomeSurveyStorage));

  return {
    welcomeSurvey,
    saveSurvey: welcomeSurveyApi.saveSurvey,
  };
};
