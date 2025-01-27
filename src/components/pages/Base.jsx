import "../../../public/css/base.css";
import { Outlet, NavLink } from "react-router-dom";

export function Base() {
  const deconnect = () => {
    localStorage.removeItem("auth_token");
    console.log("déconnecté");
  };
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <NavLink to="/accueil">
              <img src="" alt="" />
            </NavLink>
          </div>

          <div className="linkOptions">
            <NavLink to="/Dashboard">Dashboard</NavLink>
            <NavLink to="/mes-livraison">Mes livraisons</NavLink>
            {/* Option disponible que pour l'admin */}
            <NavLink to="/Livreurs">Livreurs</NavLink>
            <div className="dropdown">
              <button className="dropdown-toggle">Options</button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/mon-compte">Mon compte</NavLink>
                </li>
                <li>
                  <button onClick={deconnect}>Se déconnecter</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="contain">
        <Outlet></Outlet>
      </div>
    </>
  );
}
