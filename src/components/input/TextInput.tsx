import React, { useState } from "react";
import "./TextInput.scss";

export interface TextInputProps {
    label?: string
}

const TextInput: React.FC<TextInputProps> = ({label}) => {
    const formattedLabel = label || ""

    const [isActive, setIsActive] = useState<boolean>(false);
    
    return (
        <div className="textinput">
            <input className="textinput--element" onFocus={() => setIsActive(true)} onBlur={() => setIsActive(false)}></input>
            <label className={`textinput--label ${isActive ? 'label--active' : ''}`}>
                <span className="textinput--span">
                    {formattedLabel}
                </span>
            </label>
        </div>
    )
}

export default TextInput