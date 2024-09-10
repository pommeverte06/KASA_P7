import React from "react";
import Banner from "../components/Banner/Banner";
import aboutBannerImage from "../assets/img-about.png";

function About() {
  return (
    <div>
      <main>
        <Banner imageSrc={aboutBannerImage} />
      </main>
    </div>
  );
}

export default About;
