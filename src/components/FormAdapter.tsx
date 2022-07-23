import React from "react";
import { FormConfig } from "../pages/Page";
import Mountains from "../images/mountains-light.svg";
import "./FormAdapter.scss";

export interface FormAdapterProps {
    form: FormConfig,
    nextForm: () => void,
    previousForm: () => void
}

const FormAdapter: React.FC<FormAdapterProps> = ({form: {Form, disableNext, disablePrevious}, nextForm, previousForm}) => {

    return (
        <div className="form-adapter">
            <img className="mountains-background" src={Mountains} />
            <Form onComplete={nextForm} onBack={previousForm} />
        </div>
    )
}

export default FormAdapter;