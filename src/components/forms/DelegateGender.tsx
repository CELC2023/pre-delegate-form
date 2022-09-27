import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { getGenders } from "../../data/genders";
import FormPageProps from "../../interfaces/FormPageProps";
import MultiSelect from "../input/MultiSelect";
import TextInput from "../input/TextInput";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const DelegateGender: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {t} = useTranslation();

    const [delegateGender, setDelegateGender]= useState<Array<string>>([])

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
                <h2>{t('text-rooming-questionnaire')}</h2>
                <MultiSelect name="delegate-gender" label={t('field-gender')} options={getGenders(t)} value={delegateGender} />
                <TextInput name="genders" label={t('field-other-genders')} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default DelegateGender;