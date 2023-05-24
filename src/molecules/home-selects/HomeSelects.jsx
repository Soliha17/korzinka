import React from "react";
import { useTranslation } from "react-i18next";

import { Select } from "antd";

const HomeSelects = () => {
  const { t } = useTranslation();

  return (
    <div className="home-selects">
      <Select
        className="home-select"
        placeholder={t("homeSelectOne")}
        options={[
          {
            value: "buxoro",
            label: "Buxoro",
          },
          {
            value: "toshkent",
            label: "Toshkent",
          },
        ]}
      />
      <Select
        className="home-select"
        placeholder={t("homeSelectTwo")}
        options={[
          {
            value: "savdo",
            label: "Savdo",
          },
          {
            value: "sanoat",
            label: "Sanoat",
          },
        ]}
      />
      <Select
        className="home-select"
        placeholder={t("homeSelectThree")}
        options={[
          {
            value: "buxoro",
            label: "Buxoro",
          },
          {
            value: "toshkent",
            label: "Toshkent",
          },
        ]}
      />
    </div>
  );
};

export default HomeSelects;
