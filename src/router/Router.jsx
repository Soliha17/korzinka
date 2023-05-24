import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/layout/header/Header";
import Home from "../pages/home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
