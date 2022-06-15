import React from "react";
import DiagramSVG from "./DiagramSVG";
import Modals from "./Modals";
import Key from "../../Assets/SVGs/Multi_Key.png";
import "../../Styles/App.css";

export const Diagram = ({
  anchorCharts,
  setAnchorCharts,
  multiGlossaries,
  setMultiGlossaries,
  notice,
  setNotice,
  multiParent,
  setMultiParent,
  multiSummaries,
  setMultiSummaries,
  authentic,
  setAuthentic,
  summaries,
  setSummaries,
  textSketch,
  setTextSketch,
}) => {
  return (
    <div className="main-diagram">
      <div className="diagram-container">
        <DiagramSVG
          className="diagram-svg"
          alt="diagra"
          anchorCharts={anchorCharts}
          setAnchorCharts={setAnchorCharts}
          multiGlossaries={multiGlossaries}
          setMultiGlossaries={setMultiGlossaries}
          notice={notice}
          setNotice={setNotice}
          multiParent={multiParent}
          setMultiParent={setMultiParent}
          multiSummaries={multiSummaries}
          setMultiSummaries={setMultiSummaries}
          authentic={authentic}
          setAuthentic={setAuthentic}
          summaries={summaries}
          setSummaries={setSummaries}
          textSketch={textSketch}
          setTextSketch={setTextSketch}
        />
        <div className="key-container">
          <img className="key" alt="key" src={Key} />
        </div>
      </div>
      <div className="modals-container">
        <Modals
          anchorCharts={anchorCharts}
          setAnchorCharts={setAnchorCharts}
          multiGlossaries={multiGlossaries}
          setMultiGlossaries={setMultiGlossaries}
          notice={notice}
          setNotice={setNotice}
          multiParent={multiParent}
          setMultiParent={setMultiParent}
          multiSummaries={multiSummaries}
          setMultiSummaries={setMultiSummaries}
          authentic={authentic}
          setAuthentic={setAuthentic}
          summaries={summaries}
          setSummaries={setSummaries}
          textSketch={textSketch}
          setTextSketch={setTextSketch}
          className="modals"
        />
      </div>
    </div>
  );
};

export default Diagram;
