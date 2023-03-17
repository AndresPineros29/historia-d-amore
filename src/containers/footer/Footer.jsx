import React from "react";
import { FaGithub } from "react-icons/fa";
import Logo from "../../assets/LOGOS-STORIA.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="hda__footer">
      <div className="hda__footer-text">
        <h3>
          Made whit love by{" "}
          <a
            className="hda__footer-a"
            href="https://github.com/AndresPineros29/code-online"
            target="_blank"
          >
            AndresPineros29 <FaGithub />
          </a>
        </h3>
      </div>
      <div className="hda__footer-derechos">
        <img src={Logo} draggable="false" alt="Logo" />
        <h3>
          Trabajo inspirado en el restaurante{" "}
          <a
            className="hda__footer-a"
            href="https://co.restaurantestoriadamore.com/"
            target="_blank"
          >
            Historia d' amore
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
