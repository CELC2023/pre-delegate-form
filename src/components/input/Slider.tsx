import React from "react";
import RCSlider, { SliderProps as RCSliderProps } from "rc-slider";
import "./Slider.scss";
import { Control, Controller } from "react-hook-form";

interface SliderInputProps {
  control?: Control<any>;
  name: string;
  label: string;
  required?: boolean;
}

export interface SliderProps extends RCSliderProps, SliderInputProps {}

const Slider: React.FC<SliderProps> = (props) => {
  const required = props?.required || false

  return (
    <>
      <p>{props.label}{required ? '*' : ''}</p>
      {props?.control ? (
        <Controller
          name={props.name || ""}
          control={props.control}
          render={({ field: { onChange, value } }) => {
            return (
              <RCSlider
                className={`form-slider${
                  props.className ? " " + props.className : ""
                }`}
                onChange={onChange}
                value={value}
                {...props}
              />
            );
          }}
        />
      ) : (
        <RCSlider
          className={`form-slider${
            props.className ? " " + props.className : ""
          }`}
          {...props}
        />
      )}
    </>
  );
};

export default Slider;
