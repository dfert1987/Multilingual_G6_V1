import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Banner.css";

const Banner = () => {
  const [dimmed, setDimmed] = useState("Diagram");

  const getClass = (item) => {
    if (item === "dia") {
      if (dimmed === "Diagram") {
        return "nav-item grey";
      } else return "nav-item";
    } else if (item === "res") {
      if (dimmed === "Diagram") {
        return "nav-item";
      } else return "nav-item grey";
    }
    return null;
  };

  return (
    <div className="banner-container">
      <div className="text-container">
        <div className="grade-and-title">
          <div className="grade-container">
            <h4 className="grade">GRADE</h4>
            <h2 className="number">6</h2>
          </div>
          <h1 className="main-title">Multilingual Learner Resources</h1>
        </div>
        <div className="navigation-container">
          <Link
            className="nav-link left"
            to="/"
            onClick={() => setDimmed("Diagram")}
          >
            <h3 className={getClass("dia")}>Diagram</h3>
          </Link>
          <Link
            className="nav-link"
            to="/tablesection"
            onClick={() => setDimmed("Resources")}
          >
            <h3 className={getClass("res")}>Resources</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
