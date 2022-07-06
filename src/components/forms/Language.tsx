import React from "react";
import FormPageProps from "../../interfaces/FormPageProps";
import { blankHref } from "../../utils/constants";

const Language: React.FC<FormPageProps> = ({onComplete}) => {
    const selectLanguage = (lang: string) => {
        console.log('language changed to ', lang)
        onComplete()
    }

    return (
        <div className="form-content">
            <div className="form-fields">
                <h2>Language<br/>Langue</h2>
                <a className="btn btn--row" onClick={(e) => {
                    e.preventDefault()
                    selectLanguage('english')
                }} href={blankHref}>English</a>
                <a className="btn btn--row" onClick={(e) => {
                    e.preventDefault()
                    selectLanguage('french')
                }} href={blankHref}>Français</a>
            </div>
        </div>
    )
}

export default Language;