import { useState } from "react";
import { Variation, NavBar } from "./components/NavBar";
import { Face } from "./components/Face";
import "./App.css";
import "./style.css";
function App() {
  const [namePage, setNamePage] = useState("resume");

  let backIm = "assets/" + namePage + ".png";

  const bgP = namePage === "competences" ? "105% 50%" : "center";

  return (
    <div className="app-container" style={{ fontFamily: "Verdana" }}>
      <NavBar setNamePage={setNamePage} namePage={namePage} />

      <div className="main-content d-flex">
        {/* Section droite : le composant Face */}
        <div className="right-section">
          <Face />
        </div>

        {/* Section gauche : le composant Variation qui varie */}
        <div
          className="left-section d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: `url('${backIm}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: bgP,
            backgroundSize: "45%",
          }}
        >
          <Variation namePage={namePage} />
        </div>
      </div>
    </div>
  );
}

export default App;
