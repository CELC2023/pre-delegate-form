import React, { ReactNode } from "react";
import FormPageProps from "../interfaces/FormPageProps";
import PersonalInformation from "./forms/PersonalInformation";

export interface FormAdapterProps {
    Form: ReactNode
}

const FormAdapter: React.FC<FormAdapterProps> = ({Form}) => {
    return (
        <div className="form-adapter">
            {Form}
        </div>
    )
}

export default FormAdapter;