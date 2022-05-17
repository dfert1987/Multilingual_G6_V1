import React, { useState, useEffect } from "react";
import { Unit1Letter } from "../../Assets/Data/Unit1Letter";
import { Unit1AuthenticText } from "../../Assets/Data/Unit1AuthenticText";
import { Unit1SelectionSupport } from "../../Assets/Data/Unit1SelectionSupport";
import PDFIcon from "../../Assets/Icons/PDFIcon.png";
import TOCEditIcon from "../../Assets/Icons/TOCEditIcon.svg";
import "../../Styles/Resources.css";

export const Unit1Resources = () => {
  const [spanish, setSpanish] = useState();
  const [portuguese, setPortuguese] = useState();
  const [haitian, setHaitian] = useState();

  useEffect(() => {
    let justSpanish = Unit1Letter.map((item) => {
      return item.Spanish;
    });
    setSpanish(justSpanish);
    let justPort = Unit1Letter.map((item) => {
      return item.Portuguese;
    });
    setPortuguese(justPort);
    let justHaitian = Unit1Letter.map((item) => {
      return item.HaitianCreole;
    });
    setHaitian(justHaitian);
  }, []);

  const stripes = (index) => {
    if (index === 0 || index % 2 === 0) {
      return "white";
    } else {
      return "tan";
    }
  };

  const firstColumn = () => {
    if (Unit1Letter) {
      return Unit1Letter.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className={`info-row icons ${stripes(index)}`}>
              <p className="icon-input"> </p>
            </div>
          </React.Fragment>
        );
      });
    }
  };

  const showSpan = () => {
    if (spanish) {
      return spanish.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {item !== "na" ? (
              <div className={`info-row icons ${stripes(index)}`}>
                <a href={item}>
                  <img
                    className="icon-input svg"
                    alt="Spanish Parent Letter Icon"
                    src={TOCEditIcon}
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

  const showPort = () => {
    if (portuguese) {
      return portuguese.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {item !== "na" ? (
              <div className={`info-row icons ${stripes(index)}`}>
                <a href={item}>
                  <img
                    className="icon-input svg"
                    alt="Portuguese Parent Letter Icon"
                    src={TOCEditIcon}
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

  const showHaitian = () => {
    if (haitian) {
      return haitian.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {item !== "na" ? (
              <div className={`info-row icons ${stripes(index)}`}>
                <a href={item}>
                  <img
                    className="icon-input svg"
                    alt="Haitian Parent Letter Icon"
                    src={TOCEditIcon}
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

  const bookColumn = () => {
    if (Unit1AuthenticText) {
      return (
        <div className="info-row book">
          <p className="text-title">{Unit1AuthenticText.Title}</p>
          <p className="type-author">
            {Unit1AuthenticText.Type} by {Unit1AuthenticText.Author}
          </p>
        </div>
      );
    }
  };

  const bookIcon = () => {
    if (Unit1AuthenticText) {
      return (
        <div className="info-row book icon">
          <a href={Unit1AuthenticText.Link}>
            <img
              className="icon-input tall-grid"
              alt="Authentic Text PDF Icon"
              src={PDFIcon}
            />
          </a>
        </div>
      );
    }
  };

  const selectionsColumn = () => {
    if (Unit1SelectionSupport) {
      return Unit1SelectionSupport.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className={`info-row ${stripes(index)} tall`}>
              {item.Excerpt ? (
                <p className="title-from">
                  <i className="from">from </i>
                  {item.Selection}
                </p>
              ) : (
                <p className="title-from">{item.Selection}</p>
              )}
            </div>
          </React.Fragment>
        );
      });
    }
  };

  const multiSummariesColumn = () => {
    if (Unit1SelectionSupport) {
      return Unit1SelectionSupport.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className={`info-row icons ${stripes(index)} tall`}>
              {item.MultilingualSummary !== "NA" ? (
                <a href={item.MultilingualSummary}>
                  <img
                    className="icon-input tall"
                    alt="Multilingual Summary PDF"
                    src={PDFIcon}
                  />
                </a>
              ) : null}
            </div>
          </React.Fragment>
        );
      });
    }
  };

  const adoptedColumn = () => {
    if (Unit1SelectionSupport) {
      return Unit1SelectionSupport.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className={`info-row icons ${stripes(index)} tall`}>
              {item.Summary !== "NA" ? (
                <a href={item.Summary}>
                  <img
                    className="icon-input tall"
                    alt="Adapted Text PDF"
                    src={PDFIcon}
                  />
                </a>
              ) : null}
            </div>
          </React.Fragment>
        );
      });
    }
  };

  const englishSketch = () => {
    if (Unit1SelectionSupport) {
      return Unit1SelectionSupport.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className={`info-row icons ${stripes(index)} tall`}>
              {item.TextSketchEnglish !== "NA" ? (
                <a href={item.TextSketchEnglish}>
                  <img
                    className="icon-input tall"
                    alt="English Text Sketch PDF"
                    src={PDFIcon}
                  />
                </a>
              ) : null}
            </div>
          </React.Fragment>
        );
      });
    }
  };

  const presSketch = () => {
    if (Unit1SelectionSupport) {
      return Unit1SelectionSupport.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className={`info-row icons ${stripes(index)} tall`}>
              {item.TextSketchPresentation !== "NA" ? (
                <a href={item.TextSketchPresentation}>
                  <img
                    className="icon-input tall"
                    alt="Text Sketch Presentation"
                    src={PDFIcon}
                  />
                </a>
              ) : null}
            </div>
          </React.Fragment>
        );
      });
    }
  };

  const spanishSketch = () => {
    if (Unit1SelectionSupport) {
      return Unit1SelectionSupport.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className={`info-row icons ${stripes(index)} tall`}>
              {item.TextSketchSpanish !== "NA" ? (
                <a href={item.TextSketchSpanish}>
                  <img
                    className="icon-input tall"
                    alt="Spanish Text Sketch PDF"
                    src={PDFIcon}
                  />
                </a>
              ) : null}
            </div>
          </React.Fragment>
        );
      });
    }
  };

  return (
    <div className="unit-container">
      <section className="above-table unit">
        <h4 className="paragraph-header">
          Unit- and Selection-Specific Resources
        </h4>
        <h5 className="unit-title">Unit 1 Resources</h5>
      </section>
      <section className="notice-note-table-container bookmark">
        <section className="column topic note-charts-unit">
          <div className="header-row note topic-header">
            <h4 className="header-text topic-header-text charts-text">
              Multilingual Parent/Guardian Letter
            </h4>
          </div>
          <div className="main-column topics-text unit">{firstColumn()}</div>
        </section>
        <section className="column topic note-charts-unit small">
          <div className="header-row note topic-header">
            <h4 className="header-text small">Spanish</h4>
          </div>
          <div className="main-column topics-text small-unit">{showSpan()}</div>
        </section>
        <section className="column topic note-charts-unit small">
          <div className="header-row note topic-header">
            <h4 className="header-text small">Portuguese</h4>
          </div>
          <div className="main-column topics-text small-unit">{showPort()}</div>
        </section>
        <section className="column topic note-charts-unit small">
          <div className="header-row note topic-header">
            <h4 className="header-text small">Hatian Creole</h4>
          </div>
          <div className="main-column topics-text small-unit right">
            {showHaitian()}
          </div>
        </section>
        <section className="column topic note-charts-unit small invisible"></section>
        <section className="column topic note-charts-unit small invisible"></section>
      </section>
      <section className="notice-note-table-container bookmark">
        <section className="column topic note-charts-unit">
          <div className="header-row note topic-header">
            <h4 className="header-text topic-header-text charts-text">
              Spanish Authentic Text
            </h4>
          </div>
          <div className="main-column topics-text unit">{bookColumn()}</div>
        </section>
        <section className="column topic note-charts-unit small">
          <div className="header-row note topic-header">
            <h4 className="header-text small">Spanish</h4>
          </div>
          <div className="main-column topics-text small-unit right tall">
            {bookIcon()}
          </div>
        </section>
        <section className="column topic note-charts-unit small invisible"></section>
        <section className="column topic note-charts-unit small invisible"></section>
        <section className="column topic note-charts-unit small invisible"></section>
        <section className="column topic note-charts-unit small invisible"></section>
      </section>
      <section className="notice-note-table-container bookmark">
        <section className="column topic note-charts-unit">
          <div className="header-row note topic-header tall">
            <h4 className="header-text topic-header-text charts-text tall">
              Selection
            </h4>
          </div>
          <div className="main-column topics-text unit">
            {selectionsColumn()}
          </div>
        </section>
        <section className="column topic note-charts-unit small">
          <div className="header-row note topic-header tall short">
            <h4 className="header-text small tall-short">
              Multilingual Summary
            </h4>
          </div>
          <div className="main-column topics-text small-unit right tall">
            {multiSummariesColumn()}
          </div>
        </section>
        <section className="column topic note-charts-unit small">
          <div className="header-row note topic-header tall short">
            <h4 className="header-text small tall-short">
              Summary/Adapted Text
            </h4>
          </div>
          <div className="main-column topics-text small-unit right tall">
            {adoptedColumn()}
          </div>
        </section>
        <section className="column topic note-charts-unit small">
          <div className="header-row note topic-header tall short">
            <h4 className="header-text small tall-short">
              Text Sketch (English)
            </h4>
          </div>
          <div className="main-column topics-text small-unit right tall">
            {englishSketch()}
          </div>
        </section>
        <section className="column topic note-charts-unit small">
          <div className="header-row note topic-header tall">
            <h4 className="header-text small tall">
              Text Sketch (Presentation)
            </h4>
          </div>
          <div className="main-column topics-text small-unit right tall">
            {presSketch()}
          </div>
        </section>
        <section className="column topic note-charts-unit small">
          <div className="header-row note topic-header tall short">
            <h4 className="header-text small tall-short">
              Text Sketch (Spanish)
            </h4>
          </div>
          <div className="main-column topics-text small-unit right tall">
            {spanishSketch()}
          </div>
        </section>
      </section>
    </div>
  );
};
export default Unit1Resources;
