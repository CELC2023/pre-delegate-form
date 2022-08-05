import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { components, OptionProps, Options } from "react-select";
import { FilterOptionOption } from "react-select/dist/declarations/src/filters";
import FormPageProps from "../../interfaces/FormPageProps";
import { SchoolData, SchoolOptionData } from "../../models/School";
import { selectSchool, setSchool } from "../../redux/preDelegateReducer";
import Autocomplete from "../input/Autocomplete";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const School: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {control, register, handleSubmit, watch, getValues, setValue, formState: {errors}} = useForm()

    const {t} = useTranslation();

    const OptionComponent = (props: OptionProps) => {

        const optionData: any = props.data

        return (
            <>
                <components.Option {...props}>
                    <span>{optionData.name}</span>
                    {
                        optionData.division && <><br/>
                        <span>{optionData.division}</span></>
                    }
                </components.Option>
            </>
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
    }, [])

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

    return (
        <>

            <FormPreviousButton onClick={onPrevious} /> 
            <div className="form-content">
                <form className="form-fields">
                    <Autocomplete name={"school"} label={t('field-school')} control={control} optionComponent={OptionComponent} fetchUrl={`/schools/`} customFilter={customFilter} customOptionData={customOptionData} />
                </form>
            </div>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default School