import { useEffect, useRef } from "react";

import type { WelcomeModalHandle } from "./WelcomeModal.types";
import { WelcomeModal } from "./WelcomeModal";

export const useWelcomeModalHandle = () => {
  const ref = useRef<WelcomeModalHandle>({
    open: () => {},
    close: () => {},
  });
  const { welcomeSurvey } = WelcomeModal.useWelcomeModalSurvey();
  const hasSubmittedData = !!welcomeSurvey;

  useEffect(() => {
    if (!hasSubmittedData) {
      ref.current?.open();
    }
  }, [hasSubmittedData]);

  return { ref };
};
