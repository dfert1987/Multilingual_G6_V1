import React from "react";
import { AnchorChart } from "../Assets/Data/AnchorChart";
import { MultilingualResourceData } from "../Assets/Data/MultilingualResourceData";
import { NoticeAndNote } from "../Assets/Data/NoticeAndNote";
import { Unit1Letter } from "../Assets/Data/Unit1Letter";
import { Unit2Letter } from "../Assets/Data/Unit2Letter";
import { Unit3Letter } from "../Assets/Data/Unit3Letter";
import { Unit4Letter } from "../Assets/Data/Unit4Letter";
import { Unit5Letter } from "../Assets/Data/Unit5Letter";
import { Unit6Letter } from "../Assets/Data/Unit6Letter";
import { Link } from "react-scroll";

export const ScrollBar = () => {
  return (
    <div className="scroll-bar">
      <div className="title-and-buttons">
        <ul className="choices-container">
          {AnchorChart ? (
            <li className="navButton">
              <Link
                activeClass="active"
                to="AnchorCharts"
                spy={true}
                smooth={true}
              >
                Anchor Charts
              </Link>
            </li>
          ) : null}
          {MultilingualResourceData ? (
            <li className="navButton">
              <Link
                to="MultilingualGlossaries"
                activeClass="active"
                spy={true}
                smooth={true}
              >
                MultiLingual Glossaries
              </Link>
            </li>
          ) : null}
          {NoticeAndNote ? (
            <li className="navButton">
              <Link
                to="NoticeAndNote"
                activeClass="active"
                spy={true}
                smooth={true}
              >
                Notice and Note
              </Link>
            </li>
          ) : null}
          {Unit1Letter ? (
            <li className="navButton">
              <Link to="Unit1" spy={true} smooth={true} activeClass="active">
                Unit 1
              </Link>
            </li>
          ) : null}
          {Unit2Letter ? (
            <li className="navButton">
              <Link to="Unit2" spy={true} activeClass="active" smooth={true}>
                Unit 2
              </Link>
            </li>
          ) : null}
          {Unit3Letter ? (
            <li className="navButton">
              <Link to="Unit3" activeClass="active" spy={true} smooth={true} />
              Unit 3
            </li>
          ) : null}
          {Unit4Letter ? (
            <li className="navButton">
              <Link to="Unit4" activeClass="active" spy={true} smooth={true}>
                Unit 4
              </Link>
            </li>
          ) : null}
          {Unit5Letter ? (
            <li className="navButton">
              <Link to="Unit5" activeClass="active" spy={true} smooth={true}>
                Unit 5
              </Link>
            </li>
          ) : null}
          {Unit6Letter ? (
            <li className="navButton">
              <Link to="Unit6" activeClass="active" spy={true} smooth={true}>
                Unit 6
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default ScrollBar;
