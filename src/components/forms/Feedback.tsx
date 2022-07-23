import React from "react";
import { useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectDelegateCount, selectSchool } from "../../redux/preDelegateReducer";
import Textarea from "../input/Textarea";

const Feedback: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {control, register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = (data: any) => console.log(data)

    const {t, i18n} = useTranslation();

    const delegateCount = useSelector(selectDelegateCount)
    const school = useSelector(selectSchool)

    return (
        <>
            <div className="form-navigation-previous-container">
                    <a className="previous-button" onClick={onBack}>{t('text-previous')}</a>
            </div>
            <div className="form-content">
                <form className="form-fields" onSubmit={handleSubmit(onSubmit)}>
                    <p>{t('info-comments')}</p>
                    <Textarea />
                    <Trans i18nKey={'info-confirm-school'} values={{delegateNumber: delegateCount, schoolName: school.label }}></Trans>
                    <a className="btn btn--row">{t('text-yes')}</a>
                </form>
            </div>
        </>
    )
}

export default Feedback;