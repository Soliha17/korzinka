import React from "react";

import { useTranslation } from "react-i18next";

import "./Home.css";

import Hero from "../../organisms/hero/Hero";
import HomeContent from "../../organisms/home-content/HomeContent";
import Footer from "../../organisms/footer/Footer";

const Home = () => {

  return (
    <>
      <Hero />
      <HomeContent />
      <Footer />
      {/* <div>
        <h1>{t("greeting")}</h1>
        <p>{t("welcome")}</p>
      </div> */}
    </>
  );
};

export default Home;
