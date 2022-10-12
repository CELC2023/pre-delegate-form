import React from "react";
import { useTranslation, Trans } from "react-i18next";
import PeaceBridge from "../../images/scenes/peacebridge.svg"
import SceneFooter from "./SceneFooter";

export const PeaceBridgeScene: React.FC = () => {
    return (
        <div className="page-custom-scene" style={{backgroundImage: `url(${PeaceBridge})`}}>
        </div>
    )
}

export const PeaceBridgeFooter: React.FC = () => {
    const {i18n} = useTranslation();
    return (
        <SceneFooter>
            <Trans i18n={i18n} i18nKey={'text-peace-bridge'} components={[<p className="primary-text"></p>, <p className="secondary-text"></p>]} />
        </SceneFooter>
    )
}