import React from "react";
import "./Landing.scss";

const Landing: React.FC = () => {
    return (
        <div className="landing-page-container">
            <div className="welcome-container">
                <div className="english-welcome welcome-text">
                    <p>Welcome</p>
                    <p>to the</p>
                    <p>CELC registration portal</p>
                </div>
                <div className="french-welcome welcome-text">
                    <p>Bienvenue</p>
                    <p>sur le</p>
                    <p>portail d'inscription CCLI</p>
                </div>
            </div>
            <div className="begin-container">
                <a>START | début</a>
            </div>
        </div>
    )
}

export default Landing;