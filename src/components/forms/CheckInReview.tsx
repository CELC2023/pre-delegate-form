import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase/firebase";
import { onValue, ref } from "firebase/database";
import FormPageProps from "../../interfaces/FormPageProps";
import {
  selectId,
  selectWaiver,
  setWaiver,
} from "../../redux/checkInReducer";
import ProgressDots from "../ProgressDots";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";
import { checkInDataModel } from "../../models/checkInData";

const CheckInReview: React.FC<FormPageProps> = ({ onBack, onComplete }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const waiver = useSelector(selectWaiver);
  const id = useSelector(selectId)

  interface WaiverStatus {
    waiver: boolean;
    id: string
  }

  const info: WaiverStatus = {
    waiver: waiver,
    id: id
  };

  useEffect(() => {
    setLoading(true);
    const query = ref(db, "delegates/" + info.id);
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      loading && setLoading(false);
      if (snapshot.exists()) {
        const checkInData = data as checkInDataModel;
        if (checkInData.liabilityWaiver !== info.waiver) {
          info.waiver = checkInData.liabilityWaiver;
          dispatch(setWaiver(info.waiver));
        }
        setLoading(false);
      }
    });
  }, []);

  const onNext = () => {

    onComplete && onComplete();
  };

  const onPrevious = () => {
    onBack && onBack();
  };

  return (
    <>
    {/* TODO: takeout back button here */}
      <FormPreviousButton onClick={onPrevious} />
      <FormContent>
        <ProgressDots steps={6} current={5} />
        <h2>{t("header-arrivecelc")}</h2>
        <p>{t("text-checkin-complete")}</p>
        {
            !info.waiver &&
            <p>{t("text-complete-waiver")}</p>
        }
      </FormContent>
      <FormNextButton onClick={onNext} />
    </>
  );
};

export default CheckInReview;
