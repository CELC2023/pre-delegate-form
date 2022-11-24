import React from "react";
import "./Landing.scss";
import { useTranslation } from "react-i18next";
import { FoothillsScene } from "../components/scenes/Foothills";

const Landing: React.FC = () => {
    const {t} = useTranslation();
    return (
        <div className="page-container landing-container">
            <FoothillsScene /> 
            <div className="welcome-container">
                <div className="english-welcome welcome-text">
                    <p className="text-welcome">Welcome</p>
                    <p className="text-description">to the</p>
                    <p className="text-portal">CELC registration portal</p>
                </div>
                <div className="french-welcome welcome-text">
                    <p className="text-welcome">Bienvenue</p>
                    <p className="text-description">sur le</p>
                    <p className="text-portal">portail d'inscription CCLI</p>
                </div>
            </div>
            <div className="registration-closed-container">
                <p>REGISTRATION IS NOW CLOSED!</p>
                <p>Les inscriptions sont maintenant terminées!</p>
            </div>
        </div>
    )
}

export default Landing;