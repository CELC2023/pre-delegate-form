import React from "react";
import { useTranslation } from "react-i18next";
import FormPageProps from "../../interfaces/FormPageProps";
import { blankHref } from "../../utils/constants";
import FormNextButton from "./FormNextButton";
import "./Information.scss";

const Information: React.FC<FormPageProps> = ({onComplete}) => {
    const {t, i18n} = useTranslation();

    const downloadPackage = () => {
        if(i18n.language === 'fr') {
            window.open('https://celc.cfes.ca/predelegues')
        } else {
            window.open('https://celc.cfes.ca/predelegate')
        }
    }
   
    const isLate = (): boolean => {
        const date = new Date();
        const deadline = new Date(1667631600);
        if(date.getTime() > deadline.getTime()) {
            return true;
        }
        return false;
    }

    return (
        <>
            <div className="form-content">
                <div className="form-fields info-page-container">
                    <h2>{t('text-information')}</h2>
                    {
                        isLate() &&
                        <p className="late-fee">{t('text-late-fee')}</p>
                    }
                    <p>{t('text-description-delegate')}</p>
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