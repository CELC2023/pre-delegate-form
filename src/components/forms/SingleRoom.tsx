import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectSingleRoom, setSingleRoom } from "../../redux/delegateReducer";
import BooleanRadio from "../input/BooleanRadio";
import ProgressDots from "../ProgressDots";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const SingleRoom: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    interface SingleRoomForm {
        singleRoom: boolean;
    }

    const defaultValues: SingleRoomForm = {
        singleRoom: useSelector(selectSingleRoom)
    }

    const {control, watch} = useForm({defaultValues: defaultValues});

    const onNext = () => {
        const values = watch();
        dispatch(setSingleRoom(values));
        onComplete && onComplete();
    }

    const onPrevious = () => {
        const values = watch();
        dispatch(setSingleRoom(values));
        onBack && onBack();
    }

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <ProgressDots steps={5} current={3} />
                <h2>{t('text-rooming-questionnaire')}</h2>
                <p>{t('text-single-room')}</p>
                <BooleanRadio name="singleRoom" label="" control={control} /> 
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default SingleRoom;