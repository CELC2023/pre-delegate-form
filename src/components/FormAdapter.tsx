import React, { ComponentType, ReactElement, ReactNode, useEffect } from "react";
import { render } from "react-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import FormPageProps from "../interfaces/FormPageProps";
import PersonalInformation from "./forms/PersonalInformation";
import { FormConfig } from "../pages/Page";
import Mountains from "../images/mountains-light.svg";
import "./FormAdapter.scss";

export interface FormAdapterProps {
    form: FormConfig,
    nextForm: () => void,
    previousForm: () => void
}

const FormAdapter: React.FC<FormAdapterProps> = ({form: {Form, disableNext, disablePrevious}, nextForm, previousForm}) => {

    const handleNext = () => {
        nextForm()
    }
    
    return (
        <div className="form-adapter">
            <img className="mountains-background" src={Mountains} />
            {/* {
                !disablePrevious &&
                <div className="form-navigation-previous-container">
                    <a className="previous-button" onClick={previousForm}>previous</a>
                </div>
            } */}
            {/* <div className="form-content"> */}
                <Form onComplete={nextForm} onBack={previousForm} />
            {/* </div> */}
            {/* {
                !disableNext &&
                <div className="form-navigation-next-container">
                    <a className="next-button" onClick={handleNext}>Next</a>
                </div>
            } */}
        </div>
    )
}

export default FormAdapter;