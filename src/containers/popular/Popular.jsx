import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./popular.css";
import { data } from "../../PopularData";
import { Article } from "../../components";

const Popular = () => {
  return (
    <div className="hda__popular">
      <div className="hda__popular-title">
        <h2>~ Populares & casicos de la casa ~</h2>
      </div>
      <div className="hda__popular-slider">
        <div className="hda__popular-slider__container">
          {data.map((item) => (
            <Article
              className="article"
              image={item.img}
              keyid={item.id}
              nombre={item.name}
              precio={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
