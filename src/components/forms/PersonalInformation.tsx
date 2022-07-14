import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormPageProps from "../../interfaces/FormPageProps";
import { blankHref } from "../../utils/constants";
import { emailRegex } from "../../utils/regex";
import Autocomplete from "../input/Autocomplete";
import TextInput from "../input/TextInput";

const PersonalInformation: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {control, register, handleSubmit, watch, getValues, setError, clearErrors ,formState: { errors, touchedFields }} = useForm();


    const isValid = (values: PersonalInformationForm): boolean => {
        
        var hasErrors: boolean = false;
        if(Object.keys(errors).length !== 0) {
            hasErrors = true;
        }
        if(touchedFields.length < 3) {
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
            // set redux state
            onComplete();
        }
    }

    return (
        <>
            <div className="form-navigation-previous-container">
                    <a className="previous-button" onClick={onBack}>previous</a>
            </div>
            <div className="form-content">
                <form className="form-fields" onSubmit={() =>handleSubmit}>
                <h2>Personal</h2>
                <TextInput name="email" label="Email" control={control} validation={validateEmail} setErrors={setError} clearErrors={clearErrors} />
                <TextInput name="firstName" label="First Name" control={control} validation={validateName} setErrors={setError} clearErrors={clearErrors} />
                <TextInput name="lastName" label="Last Name" control={control} validation={validateName} setErrors={setError} clearErrors={clearErrors} />
                </form>
            </div>
            <div className="form-navigation-next-container">
                    <a className="next-button" onClick={onNext}>Next</a>
            </div>
        </>
       
        
    )
}

export default PersonalInformation;