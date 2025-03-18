import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { Resume } from "./variation/resume/Resume";
import { Competences } from "./variation/competences/Competences";
import { Langue } from "./variation/langue/Langue";
import { Parcours } from "./variation/parcours/Parcours";

export function NavBar({ setNamePage, namePage }) {
  const toggleNamePage = (namePage) => {
    setNamePage(namePage);
    console.log(" err", namePage);
  };

  const toggleOpenCv = () => {
    console.log("clic cv");
    const pdfUrl = "/Mon-Portefolio/pdf/cv.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <motion.nav
      className="w-100 navbar navbar-expand-lg navbar-dark"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="w-100 d-flex justify-content-between mx-4">
        <button className="navbar-brand" onClick={toggleOpenCv}>
          Mon CV
        </button>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
            <motion.li
              className={`nav-item ${namePage === "resume" ? "actived" : ""}`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <a
                className={`nav-link ${namePage === "resume" ? "actived" : ""}`}
                onClick={() => toggleNamePage("resume")}
              >
                A propos
              </a>
            </motion.li>
            <motion.li
              className={`nav-item ${namePage === "parcours" ? "actived" : ""}`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <a
                className={`nav-link ${
                  namePage === "parcours" ? "actived" : ""
                }`}
                onClick={() => toggleNamePage("parcours")}
              >
                Parcours
              </a>
            </motion.li>
            <motion.li
              className={`nav-item ${
                namePage === "competences" ? "actived" : ""
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <a
                className={`nav-link ${
                  namePage === "competences" ? "actived" : ""
                }`}
                onClick={() => toggleNamePage("competences")}
              >
                Compétences
              </a>
            </motion.li>
            <motion.li
              className={`nav-item ${namePage === "langue" ? "actived" : ""}`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <a
                className={`nav-link ${namePage === "langue" ? "actived" : ""}`}
                onClick={() => toggleNamePage("langue")}
              >
                Langues
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

export function Variation({ namePage }) {
  let CurrentPage = null;
  switch (namePage) {
    case "resume":
      CurrentPage = Resume;
      break;
    case "parcours":
      CurrentPage = Parcours;
      break;
    case "competences":
      CurrentPage = Competences;
      break;
    case "langue":
      CurrentPage = Langue;
      break;
    default:
      CurrentPage = Resume;
      break;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="p-1  border border-dark shadow-lg"
        key={namePage}
        initial={{
          opacity: 0,
          x: 0,
          y: 0,
          scale: 0.8,
          width: "100%",
        }}
        animate={{ opacity: 1, x: 0, y: 0, scale: 1, width: "100%" }}
        // layout
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        style={{
          height: "100%",
          overflowY: "auto",
        }}
      >
        <CurrentPage />
      </motion.div>
    </AnimatePresence>
  );
}
Variation.propTypes = {
  namePage: PropTypes.string.isRequired,
};
NavBar.propTypes = {
  setNamePage: PropTypes.func.isRequired,
  namePage: PropTypes.string.isRequired,
};
