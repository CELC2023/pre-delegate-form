import React from "react";
import "./Alert.scss";

export interface AlertProps {
    title?: string,
    text?: string,
    onYes?: () => void;
    onNo?: () => void; 
    yesText?: string,
    noText?: string,
    AlertBody?: React.FC<any>,
    disableYes?: boolean,
    disableNo?: boolean
}

const Alert: React.FC<AlertProps> = ({noText = "", onYes = () => {}, onNo = () => {}, title = "", text = "", yesText = "", AlertBody = null, disableNo = false, disableYes = false}) => {
    return (
        <div className="alert">
            <div className="alert--container">
            <p className="alert--title">{title}</p>
                {
                    AlertBody ? <AlertBody /> : <p className="alert--text">{text}</p>
                }
                <div className="alert--options">
                    {
                        !disableNo &&
                        <div className="btn btn--secondary" onClick={onNo}>{noText}</div>
                    }
                    {
                        !disableYes &&
                        <div className="btn" onClick={onYes}>{yesText}</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Alert;