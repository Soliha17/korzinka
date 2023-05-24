import React from "react";

import LanguageSelector from "../../atoms/LanguageSelector";

import YouTube from "../../assets/images/youtube.svg";
import Telegram from "../../assets/images/telegram.svg";
import Instagram from "../../assets/images/instagram.svg";
import Facebook from "../../assets/images/facebook.svg";

import "./HeaderMenu.css";

const HeaderMenu = () => {
  return (
    <div className="header-menu">
      <div className="social-group__header-menu">
        <span>
          <a href="/">Veb-sayt</a>
        </span>
        <span>
          <img src={YouTube} alt="YouTube" />
        </span>
        <span>
          <img src={Telegram} alt="Telegram" />
        </span>
        <span>
          <img src={Instagram} alt="Instagram" />
        </span>
        <span>
          <img src={Facebook} alt="Facebook" />
        </span>
      </div>
      <LanguageSelector />
    </div>
  );
};

export default HeaderMenu;
