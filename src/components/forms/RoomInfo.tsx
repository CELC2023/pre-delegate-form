import React, { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import FormPageProps from "../../interfaces/FormPageProps";
import Checkbox from "../input/Checkbox";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const RoomInfo: React.FC<FormPageProps> = ({ onBack, onComplete }) => {
  const { t } = useTranslation();

  const [acknowledge, setAcknowledge] = useState<boolean>(false);

  const onNext = () => {
    if(acknowledge) {
        onComplete && onComplete();
    }
  };

  const onPrevious = () => {
    onBack && onBack();
  };

  const changeAcknowledge = (name: string, value: boolean) => {
    setAcknowledge(value)
  }

  return (
    <>
      <FormPreviousButton onClick={onPrevious} />
      <FormContent>
        <h2>{t("text-rooming-questionnaire")}</h2>
        <p>
          <Trans
            i18nKey={"text-shared-beds"}
            components={[
              <strong className="bold" />,
              <strong className="bold" />,
            ]}
          ></Trans>
        </p>
        <Checkbox name="sharedBeds" label={t('option-yes')} value={acknowledge} onChange={changeAcknowledge} />
      </FormContent>
      <FormNextButton onClick={onNext} isActive={acknowledge} />
    </>
  );
};

export default RoomInfo;
