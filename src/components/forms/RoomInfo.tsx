import React, { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { usePreloadImage } from "../../hooks/usePreloadImage";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectRoomingAgreement, setRoomAgreement } from "../../redux/delegateReducer";
import Checkbox from "../input/Checkbox";
import ProgressDots from "../ProgressDots";
import { PeaceBridgeUrl } from "../scenes/PeaceBridge";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const RoomInfo: React.FC<FormPageProps> = ({ onBack, onComplete }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const defaultValue = useSelector(selectRoomingAgreement);
  
  const [acknowledge, setAcknowledge] = useState<boolean>(defaultValue);

  const onNext = () => {
    if(acknowledge) {
        dispatch(setRoomAgreement(acknowledge))
        onComplete && onComplete();
    }
  };

  const onPrevious = () => {
    onBack && onBack();
  };

  const changeAcknowledge = (name: string, value: boolean) => {
    setAcknowledge(value)
  }

  usePreloadImage(PeaceBridgeUrl);

  return (
    <>
      <FormPreviousButton onClick={onPrevious} />
      <FormContent>
        <ProgressDots steps={5} current={3} />
        <h2>{t("text-rooming-questionnaire")}</h2>
        <p>{t('text-rooming-instructions')}</p>
        <p>
          <Trans
            i18nKey={"text-rooming-description"}
            components={[
              <strong className="bold" />,
              <strong className="bold" />,
            ]}
          ></Trans>
        </p>
        <p>{t('text-rooming-attempt')}</p>
        <Checkbox name="sharedBeds" label={t('option-yes')} value={acknowledge} onChange={changeAcknowledge} required={true} />
      </FormContent>
      <FormNextButton onClick={onNext} isActive={acknowledge} />
    </>
  );
};

export default RoomInfo;
