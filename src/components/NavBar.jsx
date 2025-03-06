import PropTypes from "prop-types";
import { Resume } from "./variation/resume/Resume";
import { Competences } from "./variation/competences/Competences";
import { Langue } from "./variation/langue/Langue";
import { Parcours } from "./variation/parcours/Parcours";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export function NavBar({ setNamePage, namePage }) {
  const toggleNamePage = (namePage) => {
    setNamePage(namePage);
    console.log(" err", namePage);
  };

  const toggleOpenCv = () => {
    console.log("clic cv");
    const pdfUrl = "/pdf/cv.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <nav className="w-100 navbar navbar-expand-lg navbar-dark">
      <div className="w-100 d-flex justify-content-between mx-4">
        <button className="navbar-brand" onClick={toggleOpenCv}>
          Mon CV
        </button>
        <div className="">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
            <li className={`nav-item ${namePage == "resume" ? "actived" : ""}`}>
              <a
                className={`nav-link ${namePage == "resume" ? "actived" : ""}`}
                onClick={() => toggleNamePage("resume")}
              >
                A propos
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  namePage == "parcours" ? "actived" : ""
                }`}
                onClick={() => toggleNamePage("parcours")}
              >
                Parcours
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  namePage == "competences" ? "actived" : ""
                }`}
                onClick={() => toggleNamePage("competences")}
              >
                Compétences
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${namePage == "langue" ? "actived" : ""}`}
                onClick={() => toggleNamePage("langue")}
              >
                Langues
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
    <TransitionGroup>
      <CSSTransition
        key={namePage}
        classNames="fade"
        timeout={200}
        unmountOnExit
      >
        <CurrentPage />
      </CSSTransition>
    </TransitionGroup>
  );
}
Variation.propTypes = {
  namePage: PropTypes.string.isRequired,
};
NavBar.propTypes = {
  setNamePage: PropTypes.func.isRequired,
  namePage: PropTypes.string.isRequired,
};
