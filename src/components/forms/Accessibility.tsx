import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectAccessibilityNeeds, setAccessibilityNeeds } from "../../redux/delegateReducer";
import Textarea from "../input/Textarea";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const Accessibility: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const defaultValues = {
        accessibilityNeeds: useSelector(selectAccessibilityNeeds) 
    }
    const {control, watch} = useForm({defaultValues: defaultValues})

    const onNext = () => {
        dispatch(setAccessibilityNeeds(watch('accessibilityNeeds')))
        onComplete && onComplete();
    }

    const onPrevious = () => {
        dispatch(setAccessibilityNeeds(watch('accessibilityNeeds')))
        onBack && onBack();
    }

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <h2>{t('text-conference-details')}</h2>
                <p>{t('text-accessibility-needs')}</p> 
                <Textarea name="accessibilityNeeds" label={t('info-enter-text')} control={control} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default Accessibility;