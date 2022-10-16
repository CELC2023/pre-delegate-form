import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectMosqueTrip, setMosqueTrip } from "../../redux/delegateReducer";
import BooleanRadio from "../input/BooleanRadio";
import ProgressDots from "../ProgressDots";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const MosqueVisit: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    interface MosqueActivityForm {
        mosqueTrip: boolean | void
    }

    const defaultValues: MosqueActivityForm = {
        mosqueTrip: useSelector(selectMosqueTrip)
    }

    const {control, watch} = useForm({defaultValues: defaultValues})

    const onNext = () => {
        const values: MosqueActivityForm = watch();
        if(values.mosqueTrip === true || values.mosqueTrip === false) {
            dispatch(setMosqueTrip(values))
            onComplete && onComplete();
        }
    }

    const onPrevious = () => {
        const values: MosqueActivityForm = watch();
        dispatch(setMosqueTrip(values))
        onBack && onBack();
    }

    return (
       <>
        <FormPreviousButton onClick={onPrevious} />
        <FormContent>
        <ProgressDots steps={5} current={4} />
                <h2>{t('text-conference-activity')}</h2>
                <BooleanRadio name='mosqueTrip' label={t('field-mosque')} control={control} />
        </FormContent>
        
        <FormNextButton onClick={onNext} />
       </> 
    )
}

export default MosqueVisit;