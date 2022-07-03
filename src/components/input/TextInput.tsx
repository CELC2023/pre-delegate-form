import React, { useEffect, useState } from "react";
import { Control, Controller } from "react-hook-form";
import "./TextInput.scss";

export interface TextInputProps {
    name: string,
    control?: Control,
    label?: string
}

const TextInput: React.FC<TextInputProps> = ({control, label, name}) => {
    const formattedLabel = label || ""

    const [isActive, setIsActive] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const [placeholderVisibility, setPlaceholderVisibility] = useState<boolean>(true)
    const watchValue = control?._getWatch(name)

    useEffect(() => {
        if(control) {
            (control._getWatch(name) && control._getWatch(name).length > 0) ? setPlaceholderVisibility(false) : setPlaceholderVisibility(true)
        }
        
    }, [control, name, watchValue])

    return (
        <div className="textinput">
            <label className={`textinput--label ${isActive ? 'label--active' : ''} placeholder--${placeholderVisibility ? 'show' : 'hide'}`}>
                <span className={`textinput--span`}>
                    {formattedLabel}
                </span>
            </label>
            {
                control ?
                <Controller
                    control={control}
                    name={name}
                    rules={{required: true}}
                    render={({field: {name, onBlur, onChange, value}}) => {
                        return (
                            <input className="textinput--element" onFocus={() => setIsActive(true)} onBlur={() => {
                                setIsActive(false)
                                onBlur()
                            }} name={name} onChange={onChange} value={value || ""}/>
                        )
                    }}
                /> :
                <input className="textinput--element" onFocus={() => setIsActive(true)} onBlur={() => setIsActive(false)} onChange={(e) => setValue(e.target.value)} value={value || ''}></input>
            }
        </div>
    )
}

export default TextInput