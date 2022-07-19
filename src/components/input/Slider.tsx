import React from "react";
import RCSlider, {SliderProps as RCSliderProps} from "rc-slider";
import "./Slider.scss";

const Slider: React.FC<RCSliderProps> = (props) => {
    return (
        <RCSlider className={`form-slider${props.className ? ' ' + props.className : ''}`} {...props} />
    )
}

export default Slider