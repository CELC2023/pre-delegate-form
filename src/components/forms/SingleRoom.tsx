import React from "react";
import { useTranslation } from "react-i18next";
import FormPageProps from "../../interfaces/FormPageProps";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const SingleRoom: React.FC<FormPageProps> = ({onBack, onComplete}) => {
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
                <p>{t('text-single-room')}</p> 
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default SingleRoom;