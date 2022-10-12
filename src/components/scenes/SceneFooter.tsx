import React from "react";
import "./SceneFooter.scss";
import Logo from "../../images/logo-light.svg";

export interface SceneFooterProps {
    children: React.ReactNode
}

const SceneFooter: React.FC<SceneFooterProps> = ({children}) => {
    return (
        <div className="custom-scene-footer">
            <div className="footer-logo">
                <img alt="" src={Logo} />
            </div>
            <div className="footer-text">
                {children}
            </div>
        </div>
    )
}

export default SceneFooter;