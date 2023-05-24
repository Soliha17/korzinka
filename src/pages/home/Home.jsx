import React from "react";

import { useTranslation } from "react-i18next";

import "./Home.css";
import Hero from "../../organisms/hero/Hero";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Hero />
      {/* <div>
        <h1>{t("greeting")}</h1>
        <p>{t("welcome")}</p>
      </div> */}
    </>
  );
};

export default Home;
