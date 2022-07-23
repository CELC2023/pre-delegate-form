import React from "react";
import { useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectDelegateCount, selectPreDelegateFormData, selectSchool } from "../../redux/preDelegateReducer";
import axiosInstance from "../../utils/axios";
import { blankHref } from "../../utils/constants";
import { parsePreDelegateData } from "../../utils/datautils";
import Textarea from "../input/Textarea";

const Feedback: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {control, register, handleSubmit, watch, formState: {errors}} = useForm();
    
    const navigate = useNavigate()
    const formData = useSelector(selectPreDelegateFormData);

    const onSubmit = () : void => {
        console.log(parsePreDelegateData(formData))
        axiosInstance.post('/headdelegate/', parsePreDelegateData(formData))
        .then(() => navigate("/predelegate/complete", {replace: true}))
        .catch((e) => console.error(e))
    }

    const {t, i18n} = useTranslation();

    const delegateCount = useSelector(selectDelegateCount)
    const school = useSelector(selectSchool)


    return (
        <>
            <div className="form-navigation-previous-container">
                    <a className="previous-button" onClick={onBack}>{t('text-previous')}</a>
            </div>
            <div className="form-content">
                <form className="form-fields">
                    <p>{t('info-comments')}</p>
                    <Textarea />
                    <Trans i18nKey={'info-confirm-school'} values={{delegateNumber: delegateCount, schoolName: school.label }}></Trans>
                    <a 
                        className="btn btn--row" 
                        onClick={(e) => {
                        e.preventDefault();
                        onSubmit()}}
                        href={blankHref}
                    >{t('text-yes')}</a>
                </form>
            </div>
        </>
    )
}

export default Feedback;