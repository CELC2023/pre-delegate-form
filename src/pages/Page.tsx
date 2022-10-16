import React, { useState } from "react";
import FormPageProps from "../interfaces/FormPageProps";
import FormAdapter from "../components/FormAdapter";
import Information from "../components/forms/Information";
import Language from "../components/forms/Language";
import PersonalInformation from "../components/forms/PersonalInformation";
import School from "../components/forms/School";
import './Page.scss';

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
import SocialActivity from "../components/forms/SocialActivity";
import { FoothillsFooter, FoothillsScene } from "../components/scenes/Foothills";
import { NorthernLightsFooter, NorthernLightsScene } from "../components/scenes/NorthernLights";
import { FarmlandFooter, FarmlandScene } from "../components/scenes/Farmland";
import { PeaceBridgeFooter, PeaceBridgeScene } from "../components/scenes/PeaceBridge";
import { BadlandsFooter, BadlandsScene } from "../components/scenes/Badlands";
import MosqueVisit from "../components/forms/MosqueVisit";

export interface FormConfig {
    Form: React.FC<FormPageProps>,
    disableNext?: boolean,
    disablePrevious?: boolean,
    validation?: object,
    displayNumber?: string,
    customParentClass?: string,
    Scene?: React.FC,
    Footer?: React.FC
}

const Page: React.FC = () => {

    const FormList: Array<FormConfig> = [{
        Form: Language,
        disableNext: true,
        disablePrevious: true,
        Scene: FoothillsScene,
    }, {
        Form: Information,
        Scene: FoothillsScene,
        Footer: FoothillsFooter
    }, {
        Form: GettingStarted,
        customParentClass: 'full-page-form-adapter',
        Scene: FoothillsScene
    }, {
        Form: PersonalInformation,
        Scene: FoothillsScene,
        Footer: FoothillsFooter
    }, {
        Form: School,
        Scene: NorthernLightsScene,
        Footer: NorthernLightsFooter
    }, {
        Form: DegreeInformation,
        Scene: NorthernLightsScene,
        Footer: NorthernLightsFooter
    }, {
        Form: StreamSelection,
        Scene: NorthernLightsScene,
        Footer: NorthernLightsFooter
    }, {
        Form: TravelInformation,
        Scene: NorthernLightsScene,
        Footer: NorthernLightsFooter
    }, {
        Form: EmergencyContact,
        Scene: NorthernLightsScene,
        Footer: NorthernLightsFooter
    }, {
        Form: DietaryRestrictions,
        Scene: NorthernLightsScene,
        Footer: NorthernLightsFooter
    }, {
        Form: Medical,
        Scene: NorthernLightsScene,
        Footer: NorthernLightsFooter
    }, {
        Form: Accessibility,
        Scene: NorthernLightsScene,
        Footer: NorthernLightsFooter
    }, {
        Form: RoomInfo,
        Scene: FarmlandScene,
        Footer: FarmlandFooter
    }, {
        Form: SingleRoom,
        Scene: FarmlandScene,
        Footer: FarmlandFooter
    }, {
        Form: DelegateGender,
        Scene: FarmlandScene,
        Footer: FarmlandFooter
    }, {
        Form: RoomGender,
        Scene: FarmlandScene,
        Footer: FarmlandFooter
    }, {
        Form: RoomEnvironment,
        Scene: FarmlandScene,
        Footer: FarmlandFooter
    }, {
        Form: RoomAlcoholDrugs,
        Scene: FarmlandScene,
        Footer: FarmlandFooter
    }, {
        Form: RoomRequests,
        Scene: FarmlandScene,
        Footer: FarmlandFooter
    }, {
        Form: ActivityLanguage,
        Scene: PeaceBridgeScene,
        Footer: PeaceBridgeFooter
    }, {
        Form: MosqueVisit,
        Scene: PeaceBridgeScene,
        Footer: PeaceBridgeFooter
    }, {
        Form: SocialActivity,
        Scene: PeaceBridgeScene,
        Footer: PeaceBridgeFooter
    }, {
        Form: FileUploads,
        Scene: BadlandsScene,
        Footer: BadlandsFooter
    }, {
        Form: Review,
        Scene: BadlandsScene,
        Footer: BadlandsFooter,
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

    const BGScene = FormList[currentFormIndex]?.Scene
    const FooterScene = FormList[currentFormIndex]?.Footer 

    return (
        <div className="page-container delegate-container">
            {
                BGScene ?
                <BGScene /> :
                <img className="blue-background" src={BlueBackground} alt="" />
            }
            <FormAdapter form={FormList[currentFormIndex]} nextForm={next} previousForm={prev} />
            {   FormList[currentFormIndex].displayNumber !== undefined &&
                <p className="form-background-number">{FormList[currentFormIndex].displayNumber}</p>
            }
            {
                FooterScene &&
                <FooterScene />
            }
        </div>
    )
}

export default Page;