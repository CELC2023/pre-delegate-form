import React from "react";
import { useTranslation } from "react-i18next";
import { FormControlButtonProps } from "./CommonInterfaces";
import { blankHref } from "../../utils/constants";
import IcomoonReact from "icomoon-react";
import iconSet from "../../fonts/selection.json";

const FormNextButton: React.FC<FormControlButtonProps> = ({onClick, isActive = true, customText = ""}) => {
    const {t} = useTranslation();

    const onClickAction = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        isActive && onClick();
    }
    
    return (
        <div className="form-navigation-next-container">
            <a className="next-button" href={blankHref} onClick={onClickAction} >
                <span>{customText === "" ? t('text-next') : customText }</span>
                <IcomoonReact className="next-button-icon" iconSet={iconSet} icon="next-button" />
            </a>
        </div>
    )
}

export default FormNextButton;