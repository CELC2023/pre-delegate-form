import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectDelegateData } from "../../redux/delegateReducer";
import axiosInstance from "../../utils/axios";
import { parseDelegateData } from "../../utils/datautils";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const Review: React.FC<FormPageProps> = ({onBack, onComplete}) => {

    const formData = useSelector(selectDelegateData)
    const navigate = useNavigate()
    
    const onNext = () => {
        axiosInstance.post('/delegate/', parseDelegateData(formData))
        .then(() => navigate("/delegate/complete", {replace: true}))
        .catch((err) => console.error(err))
    }

    const onPrevious = () => {
        onBack && onBack();
    }

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <h2>Review</h2>
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default Review;