import React from "react";
import "./Alert.scss";

export interface AlertProps {
    title?: string,
    text?: string,
    onYes?: () => void;
    onNo?: () => void; 
    yesText?: string,
    noText?: string
}

const Alert: React.FC<AlertProps> = ({noText = "", onYes = () => {}, onNo = () => {}, title = "", text = "", yesText = ""}) => {
    return (
        <div className="alert">
            <div className="alert--container">
            <p className="alert--title">{title}</p>
                <p className="alert--text">{text}</p>
                <div className="alert--options">
                    <div className="btn btn--secondary" onClick={onNo}>{noText}</div>
                    <div className="btn" onClick={onYes}>{yesText}</div>
                </div>
            </div>
        </div>
    )
}

export default Alert;