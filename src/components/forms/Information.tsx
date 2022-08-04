import React from "react";
import { useTranslation } from "react-i18next";
import FormPageProps from "../../interfaces/FormPageProps";
import { blankHref } from "../../utils/constants";
import FormNextButton from "./FormNextButton";

const Information: React.FC<FormPageProps> = ({onComplete}) => {
    const {t} = useTranslation();

    const downloadPackage = () => {
       window.open('https://res.cloudinary.com/celc/image/upload/v1659654394/pre-delegate-form/testletter.pdf')
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