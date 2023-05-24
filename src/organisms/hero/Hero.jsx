import React from "react";

import "./Hero.css";

import HeroContent from "../../molecules/hero-content/HeroContent";

import KorzinkaHero from "../../assets/images/korzinka-hero.png";

const Hero = () => {
  return (
    <div className="hero container">
      <HeroContent />
      <div className="hero-img">
        <img src={KorzinkaHero} alt="KorzinkaHero" />
      </div>
    </div>
  );
};

export default Hero;
