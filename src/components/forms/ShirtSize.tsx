import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectShirtSize, setShirtSize } from "../../redux/delegateReducer";
import OptionRadio from "../input/OptionRadio";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const ShirtSize: React.FC<FormPageProps> = ({onBack, onComplete}) => {

    const {t} = useTranslation();
    const dispatch = useDispatch();

    interface ShirtSizeForm {
        shirtSize: string
    }

    const defaultValues: ShirtSizeForm = {
        shirtSize: useSelector(selectShirtSize)
    }

    const {control, watch} = useForm({defaultValues: defaultValues})

    const onNext = () => {
        const values = watch();

        if(values.shirtSize !== '') {
            dispatch(setShirtSize(values))
            onComplete && onComplete();
        }
    }

    const onPrevious = () => {
        const values = watch();
        dispatch(setShirtSize(values))
        onBack && onBack()
    }

    const shirtSizes = [{
        name: "small",
        label: t('option-size-small')
    }, {
        name: "medium",
        label: t('option-size-medium')
    }, {
        name: "large",
        label: t('option-size-large')
    }, {
        name: "extra-large",
        label: t('option-size-extra-large')
    }, {
        name: "2-extra-large",
        label: t('option-size-2-large')
    }, {
        name: "3-extra-large",
        label: t('option-size-3-large')
    }, {
        name: "4-extra-large",
        label: t('option-size-4-large')
    }]

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <h2>{t("text-personal")}</h2>
                <p>{t('text-tshirt')}</p>
                <OptionRadio name="shirtSize" label={t('field-tshirt-size')} control={control} options={shirtSizes} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default ShirtSize;