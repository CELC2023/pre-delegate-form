import React from "react";
import { useTranslation, Trans } from "react-i18next";
import Farmland from "../../images/scenes/farmland.svg"
import SceneFooter from "./SceneFooter";

export const FarmlandScene: React.FC = () => {
    return (
        <div className="page-custom-scene" style={{backgroundImage: `url(${Farmland})`}}>
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