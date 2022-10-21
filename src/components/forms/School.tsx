import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { components, ControlProps, OptionProps } from "react-select";
import { FilterOptionOption } from "react-select/dist/declarations/src/filters";
import FormPageProps from "../../interfaces/FormPageProps";
import { SchoolData, SchoolOptionData } from "../../models/School";
import Autocomplete from "../input/Autocomplete";
import ProgressDots from "../ProgressDots";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";
import Schools from "../../data/schools.json";
import "./School.scss";
import TextInput from "../input/TextInput";
import {
  setSchoolInformation,
  selectSchool,
  selectCfesPosition,
  selectCfesOfficer,
  selectHeadDelegate,
} from "../../redux/delegateReducer";
import BooleanRadio from "../input/BooleanRadio";
import { usePreloadImage } from "../../hooks/usePreloadImage";
import { FarmlandUrl } from "../scenes/Farmland";

const School: React.FC<FormPageProps> = ({ onBack, onComplete }) => {
  interface SchoolForm {
    school: SchoolOptionData | null;
    position: string;
    headDelegate: string;
    isOfficer: boolean;
  }

  const defaultValues: SchoolForm = {
    school: useSelector(selectSchool),
    position: useSelector(selectCfesPosition),
    isOfficer: useSelector(selectCfesOfficer),
    headDelegate: useSelector(selectHeadDelegate),
  };

  const { control, getValues, setValue, watch, setError, clearErrors } = useForm({
    defaultValues: defaultValues,
  });

  const { t } = useTranslation();

  usePreloadImage(FarmlandUrl);

  const OptionComponent = (props: OptionProps) => {
    const optionData: any = props.data;

    return (
      <>
        <components.Option {...props}>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>{optionData.name}</span>
              {optionData.division && <span>{optionData.division}</span>}
            </div>
            {optionData.image && (
              <img
                alt=""
                style={{
                  width: "1.5em",
                  height: "auto",
                  maxHeight: "fit-content",
                  marginLeft: "auto",
                  alignSelf: "center",
                }}
                src={
                  "https://celcassets.cfes.ca/logos/" +
                  optionData.image
                }
              ></img>
            )}
          </div>
        </components.Option>
      </>
    );
  };

  const ControlComponent = (props: ControlProps) => {
    // @ts-ignore
    const value: SchoolOptionData = props.getValue()[0];
    const image = value?.image || "";
    return (
      <components.Control {...props} className={`school-control-container`}>
        {image && (
          <img
            alt=""
            src={
              "https://res.cloudinary.com/celc/image/upload/v1663016071/pre-delegate-form/school-logos/" +
              image
            }
            style={{
              width: "auto",
              maxWidth: "fit-content",
              height: "1.5em",
              marginLeft: "auto",
              alignSelf: "center",
            }}
          />
        )}
        {props.children}
      </components.Control>
    );
  };

  const dispatch = useDispatch();

  const onNext = () => {
    const values: SchoolForm = {
      school: getValues("school") || null,
      headDelegate: getValues("headDelegate") || "",
      position: getValues("isOfficer") ? ( getValues("position") || "" ) : "",
      isOfficer: getValues("isOfficer") || false,
    };

    if (values.school !== null && values.headDelegate !== "") {
      if(values.isOfficer) {
        if(values.position !== "") {
          dispatch(setSchoolInformation(values));
          onComplete(); 
        } else {
          setError("position", {type: 'custom', message: 'Enter a valid value'})
        }
      } else {
        dispatch(setSchoolInformation(values));
        onComplete();
      }
    }
  };

  const onPrevious = () => {
    const values: SchoolForm = {
      school: getValues("school") || null,
      headDelegate: getValues("headDelegate") || "",
      position: getValues("isOfficer") ? ( getValues("position") || "" ) : "",
      isOfficer: getValues("isOfficer") || false,
    };

    dispatch(setSchoolInformation(values));

    onBack && onBack();
  };

  const defaultSchoolValue = useSelector(selectSchool);

  useEffect(() => {
    setValue("school", defaultSchoolValue);
  }, [defaultSchoolValue, setValue]);

  const customFilter = (
    option: FilterOptionOption<any>,
    inputValue: string
  ) => {
    const optionData: SchoolOptionData = option.data;
    const cleanedFilterValue = inputValue.trim().toLowerCase();

    if (optionData.name.trim().toLowerCase().includes(cleanedFilterValue)) {
      return true;
    }

    if (optionData.division.trim().toLowerCase().includes(cleanedFilterValue)) {
      return true;
    }

    if (optionData.city.trim().toLowerCase().includes(cleanedFilterValue)) {
      return true;
    }

    if (optionData.province.trim().toLowerCase().includes(cleanedFilterValue)) {
      return true;
    }

    return false;
  };

  const customOptionData = (s: SchoolData): SchoolOptionData => {
    return {
      value: s.uuid,
      label: s.division ? s.name + " " + s.division : s.name,
      ...s,
    };
  };

  const schoolOptions = useMemo(
    () => Schools.map((e) => customOptionData(e)),
    []
  );

  return (
    <>
      <FormPreviousButton onClick={onPrevious} />
      <div className="form-content">
        <ProgressDots steps={5} current={2} />
        <form className="form-fields">
          <h2>{t("field-school")}</h2>
          <Autocomplete
            name={"school"}
            label={t("field-school")}
            control={control}
            optionComponent={OptionComponent}
            controlComponent={ControlComponent}
            options={schoolOptions}
            customFilter={customFilter}
            customOptionData={customOptionData}
            required={true}
          />
          <BooleanRadio
            name={"isOfficer"}
            label={t("field-cfes-officer")}
            required={true}
            control={control}
          />
          {watch("isOfficer") && (
            <TextInput
              name={"position"}
              label={t("text-cfes-position")}
              control={control}
              required={watch("isOfficer")}
              setErrors={setError}
              clearErrors={clearErrors}
            />
          )}
          <TextInput
            name={"headDelegate"}
            label={t("field-head-delegate")}
            control={control}
            required={true}
            setErrors={setError}
            clearErrors={clearErrors}
          />
        </form>
      </div>
      <FormNextButton onClick={onNext} />
    </>
  );
};

export default School;
