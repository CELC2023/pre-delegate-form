import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectEmergencyContactName, selectEmergencyContactPhone, selectEmergencyContactRelation, setEmergencyContact } from "../../redux/delegateReducer";
import { phoneRegex } from "../../utils/regex";
import TextInput from "../input/TextInput";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const EmergencyContact: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    interface EmergencyContactForm {
        emergencyContactName: string,
        emergencyContactPhone: string,
        emergencyContactRelationship: string
    }

    const defaultValues: EmergencyContactForm = {
        emergencyContactName: useSelector(selectEmergencyContactName),
        emergencyContactPhone: useSelector(selectEmergencyContactPhone),
        emergencyContactRelationship: useSelector(selectEmergencyContactRelation)
    }

    const {control, watch, setError, clearErrors} = useForm({defaultValues: defaultValues});

    const validatePhone = (value: string): boolean => {
        if (phoneRegex.test(value)) {
          return true;
        }
        return false;
      };

    const onNext = () => {
        const values = {
            name: watch('emergencyContactName'),
            phone: watch('emergencyContactPhone'),
            relation: watch('emergencyContactRelationship')
        } 

        if(values.name !== '' && values.phone !== '' && values.relation !== '' && validatePhone(values.phone)) { 
            dispatch(setEmergencyContact(values));
            onComplete && onComplete();
        }
    }

    const onPrevious = () => {
        const values = {
            name: watch('emergencyContactName'),
            phone: watch('emergencyContactPhone'),
            relation: watch('emergencyContactRelationship')
        }

        dispatch(setEmergencyContact(values));
        onBack && onBack();
    }

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <h2>{t('text-conference-details')}</h2>
                <p>{t('text-emergency-contact-info')}</p>
                <TextInput name="emergencyContactName" label={t('field-name')} control={control} setErrors={setError} clearErrors={clearErrors} required={true} />
                <TextInput name="emergencyContactPhone" label={t('field-phone-number')} control={control} setErrors={setError} clearErrors={clearErrors} validation={validatePhone} required={true} />
                <TextInput name="emergencyContactRelationship" label={t('field-relationship')} control={control} setErrors={setError} clearErrors={clearErrors} required={true} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default EmergencyContact;