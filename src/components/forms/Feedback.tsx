import React from "react";
import { useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectComments, selectDelegateCount, selectPreDelegateFormData, selectSchool, setComments } from "../../redux/preDelegateReducer";
import axiosInstance from "../../utils/axios";
import { blankHref } from "../../utils/constants";
import { parsePreDelegateData } from "../../utils/datautils";
import Textarea from "../input/Textarea";
import FormPreviousButton from "./FormPreviousButton";

const Feedback: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const comments = useSelector(selectComments);
    const {clearErrors, control, setError, getValues} = useForm({defaultValues: comments});
    
    const navigate = useNavigate();
    const formData = useSelector(selectPreDelegateFormData);
    const dispatch = useDispatch();

    const onPrevious = () : void => {
        dispatch(setComments(getValues("comments")));
        onBack && onBack();
    }

    const onSubmit = () : void => {
        dispatch(setComments(getValues("comments")));
        axiosInstance.post('/headdelegate/', parsePreDelegateData(formData))
        .then(() => navigate("/predelegate/complete", {replace: true}))
        .catch((e) => console.error(e))
    }

    const {t} = useTranslation();

    const delegateCount = useSelector(selectDelegateCount)
    const school = useSelector(selectSchool)

    return (
        <>
            <FormPreviousButton onClick={onPrevious} /> 
            <div className="form-content">
                <form className="form-fields">
                    <p className="capital">{t('info-comments')}</p>
                    <Textarea name="comments" label={t('info-enter-text')} control={control} setErrors={setError} clearErrors={clearErrors} />
                    <p className="capital">
                        <Trans i18nKey={'info-confirm-school'} values={{delegateNumber: delegateCount < 11 ? delegateCount : '10+', schoolName: school.label }} components={[<strong className="bold" />, <strong className="bold" />]}></Trans>
                    </p>
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