import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectAllergies, selectDietaryRestrictions, setDietaryRestrictions } from "../../redux/delegateReducer";
import Checkbox from "../input/Checkbox";
import MultiSelect from "../input/MultiSelect";
import TextInput from "../input/TextInput";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const DietaryRestrictions: React.FC<FormPageProps> = ({onBack, onComplete}) => {

    const [restrictions, setRestrictions] = useState<Array<string>>(useSelector(selectDietaryRestrictions));
    const [allergies, setAllergies] = useState<string>(useSelector(selectAllergies));

    const {t} = useTranslation();

    const dispatch = useDispatch();

    const onNext = () => {
        const values = {
            dietaryRestrictions: restrictions,
            allergies: allergies,
        }
        dispatch(setDietaryRestrictions(values))
        onComplete && onComplete();
    }

    const onPrevious = () => {
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
    }],[])

    const onChange = (value: Array<string>) => {
        setRestrictions(value)
    }

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <h2>{t('text-conference-details')}</h2>
                <MultiSelect name="dietary-restrictions" label={t('field-dietary-restrictions')} options={dietaryRestrictions} onChange={onChange} value={restrictions} />
                <TextInput name="allergens" label={t('field-allergies')} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default DietaryRestrictions;