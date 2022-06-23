import React, { ReactNode, useEffect, useState } from "react";
import FormPageProps from "../interfaces/FormPageProps";
import FormAdapter, { FormAdapterProps } from "./FormAdapter";
import Language from "./forms/Language";
import PersonalInformation from "./forms/PersonalInformation";
import './Page.scss';

const Page: React.FC = () => {
    const [currentFormIndex, setCurrentFormIndex] = useState<number>(0)

    const completed = () => {
        console.log('form complete!')
        if(currentFormIndex == 0) {
            setCurrentFormIndex(1)
        }
    }

    const Forms: Array<React.ReactNode> = [
        <Language onComplete={completed} />,
        <PersonalInformation onComplete={completed} />,
    ]

    return (
        <div className="page-container">
            <h1 className="">Page</h1>
            <FormAdapter Form={Forms[currentFormIndex]} />
        </div>
    )
}

export default Page;