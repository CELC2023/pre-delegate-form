import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectChanges, selectEmail, selectFirstName, selectLastName, selectPhone, setInformationChange } from "../../redux/checkInReducer";
import Textarea from "../input/Textarea";
import ProgressDots from "../ProgressDots";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";

const VerifyInformation: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    interface VerifyForm {
        changes: string;
    }

    const defaults: VerifyForm = {
        changes: useSelector(selectChanges)
    }

    const {control, getValues} = useForm<VerifyForm>({defaultValues: defaults})

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
        const changeInfo = getValues('changes');
        if(changeInfo !== '') {
            dispatch(setInformationChange(changeInfo || ""));
        }
        onComplete && onComplete()
    }

    return (
        <>
            <FormContent>
                <ProgressDots steps={6} current={1} />
                <h2>{t('title-verify')}</h2>
                <p>{t('text-verify-info')}</p>
                <p>First Name: {info.firstName}</p>
                <p>Last Name: {info.lastName}</p>
                {
                    info.email !== "" &&
                    <p>Email: {info.email}</p>
                }
                {
                    info.phone !== "" &&
                    <p>Phone: {info.phone}</p>
                }
                <p>{t('text-indicate-changes')}:</p>
                <Textarea name="changes" label={""} control={control} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default VerifyInformation;