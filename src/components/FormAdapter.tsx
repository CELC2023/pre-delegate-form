import React from "react";
import { FormConfig } from "../pages/Page";
import FormBackground from "../images/form-background.svg";
import "./FormAdapter.scss";

export interface FormAdapterProps {
    form: FormConfig,
    nextForm: () => void,
    previousForm: () => void
}

const FormAdapter: React.FC<FormAdapterProps> = ({form: {Form, disableNext, disablePrevious, customParentClass}, nextForm, previousForm}) => {

    return (
        <div className={`form-adapter ${customParentClass ? customParentClass : ''}`} >
            <div className="form-background-container">
            <img className="form-background " src={FormBackground} alt="" />
            </div>
            <Form onComplete={nextForm} onBack={previousForm} />
        </div>
    )
}

export default FormAdapter;