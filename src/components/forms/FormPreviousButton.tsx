import React from "react";
import { useTranslation } from "react-i18next";
import { FormControlButtonProps } from "./CommonInterfaces";
import { blankHref } from "../../utils/constants";
import IcomoonReact from "icomoon-react";
import iconSet from "../../fonts/selection.json";

const FormPreviousButton: React.FC<FormControlButtonProps> = ({onClick, isActive = true}) => {
    const {t} = useTranslation();

    const onClickAction = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        isActive && onClick();
    }

    return (
        <div className="form-navigation-previous-container">
            <a className="previous-button" href={blankHref} onClick={onClickAction} >
                <IcomoonReact className="previous-button-icon" iconSet={iconSet} icon="previous-button" />
                <span>{t('text-previous')}</span>
            </a>
        </div>
    )
}

export default FormPreviousButton;