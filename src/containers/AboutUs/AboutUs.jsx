import React from "react";
import knife from "../../assets/knife.png";
import "./aboutus.css";

const AboutUs = () => (
  <div
    className="hda__aboutus hda__bg flex__center section__padding"
    id="about"
  >
    <div className="hda__aboutus-content flex__center">
      <div className="hda__aboutus-content_about">
        <h1 className="headtext__cormorant">Sobre nosotros</h1>

        <p className="p__opensans">
          Nuestra cocina es auténtica, se elabora artesanalmente cada día con
          ingredientes de alta calidad por el Chef ejecutivo Simone Mua, que
          viene de Milán, Italia.
        </p>
      </div>

      <div className="hda__aboutus-content_knife flex__center">
        <img src={knife} draggable="false" alt="about_knife" />
      </div>

      <div className="hda__aboutus-content_history">
        <h1 className="headtext__cormorant">Nuestra mision</h1>

        <p className="p__opensans">
          Buscamos que vivas una experiencia entorno a una mesa llena de
          historias que contar. Storia d’amore nació para que juntos celebremos
          las cosas buenas de la vida.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
