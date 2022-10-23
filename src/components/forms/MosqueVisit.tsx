import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import FormPageProps from "../../interfaces/FormPageProps";
import BooleanRadio from "../input/BooleanRadio";
import ProgressDots from "../ProgressDots";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const MosqueVisit: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {t} = useTranslation();

    interface MosqueActivityForm {
        mosqueTrip: boolean | void
    }

    const defaultValues: MosqueActivityForm = {
        mosqueTrip: false
    }

    const {control, watch} = useForm({defaultValues: defaultValues})

    const onNext = () => {
        const values: MosqueActivityForm = watch();
        if(values.mosqueTrip === true || values.mosqueTrip === false) {
            onComplete && onComplete();
        }
    }

    const onPrevious = () => {
        onBack && onBack();
    }

    return (
       <>
        <FormPreviousButton onClick={onPrevious} />
        <FormContent>
        <ProgressDots steps={5} current={4} />
                <h2>{t('text-conference-activity')}</h2>
                <BooleanRadio name='mosqueTrip' label={t('field-mosque')} control={control} required={true} />
        </FormContent>
        
        <FormNextButton onClick={onNext} />
       </> 
    )
}

export default MosqueVisit;