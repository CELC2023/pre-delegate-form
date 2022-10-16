import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectArrivalTime, selectFlightNumber, selectTravelMethod, setTravelInformation } from "../../redux/delegateReducer";
import OptionRadio from "../input/OptionRadio";
import TextInput from "../input/TextInput";
import ProgressDots from "../ProgressDots";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const TravelInformation: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    interface TravelInformationForm {
        travelMethod: string,
        flightNumber: string,
        arrivalTime: string
    }

    const defaultValues: TravelInformationForm = {
        travelMethod: useSelector(selectTravelMethod),
        flightNumber: useSelector(selectFlightNumber),
        arrivalTime: useSelector(selectArrivalTime)
    }

    const options = [{
        name: 'drive',
        label: t('option-transport-drive')
    },{
        name: 'fly',
        label: t('option-transport-fly')
    }]

    const {control, watch, setError, clearErrors} = useForm({defaultValues: defaultValues})

    const onNext = () => {
        const values: TravelInformationForm = {
            travelMethod: watch('travelMethod'),
            flightNumber: watch('flightNumber'),
            arrivalTime: watch('arrivalTime')
        }

        if(values.travelMethod !== "" && values.arrivalTime !== "") {
            if((values.travelMethod === 'fly' && values.flightNumber !== "") || values.travelMethod === 'drive') {
                dispatch(setTravelInformation(values))
                onComplete && onComplete();
            }
        }
    }

    const onPrevious = () => {
        const values: TravelInformationForm = {
            travelMethod: watch('travelMethod'),
            flightNumber: watch('flightNumber'),
            arrivalTime: watch('arrivalTime')
        }

        dispatch(setTravelInformation(values))
        onBack && onBack();
    }

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <ProgressDots steps={5} current={2} />
                <h2>{t('text-school-info')}</h2>
                <OptionRadio name="travelMethod" label={t('field-transport')} control={control} options={options} value={watch('travelMethod')} />
                {
                    watch('travelMethod') === 'fly' &&
                    <TextInput name="flightNumber" label={t('field-flight-number')} control={control} />
                }
                <p>{t('text-local-time')}</p> 
                <TextInput name="arrivalTime" label={t('field-arrival-time')} control={control} type={'time'} setErrors={setError} clearErrors={clearErrors} required={true} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default TravelInformation;