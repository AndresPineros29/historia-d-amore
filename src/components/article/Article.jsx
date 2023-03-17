import React from "react";
import "./article.css";

const Article = ({ image, keyid, nombre, precio }) => {
  return (
    <div className="hda__article">
      <div className="hda__article-container">
        <div className="hda__article-container-image">
          <img src={image} draggable="false" key={keyid} />
        </div>
        <div className="hda__article-container-info">
          <h3>{nombre}</h3>
          <h3>{precio}</h3>
        </div>
      </div>
    </div>
  );
};

export default Article;
