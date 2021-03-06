import React from "react";
import "./Landing.scss";
import Tent from "../images/tent.svg";
import Ground from "../images/ground.svg";
import Trees from "../images/trees.svg";
import Logo from "../images/logo-light.svg";
import NextButton from "../images/next-button.svg";

import RedMountain from "../images/red-mountain.svg";
import YellowMountain from "../images/yellow-mountain.svg";
import BlueBackground from "../images/back-blue.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Landing: React.FC = () => {
    const {t, i18n} = useTranslation();

    return (
        <div className="page-container landing-container">
            <img className="mountain-yellow" src={YellowMountain} />
            <img className="mountain-red" src={RedMountain} />
            <img className="blue-background" src={BlueBackground} />
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
            <div className="begin-container">
                <Link to={'/predelegate'} className="start-button">
                    <span>{t('text-start', {lng: 'en'} )} | {t('text-start', {lng: 'fr'} )}</span>
                    <img className="next-button-icon" src={NextButton} />
                </Link>
            </div>
            <div className="footer-container">
                <img className="tent" src={Tent} />
                <img className="trees" src={Trees}/>
                <img className="ground" src={Ground} />
                <img className="logo" src={Logo} />
            </div>
        </div>
    )
}

export default Landing;