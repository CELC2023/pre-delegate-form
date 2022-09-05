import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectEmail, selectFirstName, selectLastName, setPersonalInformation } from "../../redux/preDelegateReducer";
import { emailRegex } from "../../utils/regex";
import TextInput from "../input/TextInput";
import ProgressDots from "../ProgressDots";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const PersonalInformation: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const defaultValues = {email: useSelector(selectEmail), firstName: useSelector(selectFirstName), lastName: useSelector(selectLastName)}

    const {control, handleSubmit, getValues, setError, clearErrors, formState: { errors }} = useForm({defaultValues: defaultValues});

    const {t} = useTranslation();

    const dispatch = useDispatch();

    const isValid = (values: PersonalInformationForm): boolean => {
        var hasErrors: boolean = false;
        if(Object.keys(errors).length !== 0) {
            hasErrors = true;
        }
        if(!validateName(getValues("firstName"))) {
            setError("firstName", {type: 'custom', message: 'Enter a valid value'})
            hasErrors = true;
        }
        if(!validateName(getValues("lastName"))) {
            setError("lastName", {type: 'custom', message: 'Enter a valid value'})
            hasErrors = true;
        }
        if(!validateEmail(getValues("email"))) {
            setError("email", {type: 'custom', message: 'Enter a valid value'})
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

    const onPrevious = () : void => {
        const values: PersonalInformationForm = {
            email: getValues('email') || "",
            firstName: getValues('firstName') || "",
            lastName: getValues('lastName') || ""
        }
        dispatch(setPersonalInformation(values));
        onBack && onBack();
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
            <FormPreviousButton onClick={onPrevious} /> 
            <div className="form-content">
                <ProgressDots steps={3} current={1} />
                <form className="form-fields" onSubmit={() =>handleSubmit}>
                <h2>{t('text-personal')}</h2>
                <TextInput name="email" label={t('field-email')} control={control} validation={validateEmail} setErrors={setError} clearErrors={clearErrors} type="email" autocomplete="email" />
                <TextInput name="firstName" label={t('field-first-name')} control={control} validation={validateName} setErrors={setError} clearErrors={clearErrors} autocomplete="given-name" />
                <TextInput name="lastName" label={t('field-last-name')} control={control} validation={validateName} setErrors={setError} clearErrors={clearErrors} autocomplete="family-name" />
                </form>
            </div>
            <FormNextButton onClick={onNext} />
        </>
       
        
    )
}

export default PersonalInformation;