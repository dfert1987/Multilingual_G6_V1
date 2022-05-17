import React, { useEffect, useState } from "react";
import { AnchorChart } from "../Assets/Data/AnchorChart";
import { MultilingualResourceData } from "../Assets/Data/MultilingualResourceData";
import { NoticeAndNote } from "../Assets/Data/NoticeAndNote";
import { Unit1Letter } from "../Assets/Data/Unit1Letter";
import { Unit2Letter } from "../Assets/Data/Unit2Letter";
import { Unit3Letter } from "../Assets/Data/Unit3Letter";
import { Unit4Letter } from "../Assets/Data/Unit4Letter";
import { Unit5Letter } from "../Assets/Data/Unit5Letter";
import { Unit6Letter } from "../Assets/Data/Unit6Letter";
import { Link, animateScroll as scroll } from "react-scroll";

export const ScrollBar = () => {
  return (
    <div className="scroll-bar">
      <div className="title-and-buttons">
        <ul className="choices-container">
          {AnchorChart ? (
            <li className="navButton">
              <Link
                activeClass="active"
                to={AnchorChart}
                spy={true}
                smooth={true}
              />
              Anchor Charts
            </li>
          ) : null}
          {MultilingualResourceData ? (
            <li className="navButton">
              <Link to="MultilingualResources" spy={true} smooth={true} />
              Multilingual Resources
            </li>
          ) : null}
          {NoticeAndNote ? (
            <li className="navButton">
              <Link to="NoticeAndNote" spy={true} smooth={true} />
              Notice and Note
            </li>
          ) : null}
          {Unit1Letter ? (
            <li className="navButton">
              <Link to="Unit1" spy={true} smooth={true} />
              Unit 1
            </li>
          ) : null}
          {Unit2Letter ? (
            <li className="navButton">
              <Link to="Unit2" spy={true} smooth={true} />
              Unit 2
            </li>
          ) : null}
          {Unit3Letter ? (
            <li className="navButton">
              <Link to="Unit3" spy={true} smooth={true} />
              Unit 3
            </li>
          ) : null}
          {Unit4Letter ? (
            <li className="navButton">
              <Link to="Unit4" spy={true} smooth={true} />
              Unit 4
            </li>
          ) : null}
          {Unit5Letter ? (
            <li className="navButton">
              <Link to={Unit5Letter} spy={true} smooth={true} />
              Unit 5
            </li>
          ) : null}
          {Unit6Letter ? (
            <li className="navButton">
              <Link to={Unit6Letter} spy={true} smooth={true} />
              Unit 6
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default ScrollBar;
