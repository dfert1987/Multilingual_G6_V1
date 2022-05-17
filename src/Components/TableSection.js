import React from "react";
import AnchorCharts from "./Tables/AnchorCharts";
import MultilingualGlossaries from "./Tables/MultilingualGlossaries";
import NoticeNote from "./Tables/NoticeNote";
import Bookmark from "./Tables/Bookmark";
import Unit1Resources from "./Tables/Unit1Resources";
import Unit2Resources from "./Tables/Unit2Resources";
import Unit3Resources from "./Tables/Unit3Resources";
import Unit4Resources from "./Tables/Unit4Resources";
import Unit5Resources from "./Tables/Unit5Resources";
import Unit6Resources from "./Tables/Unit6Resources";
import ScrollBar from "./ScrollBar";
import "../Styles/Table.css";

export const TableSection = () => {
  return (
    <div className="main">
      <ScrollBar />
      <AnchorCharts id="AnchorCharts" />
      <MultilingualGlossaries id="MultilingualGlossaries" />
      <NoticeNote id="NoticeAndNote" />
      <Bookmark />
      <Unit1Resources id="Unit1" />
      <Unit2Resources id="Unit2" />
      <Unit3Resources id="Unit3" />
      <Unit4Resources id="Unit4" />
      <Unit5Resources id="Unit5" />
      <Unit6Resources id="Unit6" />
    </div>
  );
};

export default TableSection;
