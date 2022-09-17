import React from "react";
import { useTranslation } from "react-i18next";
import FormPageProps from "../../interfaces/FormPageProps";
import TextInput from "../input/TextInput";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const EmergencyContact: React.FC<FormPageProps> = ({onBack, onComplete}) => {
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
                <h2>{t('text-conference-details')}</h2>
                <p>{t('text-emergency-contact-info')}</p>
                <TextInput name="emergency-contact-name" label={t('field-name')} />
                <TextInput name="emergency-contact-phone" label={t('field-phone-number')} />
                <TextInput name="emergency-contact-relationship" label={t('field-relationship')} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default EmergencyContact;