import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { usePreloadImage } from "../../hooks/usePreloadImage";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectFrenchCaseCompetition, selectLanguages, setActivityLanguage } from "../../redux/delegateReducer";
import BooleanRadio from "../input/BooleanRadio";
import MultiSelect from "../input/MultiSelect";
import ProgressDots from "../ProgressDots";
import { BadlandsUrl } from "../scenes/Badlands";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const ActivityLanguage: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    interface ActivityLanguageForm {
        frenchCaseCompetition: boolean,
        languages: Array<string>
    }

    const defaultValues: ActivityLanguageForm = {
        frenchCaseCompetition: useSelector(selectFrenchCaseCompetition),
        languages: useSelector(selectLanguages)
    }

    const {control, watch} = useForm({defaultValues: defaultValues});

    const onNext = () => {
        const values: ActivityLanguageForm = watch();
        if(values.languages.length > 0 && values.frenchCaseCompetition !== undefined) {
            dispatch(setActivityLanguage(values));
            onComplete && onComplete();
        }
        
    }

    const onPrevious = () => {
        const values: ActivityLanguageForm = watch();
        dispatch(setActivityLanguage(values));
        onBack && onBack();
    }

    const options = [{
        name: 'english',
        label: t('text-english')
    }, {
        name: 'french',
        label: t('text-french')
    }]

    usePreloadImage(BadlandsUrl);

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <ProgressDots steps={5} current={4} />
                <h2>{t('text-conference-activity')}</h2>
                <BooleanRadio name="frenchCaseCompetition" label={t('field-case-comp-language')} control={control} optionLabels={[t('text-french'), t('text-english')]} required={true} />
                <MultiSelect name="languages" label={t('field-speak-language')} options={options} control={control} required={true} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default ActivityLanguage;