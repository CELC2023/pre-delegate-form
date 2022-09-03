import React from "react";

import Tent from "../images/tent.svg";
import Ground from "../images/ground.svg";
import Trees from "../images/trees.svg";
import Logo from "../images/logo-light.svg";

const Footer: React.FC = () => {
    return (
        <div className="footer-container">
            <img className="tent" src={Tent} alt="" />
            <img className="trees" src={Trees} alt=""/>
            <img className="ground" src={Ground} alt="" />
            <img className="logo" src={Logo} alt="" />
        </div>
    )
}

export default Footer;