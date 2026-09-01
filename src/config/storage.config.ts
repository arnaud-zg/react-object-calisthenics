import { TanStackStoreWelcomeSurveyRepository } from "@/domain/welcomeSurvey/infrastructure/TanstackStoreWelcomeSurvey.repository";
import type { WelcomeStorageRepository } from "@/domain/welcomeSurvey/WelcomeSurveyStorage.repository";

/**
 * The active WelcomeSurvey storage strategy. LocalStorageWelcomeSurveyRepository and
 * ZustandWelcomeSurveyRepository implement the same WelcomeStorageRepository interface
 * and can be swapped in here, this one line is the only thing that needs to change:
 * nothing in the domain or the UI knows which implementation is behind the interface.
 */
export const welcomeSurveyStorage: WelcomeStorageRepository =
  new TanStackStoreWelcomeSurveyRepository();
