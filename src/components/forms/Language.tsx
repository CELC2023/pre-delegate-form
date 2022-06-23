import React from "react";
import FormPageProps from "../../interfaces/FormPageProps";

const Language: React.FC<FormPageProps> = ({onComplete}) => {
    const selectLanguage = (lang: string) => {
        console.log('language changed to ', lang)
        onComplete()
    }

    return (
        <div>
            <button onClick={() => selectLanguage('english')}>English</button>
            <button onClick={() => selectLanguage('french')}>Français</button>
        </div>
    )
}

export default Language;