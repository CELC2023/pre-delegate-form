import React, { ComponentType, ReactElement, useEffect, useState } from "react";
import FormPageProps from "../interfaces/FormPageProps";
import FormAdapter, { FormAdapterProps } from "../components/FormAdapter";
import DelegateCount from "../components/forms/DelegateCount";
import Information from "../components/forms/Information";
import Language from "../components/forms/Language";
import PersonalInformation from "../components/forms/PersonalInformation";
import School from "../components/forms/School";
import './Page.scss';

import Tent from "../images/tent.svg";
import Ground from "../images/ground.svg";
import Trees from "../images/trees.svg";
import Logo from "../images/logo-light.svg";
import Feedback from "../components/forms/Feedback";

export interface FormConfig {
    Form: React.FC<FormPageProps>,
    disableNext?: boolean,
    disablePrevious?: boolean,
    validation?: object
}

const Page: React.FC = () => {
    const FormList: Array<FormConfig> = [{
        Form: Language,
        disableNext: true,
        disablePrevious: true
    }, {
        Form: Information,

    }, {
        Form: PersonalInformation
    }, {
        Form: School
    }, {
        Form: DelegateCount
    }, {
        Form: Feedback
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
        <div className="page-container pre-delegate-container">
            <FormAdapter form={FormList[currentFormIndex]} nextForm={next} previousForm={prev} />
            <div className="footer-container">
                <img className="tent" src={Tent} />
                <img className="trees" src={Trees}/>
                <img className="ground" src={Ground} />
                <img className="logo" src={Logo} />
            </div>
        </div>
    )
}

export default Page;