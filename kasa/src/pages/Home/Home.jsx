import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/card";
import homeBannerImage from "../../assets/img-home.png";
import logements from "../../data/logements.json";
import "./home.css";

function Home() {
  const [visibleCount, setVisibleCount] = useState(6); 
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024); 

  // changements de taille d'écran
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024); 
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(visibleCount + 6); // affiche 6 logements en plus sur desktop
  };

  return (
    <div>
      <main>
        <Banner
          imageSrc={homeBannerImage}
          text="Chez vous, partout et ailleurs"
        />
        <div className="background-home">
          <div className="gallery">
            
            {logements
              .slice(0, isDesktop ? visibleCount : logements.length)
              .map((logement) => (
                <Link
                  to={`/logement/${logement.id}`}
                  key={logement.id}
                  style={{ textDecoration: "none" }}
                >
                  <Card cover={logement.cover} title={logement.title} />
                </Link>
              ))}
          </div>
        </div>

        
        {isDesktop && visibleCount < logements.length && (
          <div className="load-more-container desktop-only">
            <button className="load-more" onClick={handleLoadMore}>
              Voir plus
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;
