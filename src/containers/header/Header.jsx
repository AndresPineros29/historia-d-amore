import React from "react";
import mainImage from "../../assets/Main-image.png";
import "./header.css";

const Header = () => {
  return (
    <div className="hda__header">
      <div className="hda__header-container">
        <div className="hda__header-container__info">
          <h1>Disfruta la auténtica cocina Italiana</h1>
          <p>
            Queremos invitarte a que ames el estilo de vida italiano desde
            nuestra perspectiva. En cada uno de nuestros restaurantes cuidamos
            cada detalle para que cada que nos visites puedas contagiarte de
            nuestra energía positiva.
          </p>
        </div>
        <div className="hda__header-container__image">
          <img src={mainImage} draggable="false" alt="mainImage" />
        </div>
      </div>
    </div>
  );
};

export default Header;
