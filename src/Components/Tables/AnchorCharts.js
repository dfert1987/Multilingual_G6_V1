import React, { useState, useEffect } from "react";
import { AnchorChart } from "../../Assets/Data/AnchorChart";
import PDFIcon from "../../Assets/Icons/PDFIcon.png";
import PPTIcon from "../../Assets/Icons/PPTIcon.png";
import "../../Styles/Table.css";

export const AnchorCharts = () => {
  const [topics, setTopics] = useState();
  const [englishPDFs, setEnglishPDFs] = useState();
  const [presentations, setPresentations] = useState();
  const [spanishPDFs, setSpansihPDFs] = useState();

  useEffect(() => {
    let justTopics = AnchorChart.map((item) => {
      return item.Topic;
    });
    setTopics(justTopics);

    let justEnglish = AnchorChart.map((item) => {
      return item.EnglishPDFLink;
    });
    setEnglishPDFs(justEnglish);

    let justPesentations = AnchorChart.map((item) => {
      return item.PresentationLink;
    });
    setPresentations(justPesentations);

    let justSpanish = AnchorChart.map((item) => {
      return item.SpanishPDFLink;
    });
    setSpansihPDFs(justSpanish);
  }, []);

  const stripes = (index) => {
    if (index === 0 || index % 2 === 0) {
      return "white";
    } else {
      return "tan";
    }
  };

  const showTopics = () => {
    if (topics) {
      return topics.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className={`info-row ${stripes(index)}`}>
              <p className="topic-item">{item}</p>
            </div>
          </React.Fragment>
        );
      });
    } else return null;
  };

  const showEnglish = () => {
    if (englishPDFs) {
      return englishPDFs.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {item !== "na" ? (
              <div className={`info-row icons ${stripes(index)}`}>
                <a href={item}>
                  <img className="icon-input" alt="English PDF" src={PDFIcon} />
                </a>
              </div>
            ) : (
              <div className={`info-row icons ${stripes(index)}`}>
                <p className="icon-input"> </p>
              </div>
            )}
          </React.Fragment>
        );
      });
    } else return null;
  };

  const showPresentations = () => {
    if (presentations) {
      return presentations.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {item !== "na" ? (
              <div className={`info-row icons ${stripes(index)}`}>
                <a href={item}>
                  <img
                    className="icon-input"
                    alt="Presentation"
                    src={PPTIcon}
                  />
                </a>
              </div>
            ) : (
              <div className={`info-row icons ${stripes(index)}`}>
                <p className="icon-input"> </p>
              </div>
            )}
          </React.Fragment>
        );
      });
    }
  };

  const showSpanish = () => {
    if (spanishPDFs) {
      return spanishPDFs.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {item !== "na" ? (
              <div className={`info-row icons ${stripes(index)}`}>
                <a href={item}>
                  <img className="icon-input" alt="Spanish PDF" src={PDFIcon} />
                </a>
              </div>
            ) : (
              <div className={`info-row icons ${stripes(index)}`}>
                <p className="icon-input"> </p>
              </div>
            )}
          </React.Fragment>
        );
      });
    }
  };

  return (
    <div className="anchor-charts-container">
      <section className="above-table">
        <h4 className="paragraph-header">Anchor Charts</h4>

      </section>
      <section className="anchor-chart-table-container">
        <section className="column topic">
          <div className="header-row topic-header">
            <h4 className="header-text topic-header-text">Topic</h4>
          </div>
          <div className="main-column topics-text">{showTopics()}</div>
        </section>
        <section className="column link">
          <div className="header-row link-header">
            <h4 className="header-text link-header-text">Enlglish PDF</h4>
          </div>
          <div className="main-column links english">{showEnglish()}</div>
        </section>
        <section className="column link">
          <div className="header-row link-header">
            <h4 className="header-text link-header-text">Presentation</h4>
          </div>
          <div className="main-column links presentation">
            {showPresentations()}
          </div>
        </section>
        <section className="column link">
          <div className="header-row link-header-right">
            <h4 className="header-text link-header-text">Spanish PDF</h4>
          </div>
          <div className="main-column links">{showSpanish()}</div>
        </section>
      </section>
    </div>
  );
};

export default AnchorCharts;
