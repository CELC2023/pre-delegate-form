import React from "react";
import { Control, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import Select from "react-select/dist/declarations/src/Select";

export interface AutocompleteProps {
    name: string,
    label: string | null,
    control: Control
}

const Autocomplete: React.FC<AutocompleteProps> = ({control, label, name}) => {
    const displayLabel = label || ""

    const options = [
        {
            label: "a",
            value: 1
        }
    ]

    return (
        <Controller
            control={control}
            name={name}
            render={({field: {onChange, value}}) => (<ReactSelect options={options} onChange={onChange} value={value} />)}
        />
    )
}

export default Autocomplete;