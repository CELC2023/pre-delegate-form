import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { Major } from "../../models/major";
import { selectDegreeMajor, selectDegreeMinor, selectDegreeYear, setDegreeInformation } from "../../redux/delegateReducer";
import Autocomplete from "../input/Autocomplete";
import OptionRadio from "../input/OptionRadio";
import TextInput from "../input/TextInput";
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

    const degreeYears = [{
        name: '1',
        label: t('option-first-year')
    }, {
        name: '2',
        label: t('option-second-year') 
    }, {
        name: '3',
        label: t('option-third-year') 
    }, {
        name: '4',
        label: t('option-fourth-year') 
    }, {
        name: '5',
        label: t('option-fifth-year') 
    }, {
        name: '6',
        label: t('option-sixth-year') 
    }]

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <h2>{t('text-school-info')}</h2>
                <OptionRadio name="yearOfStudy" label={t('field-study-year')} options={degreeYears} control={control} value={watch('yearOfStudy')} />
                <Autocomplete name="major" label={t('field-major')} control={control} options={majors} />
                <TextInput name="minor" label={t('field-minor')} control={control} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default DegreeInformation;