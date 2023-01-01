import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectId, selectRoomMates } from "../../redux/checkInReducer";
import ProgressDots from "../ProgressDots";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const RoomMates: React.FC<FormPageProps> = ({onComplete, onBack}) => {
    const {t} = useTranslation();

    const roomMates = useSelector(selectRoomMates);

    const onNext = () => {
        onComplete && onComplete();
    }

    const onPrevious = () => {
        onBack && onBack();
    }

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <ProgressDots steps={6} current={3} />
                <p>{t('text-roomates')}</p>
                {
                    roomMates.split(',').map((e, i) => <p key={i}>{e}</p>)
                }
                <p><Trans i18nKey={'info-room-concerns'}><a href="mailto:hospitality@celc.cfes.ca">hospitality@celc.cfes.ca</a></Trans></p>
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default RoomMates;