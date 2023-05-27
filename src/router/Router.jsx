import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Header from "../organisms/header/Header";
import VacancyFull from "../pages/vacancy-full/VacancyFull";
import Resume from "../pages/resume/Resume";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/vacancyfull" element={<VacancyFull />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
