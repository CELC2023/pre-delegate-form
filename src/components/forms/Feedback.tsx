import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
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
                    <p></p>
                    <p>I understand that by submitting this form I am committing to sending the {delegateCount} delegates to CELC 2023 FROM {school.label}</p>
                    <a className="btn btn--row">{t('text-yes')}</a>
                </form>
            </div>
        </>
    )
}

export default Feedback;