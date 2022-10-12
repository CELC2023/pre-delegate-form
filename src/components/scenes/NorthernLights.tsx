import React from "react";
import { useTranslation, Trans } from "react-i18next";
import NorthernLights from "../../images/scenes/northernlights.svg"
import SceneFooter from "./SceneFooter";

export const NorthernLightsScene: React.FC = () => {
    return (
        <div className="page-custom-scene" style={{backgroundImage: `url(${NorthernLights})`}}>
        </div>
    )
}

export const NorthernLightsFooter: React.FC = () => {
    const {i18n} = useTranslation();
    return (
        <SceneFooter>
            <Trans i18n={i18n} i18nKey={'text-northern-lights'} components={[<p className="primary-text"></p>, <p className="secondary-text"></p>]} />
        </SceneFooter>
    )
}