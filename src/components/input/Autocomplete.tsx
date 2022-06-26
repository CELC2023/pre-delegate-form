import React, { useEffect, useState } from "react";
import { Control, Controller } from "react-hook-form";
import ReactSelect, { components, GroupBase, OptionProps, OptionsOrGroups } from "react-select";
import { SelectComponents } from "react-select/dist/declarations/src/components";
import { FilterOptionOption } from "react-select/dist/declarations/src/filters";
import Select from "react-select/dist/declarations/src/Select";
import { SchoolData, SchoolOptionData } from "../../models/School";
import axiosInstance from "../../utils/axios";

export interface AutocompleteProps {
    name: string,
    label: string | null,
    control: Control,
    optionComponent?: (props: OptionProps) => JSX.Element,
    customFilter?: ((option: FilterOptionOption<any>, inputValue: string) => boolean),
    fetchUrl?: string,
    options?: OptionsOrGroups<any, any>,
    customOptionData?: (props: any) => object
}

const Autocomplete: React.FC<AutocompleteProps> = ({control, fetchUrl, label, name, optionComponent, customFilter, options, customOptionData}) => {
    const displayLabel = label || ""

    const [optionsData, setOptionsData] = useState<OptionsOrGroups<any, any>>()

    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        if(options) {
            setOptionsData(options)
        } 
    }, [options])

    useEffect(() => {
        console.log(optionsData)
    }, [optionsData])

    // fetch dynamic options from api and format
    useEffect(() => {
        // if fetch url provided get options
        if(fetchUrl) {
            setLoading(true)
            axiosInstance.get("/schools/", {})
            .then((res) =>
            {
                customOptionData ? setOptionsData(res.data.map((o: any) => customOptionData(o))) : setOptionsData(res.data)
                setLoading(false)
            })
            .catch((err) => {
                console.error(err)
            })
        }
    }, [fetchUrl, customOptionData])

    // flag to enable custom component functionality
    const hasCustomComponents: boolean = optionComponent ? true : false;

    // object to build custom components
    const customComponents: Partial<SelectComponents<any, false, any>> = {
        Option: optionComponent || undefined
    }

    return (
        <Controller
            control={control}
            name={name}
            render={({field: {onChange, value}}) => (
                <ReactSelect 
                    components={hasCustomComponents ? customComponents : undefined }
                    options={optionsData} 
                    onChange={onChange} 
                    value={value} 
                    isLoading={loading}
                    filterOption={customFilter}
                />
            )}
        />
    )
}

export default Autocomplete;