import React from "react";
import { useTranslation, Trans } from "react-i18next";
import SceneFooter from "./SceneFooter";

export const PeaceBridgeUrl = 'https://celcassets.cfes.ca/images/peacebridge.svg';

export const PeaceBridgeScene: React.FC = () => {
    return (
        <div className="page-custom-scene" style={{backgroundImage: `url(${PeaceBridgeUrl})`}}>
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