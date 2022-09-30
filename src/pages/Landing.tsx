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
    const {t} = useTranslation();

    return (
        <div className="page-container landing-container">
            <img className="mountain-yellow" src={YellowMountain} alt="" />
            <img className="mountain-red" src={RedMountain} alt="" />
            <div className="registration-closed-container">
                <p>Pre-REGISTRATION IS NOW CLOSED!</p>
                <p>Les préinscriptions sont maintenant terminées!</p>
            </div>
            <div className="footer-container">
                <img className="tent" src={Tent} alt="" />
                <img className="trees" src={Trees} alt="" />
                <img className="ground" src={Ground} alt="" />
                <img className="logo" src={Logo} alt="" />
            </div>
        </div>
    )
}

export default Landing;