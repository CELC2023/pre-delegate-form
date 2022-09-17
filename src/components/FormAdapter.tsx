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
            <img className="form-background " src={FormBackground} alt="" />
            <Form onComplete={nextForm} onBack={previousForm} />
        </div>
    )
}

export default FormAdapter;