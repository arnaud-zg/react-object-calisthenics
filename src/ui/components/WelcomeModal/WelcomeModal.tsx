import { useForm } from "@tanstack/react-form";
import { forwardRef, type Ref, useImperativeHandle, useState } from "react";
import { ANALYTICS_CONFIG } from "@/config/analytics.config";
import { WelcomeSurveyDataSchema } from "@/domain/welcomeSurvey/WelcomeSurvey.data";
import { useTranslations } from "@/i18n/LocaleContext";
import { Button } from "@/ui/primitives/button";
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "@/ui/primitives/modal";
import { useWelcomeModalHandle } from "./WelcomeModal.logic";
import { useWelcomeModalSurvey } from "./WelcomeModal.survey";
import type {
  WelcomeModalComponentType,
  WelcomeModalHandle,
  WelcomeModalProps,
} from "./WelcomeModal.types";

export type { WelcomeModalHandle } from "./WelcomeModal.types";

const WelcomeModalComponent = (
  { title, description, actionLabel }: WelcomeModalProps,
  ref: Ref<WelcomeModalHandle>,
) => {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const { welcomeSurvey, saveSurvey } = WelcomeModal.useWelcomeModalSurvey();

  const form = useForm({
    defaultValues: welcomeSurvey,
    onSubmit: async ({ value: survey }) => {
      if (!survey) return;

      saveSurvey(survey);
      setIsOpen(false);
    },
  });

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      <ModalContent className="sm:max-w-md">
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalDescription>{description}</ModalDescription>
        </ModalHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <div className="mb-5">
            <form.Field
              name="skill"
              validators={{
                onChange: ({ value }) => {
                  const { success } =
                    WelcomeSurveyDataSchema.shape.skill.safeParse(value);

                  if (success) return;
                  return t.welcomeModal.invalidSkill;
                },
              }}
            >
              {(field) => (
                <>
                  <label
                    htmlFor={field.name}
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    {t.welcomeModal.fieldLabel}
                  </label>
                  <select
                    aria-invalid={!!field.state.meta.errors?.length}
                    aria-describedby={`${field.name}-error`}
                    id={field.name}
                    value={field.state.value ?? ""}
                    onChange={(e) => {
                      const { data: safeValue } =
                        WelcomeSurveyDataSchema.shape.skill.safeParse(e.target.value);

                      if (!safeValue) return;
                      field.handleChange(safeValue);

                      window.umami?.track(ANALYTICS_CONFIG.events.selectKnowledgeLevel, {
                        level: safeValue,
                      });
                    }}
                    className="w-full cursor-pointer rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/50"
                  >
                    <option value="">{t.welcomeModal.placeholderOption}</option>
                    <option value="beginner">{t.skill.label.beginner}</option>
                    <option value="intermediate">{t.skill.label.intermediate}</option>
                    <option value="expert">{t.skill.label.expert}</option>
                  </select>
                  {field.state.meta.isTouched && field.state.meta.errors?.[0] && (
                    <p
                      id={`${field.name}-error`}
                      className="mt-1 text-sm text-destructive"
                    >
                      {field.state.meta.errors[0]}
                    </p>
                  )}
                </>
              )}
            </form.Field>
          </div>

          <ModalFooter>
            <form.Subscribe selector={(state) => state.isValid && !state.isPristine}>
              {(canSubmit) => (
                <Button
                  type="submit"
                  disabled={!canSubmit}
                  className="w-full"
                  size="default"
                >
                  {actionLabel ?? t.welcomeModal.continue}
                </Button>
              )}
            </form.Subscribe>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export const WelcomeModal = Object.assign(forwardRef(WelcomeModalComponent), {
  useWelcomeModalHandle,
  useWelcomeModalSurvey,
  displayName: "WelcomeModal",
}) satisfies WelcomeModalComponentType;
