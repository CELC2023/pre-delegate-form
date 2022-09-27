import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { getGenders } from "../../data/genders";
import FormPageProps from "../../interfaces/FormPageProps";
import MultiSelect from "../input/MultiSelect";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const RoomGender: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {t} = useTranslation();

    const [roomGenderPref, setRoomGenderPref] = useState<Array<string>>([]);

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
                <MultiSelect name="rooming-gender-preference" label={t('field-room-gender')} options={getGenders(t)} value={roomGenderPref} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default RoomGender;