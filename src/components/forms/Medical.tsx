import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectMedicalInformation, setMedicalInformation } from "../../redux/delegateReducer";
import Textarea from "../input/Textarea";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const Medical: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const defaultValues = {
        medicalInformation: useSelector(selectMedicalInformation)
    }
    const {control, watch} = useForm({defaultValues: defaultValues})

    const onNext = () => {
        dispatch(setMedicalInformation(watch('medicalInformation') || ''))
        onComplete && onComplete();
    }

    const onPrevious = () => {
        dispatch(setMedicalInformation(watch('medicalInformation') || ''))
        onBack && onBack();
    }

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <h2>{t('text-conference-details')}</h2>
                <p>{t('text-medical-information')}</p> 
                <Textarea name="medicalInformation" label={t('info-enter-text')} control={control} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default Medical;