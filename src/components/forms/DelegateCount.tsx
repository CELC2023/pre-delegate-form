// import Slider from "rc-slider";
import React from "react";
import FormPageProps from "../../interfaces/FormPageProps";
import { useDispatch, useSelector } from "react-redux";
import { selectDelegateCount, setDelegateCount } from "../../redux/preDelegateReducer";
import Slider from "../input/Slider";
import { useTranslation } from "react-i18next";

const DelegateCount: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    
    const marks = {1: "1", 10: "10"}

    const {t, i18n} = useTranslation();

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
            <div className="form-navigation-previous-container">
                    <a className="previous-button" onClick={onBack}>{t('text-previous')}</a>
            </div>
            <div className="form-content">
                <form className="form-fields">
                    <h2>{t('field-count')}</h2>
                    <p>{t('question-delegate-count')}</p>
                    <Slider min={1} step={1} max={10} marks={marks} onChange={onSliderUpdate} dots={true} />
                    <p>{t('info-more-delegates')}</p>
                </form>  
            </div>
            <div className="form-navigation-next-container">
                    <a className="next-button" onClick={onNext}>{t('text-next')}</a>
            </div>
        </>
    )
}

export default DelegateCount;