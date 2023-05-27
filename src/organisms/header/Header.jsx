import React from "react";
import { Link, Outlet } from "react-router-dom";

import KorzinkaLogo from "../../assets/images/korzinka-logo.png";

import "./Header.css";
import HeaderMenu from "../../molecules/header-menu/HeaderMenu";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-content container">
          <div>
            <Link to={"/"}>
              <img
                src={KorzinkaLogo}
                className="header-logo"
                alt="KorzinkaLogo"
              />
            </Link>
          </div>
          <HeaderMenu />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
