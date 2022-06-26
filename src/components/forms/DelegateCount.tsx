import Slider from "rc-slider";
import React from "react";
import FormPageProps from "../../interfaces/FormPageProps";
import "rc-slider/assets/index.css";

const DelegateCount: React.FC<FormPageProps> = ({onComplete}) => {
    
    const marks = {1: "1", 10: "10"}
    
    return (
        <form>
            <h2>Count</h2>
            <p>HOW MANY DELEGATES ARE REPRESENTING YOUR SCHOOL / ORGANIZATION?</p>
            <Slider min={1} step={1} max={10} marks={marks}></Slider>
            <p>Sending more than 10 delegates?</p>
        </form>
    )
}
//<Slider vertical min={1} step={1} max={3} marks={marks} onChange={(v) => setCurrentLevel(v)}/>

export default DelegateCount;