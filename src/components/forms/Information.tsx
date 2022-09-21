import React from "react";
import { useTranslation, I18nContext  } from "react-i18next";
import FormPageProps from "../../interfaces/FormPageProps";
import { blankHref } from "../../utils/constants";
import FormNextButton from "./FormNextButton";

const Information: React.FC<FormPageProps> = ({onComplete}) => {
    const {t, i18n} = useTranslation();

    const downloadPackage = () => {
        if(i18n.language === 'fr') {
            window.open('https://celc.cfes.ca/predelegues')
        } else {
            window.open('https://celc.cfes.ca/predelegate')
        }
    }
    
    return (
        <>
            <div className="form-content">
                <div className="form-fields">
                    <h2>{t('text-information')}</h2>
                    <p>{t('info-description-pre')}</p>
                    <a className="btn btn--row" href={blankHref} onClick={(e) => {
                        e.preventDefault()
                        downloadPackage()
                    }}>{t('text-download-package')}</a>
                </div>
            </div>
            <FormNextButton onClick={onComplete} />
        </>
    )
}

export default Information;