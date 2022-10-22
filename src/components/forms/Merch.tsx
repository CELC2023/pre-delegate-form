import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { ShirtSize } from "../../models/shirtSize";
import { selectShirtSize, setShirtSize } from "../../redux/delegateReducer";
import { blankHref } from "../../utils/constants";
import Alert from "../Alert";
import Autocomplete from "../input/Autocomplete";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const ShirtSizeGuide: React.FC = () => {
  return (
    <div>
      <table>
        <tbody>
          <tr className="table--header">
            <td>Sizes</td>
            <td>Width (CM)</td>
            <td>Length (CM)</td>
          </tr>
          <tr>
            <td>S</td>
            <td>46</td>
            <td>71</td>
          </tr>
          <tr>
            <td>M</td>
            <td>51</td>
            <td>74</td>
          </tr>
          <tr>
            <td>L</td>
            <td>56</td>
            <td>76</td>
          </tr>
          <tr>
            <td>XL</td>
            <td>61</td>
            <td>79</td>
          </tr>
          <tr>
            <td>2XL</td>
            <td>66</td>
            <td>81</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Merch: React.FC<FormPageProps> = ({ onBack, onComplete }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  interface ShirtSizeForm {
    shirtSize: ShirtSize;
  }

  const defaultValues: ShirtSizeForm = {
    shirtSize: useSelector(selectShirtSize),
  };

  const { control, watch } = useForm({ defaultValues: defaultValues });
  const [showSizeGuide, setShowSizeGuide] = useState<boolean>(false);

  const onNext = () => {
    const values = watch();

    if (values.shirtSize !== null) {
      dispatch(setShirtSize(values));
      onComplete && onComplete();
    }
  };

  const onPrevious = () => {
    const values = watch();
    dispatch(setShirtSize(values));
    onBack && onBack();
  };

  const shirtSizes = [
    {
      value: "small",
      label: t("option-size-small"),
    },
    {
      value: "medium",
      label: t("option-size-medium"),
    },
    {
      value: "large",
      label: t("option-size-large"),
    },
    {
      value: "extra-large",
      label: t("option-size-extra-large"),
    },
    {
      value: "2-extra-large",
      label: t("option-size-2-large"),
    },
  ];

  return (
    <>
      {showSizeGuide && (
        <Alert
          text={t("text-shirt-guide")}
          AlertBody={ShirtSizeGuide}
          disableNo={true}
          yesText={"Close"}
          onYes={() => setShowSizeGuide(false)}
        />
      )}
      <FormPreviousButton onClick={onPrevious} />
      <FormContent>
        <h2>{t("text-personal")}</h2>
        <p>{t("text-tshirt")}</p>
        <Autocomplete
          name="shirtSize"
          label={t("field-tshirt-size")}
          control={control}
          options={shirtSizes}
          required={true}
        />
        <a href={blankHref} onClick={() => setShowSizeGuide(true)}>
          {t("text-shirt-guide")}
        </a>
        <p>{t("text-extra-merch")}</p>
      </FormContent>
      <FormNextButton onClick={onNext} />
    </>
  );
};

export default Merch;
