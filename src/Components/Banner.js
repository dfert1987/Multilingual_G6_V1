import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="text-container">
        <div className="grade-and-title">
          <div className="grade-container">
            <h4 className="grade">GRADE</h4>
            <h2 className="number">6</h2>
          </div>
          <h1 className="main-title">Multilingual Resources</h1>
        </div>
        <div className="navigation-container">
          <Link className="nav-link left" to="/">
            <h3 className="nav-item">Diagram</h3>
          </Link>
          <Link className="nav-link" to="/tablesection">
            <h3 className="nav-item">Resources</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
