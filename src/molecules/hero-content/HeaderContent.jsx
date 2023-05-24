import React from "react";

import HeaderMenu from "../header-menu/HeaderMenu";

import KorzinkaLogo from "../../assets/images/korzinka-logo.png";

import "./HeaderContent.css";

const HeaderContent = () => {
  return (
    <div className="header-content container">
      <div>
        <img src={KorzinkaLogo} className="header-logo" alt="KorzinkaLogo" />
      </div>
      <HeaderMenu />
    </div>
  );
};

export default HeaderContent;
