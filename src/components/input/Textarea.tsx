import React, { useEffect, useState } from "react";
import { Control, Controller, UseFormClearErrors, UseFormSetError } from "react-hook-form";

export interface TextareaInputProps {
    name: string,
    control?: Control<any>,
    label?: string,
    validation?: (arg0: string) => boolean,
    setErrors?: UseFormSetError<any>,
    clearErrors?: UseFormClearErrors<any>
}

const Textarea: React.FC<TextareaInputProps> = ({ clearErrors, control, label = '', name, setErrors, validation}) => {  
    const [isActive, setIsActive] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const [placeholderVisibility, setPlaceholderVisibility] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    const watchValue = control?._getWatch(name);
    const fieldError = control?.getFieldState(name)?.error;
    
    useEffect(() => {
        if(control) {
            (control._getWatch(name) && control._getWatch(name).length > 0) ? setPlaceholderVisibility(false) : setPlaceholderVisibility(true)
        } else {
            setPlaceholderVisibility(value && value.length > 0 ? false : true)
        }
    }, [control, name, watchValue, setPlaceholderVisibility, value])

    useEffect(() => {
        if(fieldError && fieldError.message) {
            setError(fieldError.message)
        } else {
            setError('')
        }
    }, [fieldError])

    const validateInput = (value: string): void => {
        if(validation !== undefined) {
            if(!validation(value || "")) {
                if(setErrors !== undefined) {
                    setErrors(name, {type: 'custom', message: 'Enter a valid value'})
                }
            } else {
                if(clearErrors !== undefined) {
                    clearErrors(name)
                }
            }
        }
    }

    return (
        <div className={`textinput ${error !== '' ? 'error' : ''}`}>
            <label className={`textinput--label ${isActive ? 'label--active' : ''} placeholder--${placeholderVisibility ? 'show' : 'hide'}`}>
                <span className="textinput--span">{label}</span>
            </label>
            {
                control ?
                <Controller
                    control={control}
                    name={name}
                    render={({field: {name, onBlur, onChange, value}}) => {
                        return (
                            <textarea className="textinput--element" onBlur={() => {
                                setIsActive(false)
                                onBlur()
                                validateInput(value)
                            }} name={name} onChange={onChange} value={value || ""} onFocus={() => setIsActive(true)} />
                        )
                    }}
                /> :
                <textarea className="textinput--element" onFocus={() => setIsActive(true)} onChange={(e) => setValue(e.target.value) } value={value || ''} onBlur={() => setIsActive(false)}></textarea>
            }
        </div>
    )
}

export default Textarea;