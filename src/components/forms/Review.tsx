import React from "react";
import { Trans, useTranslation } from "react-i18next";
import FormPageProps from "../../interfaces/FormPageProps";
import FormContent from "./FormContent";

const Review: React.FC<FormPageProps> = ({onBack}) => {

    const {t} = useTranslation();

    return (
        <>
            <FormContent>
                <h2>{t('text-form-complete')}</h2>
                <p className="capital">{t('info-confirm-delegate')}</p>
                <p><Trans i18nKey={'info-inquiries'}>FOR ANY INQUIRIES, PLEASE EMAIL <a href="mailto:chair@celc.cfes.ca">CHAIR@CELC.CFES.CA</a></Trans></p>
            </FormContent>
        </>
    )
}

export default Review;