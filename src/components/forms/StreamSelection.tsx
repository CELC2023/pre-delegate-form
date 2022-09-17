import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import FormPageProps from "../../interfaces/FormPageProps";
import StreamSelectionButton from "../input/StreamSelectionButton";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";

const StreamSelection: React.FC<FormPageProps> = ({onBack, onComplete}) => {

    const {t} = useTranslation();

    const streams = [
        {
            uuid: "the",
            name: t('option-stream-theme'),
            description: "Lorem Impsum Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum."
        }, {
            uuid: "lead",
            name: t('option-stream-lead'), 
            description: "Lorem Impsum Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum."
        }, {
            uuid: "engsoc",
            name: t('option-stream-engsoc'),
            description: "Lorem Impsum Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum." 
        }, {
            uuid: "gov",
            name: t('option-stream-gov'),
            description: "Lorem Impsum Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum."
        }
    ]

    const [selectedStream, setSelectedStream] = useState<String>('');

    const onPrevious = () => {
        onBack && onBack();
    }

    const onNext = () => {
        onComplete && onComplete();
    }

    const onSelectStream = (uuid: string) => {
        setSelectedStream(uuid);
    }

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
            <h2>{t('text-school-info')}</h2>
                    <p>{t('field-stream')}</p>
                    <div className="stream-selection-container">
                        {
                            streams.map((e,i) => {
                                const isSelected = selectedStream === e.uuid;
                                return (
                                   <StreamSelectionButton {...e} selected={isSelected} key={i} onSelect={onSelectStream} />
                                )
                            })
                        }
                    </div>
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default StreamSelection;