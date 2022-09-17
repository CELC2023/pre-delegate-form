import React from "react";
import { useTranslation } from "react-i18next";
import FormPageProps from "../../interfaces/FormPageProps";
import Textarea from "../input/Textarea";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const Medical: React.FC<FormPageProps> = ({onBack, onComplete}) => {
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
                <p>{t('text-medical-information')}</p> 
                <Textarea name="medical-information" label={t('info-enter-text')} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default Medical;