import { Resume } from "./variation/Resume";
import { Competences } from "./variation/Competences";
import { Langue } from "./variation/Langue";
import { Parcours } from "./variation/Parcours";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export function NavBar({ setNamePage, namePage }) {
  const toggleNamePage = (namePage) => {
    setNamePage(namePage);
    console.log(" err", namePage);
  };

  return (
    <nav className="w-100 navbar navbar-expand-lg navbar-dark">
      <div className="w-100 d-flex justify-content-between mx-4">
        <button
          className="navbar-brand"
          onClick={() => toggleNamePage("civil")}
        >
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
    <div>
      {/* Transition entre les pages */}
      <TransitionGroup>
        <CSSTransition
          key={namePage}
          classNames="fade"
          timeout={500}
          unmountOnExit
        >
          <CurrentPage />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}
