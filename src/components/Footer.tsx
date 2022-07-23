import React from "react";

import Tent from "../images/tent.svg";
import Ground from "../images/ground.svg";
import Trees from "../images/trees.svg";
import Logo from "../images/logo-light.svg";

const Footer: React.FC = () => {
    return (
        <div className="footer-container">
            <img className="tent" src={Tent} />
            <img className="trees" src={Trees}/>
            <img className="ground" src={Ground} />
            <img className="logo" src={Logo} />
        </div>
    )
}

export default Footer;