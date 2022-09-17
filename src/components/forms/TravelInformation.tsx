import React from "react";
import { useTranslation } from "react-i18next";
import FormPageProps from "../../interfaces/FormPageProps";
import TextInput from "../input/TextInput";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const TravelInformation: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {t} = useTranslation();

    const onNext = () => {
        onComplete && onComplete();
    }

    const onPrevious = () => {
        onBack && onBack();
    }

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <h2>{t('text-school-info')}</h2>
                <TextInput name="flight-number" label={t('field-flight-number')} />
                <TextInput name="departure-time" label={t('field-departure-time')} />
                <TextInput name="arrival-time" label={t('field-arrival-time')} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default TravelInformation;