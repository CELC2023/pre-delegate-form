import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectFirstName, selectId, selectLastName } from "../../redux/checkInReducer";
import ProgressDots from "../ProgressDots";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";

const Code: React.FC<FormPageProps> = () => {
    const {t} = useTranslation();

    const id = useSelector(selectId);
    const first = useSelector(selectFirstName);
    const last = useSelector(selectLastName);

    const onNext = () => {
        window.location.replace("https://celc.cfes.ca");
    }

    return (
        <>
            <FormContent>
                <ProgressDots steps={5} current={5} />
                <h2>{first} {last}</h2>
                {id !== "" && 
                <img src={`https://celcassets.cfes.ca/checkin/${id}.png`} alt={'qr code'} />
                }
                <p>{t("text-arrival-instructions")}</p>
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default Code;