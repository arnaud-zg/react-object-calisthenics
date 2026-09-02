import { Settings } from "lucide-react";
import { ANALYTICS_CONFIG } from "@/config/analytics.config";
import {
  WELCOME_SURVEY_STORAGE_IMPLEMENTATIONS,
  type WelcomeSurveyStorageKey,
} from "@/config/storage.config";
import { useTranslations } from "@/i18n/LocaleContext";
import { useDevSettings } from "@/ui/devSettings/DevSettingsContext";
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "@/ui/primitives/modal";

const STORAGE_KEYS = Object.keys(
  WELCOME_SURVEY_STORAGE_IMPLEMENTATIONS,
) as WelcomeSurveyStorageKey[];

export function DevSettingsModal() {
  const t = useTranslations();
  const { welcomeSurveyStorageKey, setWelcomeSurveyStorageKey } = useDevSettings();

  return (
    <Modal>
      <ModalTrigger asChild>
        <button
          type="button"
          aria-label={t.devSettings.buttonLabel}
          className="flex h-11 w-11 items-center justify-center rounded-full text-foreground outline-none transition-colors duration-200 hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          data-umami-event={ANALYTICS_CONFIG.events.openDevSettings}
        >
          <Settings className="h-5 w-5" aria-hidden="true" />
        </button>
      </ModalTrigger>

      <ModalContent className="sm:max-w-md">
        <ModalHeader>
          <ModalTitle>{t.devSettings.title}</ModalTitle>
          <ModalDescription>{t.devSettings.description}</ModalDescription>
        </ModalHeader>

        <fieldset>
          <legend className="mb-2 text-sm font-medium text-foreground">
            {t.devSettings.welcomeSurveyStorageLegend}
          </legend>
          <div className="space-y-2">
            {STORAGE_KEYS.map((key) => (
              <label
                key={key}
                className="flex cursor-pointer items-center gap-3 rounded-md border border-input px-3 py-2.5 text-sm text-foreground has-[:checked]:border-ring has-[:checked]:bg-accent"
              >
                <input
                  type="radio"
                  name="welcome-survey-storage"
                  value={key}
                  checked={welcomeSurveyStorageKey === key}
                  onChange={() => {
                    setWelcomeSurveyStorageKey(key);
                    window.umami?.track(
                      ANALYTICS_CONFIG.events.switchWelcomeSurveyStorage,
                      { implementation: key },
                    );
                  }}
                  className="h-4 w-4 cursor-pointer accent-primary"
                />
                {t.devSettings.implementations[key]}
              </label>
            ))}
          </div>
        </fieldset>
      </ModalContent>
    </Modal>
  );
}
