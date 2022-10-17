import React, { useEffect, useState } from "react";
import {
  Control,
  Controller,
} from "react-hook-form";
import Checkbox from "./Checkbox";
import "./MultiSelect.scss";

export interface MultiSelectOptionProps {
  name: string;
  label: string;
}

export interface MultiSelectProps {
  name: string;
  label?: string;
  validation?: (arg0: string) => boolean;
  options: Array<MultiSelectOptionProps>;
  autocomplete?: string;
  horizontal?: boolean;
  onChange?: (arg0: Array<string>) => void;
  value?: Array<string>;
  control?: Control<any>;
  required?: boolean;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  autocomplete = "",
  control,
  horizontal = false,
  label,
  name,
  validation,
  options,
  onChange,
  value,
  required = false,
}) => {
  const formattedLabel = label || "";

  const [error, ] = useState<string>("");
  const [selected, setSelected] = useState<any>({});

  useEffect(() => {
    setSelected(Object.fromEntries(options.map((e) => [e.name, false])));
  }, [options]);

  useEffect(() => {
    setSelected(Object.fromEntries(options.map((e) => [e.name, value?.includes(e.name) || false])));
  }, [options, value])

  const getSelected = () => {
    return selected
  }

  useEffect(() => {
    onChange !== undefined && onChange(Object.keys(selected).filter((v) => selected[v]))
  }, [selected, onChange])

  const updateValue = (name: string, value: boolean) => {
    const updatedSelected = { ...getSelected(), [name]: value }
    setSelected(updatedSelected);
  }

  return (
    <div className={`multiselect ${error !== "" ? "error" : ""}`}>
      <label className={`multiselect--label`}>
        <span className={`multiselect--span`}>{formattedLabel}{required ? "*" : ''}</span>
      </label>
        {
          control ?
            <Controller 
              name={name}
              control={control}
              render={({ field: { onChange, value } })=>{
                const val: Array<string> = value || []

                const change = (name: string, value: boolean) => {
                  if(value === true) {
                    onChange(val.concat([name]))
                  } else {
                    onChange(val.filter((e) => e !== name))
                  }
                }

                return (
                  <div
                    className={`multiselect--option-area${
                      horizontal ? " multiselect--horizontal" : ""
                    }`}
                  >
                    {
                      options.map((e, i) => <Checkbox {...e} key={i} value={val.includes(e.name)} onChange={change} />)
                    }
                  </div> 
                )
              }}
            />
          :
          <div
            className={`multiselect--option-area${
              horizontal ? " multiselect--horizontal" : ""
            }`}
          >
            {
              options.map((e, i) => <Checkbox {...e} key={i} value={selected[e.name]} onChange={updateValue} />)
            }
          </div>
        }
    </div>
  );
};

export default MultiSelect;
