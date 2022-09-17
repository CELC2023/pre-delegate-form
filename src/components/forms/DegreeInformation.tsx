import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import FormPageProps from "../../interfaces/FormPageProps";
import Autocomplete from "../input/Autocomplete";
import TextInput from "../input/TextInput";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const DegreeInformation: React.FC<FormPageProps> = ({onComplete, onBack}) => {
    const {t} = useTranslation();
    const {control} = useForm();

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
                <Autocomplete name="major" label={'field-major'} control={control} />
                <TextInput name="minor" label={'field-minor'} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default DegreeInformation;