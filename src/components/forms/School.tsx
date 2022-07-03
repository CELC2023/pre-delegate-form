import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { components, OptionProps, Options } from "react-select";
import { FilterOptionOption } from "react-select/dist/declarations/src/filters";
import FormPageProps from "../../interfaces/FormPageProps";
import { SchoolData, SchoolOptionData } from "../../models/School";
import Autocomplete from "../input/Autocomplete";

const School: React.FC<FormPageProps> = () => {
    const {control, register, handleSubmit, watch, formState: {errors}} = useForm()

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
         <form className="form-fields">
            <Autocomplete name={"school"} label={'School Name'} control={control} optionComponent={OptionComponent} fetchUrl={`/schools/`} customFilter={customFilter} customOptionData={customOptionData} />
        </form>
        </>
    )
}

export default School