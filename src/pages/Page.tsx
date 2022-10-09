import React, { useState } from "react";
import FormPageProps from "../interfaces/FormPageProps";
import FormAdapter from "../components/FormAdapter";
import Information from "../components/forms/Information";
import Language from "../components/forms/Language";
import PersonalInformation from "../components/forms/PersonalInformation";
import School from "../components/forms/School";
import './Page.scss';

import Footer from "../components/Footer";
import BlueBackground from "../images/back-blue.svg";
import GettingStarted from "../components/forms/GettingStarted";
import StreamSelection from "../components/forms/StreamSelection";
import DegreeInformation from "../components/forms/DegreeInformation";
import TravelInformation from "../components/forms/TravelInformation";
import EmergencyContact from "../components/forms/EmergencyContact";
import DietaryRestrictions from "../components/forms/DietaryRestrictions";
import Medical from "../components/forms/Medical";
import Accessibility from "../components/forms/Accessibility";
import RoomInfo from "../components/forms/RoomInfo";
import SingleRoom from "../components/forms/SingleRoom";
import DelegateGender from "../components/forms/DelegateGender";
import RoomGender from "../components/forms/RoomGender";
import RoomEnvironment from "../components/forms/RoomEnvironment";
import RoomAlcoholDrugs from "../components/forms/RoomAlcohol";
import RoomRequests from "../components/forms/RoomRequests";
import ActivityLanguage from "../components/forms/ActivityLanguage";
import FileUploads from "../components/forms/FileUploads";
import Review from "../components/forms/Review";

export interface FormConfig {
    Form: React.FC<FormPageProps>,
    disableNext?: boolean,
    disablePrevious?: boolean,
    validation?: object,
    displayNumber?: string,
    customParentClass?: string,
}

const Page: React.FC = () => {

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
        Form: DegreeInformation
    }, {
        Form: StreamSelection
    }, {
        Form: TravelInformation
    }, {
        Form: EmergencyContact
    }, {
        Form: DietaryRestrictions
    }, {
        Form: Medical
    }, {
        Form: Accessibility
    }, {
        Form: RoomInfo
    }, {
        Form: SingleRoom
    }, {
        Form: DelegateGender
    }, {
        Form: RoomGender
    }, {
        Form: RoomEnvironment 
    }, {
        Form: RoomAlcoholDrugs
    }, {
        Form: RoomRequests
    }, {
        Form: ActivityLanguage
    }, {
        Form: FileUploads,
    }, {
        Form: Review,
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