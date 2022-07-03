import React, { useEffect, useState } from "react";
import { Control, Controller } from "react-hook-form";
import ReactSelect, { OptionProps, OptionsOrGroups } from "react-select";
import { SelectComponents } from "react-select/dist/declarations/src/components";
import { FilterOptionOption } from "react-select/dist/declarations/src/filters";
import axiosInstance from "../../utils/axios";
import "./Autocomplete.scss"

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
    const formattedLabel = label || ""

    const [optionsData, setOptionsData] = useState<OptionsOrGroups<any, any>>()

    const [loading, setLoading] = useState<boolean>(false)

    const [isActive, setIsActive] = useState<boolean>(false);

    const [placeholderVisibility, setPlaceholderVisibility] = useState<boolean>(true);

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

    const watchValue = control?._getWatch(name)

    useEffect(() => {
        if(control) {
            (watchValue && watchValue != null) ? setPlaceholderVisibility(false) : setPlaceholderVisibility(true)
        }
    }, [control, name, watchValue])

    return (
        <div className="autocompleteinput">
            <label className={`autocompleteinput--label ${isActive ? 'label--active' : ''} placeholder--${placeholderVisibility ? 'show' : 'hide'}`}>
                <span className={`autocompleteinput--span`}>
                    {formattedLabel}
                </span>
            </label>
            <Controller
                control={control}
                name={name}
                render={({field: {name, onBlur, onChange, value}}) => (
                    <ReactSelect
                        className="autocompleteinput--element"
                        classNamePrefix={'rac'}
                        components={hasCustomComponents ? customComponents : undefined }
                        options={optionsData} 
                        onChange={onChange}
                        name={name} 
                        value={value} 
                        isLoading={loading}
                        filterOption={customFilter}
                        placeholder={''}
                        onFocus={() => setIsActive(true)}
                        onBlur={() => {
                            setIsActive(false)
                            onBlur()
                        }}
                    />
                )}
            />
        </div>
    )
}

export default Autocomplete;