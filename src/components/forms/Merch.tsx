import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { ShirtSize } from "../../models/shirtSize";
import { selectShirtSize, setShirtSize } from "../../redux/delegateReducer";
import Autocomplete from "../input/Autocomplete";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const Merch: React.FC<FormPageProps> = ({onBack, onComplete}) => {

    const {t} = useTranslation();
    const dispatch = useDispatch();

    interface ShirtSizeForm {
        shirtSize: ShirtSize 
    }

    const defaultValues: ShirtSizeForm = {
        shirtSize: useSelector(selectShirtSize)
    }

    const {control, watch} = useForm({defaultValues: defaultValues})

    const onNext = () => {
        const values = watch();

        if(values.shirtSize !== null) {
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
        value: "small",
        label: t('option-size-small')
    }, {
        value: "medium",
        label: t('option-size-medium')
    }, {
        value: "large",
        label: t('option-size-large')
    }, {
        value: "extra-large",
        label: t('option-size-extra-large')
    }, {
        value: "2-extra-large",
        label: t('option-size-2-large')
    }, {
        value: "3-extra-large",
        label: t('option-size-3-large')
    }, {
        value: "4-extra-large",
        label: t('option-size-4-large')
    }]

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <h2>{t("text-personal")}</h2>
                <p>{t('text-tshirt')}</p>
                <Autocomplete name="shirtSize" label={t('field-tshirt-size')} control={control} options={shirtSizes} required={true} />
                <p>{t('text-extra-merch')}</p>
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default Merch;