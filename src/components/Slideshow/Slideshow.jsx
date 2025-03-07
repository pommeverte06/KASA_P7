import React, { useState } from "react";
import "./slideshow.css";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // fonction image précédente
  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // fonction image suivante
  const nextSlide = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slideshow">
      <img
        className="slideshow-image"
        src={pictures[currentIndex]}
        alt={`slide ${currentIndex + 1}`}
      />
      {pictures.length > 1 && ( // affichage des flèches pour les locations avec plus d'une seule image
        <>
          <img
            src={arrowLeft}
            alt="photo précédente"
            className="slideshow-arrow slideshow-arrow-left"
            onClick={previousSlide}
          />
          <img
            src={arrowRight}
            alt="photo suivante"
            className="slideshow-arrow slideshow-arrow-right"
            onClick={nextSlide}
          />
        </>
      )}

      {pictures.length > 1 && ( // compteur si plus d'une image
        <p className="slideshow-counter">
          {currentIndex + 1}/{pictures.length}
        </p>
      )}
    </div>
  );
}

export default Slideshow;
