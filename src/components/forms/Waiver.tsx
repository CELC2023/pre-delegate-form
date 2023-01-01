import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase/firebase";
import { onValue, ref, set, update } from "firebase/database";
import FormPageProps from "../../interfaces/FormPageProps";
import {
    selectChanges,
  selectEmail,
  selectFirstName,
  selectGovernance,
  selectId,
  selectLastName,
  selectPhone,
  selectWaiver,
  setInformationChange,
  setWaiver,
} from "../../redux/checkInReducer";
import Textarea from "../input/Textarea";
import ProgressDots from "../ProgressDots";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import { checkInDataModel } from "../../models/checkInData";
import { blankHref } from "../../utils/constants";
import Loader from "../../images/loader.gif";
import FormPreviousButton from "./FormPreviousButton";

const Waiver: React.FC<FormPageProps> = ({ onBack, onComplete }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const id = useSelector(selectId);


  interface CheckInUpdateData {
    changes: string;
    governance: boolean;
    arriveCelc: boolean;
  }

  const changes = useSelector(selectChanges);
  const governance = useSelector(selectGovernance)
  const waiver = useSelector(selectWaiver);


  interface WaiverStatus {
    waiver: boolean;
  }

  const [loading, setLoading] = useState<boolean>(false);

  const onNext = () => {
    setLoading(true);
    if(id !== "") {
      console.log('id')
        update(ref(db, `delegates/${id}`), {
          changes: changes,
          governance: governance,
          arriveCelc: true
        }).then(() => {
          console.log('done')
            setLoading(false);
            onComplete && onComplete();
        }).catch((err) => {
            console.log(err)
            setLoading(false)
        })
    }
    setLoading(false)
  };

  const onPrevious = () => {
    onBack && onBack();
  }

  return (
    <>
      {loading && (
        <div className="loading">
          <img alt="" src={Loader} className="loader-image" />
        </div>
      )}

    <FormPreviousButton onClick={onPrevious} />
      <FormContent>
        <ProgressDots steps={6} current={4} />
        <h2>{t('title-waivers')}</h2>
        {waiver ? (
          <p>{t('text-waiver-completed')}</p>
        ) : (
          <>
            <a
              className="btn"
              href="https://waiver.smartwaiver.com/w/ueqkpejtlphyfaadw6xazv/web/"
              target={"_blank"}
              rel={"noreferrer"}
            >
              {t('text-waiver')}
            </a>
          </>
        )}
      </FormContent>
      <FormNextButton onClick={onNext} />
    </>
  );
};

export default Waiver;
