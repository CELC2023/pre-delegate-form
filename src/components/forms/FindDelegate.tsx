import { collection, documentId, onSnapshot, query, QuerySnapshot, where } from "firebase/firestore";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase/firebase";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectEmail, selectSingleRoom, setSingleRoom } from "../../redux/delegateReducer";
import { blankHref } from "../../utils/constants";
import BooleanRadio from "../input/BooleanRadio";
import TextInput from "../input/TextInput";
import ProgressDots from "../ProgressDots";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";
import {ref, onValue} from "firebase/database";

const FindDelegate: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    interface SingleRoomForm {
        email: string;
        last: string;
    }

    const {control, watch} = useForm({});

    const [delegate, setDelegate] = useState<QuerySnapshot>();

    const onNext = () => {
        const values = watch();
    }

    const onSearch = () => {
        const query = ref(db, "delegates/"+watch("email"))
        return onValue(query, (snapshot) => {
            const data = snapshot.val();
            if (snapshot.exists()) {
                console.log(data);
            }
        })
        // const q = query(collection(db, 'delegates'), where("email", "==", watch().email), where("last", "==",watch().last))
        // onSnapshot(q, (s: QuerySnapshot) => {
        //     console.log(s)
        //     s.forEach((r) => {
        //         console.log(r.data())
        //     })
        // })
        // const q = query(collection(db, 'delegates', where(documentId(), '==', watch().email)))
        // onSnapshot(q, (querySnapshot) => {
        //     setDelegate(querySnapshot)
        // })
    }

    return (
        <>
            <FormContent>
                <ProgressDots steps={5} current={3} />
                <h2>ArriveCELC</h2>
                <TextInput name="email" label={t('field-email')} type="email" control={control} />
                <TextInput name="last" label={t('field-last-name')} type="text" control={control} />
                <a className="btn btn--row" onClick={onSearch} href={blankHref}>Find</a>
                <p>{JSON.stringify(delegate)}</p>
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default FindDelegate;