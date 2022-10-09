import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getGenders } from "../../data/genders";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectOtherRoomingGenders, selectRoomingGenders, setRoomingGenders } from "../../redux/delegateReducer";
import MultiSelect from "../input/MultiSelect";
import TextInput from "../input/TextInput";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const RoomGender: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    
    interface RoomGenderForm {
        roomingGenders: Array<string>,
        otherRoomingGenders: string
    }

    const defaultValues: RoomGenderForm = {
        roomingGenders: useSelector(selectRoomingGenders),
        otherRoomingGenders: useSelector(selectOtherRoomingGenders)
    }

    const {control, watch} = useForm({defaultValues: defaultValues});

    const onNext = () => {
        const values: RoomGenderForm = watch();

        if(values.roomingGenders.length > 0) {
            dispatch(setRoomingGenders(values))
            onComplete && onComplete();
        }
    }

    const onPrevious = () => {
        const values: RoomGenderForm = watch();
        dispatch(setRoomingGenders(values));
        onBack && onBack();
    }

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <h2>{t('text-rooming-questionnaire')}</h2>
                <MultiSelect name="roomingGenders" label={t('field-room-gender')} options={getGenders(t)} control={control} />
                {
                    watch('roomingGenders').includes('other') &&
                    <TextInput name="otherRoomingGenders" label={t('field-other-genders')} control={control} />
                }
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default RoomGender;