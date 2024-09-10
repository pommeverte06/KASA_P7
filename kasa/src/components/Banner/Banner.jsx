import React from "react";
import "./banner.css";

function Banner({ imageSrc, text }) {
  return (
    <div className="banner">
      <img
        src={imageSrc}
        alt="bannière avec photo de paysage"
        className="banner-image"
      />
      <div className="banner-text">
        <h1>{text}</h1>
      </div>
    </div>
  );
}

export default Banner;
