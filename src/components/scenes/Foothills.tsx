import React from "react";
import { useTranslation, Trans } from "react-i18next";
import Foothills from "../../images/scenes/foothills.svg";
import SceneFooter from "./SceneFooter";

export const FoothillsScene: React.FC = () => {
    return (
        <div className="page-custom-scene" style={{backgroundImage: `url(${Foothills})`}}>
        </div>
    )
}

export const FoothillsFooter: React.FC = () => {
    const {t} = useTranslation();

    return (
        <SceneFooter>
            <Trans t={t} i18nKey={'text-foothills'} components={[<p className="primary-text"></p>, <p className="secondary-text"></p>]} />
        </SceneFooter>
    )
}