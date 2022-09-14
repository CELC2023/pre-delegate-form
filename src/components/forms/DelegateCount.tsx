// import Slider from "rc-slider";
import React from "react";
import FormPageProps from "../../interfaces/FormPageProps";
import { useDispatch, useSelector } from "react-redux";
import { selectDelegateCount, setDelegateCount } from "../../redux/preDelegateReducer";
import Slider from "../input/Slider";
import { Trans, useTranslation } from "react-i18next";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";
import ProgressDots from "../ProgressDots";

const DelegateCount: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    
    const marks = {1: "1", 11: "10+"}

    const {t} = useTranslation();

    const dispatch = useDispatch()
    const delegateCountValue = useSelector(selectDelegateCount)

    const onSliderUpdate = (value: number | number[]) => {
        dispatch(setDelegateCount(value))
    }

    const onNext = () => {
        if(delegateCountValue > 0) {
            onComplete()
        }
    }
    
    return (
        <>
            {
                onBack &&
                <FormPreviousButton onClick={onBack} /> 
            }
            <div className="form-content">
                <ProgressDots steps={3} current={3} />
                <form className="form-fields">
                    <h2>{t('field-count')}</h2>
                    <p className="capital">{t('question-delegate-count')}</p>
                    <Slider min={1} step={1} max={11} marks={marks} onChange={onSliderUpdate} dots={true} value={delegateCountValue} defaultValue={1} />
                    <p className="capital">{t('info-more-delegates')}</p>
                    <p className="capital"><Trans i18nKey={'info-email-chair'}>Please email <a href="mailto:chair@celc.cfes.ca">chair@celc.cfes.ca</a></Trans></p>
                </form>  
            </div>
           <FormNextButton onClick={onNext} /> 
        </>
    )
}

export default DelegateCount;