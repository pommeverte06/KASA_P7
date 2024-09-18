import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/card";
import homeBannerImage from "../assets/img-home.png";
import logements from "../data/logements.json";
import "./home.css";

function Home() {
  const [visibleCount, setVisibleCount] = useState(6); // Nombre initial de logements visibles

  const handleLoadMore = () => {
    setVisibleCount(visibleCount + 6); // Affiche 6 logements supplémentaires
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
            {logements.slice(0, visibleCount).map((logement) => (
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

        {visibleCount < logements.length && (
          <div className="load-more-container">
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
