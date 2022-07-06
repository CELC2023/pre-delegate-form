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
        if(!(values.firstName.length > 0 && values.firstName.length < 128)) {
            setError("firstName", {type: 'custom', message: 'Enter a valid first name less than 128 characters'})
            hasErrors = true;
        } else {
            clearErrors('firstName')
        }
        if(!(values.lastName.length > 0 && values.lastName.length < 128)) {
            setError("lastName", {type: 'custom', message: 'Enter a valid last name less than 128 characters'})
            hasErrors = true;
        } else {
            clearErrors('lastName')
        }
        if(! emailRegex.test(values.email)) {
            hasErrors = true;
            setError("email", {type: 'custom', message: 'Enter a valid email'})
        } else {
            clearErrors('email')
        }
        return !hasErrors;
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
                <TextInput name="email" label="Email" control={control}/>
                <TextInput name="firstName" label="First Name" control={control} />
                <TextInput name="lastName" label="Last Name" control={control} />
                </form>
            </div>
            <div className="form-navigation-next-container">
                    <a className="next-button" onClick={onNext}>Next</a>
            </div>
        </>
       
        
    )
}

export default PersonalInformation;