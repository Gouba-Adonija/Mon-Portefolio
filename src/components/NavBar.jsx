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
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="container-fluid">
        <button className="navbar-brand my-third" onClick={toggleOpenCv}>
          Mon CV
        </button>
        {/* Bouton de toggler pour la version mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu déroulant pour les petits écrans */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            <li className={`nav-item`}>
              <a
                className={`nav-link ${namePage === "resume" ? "actived" : ""}`}
                onClick={() => toggleNamePage("resume")}
              >
                A propos
              </a>
            </li>
            <li className={`nav-item`}>
              <a
                className={`nav-link ${
                  namePage === "parcours" ? "actived" : ""
                }`}
                onClick={() => toggleNamePage("parcours")}
              >
                Parcours
              </a>
            </li>
            <li className={`nav-item `}>
              <a
                className={`nav-link ${
                  namePage === "competences" ? "actived" : ""
                }`}
                onClick={() => toggleNamePage("competences")}
              >
                Compétences
              </a>
            </li>
            <li className={`nav-item `}>
              <a
                className={`nav-link ${namePage === "langue" ? "actived" : ""}`}
                onClick={() => toggleNamePage("langue")}
              >
                Langues
              </a>
            </li>
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
        className="px-2  border border-3 border-dark"
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
          delay: 0.2,
          duration: 1.5,
          ease: "easeOut",
        }}
        style={{
          height: "100%",
          width: "100%",
          boxShadow: "1px 1px 15px 1px #2e2e2e",
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
