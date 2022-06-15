import React from "react";
import Adapted from "../../Assets/SVGs/SumAdapted_pop.png";
import Anchor from "../../Assets/SVGs/AnchorChart_pop.png";
import Authentic from "../../Assets/SVGs/AuthenticText_pop.png";
import Glossaries from "../../Assets/SVGs/Glossaries_pop.png";
import Letters from "../../Assets/SVGs/Letters_pop.png";
import MultilingualSummaries from "../../Assets/SVGs/Summaries_pop.png";
import Notice from "../../Assets/SVGs/NoticeNote_pop.png";
import Text from "../../Assets/SVGs/TextSketch_pop.png";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Styles/Modals.css";

export const Modals = ({
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
  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modal = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0px",
      opacity: 1,
      transition: { delay: 0.5 },
    },
  };

  const handleClose = () => {
    setAnchorCharts(false);
    setAuthentic(false);
    setMultiGlossaries(false);
    setMultiParent(false);
    setMultiSummaries(false);
    setNotice(false);
    setSummaries(false);
    setTextSketch(false);
  };

  const setImage = () => {
    if (anchorCharts) {
      return Anchor;
    } else if (multiGlossaries) {
      return Glossaries;
    } else if (notice) {
      return Notice;
    } else if (multiParent) {
      return Letters;
    } else if (multiSummaries) {
      return MultilingualSummaries;
    } else if (authentic) {
      return Authentic;
    } else if (summaries) {
      return Adapted;
    } else if (textSketch) {
      return Text;
    } else return null;
  };

  const type = () => {
    if (anchorCharts) {
      return "anchor-charts";
    } else if (multiGlossaries) {
      return "multi-glossaries";
    } else if (notice) {
      return "notice";
    } else if (multiParent) {
      return "parent";
    } else if (multiSummaries) {
      return "multi-summaries";
    } else if (authentic) {
      return "authentic";
    } else if (summaries) {
      return "summaries";
    } else if (textSketch) {
      return "text-sketch";
    }
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {anchorCharts ||
        multiGlossaries ||
        notice ||
        multiParent ||
        multiSummaries ||
        authentic ||
        summaries ||
        textSketch ? (
          <motion.div
            className={`outerModal flex centerFlex ${type()}`}
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className={`flex flexColumn innerModal ${type()}`}
              variants={modal}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className={`whole-modal ${type()}`}>
                <div className="button-row">
                  <button className="close-button" onClick={handleClose}>
                    <FontAwesomeIcon className="x-icon free" icon={faXmark} />
                  </button>
                </div>
                <div className="main-modal">
                  <img
                    className={`modal-pic ${type()}`}
                    alt="modal pic"
                    src={setImage()}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Modals;
