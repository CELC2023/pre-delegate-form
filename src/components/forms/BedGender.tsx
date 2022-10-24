import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getGenders } from "../../data/genders";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectBedGenders, selectOtherBedGenders, setBedGenders } from "../../redux/delegateReducer";
import MultiSelect from "../input/MultiSelect";
import TextInput from "../input/TextInput";
import ProgressDots from "../ProgressDots";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const BedGender: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    
    interface BedGenderForm {
        bedGenders: Array<string>,
        otherBedGenders: string
    }

    const defaultValues: BedGenderForm = {
        bedGenders: useSelector(selectBedGenders),
        otherBedGenders: useSelector(selectOtherBedGenders)
    }

    const {control, watch} = useForm({defaultValues: defaultValues});

    const onNext = () => {
        const values: BedGenderForm = watch();

        if(values.bedGenders.length > 0) {
            dispatch(setBedGenders(values))
            onComplete && onComplete();
        }
    }

    const onPrevious = () => {
        const values: BedGenderForm = watch();
        dispatch(setBedGenders(values));
        onBack && onBack();
    }

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <ProgressDots steps={5} current={3} />
                <h2>{t('text-rooming-questionnaire')}</h2>
                <MultiSelect name="bedGenders" label={t('field-share-bed')} options={getGenders(t)} control={control} required={true} />
                {
                    watch('bedGenders').includes('other') &&
                    <TextInput name="otherBedGenders" label={t('field-other-genders')} control={control} />
                }
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default BedGender;