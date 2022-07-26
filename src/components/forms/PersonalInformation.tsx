import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectEmail, selectFirstName, selectLastName, setPersonalInformation } from "../../redux/preDelegateReducer";
import { blankHref } from "../../utils/constants";
import { emailRegex } from "../../utils/regex";
import Autocomplete from "../input/Autocomplete";
import TextInput from "../input/TextInput";

const PersonalInformation: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {control, handleSubmit, getValues, setValue, setError, clearErrors ,formState: { errors, touchedFields }} = useForm();

    const {t} = useTranslation();

    const dispatch = useDispatch();

    const defaultValues = {email: useSelector(selectEmail), firstName: useSelector(selectFirstName), lastName: useSelector(selectLastName)}

    useEffect(() => {
        console.log()
    }, [])

    const isValid = (values: PersonalInformationForm): boolean => {
        
        var hasErrors: boolean = false;
        if(Object.keys(errors).length !== 0) {
            hasErrors = true;
        }
        if(Object.keys(touchedFields).length < 3) {
            Object.keys(getValues()).forEach((f) => {
                if(!touchedFields[f]) {
                    setError(f, {type: 'custom', message: 'Enter a valid value'})
                }
            })
            hasErrors = true;
        }
        return !hasErrors;
    }

    const validateName = (value: string): boolean => {
        if(value && value.length > 0 && value.length < 128) {
            return true;
        }
        return false
    }

    const validateEmail = (value: string): boolean => {
        if(emailRegex.test(value)) {
            return true 
        }
        return false
    }

    interface PersonalInformationForm {
        email: string,
        firstName: string,
        lastName: string
    }

    const onNext = () => {
        const values: PersonalInformationForm = {
            email: getValues('email') || "",
            firstName: getValues('firstName') || "",
            lastName: getValues('lastName') || ""
        }

        if(isValid(values)) {
            dispatch(setPersonalInformation(values))
            onComplete();
        }
    }

    return (
        <>
            <div className="form-navigation-previous-container">
                    <a className="previous-button" onClick={onBack}>{t('text-previous')}</a>
            </div>
            <div className="form-content">
                <form className="form-fields" onSubmit={() =>handleSubmit}>
                <h2>{t('text-personal')}</h2>
                <TextInput name="email" label={t('field-email')} control={control} validation={validateEmail} setErrors={setError} clearErrors={clearErrors} type="email" autocomplete="email" />
                <TextInput name="firstName" label={t('field-first-name')} control={control} validation={validateName} setErrors={setError} clearErrors={clearErrors} autocomplete="given-name" />
                <TextInput name="lastName" label={t('field-last-name')} control={control} validation={validateName} setErrors={setError} clearErrors={clearErrors} autocomplete="family-name" />
                </form>
            </div>
            <div className="form-navigation-next-container">
                    <a className="next-button" onClick={onNext}>{t('text-next')}</a>
            </div>
        </>
       
        
    )
}

export default PersonalInformation;