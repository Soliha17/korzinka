import React from "react";

import SmartLogo from "../../assets/images/smartlogo-footer.svg";

import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const isLanguageEnglish = i18n.language === "en";

  return (
    <div className="footer">
      {isLanguageEnglish ? (
        <>
          <p>{t("footerText")}</p>
          <div>
            <img src={SmartLogo} alt="SmartLogo" />
          </div>
        </>
      ) : (
        <>
          <div>
            <img src={SmartLogo} alt="SmartLogo" />
          </div>
          <p>{t("footerText")}</p>
        </>
      )}
    </div>
  );
};

export default Footer;
