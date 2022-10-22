import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectArrivalDate, selectArrivalTime, selectFlightNumber, selectTravelMethod, setTravelInformation } from "../../redux/delegateReducer";
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
        arrivalTime: string,
        arrivalDate: string
    }

    const defaultValues: TravelInformationForm = {
        travelMethod: useSelector(selectTravelMethod),
        flightNumber: useSelector(selectFlightNumber),
        arrivalTime: useSelector(selectArrivalTime),
        arrivalDate: useSelector(selectArrivalDate),
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
            arrivalTime: watch('arrivalTime'),
            arrivalDate: watch('arrivalDate'),
        }

        if(values.travelMethod !== "" && values.arrivalTime !== "" && values.arrivalDate !== "") {
            dispatch(setTravelInformation(values))
            onComplete && onComplete();
        }
    }

    const onPrevious = () => {
        const values: TravelInformationForm = {
            travelMethod: watch('travelMethod'),
            flightNumber: watch('flightNumber'),
            arrivalTime: watch('arrivalTime'),
            arrivalDate: watch('arrivalDate'),
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
                <OptionRadio name="travelMethod" label={t('field-transport')} control={control} options={options} value={watch('travelMethod')} required={true} />
                {
                    watch('travelMethod') === 'fly' &&
                    <TextInput name="flightNumber" label={t('field-flight-number')} control={control} />
                }
                <p>{t('text-local-time')}</p>
                <TextInput name="arrivalDate" label={t('field-arrival-date')} control={control} type={'date'} setErrors={setError} clearErrors={clearErrors}  /> 
                <TextInput name="arrivalTime" label={t('field-arrival-time')} control={control} type={'time'} setErrors={setError} clearErrors={clearErrors} required={true} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default TravelInformation;