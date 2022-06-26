import React, { ComponentType, ReactElement, useEffect, useState } from "react";
import FormPageProps from "../interfaces/FormPageProps";
import FormAdapter, { FormAdapterProps } from "./FormAdapter";
import DelegateCount from "./forms/DelegateCount";
import Information from "./forms/Information";
import Language from "./forms/Language";
import PersonalInformation from "./forms/PersonalInformation";
import School from "./forms/School";
import './Page.scss';

export interface FormConfig {
    Form: React.FC<FormPageProps>,
    disableNext?: boolean,
    disablePrevious?: boolean,
}

const Page: React.FC = () => {
    const FormList: Array<FormConfig> = [{
        Form: Language,
        disableNext: true,
        disablePrevious: true
    }, {
        Form: Information
    }, {
        Form: PersonalInformation
    }, {
        Form: School
    }, {
        Form: DelegateCount
    }]

    const [currentFormIndex, setCurrentFormIndex] = useState<number>(0)

    const next = () => {
        if(currentFormIndex < FormList.length - 1) {
            setCurrentFormIndex(currentFormIndex + 1)
        }
    }

    const prev = () => {
        if(currentFormIndex > 0) {
            setCurrentFormIndex(currentFormIndex - 1)
        }
    }

    return (
        <div className="page-container">
            <h1 className="">Page</h1>
            <FormAdapter form={FormList[currentFormIndex]} nextForm={next} previousForm={prev} />
        </div>
    )
}

export default Page;