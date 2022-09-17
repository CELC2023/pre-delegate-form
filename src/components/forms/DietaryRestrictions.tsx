import React from "react";
import { useTranslation } from "react-i18next";
import FormPageProps from "../../interfaces/FormPageProps";
import TextInput from "../input/TextInput";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const DietaryRestrictions: React.FC<FormPageProps> = ({onBack, onComplete}) => {
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
                <TextInput name="allergens" label={t('field-allergies')} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default DietaryRestrictions;