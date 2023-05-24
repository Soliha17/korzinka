import React from "react";
import { useTranslation } from "react-i18next";

import "./VacancyBoard.css";

import Location from "../../assets/images/location-icon.svg";
import Chart from "../../assets/images/chart-icon.svg";
import Plan from "../../assets/images/plan-icon.svg";
import Cashback from "../../assets/images/cashback-icon.svg";

const VacancyBoard = () => {
  const { t } = useTranslation();

  return (
    <div className="vacancy-board">
      <div className="content__vacancy-board">
        <h3>{t("homeVacancyTitle")}</h3>
        <div className="infos__vacancy-board">
          <span>
            <img src={Location} alt="Location" />
            <p>{t("homeVacancyLocation")}</p>
          </span>
          <span>
            <img src={Chart} alt="Chart" />
            <p>{t("homeVacancyTime")}</p>
          </span>
          <span>
            <img src={Plan} alt="Plan" />
            <p>{t("homeVacancyExp")}</p>
          </span>
          <span>
            <img src={Cashback} alt="Cashback" />
            <p>{t("homeVacancySalary")}</p>
          </span>
        </div>
      </div>
      <button className="default-btn">
        {t("homeVacancySubmitApplication")}
      </button>
    </div>
  );
};

export default VacancyBoard;
