import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectRoomNoise, setRoomNoise } from "../../redux/delegateReducer";
import OptionRadio from "../input/OptionRadio";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const RoomEnvironment: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const defaultRoomEnvironment = useSelector(selectRoomNoise) || '';
    const [roomEnvironment, setRoomEnvironment] = useState<string>(defaultRoomEnvironment);

    const onNext = () => {
        if(roomEnvironment !== '') {
            dispatch(setRoomNoise(roomEnvironment))
            onComplete && onComplete();
        }
    }

    const onPrevious = () => {
        dispatch(setRoomNoise(roomEnvironment))
        onBack && onBack();
    }

    const options = [{
        name: 'quiet',
        label: t('option-noise-quiet')
    }, {
        name: 'medium',
        label: t('option-noise-medium')
    }, {
        name: 'loud',
        label: t('option-noise-loud')
    }]

    const onChangeEnvironment = (name: string) => {
        setRoomEnvironment(name)
    }

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <h2>{t('text-rooming-questionnaire')}</h2>
                <OptionRadio name="roomNoise" label={t('field-noise-level')} options={options} onChange={onChangeEnvironment} value={roomEnvironment} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default RoomEnvironment;