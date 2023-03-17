import React from "react";
import pizza from "../../assets/pizza.jpg";
import "./reservationpage.css";

const ReservationPage = () => {
  return (
    <div className="hda__reservation">
      <div className="hda__reservation-container">
        <div className="hda__reservation-container__title">
          <h2>Reservaticiones</h2>
        </div>
        <div className="hda__reservation-container__info">
          <div className="hda__reservation-container__info-image">
            <img src={pizza} alt="pizza" />
          </div>
          <div className="hda__reservation-container__info-input">
            <input type="text" placeholder="Nombre" />
            <input type="tel" placeholder="No. Telefonico" />
            <select>
              <option value="0">No. Personas</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <input type="date" />
            <select>
              <option value="0">Hora</option>
              <option value="12">12:00</option>
              <option value="13">13:00</option>
              <option value="14">14:00</option>
              <option value="15">15:00</option>
              <option value="16">16:00</option>
              <option value="17">17:00</option>
              <option value="18">18:00</option>
              <option value="19">19:00</option>
              <option value="20">20:00</option>
              <option value="21">21:00</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
