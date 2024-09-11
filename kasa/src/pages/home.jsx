import React from "react";
import { Link } from 'react-router-dom';  // importe le Link pour les liens
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
              <Link to={`/logement/${logement.id}`} key={logement.id} style={{ textDecoration: 'none' }} >
              <Card
                // key={logement.id}
                cover={logement.cover}
                title={logement.title}
              />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
