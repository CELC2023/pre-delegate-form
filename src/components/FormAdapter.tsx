import React from "react";
import { FormConfig } from "../pages/Page";
import FormBackground from "../images/form-background.svg";
import "./FormAdapter.scss";

export interface FormAdapterProps {
    form: FormConfig,
    nextForm: () => void,
    previousForm: () => void
}

const FormAdapter: React.FC<FormAdapterProps> = ({form: {Form, disableNext, disablePrevious}, nextForm, previousForm}) => {

    return (
        <div className="form-adapter">
            <img className="form-background " src={FormBackground} alt="" />
            <Form onComplete={nextForm} onBack={previousForm} />
        </div>
    )
}

export default FormAdapter;