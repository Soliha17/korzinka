import React from "react";
import ReactDOM from "react-dom/client";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import "./index.css";

import Router from "./router/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18n}>
    <Router />
  </I18nextProvider>
);
