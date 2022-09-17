import React, { useState } from "react";
import FormPageProps from "../interfaces/FormPageProps";
import FormAdapter from "../components/FormAdapter";
import DelegateCount from "../components/forms/DelegateCount";
import Information from "../components/forms/Information";
import Language from "../components/forms/Language";
import PersonalInformation from "../components/forms/PersonalInformation";
import School from "../components/forms/School";
import './Page.scss';

import Feedback from "../components/forms/Feedback";
import { useSelector } from "react-redux";
import { selectDelegateCount } from "../redux/preDelegateReducer";
import Footer from "../components/Footer";
import BlueBackground from "../images/back-blue.svg";
import GettingStarted from "../components/forms/GettingStarted";

export interface FormConfig {
    Form: React.FC<FormPageProps>,
    disableNext?: boolean,
    disablePrevious?: boolean,
    validation?: object,
    displayNumber?: string,
    customParentClass?: string,
}

const Page: React.FC = () => {
    const delegateCountValue = useSelector(selectDelegateCount);
    const formattedDelegateCountValue: string = delegateCountValue <= 10 ? delegateCountValue.toString() : '10+';

    const FormList: Array<FormConfig> = [{
        Form: Language,
        disableNext: true,
        disablePrevious: true
    }, {    
        Form: Information,

    }, {
        Form: GettingStarted,
        customParentClass: 'full-page-form-adapter'
    }, {
        Form: PersonalInformation
    }, {
        Form: School
    }, {
        Form: DelegateCount,
        displayNumber: formattedDelegateCountValue
    }, {
        Form: Feedback,
        displayNumber: formattedDelegateCountValue
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
            <img className="blue-background" src={BlueBackground} alt="" />
            <FormAdapter form={FormList[currentFormIndex]} nextForm={next} previousForm={prev} />
            {   FormList[currentFormIndex].displayNumber !== undefined &&
                <p className="form-background-number">{FormList[currentFormIndex].displayNumber}</p>
            }
            <Footer />
        </div>
    )
}

export default Page;