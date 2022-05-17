import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Banner from "./Components/Banner";
import TableSection from "./Components/TableSection";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AnimatePresence>
      <HashRouter basename="/">
        <Banner />
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/tablesection" element={<TableSection />} />
        </Routes>
      </HashRouter>
    </AnimatePresence>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
