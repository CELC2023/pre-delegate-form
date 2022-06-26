import React, { useState } from "react";

const Textarea: React.FC = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <div className="textinput">
            <textarea className="textinput--element"></textarea>
            <label className={`textinput--label ${isActive ? 'label--active' : ''}`}>
                <span className="textinput--span">
                    Test
                </span>
            </label>
        </div>
    )
}

export default Textarea;