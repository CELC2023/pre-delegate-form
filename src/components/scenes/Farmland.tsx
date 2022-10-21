import React from "react";
import { useTranslation, Trans } from "react-i18next";
import SceneFooter from "./SceneFooter";

export const FarmlandUrl = 'https://celcassets.cfes.ca/images/farmland.svg';

export const FarmlandScene: React.FC = () => {
    return (
        <div className="page-custom-scene" style={{backgroundImage: `url(${FarmlandUrl})`}}>
        </div>
    )
}

export const FarmlandFooter: React.FC = () => {
    const {i18n} = useTranslation();
    return (
        <SceneFooter>
            <Trans i18n={i18n} i18nKey={'text-farmlands'} components={[<p className="primary-text"></p>, <p className="secondary-text"></p>]} />
        </SceneFooter>
    )
}