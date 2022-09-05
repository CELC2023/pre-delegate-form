import React, { useEffect, useMemo, useState } from "react";
import { Control, UseFormClearErrors, UseFormSetError } from "react-hook-form";
import "./TextInput.scss";

export interface MultiSelectProps {
    name: string,
    control?: Control<any>,
    label?: string,
    validation?: (arg0: string) => boolean,
    setErrors?: UseFormSetError<any>,
    clearErrors?: UseFormClearErrors<any>
    options: Array<String>
    autocomplete?: string
}

const MultiSelect: React.FC<MultiSelectProps> = ({autocomplete = "", control, label, name, validation, setErrors, clearErrors, options}) => {
    const formattedLabel = label || ""

    const opt = useMemo(() => [{
        name: 'male',
        label: 'Male'
    }, {
        name: 'female',
        label: 'Female'
    }, {
        name: 'nonBinary',
        label: 'Non-Binary'
    }, {
        name: 'other',
        label: 'Other'
    }, {
        name: 'preferNotToSay',
        label: 'Prefer Not to Say'
    }], [])

    const [value, setValue] = useState<Array<string>>([]);
    const [error, setError] = useState<string>('');
    const fieldError = control?.getFieldState(name)?.error
    const [selected, setSelected] = useState<any>();
    useEffect(() => {
        setSelected(Object.fromEntries(opt.map((e) => [e.name, false])))
    }, [opt])

    useEffect(() => {
        if(selected) {
            setValue(Object.keys(selected).filter(e => {
                return e in selected && selected[e]
            }))
        } else {
            setValue([])
        }
    }, [selected])
    
    useEffect(() => {
        if(fieldError && fieldError.message) {
            setError(fieldError.message)
        } else {
            setError('')
        }
    }, [fieldError])

    return (
        <div className={`multiselect ${error !== '' ? 'error' : ''}`}>
            <label className={`multiselect--label`}>
                <span className={`multiselect--span`}>
                    {formattedLabel}
                </span>
            </label>
            <div className="multiselect--option-area">
            {
                opt.map((e, i) => {
                    const optionValue =  (selected && e.name in selected) ? selected[e.name] : false
                    return (
                        <div className="multiselect--option-row" key={i}>
                             <input className="multiselect--option-checkbox" id={`${e.name}-${i}`} type={'checkbox'} name={e.name} onClick={() => {
                                setSelected({...selected, [e.name]: !optionValue })
                            }} value={optionValue} />
                            <label className="multiselect--option-label" htmlFor={`${e.name}-${i}`}>{e.label} {selected && selected[e.name].toString()}</label>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default MultiSelect