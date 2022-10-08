import React from "react";
import "./Radio.scss";

export interface RadioProps {
    name: string,
    label: string,
    onChange?: (arg1: string, arg2: boolean) => void,
    value: boolean,
}

const Radio: React.FC<RadioProps> = ({label, name, onChange, value}) => {
    
    const change = () => {
        onChange && onChange(name, !value)
    }

    return (
        <div className="radio-option" onClick={change}>
            <div className="radio-option-container">
                <input className={`radio-option-input${value ? ' selected' : ''}`} name={name} type={'radio'} value={name} />
            </div>
            <label className="radio-option-label" htmlFor={name}>{label}</label>
        </div>
    )
}

export default Radio;