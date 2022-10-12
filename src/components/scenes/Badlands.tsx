import React from "react";
import { Trans, useTranslation } from "react-i18next";
import Badlands from "../../images/scenes/badlands.svg"
import SceneFooter from "./SceneFooter";

export const BadlandsScene: React.FC = () => {
    return (
        <div className="page-custom-scene" style={{backgroundImage: `url(${Badlands})`}}>
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