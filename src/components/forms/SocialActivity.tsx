import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectSocialActivity, setSocialActivity } from "../../redux/delegateReducer";
import OptionRadio from "../input/OptionRadio";
import ProgressDots from "../ProgressDots";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const SocialActivity: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    interface SocialActivityForm {
        socialActivity: string
    }

    const defaultValues: SocialActivityForm = {
        socialActivity: useSelector(selectSocialActivity)
    }

    const {control, watch} = useForm({defaultValues: defaultValues});

    const onNext = () => {
        const values: SocialActivityForm = watch();
        if(values.socialActivity !== "") {
            dispatch(setSocialActivity(values));
            onComplete && onComplete();
        }
        
    }

    const onPrevious = () => {
        const values: SocialActivityForm = watch();
        dispatch(setSocialActivity(values));
        onBack && onBack();
    }

    const options = [{
        name: 'skating',
        label: t('option-activity-skating')
    }, {
        name: 'escape',
        label: t('option-activity-escape')
    }, {
        name: 'neither',
        label: t('option-neither')
    }]

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <ProgressDots steps={5} current={4} />
                <h2>{t('text-conference-activity')}</h2>
                <p>{t('text-social-survey')}</p>
                <OptionRadio name="socialActivity" label={t('field-social-activity')}  control={control} options={options} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default SocialActivity;