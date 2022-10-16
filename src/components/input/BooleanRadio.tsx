import React from "react";
import { useTranslation } from "react-i18next";
import Radio from "./Radio";
import "./BooleanRadio.scss";
import { Control, Controller } from "react-hook-form";

export interface BooleanRadioProps {
  name: string;
  label: string;
  value?: boolean | null;
  onChange?: (arg1: boolean) => void;
  required?: boolean;
  control?: Control<any>;
  optionLabels?: Array<string>;
}

const BooleanRadio: React.FC<BooleanRadioProps> = ({
  control,
  label,
  name,
  onChange,
  optionLabels,
  required = false,
  value = false,
}) => {
  const { t } = useTranslation();

  const change = (radioName: string, value: boolean) => {
    if (radioName === `${name}-yes`) {
      onChange && onChange(true);
    } else if (radioName === `${name}-no`) {
      onChange && onChange(false);
    }
  };

  const optionYesLabel = (optionLabels && optionLabels.length >= 1) ? optionLabels[0] : t("option-yes"); 
  const optionNoLabel = (optionLabels && optionLabels.length >= 2) ? optionLabels[1] : t("option-no"); 


  return (
    <>
      {control ? (
        <Controller
          name={name}
          control={control}
          render={({ field: { name, onChange, value } }) => {
            
            const change = (radioName: string) => {
                if (radioName === `${name}-yes`) {
                  onChange(true);
                } else if (radioName === `${name}-no`) {
                  onChange(false);
                }
              };

            return (
              <div className="boolean-radio">
                <p className="boolean-radio-label">
                  {label}
                  {required && "*"}
                </p>
                <div className="boolean-radio-container">
                  <Radio
                    name={`${name}-yes`}
                    label={optionYesLabel}
                    value={value===true}
                    onChange={change}
                  />
                  <Radio
                    name={`${name}-no`}
                    label={optionNoLabel}
                    value={value===false}
                    onChange={change}
                  />
                </div>
              </div>
            );
          }}
        />
      ) : (
        <div className="boolean-radio">
          <p className="boolean-radio-label">
            {label}
            {required && "*"}
          </p>
          <div className="boolean-radio-container">
            <Radio
              name={`${name}-yes`}
              label={optionYesLabel}
              value={value===true}
              onChange={change}
            />
            <Radio
              name={`${name}-no`}
              label={optionNoLabel}
              value={value===false}
              onChange={change}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BooleanRadio;
