import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectLanguagesPreference } from "../../redux/delegateReducer";
import MultiSelect from "../input/MultiSelect";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const ActivityLanguage: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {t} = useTranslation();

    const defaultLanguagesPref = useSelector(selectLanguagesPreference);

    const [languagesPref, setLanguagesPref] = useState<Array<string>>(defaultLanguagesPref);

    const onNext = () => {
        onComplete && onComplete();
    }

    const onPrevious = () => {
        onBack && onBack();
    }

    const options = [{
        name: 'english',
        label: t('text-english')
    }, {
        name: 'french',
        label: t('text-french')
    }]

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <h2>{t('text-conference-activity')}</h2>
                <MultiSelect name="delegate-language-preference" label={'field-speak-language'} options={options} value={languagesPref} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default ActivityLanguage;