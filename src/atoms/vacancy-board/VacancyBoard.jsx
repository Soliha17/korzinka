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
        <h3>Mahsulot menejeri</h3>
        <div className="infos__vacancy-board">
          <span>
            <img src={Location} alt="Location" />
            <p>O'zbekistan, Toshkent</p>
          </span>
          <span>
            <img src={Chart} alt="Chart" />
            <p>To'liq stavka</p>
          </span>
          <span>
            <img src={Plan} alt="Plan" />
            <p>4 yil</p>
          </span>
          <span>
            <img src={Cashback} alt="Cashback" />
            <p>12 mln - 18mln</p>
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
