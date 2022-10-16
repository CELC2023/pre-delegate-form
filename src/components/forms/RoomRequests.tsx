import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectRoomBlocks, selectRoomRequests, setRoomRequests } from "../../redux/delegateReducer";
import Textarea from "../input/Textarea";
import ProgressDots from "../ProgressDots";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const RoomRequests: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    
    interface RoomRequestsForm {
        roomRequests: string,
        roomBlock: string
    }

    const defaultValues: RoomRequestsForm = {
        roomRequests: useSelector(selectRoomRequests) || '',
        roomBlock: useSelector(selectRoomBlocks) || ''
    }

    const {control, watch} = useForm({defaultValues: defaultValues})

    const onNext = () => {
        const values = {
            requests: watch('roomRequests'),
            block: watch('roomBlock') 
        }
        dispatch(setRoomRequests(values))
        onComplete && onComplete();
    }

    const onPrevious = () => {
        const values = {
            requests: watch('roomRequests'),
            block: watch('roomBlock') 
        }
        dispatch(setRoomRequests(values))
        onBack && onBack();
    }

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <ProgressDots steps={5} current={3} />
                <h2>{t('text-rooming-questionnaire')}</h2>
                <p>{t('text-room-requests')}</p>
                <Textarea name="roomRequests" label={t('info-enter-text')} control={control} />
                <p>{t('text-room-block')}</p>
                <Textarea name="roomBlock" label={t('info-enter-text')} control={control} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default RoomRequests;