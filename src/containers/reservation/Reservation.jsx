import React from "react";
import { Link } from "react-router-dom";
import tenedor from "../../assets/tenedor.jpg";
import "./reservation.css";

const Reservation = () => {
  return (
    <div className="hda__reservation">
      <div className="hda__reservation-image">
        <img src={tenedor} draggable="false" alt="tenedor" />
      </div>
      <div className="hda__reservation-content">
        <h1>Reunamonos a cenar esta noche</h1>
        <p>Gracias por elegirnos, sera un placer tenerte con nosotros.</p>
        <div className="hda__reservation-content__input">
          <div className="hda__reservation-content__input-button">
            <Link to={"/reservation"} className="hda__-link">
              <button>Reservar ahora</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
