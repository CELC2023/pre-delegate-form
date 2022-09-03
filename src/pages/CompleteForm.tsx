import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import Mountains from "../images/mountains-light.svg";
import './Page.scss';
import '../components/FormAdapter.scss';
import './CompleteForm.scss';

const CompleteForm: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div className="page-container form-complete-container">
            <div className="form-adapter">
                <img className="mountains-background" src={Mountains} alt="" />
                <div className="form-content">
                    <div className="form-fields">
                        <p>{t('info-confirm-pre')}</p>
                        <p>{t('info-inquiries')}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CompleteForm;