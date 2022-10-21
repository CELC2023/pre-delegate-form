import React from "react";
import { Trans, useTranslation } from "react-i18next";
import SceneFooter from "./SceneFooter";

export const BadlandsUrl = 'https://celcassets.cfes.ca/images/badlands.svg';

export const BadlandsScene: React.FC = () => {
    return (
        <div className="page-custom-scene" style={{backgroundImage: `url(${BadlandsUrl})`}}>
        </div>
    )
}

export const BadlandsFooter: React.FC = () => {
    const {t} = useTranslation();
    return (
        <SceneFooter>
            <Trans t={t} i18nKey={'text-badlands'} components={[<p className="primary-text"></p>, <p className="secondary-text"></p>]} />
        </SceneFooter>
    )
}