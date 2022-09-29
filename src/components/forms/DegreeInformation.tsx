import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import FormPageProps from "../../interfaces/FormPageProps";
import Autocomplete from "../input/Autocomplete";
import OptionRadio from "../input/OptionRadio";
import TextInput from "../input/TextInput";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const DegreeInformation: React.FC<FormPageProps> = ({onComplete, onBack}) => {
    const {t} = useTranslation();
    const {control, watch} = useForm();

    const onNext = () => {
        onComplete && onComplete();
    }

    const onPrevious = () => {
        onBack && onBack();
    }

    const degreeYears = [{
        name: '1',
        label: t('option-first-year')
    }, {
        name: '2',
        label: t('option-second-year') 
    }, {
        name: '3',
        label: t('option-third-year') 
    }, {
        name: '4',
        label: t('option-fourth-year') 
    }, {
        name: '5',
        label: t('option-fifth-year') 
    }, {
        name: '6',
        label: t('option-sixth-year') 
    }]

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <h2>{t('text-school-info')}</h2>
                <OptionRadio name="year" label={t('field-study-year')} options={degreeYears} control={control} value={watch('year')} />
                <Autocomplete name="major" label={t('field-major')} control={control} />
                <TextInput name="minor" label={t('field-minor')} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default DegreeInformation;