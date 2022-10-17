import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { Major } from "../../models/major";
import { selectDegreeMajor, selectDegreeMinor, selectDegreeYear, setDegreeInformation } from "../../redux/delegateReducer";
import Autocomplete from "../input/Autocomplete";
import Slider from "../input/Slider";
import TextInput from "../input/TextInput";
import ProgressDots from "../ProgressDots";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const DegreeInformation: React.FC<FormPageProps> = ({onComplete, onBack}) => {

    interface DegreeInformationForm {
        major: Major,
        minor: string,
        yearOfStudy: string,
    }

    const {t} = useTranslation();

    const majors = [{
        name: 'biomed',
        label: t('option-major-biomed')
    },{
        value: 'chem',
        label: t('option-major-chem') 
    },{
        value: 'civil',
        label: t('option-major-civil')
    },{
        value: 'elec',
        label: t('option-major-elec') 
    },{
        value: 'geo',
        label: t('option-major-geo') 
    },{
        value: 'mech',
        label: t('option-major-mech')
    },{
        value: 'soft',
        label: t('option-major-soft') 
    },{
        value: 'comp',
        label: t('option-major-comp')
    },{
        value: 'other',
        label: t('option-other') 
    }]

    const defaultValues: DegreeInformationForm = {
        major: useSelector(selectDegreeMajor),
        minor: useSelector(selectDegreeMinor),
        yearOfStudy: useSelector(selectDegreeYear).toString()
    }

    const dispatch = useDispatch();
 
    const {control, watch} = useForm({defaultValues: defaultValues});

    const onNext = () => {
        const values = {
            major: watch('major'),
            minor: watch('minor'),
            yearOfStudy: parseInt(watch('yearOfStudy'))
        }

        if(values.major !== null && values.yearOfStudy > 0 ) {
            dispatch(setDegreeInformation(values))
            onComplete && onComplete();
        }
    }

    const onPrevious = () => {
        const values = {
            major: watch('major'),
            minor: watch('minor'),
            yearOfStudy: parseInt(watch('yearOfStudy'))
        }

        dispatch(setDegreeInformation(values)) 
        onBack && onBack();
    }

    const marks = {1: "1", 2: "2", 3: "3", 4:"4", 5:"5", 6: "6+" }

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <ProgressDots steps={5} current={2} />
                <h2>{t('text-school-info')}</h2>
                <Autocomplete name="major" label={t('field-major')} control={control} options={majors} required={true} />
                <TextInput name="minor" label={t('field-minor')} control={control} />
                <Slider name="yearOfStudy" label={t('field-study-year')} control={control}  count={6} min={1} step={1} max={6} marks={marks} dots={true} required={true} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default DegreeInformation;