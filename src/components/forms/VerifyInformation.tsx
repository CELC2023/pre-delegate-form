import { collection, documentId, onSnapshot, query, QuerySnapshot, where } from "firebase/firestore";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase/firebase";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectEmail, selectFirstName, selectLastName, selectPhone } from "../../redux/checkInReducer";
import { blankHref } from "../../utils/constants";
import BooleanRadio from "../input/BooleanRadio";
import Textarea from "../input/Textarea";
import TextInput from "../input/TextInput";
import ProgressDots from "../ProgressDots";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const VerifyInformation: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    interface PersonalInformation {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    }

    const info: PersonalInformation = {
        firstName: useSelector(selectFirstName),
        lastName: useSelector(selectLastName),
        email: useSelector(selectEmail),
        phone: useSelector(selectPhone)
    }

    const onNext = () => {
        onComplete && onComplete()
    }

    return (
        <>
            <FormContent>
                <ProgressDots steps={5} current={3} />
                <h2>Verify</h2>
                <p>First Name: {info.firstName}</p>
                <p>Last Name: {info.lastName}</p>
                <p>Email: {info.email}</p>
                <p>Phone: {info.phone}</p>
                <Textarea name="changes" label="Indicate any changes" />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default VerifyInformation;