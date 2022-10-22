import { changeLanguage } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { usePreloadImage } from "../../hooks/usePreloadImage";
import FormPageProps from "../../interfaces/FormPageProps";
import { setActivityLanguage, setLanguagePreference } from "../../redux/delegateReducer";
import { blankHref } from "../../utils/constants";
import { NorthernLightsUrl } from "../scenes/NorthernLights";

const Language: React.FC<FormPageProps> = ({onComplete}) => {
    const dispatch = useDispatch();
  
    const activityLanguageEnglish = {
        frenchCaseCompetition: false,
        languages: ['english']
    }

    const activityLanguageFrench = {
        frenchCaseCompetition: true,
        languages: ['french']
    }

    const selectLanguage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,lang: string) => {
        e.preventDefault();
        changeLanguage(lang);
        dispatch(setLanguagePreference(lang));
        if(lang === 'en') {
            dispatch(setActivityLanguage(activityLanguageEnglish));
        } else if(lang === 'fr') {
            dispatch(setActivityLanguage(activityLanguageFrench));
        }
        onComplete();
    }

    const {t} = useTranslation();

    usePreloadImage(NorthernLightsUrl);

    return (
        <div className="form-content">
            <div className="form-fields">
                <h2>{t('text-language', {lng: 'en'})}<br/>{t('text-language', {lng: 'fr'})}</h2>
                <a className="btn btn--row" onClick={(e) => selectLanguage(e, 'en')} href={blankHref}>English</a>
                <a className="btn btn--row" onClick={(e) => selectLanguage(e, 'fr')} href={blankHref}>Français</a>
            </div>
        </div>
    )
}

export default Language;