import React from "react";

import "./HeroContent.css";
import { useTranslation } from "react-i18next";

const HeroContent = () => {
  const { t } = useTranslation();

  return (
    <div className="hero-content">
      <h1>{t("heroTitle")}</h1>
      <p>{t("heroText")}</p>
      <button className="primary-btn">{t("heroBtn")}</button>
    </div>
  );
};

export default HeroContent;
