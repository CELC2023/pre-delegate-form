import React from "react";
import { Trans, useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import FormBackground from "../images/form-background.svg";
import './Page.scss';
import '../components/FormAdapter.scss';
import './CompleteForm.scss';

const CompleteForm: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div className="page-container form-complete-container">
            <div className="form-adapter">
                <img className="form-background" src={FormBackground} alt="" />
                <div className="form-content">
                    <div className="form-fields">
                        <p className="capital">{t('info-confirm-pre')}</p>
                        <p><Trans i18nKey={'info-inquiries'}>FOR ANY INQUIRIES, PLEASE EMAIL <a href="mailto:chair@celc.cfes.ca">CHAIR@CELC.CFES.CA</a></Trans></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CompleteForm;