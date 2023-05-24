import React from "react";
import { useTranslation } from "react-i18next";

import HomeSelects from "../../molecules/home-selects/HomeSelects";

import "./HomeContent.css";
import VacancyBoard from "../../atoms/vacancy-board/VacancyBoard";

const HomeContent = () => {
  const { t } = useTranslation();

  return (
    <div className="home-content container">
      <h1>{t("ourVacanciesText")}</h1>
      <HomeSelects />
      <div className="vacancy-boards">
        <VacancyBoard />
        <VacancyBoard />
        <VacancyBoard />
        <VacancyBoard />
        <VacancyBoard />
        <VacancyBoard />
        <VacancyBoard />
        <VacancyBoard />
        <VacancyBoard />
        <VacancyBoard />
      </div>
    </div>
  );
};

export default HomeContent;
