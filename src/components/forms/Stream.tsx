import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase/firebase";
import { onValue, ref } from "firebase/database";
import FormPageProps from "../../interfaces/FormPageProps";
import {
  selectEmail,
  selectFirstName,
  selectGovernance,
  selectId,
  selectLastName,
  selectPhone,
  setGovernance,
  setInformationChange,
  setWaiver,
} from "../../redux/checkInReducer";
import Textarea from "../input/Textarea";
import ProgressDots from "../ProgressDots";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import { checkInDataModel } from "../../models/checkInData";
import { blankHref } from "../../utils/constants";
import Loader from "../../images/loader.gif";
import OptionRadio from "../input/OptionRadio";
import BooleanRadio from "../input/BooleanRadio";
import FormPreviousButton from "./FormPreviousButton";

const Stream: React.FC<FormPageProps> = ({ onBack, onComplete }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const governance = useSelector(selectGovernance);

  interface StreamForm {
    governance: boolean;
  }

  const info: StreamForm = {
    governance: governance || false,
  };

  const { control, getValues } = useForm<StreamForm>({defaultValues: info});

  const onNext = () => {
    dispatch(setGovernance(governance));
    onComplete && onComplete();
  };

  const onPrevious = () => {
    dispatch(setGovernance(getValues('governance')));
    onBack && onBack()
  }

  return (
    <>
    <FormPreviousButton onClick={onPrevious} />
      <FormContent>
        <ProgressDots steps={6} current={2} />
        <h2>Stream</h2>
        <BooleanRadio label={t('field-governance-stream')} name="governance" control={control} required={true} />
      </FormContent>
      <FormNextButton onClick={onNext} />
    </>
  );
};

export default Stream;
