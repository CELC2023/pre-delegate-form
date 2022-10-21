import React from "react";
import { Trans, useTranslation } from "react-i18next";
import SceneFooter from "./SceneFooter";

export const UCalgaryUrl = 'https://celcassets.cfes.ca/images/ucalgary.svg';

export const UCalgaryScene: React.FC = () => {
  return (
    <div
      className="page-custom-scene"
      style={{ backgroundImage: `url(${UCalgaryUrl})` }}
    />
  );
};

export const UCalgaryFooter: React.FC = () => {
    const {i18n} = useTranslation();
    return (
        <SceneFooter>
            <Trans i18n={i18n} i18nKey={'text-uofc'} components={[<p className="primary-text"></p>, <p className="secondary-text"></p>]} />
        </SceneFooter>
    )
}