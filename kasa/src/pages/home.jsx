import React from "react";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/card";
import homeBannerImage from "../assets/img-home.png";
import logements from "../data/logements.json";
import "./home.css";

function Home() {
  return (
    <div>
      <main>
        <Banner
          imageSrc={homeBannerImage}
          text="Chez vous, partout et ailleurs"
        />
        <div className="background-home">
          <div className="gallery">
            {logements.map((logement) => (
              <Card
                key={logement.id} // Utiliser l'ID comme clé unique
                cover={logement.cover} // Passer l'image cover
                title={logement.title} // Passer le titre
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
