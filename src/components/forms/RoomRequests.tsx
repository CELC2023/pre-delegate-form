import React from "react";
import { useTranslation } from "react-i18next";
import FormPageProps from "../../interfaces/FormPageProps";
import Textarea from "../input/Textarea";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const RoomRequests: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {t} = useTranslation();

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
                <h2>{t('text-rooming-questionnaire')}</h2>
                <p>{t('text-room-requests')}</p>
                <Textarea name="room-requests" label={t('info-enter-text')} />
                <p>{t('text-room-block')}</p>
                <Textarea name="room-block" label={t('info-enter-text')} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default RoomRequests;