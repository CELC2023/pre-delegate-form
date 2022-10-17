import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getGenders } from "../../data/genders";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectGenders, selectOtherGenders, setGenders } from "../../redux/delegateReducer";
import MultiSelect from "../input/MultiSelect";
import TextInput from "../input/TextInput";
import ProgressDots from "../ProgressDots";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const DelegateGender: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    interface DelegateGenderForm {
        genders: Array<string>,
        otherGenders: string
    }

    const defaultValues: DelegateGenderForm = {
        genders: useSelector(selectGenders),
        otherGenders: useSelector(selectOtherGenders)
    }

    const {control, watch} = useForm({defaultValues: defaultValues});

    const onNext = () => {
        const values: DelegateGenderForm = watch();
        if(values.genders.length > 0) {
            dispatch(setGenders(values))
            onComplete && onComplete();
        }
    }

    const onPrevious = () => {
        const values: DelegateGenderForm = watch();
        dispatch(setGenders(values))
        onBack && onBack();
    }

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <ProgressDots steps={5} current={3} />
                <h2>{t('text-rooming-questionnaire')}</h2>
                <MultiSelect name="genders" label={t('field-gender')} options={getGenders(t)} control={control} required={true} />
                {
                    watch('genders').includes('other') &&
                    <TextInput name="otherGenders" label={t('field-other-genders')} control={control} />
                }
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default DelegateGender;