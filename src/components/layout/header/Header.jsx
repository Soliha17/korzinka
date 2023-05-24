import React from "react";
import { Outlet } from "react-router-dom";
import LanguageSelector from "../../molecules/LanguageSelector";

const Header = () => {
  return (
    <>
      <div>
        Header
        <LanguageSelector />
      </div>
      <Outlet />
    </>
  );
};

export default Header;
