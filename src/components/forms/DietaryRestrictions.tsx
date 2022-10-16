import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectAllergies, selectDietaryRestrictions, selectOtherDietaryRestrictions, setDietaryRestrictions } from "../../redux/delegateReducer";
import MultiSelect from "../input/MultiSelect";
import TextInput from "../input/TextInput";
import ProgressDots from "../ProgressDots";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const DietaryRestrictions: React.FC<FormPageProps> = ({onBack, onComplete}) => {

    interface DietaryRestrictionsForm {
        dietaryRestrictions: Array<string>
        otherDietaryRestrictions: string
        allergies: string
    }

    const defaultValues: DietaryRestrictionsForm = {
        dietaryRestrictions: useSelector(selectDietaryRestrictions),
        allergies: useSelector(selectAllergies),
        otherDietaryRestrictions: useSelector(selectOtherDietaryRestrictions),
    }

    const {t} = useTranslation();

    const {control, watch} = useForm({defaultValues: defaultValues})

    const dispatch = useDispatch();

    const onNext = () => {
        const values: DietaryRestrictionsForm = {
            dietaryRestrictions: watch('dietaryRestrictions'),
            allergies: watch('allergies'),
            otherDietaryRestrictions: watch('otherDietaryRestrictions')
        }
        dispatch(setDietaryRestrictions(values))
        onComplete && onComplete();
    }

    const onPrevious = () => {
        const values: DietaryRestrictionsForm = {
            dietaryRestrictions: watch('dietaryRestrictions'),
            allergies: watch('allergies'),
            otherDietaryRestrictions: watch('otherDietaryRestrictions')
        }
        dispatch(setDietaryRestrictions(values)) 
        onBack && onBack();
    }

    const dietaryRestrictions = useMemo(() => [{
        name: 'vegan',
        label: t('option-dietary-vegan')
    }, {
        name: 'vegetarian',
        label: t('option-dietary-vegetarian')
    }, {
        name: 'halal',
        label: t('option-dietary-halal')
    }, {
        name: 'gluten-free',
        label: t('option-dietary-gluten')
    }, {
        name: 'other',
        label: t('option-other')
    }],[t])

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <ProgressDots steps={5} current={2} />
                <h2>{t('text-conference-details')}</h2>
                <MultiSelect name="dietaryRestrictions" label={t('field-dietary-restrictions')} options={dietaryRestrictions} control={control} />
                {
                    watch('dietaryRestrictions').includes('other') &&
                    <TextInput name="otherDietaryRestrictions" label={t('field-dietary-other')} control={control} /> 
                }
                <TextInput name="allergies" label={t('field-allergies')} control={control} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default DietaryRestrictions;