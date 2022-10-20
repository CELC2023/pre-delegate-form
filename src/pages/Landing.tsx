import React from "react";
import "./Landing.scss";
import Logo from "../images/logo-light.svg";
import NextButton from "../images/next-button.svg";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FoothillsBandsScene } from "../components/scenes/Foothills";

const Landing: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div className="page-container landing-container">
            <FoothillsBandsScene /> 
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
            <img className="logo" src={Logo} alt="" />
            <div className="begin-container">
                <Link to={'/delegate'} className="start-button" tabIndex={1}>
                    <span>{t('text-start', {lng: 'en'} )} | {t('text-start', {lng: 'fr'} )}</span>
                    <img className="next-button-icon" src={NextButton} alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Landing;