import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { components, ControlProps, OptionProps } from "react-select";
import { FilterOptionOption } from "react-select/dist/declarations/src/filters";
import FormPageProps from "../../interfaces/FormPageProps";
import { SchoolData, SchoolOptionData } from "../../models/School";
import { selectSchool, setSchool } from "../../redux/preDelegateReducer";
import Autocomplete from "../input/Autocomplete";
import ProgressDots from "../ProgressDots";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";
import Schools from "../../data/schools.json";

const School: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {control, watch, getValues, setValue} = useForm()

    const {t} = useTranslation();

    const OptionComponent = (props: OptionProps) => {

        const optionData: any = props.data

        return (
            <>
                <components.Option {...props}>
                    <div style={{display: "flex"}}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <span>{optionData.name}</span>
                            {
                                optionData.division && 
                                <span>{optionData.division}</span>
                            }
                        </div>
                        {
                            optionData.image &&
                            <img alt="" style={{width: '1.5em', height: 'fit-content', marginLeft: 'auto', alignSelf: 'center'}} src={'https://res.cloudinary.com/celc/image/upload/v1663016071/pre-delegate-form/school-logos/'+optionData.image}></img>
                        }
                    </div>
                </components.Option>
            </>
        )
    }

    const ControlComponent = (props: ControlProps) => {
        // @ts-ignore
        const value : SchoolOptionData = props.getValue()[0]
        const image = value?.image || ''
        return (
            <div style={{display: 'flex'}}>
                {image &&
                <img alt="" src={"https://res.cloudinary.com/celc/image/upload/v1663016071/pre-delegate-form/school-logos/"+image} style={{width: 'fit-content', height: '1.5em', marginLeft: 'auto', alignSelf: 'center'}} />}
                {props.children}
            </div>
        )
    }

    console.log(watch('school'))

    const dispatch = useDispatch()

    const onNext = () => {
        const schoolValue = getValues("school") || null
        if(schoolValue !== null) {
            dispatch(setSchool(schoolValue))
            onComplete()
        }
    }

    const onPrevious = () => {
        const schoolValue = getValues("school") || null
        if(schoolValue !== null) {
            dispatch(setSchool(schoolValue)) 
        } 
        onBack && onBack();
    }

    const defaultSchoolValue = useSelector(selectSchool)

    useEffect(() => {
        setValue('school', defaultSchoolValue)
    }, [defaultSchoolValue, setValue])

    const customFilter = (option: FilterOptionOption<any>, inputValue: string) => {
        const optionData: SchoolOptionData = option.data
        const cleanedFilterValue = inputValue.trim().toLowerCase()

        if(optionData.name.trim().toLowerCase().includes(cleanedFilterValue)) {
            return true
        }

        if(optionData.division.trim().toLowerCase().includes(cleanedFilterValue)) {
            return true
        }

        if(optionData.city.trim().toLowerCase().includes(cleanedFilterValue)) {
            return true
        }

        if(optionData.province.trim().toLowerCase().includes(cleanedFilterValue)) {
            return true
        }

        return false
    }

    const customOptionData = (s: SchoolData): SchoolOptionData => {
        return {value: s.uuid, label: s.division ? s.name + ' ' + s.division : s.name, ...s}
    }

    const schoolOptions = useMemo(() => Schools.map(e => customOptionData(e)), [])

    return (
        <>
            <FormPreviousButton onClick={onPrevious} /> 
            <div className="form-content">
            <ProgressDots steps={3} current={2} />
                <form className="form-fields">
                    <h2>{t('field-school')}</h2>
                    <Autocomplete name={"school"} label={t('field-school')} control={control} optionComponent={OptionComponent} controlComponent={ControlComponent} options={schoolOptions} customFilter={customFilter} customOptionData={customOptionData} />
                </form>
            </div>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default School