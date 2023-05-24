import React from "react";
import { Outlet } from "react-router-dom";

import HeaderContent from "../../molecules/hero-content/HeaderContent";

import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <HeaderContent />
      </div>
      <Outlet />
    </>
  );
};

export default Header;
