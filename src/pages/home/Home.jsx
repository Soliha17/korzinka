import React from "react";

import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      Home
      <div>
        <h1>{t("greeting")}</h1>
        <p>{t("welcome")}</p>
      </div>
    </div>
  );
};

export default Home;
