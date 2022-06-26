import React, { ComponentType, ReactElement, ReactNode, useEffect } from "react";
import { render } from "react-dom";
import { useForm } from "react-hook-form";
import FormPageProps from "../interfaces/FormPageProps";
import PersonalInformation from "./forms/PersonalInformation";
import { FormConfig } from "./Page";

export interface FormAdapterProps {
    form: FormConfig,
    nextForm: () => void,
    previousForm: () => void
}

const FormAdapter: React.FC<FormAdapterProps> = ({form: {Form, disableNext, disablePrevious}, nextForm, previousForm}) => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    useEffect(() => {
        console.log(errors)
    }, [errors])

    const handleNext = () => {
        if(errors !== {}) {
            nextForm()
        } else {
            console.log(errors)
        }
    }
    
    return (
        <div className="form-adapter">
            {
                !disablePrevious &&
                <div className="form-navigation-previous-container">
                    <a onClick={previousForm}>previous</a>
                </div>
            }
            <div className="form-error-container">

            </div>
            <Form onComplete={nextForm} register={register} watch={watch}/>
            {
                !disableNext &&
                <div className="form-navigation-next-container">
                    <a onClick={handleNext}>Next</a>
                </div>
            }
        </div>
    )
}

export default FormAdapter;