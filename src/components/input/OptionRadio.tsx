import React from "react";
import Radio from "./Radio";
import "./OptionRadio.scss";
import { Control, Controller } from "react-hook-form";

export interface OptionRadioProps {
  name: string;
  label: string;
  value?: string;
  onChange?: (arg1: string) => void;
  required?: boolean;
  control?: Control<any>;
  options: Array<any>;
  horizontal?: boolean;
  disable?: boolean;
}

const OptionRadio: React.FC<OptionRadioProps> = ({
  control,
  label,
  name,
  onChange,
  required = false,
  value = [],
  options,
  horizontal = false,
  disable = false
}) => {
  const change = (radioName: string, value: boolean) => {
    if(!disable) {
      onChange && onChange(radioName)
    }
  };

  return (
    <>
      {control ? (
        <Controller
          name={name}
          control={control}
          render={({ field: { name, onChange, value } }) => {
            
            const change = (radioName: string) => {
                if(!disable) {
                  onChange(radioName)
                }
              };

            return (
              <div className={`option-radio${disable ? ' disabled' : ''}`}>
                <p className="option-radio-label">
                  {label}
                  {required && "*"}
                </p>
                <div className={`option-radio-container${horizontal ? '' : ' vertical'}`}>
                    {
                        options.map((e, i) => <Radio name={e.name} label={e.label} value={value === e.name} onChange={change} key={i} disable={disable} />)
                    } 
                </div>
              </div>
            );
          }}
        />
      ) : (
        <div className={`option-radio${disable ? ' disabled' : ''}`}>
          <p className="option-radio-label">
            {label}
            {required && "*"}
          </p>
          <div className={`option-radio-container${horizontal ? '' : ' vertical'}`}>
            {
                options.map((e, i) => <Radio name={e.name} label={e.label} value={value === e.name} onChange={change} key={i} disable={disable} />)
            }
          </div>
        </div>
      )}
    </>
  );
};

export default OptionRadio;
