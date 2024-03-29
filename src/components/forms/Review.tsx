import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectDelegateData, selectFeedback, setFeedback } from "../../redux/delegateReducer";
import axiosInstance from "../../utils/axios";
import { parseDelegateData } from "../../utils/datautils";
import Textarea from "../input/Textarea";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";
import Loader from "../../images/loader.gif";
import Alert from "../Alert";

const Review: React.FC<FormPageProps> = ({onBack, onComplete}) => {

    const {t} = useTranslation();
    const dispatch = useDispatch();

    const formData = useSelector(selectDelegateData)

    interface ReviewFormProps {
        feedback: string
    }

    const defaultValues: ReviewFormProps = {
        feedback: useSelector(selectFeedback)
    }

    const {control, watch} = useForm({defaultValues: defaultValues});

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const onNext = () => {
        const values: ReviewFormProps = {
            feedback: watch('feedback')
        }
        dispatch(setFeedback(values));

        axiosInstance.post('/delegate/', parseDelegateData(formData))
        .then(() => {
            setIsLoading(true);
            onComplete && onComplete();
        })
        .catch((err) => {
            setIsLoading(false);
            setIsError(true);
            console.error(err)
        })
    }

    const onPrevious = () => {
        const values: ReviewFormProps = {
            feedback: watch('feedback')
        }
        dispatch(setFeedback(values));
        onBack && onBack();
    }


    return (
        <>
            {
                isLoading &&
                <div className="loading" >
                    <img alt="" src={Loader} className="loader-image" />
                </div>
            }
            {
                isError &&
                <Alert text={t('text-submit-error')} disableNo={true} yesText={t('text-close')} onYes={() => {setIsError(false)}} />
            }
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <h2>{t('text-feedback')}</h2>
                <p>{t('field-additional-comments')}</p>
                <Textarea name="feedback" label={t('info-enter-text')} control={control} />
            </FormContent>
            <FormNextButton onClick={onNext} customText={t('text-submit')} />
        </>
    )
}

export default Review;