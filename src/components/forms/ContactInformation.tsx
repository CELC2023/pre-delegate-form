import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import {
  selectAddress,
  selectDateOfBirth,
  selectDiscord,
  selectPhone,
  setContactInformation,
} from "../../redux/delegateReducer";
import { discordRegex, phoneRegex } from "../../utils/regex";
import TextInput from "../input/TextInput";
import ProgressDots from "../ProgressDots";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const ContactInformation: React.FC<FormPageProps> = ({
  onBack,
  onComplete,
}) => {
  interface ContactInformationForm {
    phone: string;
    dateOfBirth: string;
    address: string;
    discord: string;
  }

  const defaultValues: ContactInformationForm = {
    phone: useSelector(selectPhone),
    dateOfBirth: useSelector(selectDateOfBirth),
    address: useSelector(selectAddress),
    discord: useSelector(selectDiscord),
  };

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    control,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
  });

  const validatePhone = (value: string): boolean => {
    if (phoneRegex.test(value)) {
      return true;
    }
    return false;
  };

  const validateDateOfBirth = (value: string): boolean => {
    const oldDate = new Date("01 Jan 1900 00:00:00 MST");
    const dob = new Date(value);
    if (dob < new Date() && dob > oldDate) {
      return true;
    }
    return false;
  };

  const validateDiscord = (value: string): boolean => {
    if (discordRegex.test(value)) {
      return true;
    }
    return false;
  };

  const validateText = (value: string): boolean => {
    if (value && value.length > 0 && value.length < 128) {
      return true;
    }
    return false;
  };

  const isValid = (values: ContactInformationForm): boolean => {
    var hasErrors: boolean = false;
    if (Object.keys(errors).length !== 0) {
      hasErrors = true;
    }
    if (!validatePhone(values.phone)) {
      setError("phone", { type: "custom", message: "Enter a valid value" });
      hasErrors = true;
    }

    if(!validateDiscord(values.discord)) {
      setError("discord", { type: "custom", message: "Enter a valid value" });
      hasErrors = true; 
    }

    if(!validateDateOfBirth(values.dateOfBirth)) {
      setError("dateOfBirth", { type: "custom", message: "Enter a valid value" });
      hasErrors = true;  
    }

    if(!validateText(values.address)) {
      setError("address", { type: "custom", message: "Enter a valid value" });
      hasErrors = true;   
    }

    return !hasErrors
  };

  const onNext = () => {
    const values = watch();
    if(isValid(values)) {
      dispatch(setContactInformation(values))
      onComplete && onComplete();
    }
  };

  const onPrevious = () => {
    const values = watch()
    dispatch(setContactInformation(values))
    onBack && onBack();
  };

  return (
    <>
      <FormPreviousButton onClick={onPrevious} />

      <FormContent>
        <ProgressDots steps={5} current={1} />
        <h2>{t("text-personal")}</h2>
        <TextInput
          name="phone"
          label={t("field-phone-number")}
          setErrors={setError}
          clearErrors={clearErrors}
          validation={validatePhone}
          control={control}
          required={true}
          type={"tel"}
        />
        <TextInput
          name="dateOfBirth"
          label={t("field-birthday")}
          setErrors={setError}
          clearErrors={clearErrors}
          control={control}
          validation={validateDateOfBirth}
          type="date"
          autocomplete="bday"
          required={true}
        />
        <TextInput
          name="address"
          label={t("field-address")}
          control={control}
          required={true}
          validation={validateText}
          setErrors={setError}
          clearErrors={clearErrors}
        />
        <TextInput
          name="discord"
          label={t("field-discord")}
          control={control}
          required={true}
          validation={validateDiscord}
          setErrors={setError}
          clearErrors={clearErrors}
        />
        <p className="help-text">{t('text-discord-format')}</p>
      </FormContent>
      <FormNextButton onClick={onNext} />
    </>
  );
};

export default ContactInformation;
