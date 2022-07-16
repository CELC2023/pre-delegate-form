import Slider from "rc-slider";
import React from "react";
import FormPageProps from "../../interfaces/FormPageProps";
import "rc-slider/assets/index.css";
import { useDispatch, useSelector } from "react-redux";
import { selectDelegateCount, setDelegateCount } from "../../redux/preDelegateReducer";

const DelegateCount: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    
    const marks = {1: "1", 10: "10"}

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
                    <a className="previous-button" onClick={onBack}>previous</a>
            </div>
            <div className="form-content">
                <form className="form-fields">
                    <h2>Count</h2>
                    <p>HOW MANY DELEGATES ARE REPRESENTING YOUR SCHOOL / ORGANIZATION?</p>
                    <Slider min={1} step={1} max={10} marks={marks} onChange={onSliderUpdate}></Slider>
                    <p>Sending more than 10 delegates?</p>
                </form>  
            </div>
            <div className="form-navigation-next-container">
                    <a className="next-button" onClick={onNext}>Next</a>
            </div>
        </>
    )
}
//<Slider vertical min={1} step={1} max={3} marks={marks} onChange={(v) => setCurrentLevel(v)}/>

export default DelegateCount;