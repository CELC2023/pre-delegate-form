import { changeLanguage } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import FormPageProps from "../../interfaces/FormPageProps";
import { blankHref } from "../../utils/constants";

const Language: React.FC<FormPageProps> = ({onComplete}) => {
    const selectLanguage = (lang: string) => {
        console.log('language changed to ', lang)
        onComplete()
    }

    const {t, i18n} = useTranslation();

    return (
        <div className="form-content">
            <div className="form-fields">
                <h2>{t('text-language', {lng: 'en'})}<br/>{t('text-language', {lng: 'fr'})}</h2>
                <a className="btn btn--row" onClick={(e) => {
                    e.preventDefault()
                    selectLanguage('english')
                    changeLanguage('en')
                }} href={blankHref}>English</a>
                <a className="btn btn--row" onClick={(e) => {
                    e.preventDefault()
                    selectLanguage('french')
                    changeLanguage('fr')
                }} href={blankHref}>Français</a>
            </div>
        </div>
    )
}

export default Language;