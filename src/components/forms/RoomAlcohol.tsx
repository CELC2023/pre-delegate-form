import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectRoomAlcohol, setRoomAlcohol } from "../../redux/delegateReducer";
import OptionRadio from "../input/OptionRadio";
import ProgressDots from "../ProgressDots";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const RoomAlcoholDrugs: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    interface RoomAlcohol {
        alcohol: string
    }

    const defaultValues: RoomAlcohol = {
        alcohol: useSelector(selectRoomAlcohol)
    }
    const {control, watch} = useForm({defaultValues: defaultValues});

    const onNext = () => {
        const values = {
            alcohol: watch('alcohol')
        }
        if(values.alcohol !== '') {
            dispatch(setRoomAlcohol(values))
            onComplete && onComplete();
        }
    }

    const onPrevious = () => {
        const values = {
            alcohol: watch('alcohol')
        }
        dispatch(setRoomAlcohol(values))
        onBack && onBack();
    }

    const options = [{
        name: 'yes',
        label: t('option-yes')
    }, {
        name: 'somewhat',
        label: t('option-somewhat')
    }, {
        name: 'no',
        label: t('option-alcohol-no')
    }]

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <ProgressDots steps={5} current={3} />
                <h2>{t('text-rooming-questionnaire')}</h2>
                <OptionRadio name="alcohol" label={t('field-alcohol')} options={options} control={control} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default RoomAlcoholDrugs;