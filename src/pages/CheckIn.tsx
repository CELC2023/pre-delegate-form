import React, { useEffect, useState } from "react";
import {collection, addDoc, Timestamp, query, orderBy, onSnapshot, DocumentData} from 'firebase/firestore'
import { db } from "../firebase/firebase";
import './Page.scss';
import { FoothillsFooter, FoothillsScene } from "../components/scenes/Foothills";
import { FormConfig } from "./Page";
import Language from "../components/forms/Language";
import FormAdapter from "../components/FormAdapter";
import FindDelegate from "../components/forms/FindDelegate";
import VerifyInformation from "../components/forms/VerifyInformation";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { onValue, ref } from "firebase/database";
import { changeLanguage } from "i18next";
import { checkInDataModel } from "../models/checkInData";
import { useDispatch } from "react-redux";
import { setCheckInData } from "../redux/checkInReducer";

const CheckIn: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();

    const FormList: Array<FormConfig> = [{
        Form: VerifyInformation,
        Scene: FoothillsScene
    },{
        Form: FindDelegate,
        disableNext: true,
        disablePrevious: true,
        Scene: FoothillsScene
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


    useEffect(() => {
        const uuid = searchParams.get("uuid") 
        if(uuid === "" || uuid === null) {
            window.location.replace("https://celc.cfes.ca");
        }
        const query = ref(db, "delegates/"+uuid)
        return onValue(query, (snapshot) => {
            const data = snapshot.val();
            if (snapshot.exists()) {
                const checkInData = data as checkInDataModel;
                if(checkInData.language === "English") {
                    changeLanguage("en");
                } else if(checkInData.language === "French") {
                    changeLanguage("fr")
                }
                dispatch(setCheckInData(data));
            } else {
                window.location.replace("https://celc.cfes.ca"); 
            }
        })
    }, [searchParams])


    return (
        <div className="page-container checkin-container">
            <FoothillsScene />
            <FormAdapter form={FormList[currentFormIndex]} nextForm={next} previousForm={prev} />
            {/* <button onClick={() => {
                const q = query(collection(db, 'delegates'))
                console.log(q);
                onSnapshot(q, (querySnapshot) => {
                    setDelegates(querySnapshot.docs);
                })
            }}>Test</button>
            <div>
                {JSON.stringify(delegates)}
            </div> */}
            <FoothillsFooter />
        </div>
    )
}

export default CheckIn;