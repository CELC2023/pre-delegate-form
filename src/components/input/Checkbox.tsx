import React from "react";
import { Control, Controller } from "react-hook-form";
import "./Checkbox.scss";

export interface CheckboxProps {
    name: string,
    label: string,
    defaultValue?: boolean,
    control?: Control<any>,
    onChange?: (arg1: string, arg2: boolean) => void,
    value?: boolean,
    required?: boolean,
}

const Checkbox: React.FC<CheckboxProps> = ({control, defaultValue = false, label, name, onChange, value, required = false}) => {

    const changeHandler = () => {
        onChange && onChange(name, !value);
    }

    return (
        <>
        {
            control ?
            <Controller 
                control={control}
                name={name}
                render={({field: {name, value, onChange}})=> {
                    const onChangeHandler = () => {
                        changeHandler()
                        onChange(!value)
                    }
                    return (
                    <div className="checkbox-option" onClick={onChangeHandler}>
                    <div className="checkbox-option-container">
                        <input className={`checkbox-option-input${value ? ' selected' : ''}`} name={name} type={'checkbox'} />
                    </div>
                    <label htmlFor={name}>{label}{required && '*'}</label>
                </div>
                )}}
            />
            :
            <div className="checkbox-option" onClick={changeHandler}>
            <div className="checkbox-option-container">
                <input className={`checkbox-option-input${value ? ' selected' : ''}`} name={name} type={'checkbox'} />
            </div>
            <label htmlFor={name}>{label}{required && '*'}</label>
        </div>
        }
        </>
    )
}

export default Checkbox;