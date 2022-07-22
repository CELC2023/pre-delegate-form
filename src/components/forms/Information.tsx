import React from "react";
import { useTranslation } from "react-i18next";
import FormPageProps from "../../interfaces/FormPageProps";
import { blankHref } from "../../utils/constants";

const Information: React.FC<FormPageProps> = ({onComplete}) => {
    const {t, i18n} = useTranslation();
    
    return (
        <>
            <div className="form-content">
                <div className="form-fields">
                    <h2>{t('text-information')}</h2>
                    <p>{t('info-description-pre')}</p>
                    <a className="btn btn--row" href={blankHref}>{t('text-download-package')}</a>
                </div>
            </div>
            <div className="form-navigation-next-container">
                    <a className="next-button" onClick={onComplete}>{t('text-next')}</a>
            </div>
        </>
    )
}

export default Information;