import { useState, useEffect } from "react";
import "../../../../public/css/livreurs.css";

import PropTypes from "prop-types";

export function Livreurs() {
  const [livreurs, setLivreurs] = useState([
    {
      id: 1,
      nom: "Dupont",
      prenom: "Jean",
      image: "../../../public/img/Capture d’écran 2024-03-04 101228.png",
      age: 35,
      sexe: "Homme",
      addresse: "BP 02 Abidjan",
      email: "koffi@dupont",
      ville: "Abidjan",
      vehicule: "Moto Yamaha 9 edition 2023",
      permis: "permsJSI87S9",
    },
    {
      id: 2,
      nom: "Martin",
      prenom: "Marie",
      image: "../../../public/img/Capture d’écran 2024-03-04 101228.png",
      age: 28,
      sexe: "Femme",
      address: "BP 03 Yamoussoukro",
      email: "marie@martin",
      ville: "Yamoussoukro",
      vehicule: "Scooter Honda 2022",
      permis: "permsKLO93S8",
    },
    {
      id: 3,
      nom: "Kouadio",
      prenom: "Seraphine",
      image: "../../../public/img/Capture d’écran 2024-03-04 101228.png",
      age: 28,
      sexe: "Femme",
      address: "BP 03 Abidjan Marcory Anoumanbo",
      email: "marie@martin",
      ville: "Yamoussoukro",
      vehicule: "Scooter Honda 2022",
      permis: "permsKLO93S8",
    },
    {
      id: 4,
      nom: "Brou",
      prenom: "Seraphin Tieme",
      image: "../../../public/img/Capture d’écran 2024-03-04 101228.png",
      age: 28,
      sexe: "Hommme",
      address: "BP 145 Abidajn Yopougon",
      email: "marie@martin",
      ville: "Yamoussoukro",
      vehicule: "Scooter Honda 2022",
      permis: "permsKLO93S8",
    },
    {
      id: 5,
      nom: "Martin",
      prenom: "Marie",
      image: "../../../public/img/Capture d’écran 2024-03-04 101228.png",
      age: 28,
      sexe: "Femme",
      address: "BP 03 Yamoussoukro",
      email: "marie@martin",
      ville: "Yamoussoukro",
      vehicule: "Scooter Honda 2022",
      permis: "permsKLO93S8",
    },
    // Ajoutez plus de livreurs ici
  ]);

  const [filter, setFilter] = useState({
    nom: "",
    prenom: "",
    age: "",
    sexe: "",
    ville: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const filteredLivreurs = livreurs.filter((livreur) => {
    return (
      (filter.nom === "" ||
        livreur.nom.toLowerCase().includes(filter.nom.toLowerCase())) &&
      (filter.prenom === "" ||
        livreur.prenom.toLowerCase().includes(filter.prenom.toLowerCase())) &&
      (filter.age === "" || livreur.age.toString().includes(filter.age)) &&
      (filter.sexe === "" ||
        livreur.sexe.toLowerCase().includes(filter.sexe.toLowerCase())) &&
      (filter.ville === "" ||
        livreur.ville.toLowerCase().includes(filter.ville.toLowerCase()))
    );
  });

  const deleteLivreur = (id) => {
    setLivreurs(livreurs.filter((livreur) => livreur.id !== id));
  };
  /**
   *
   * @param {number|null} id
   */

  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedLivreurId, setSelectedlivreurId] = useState(null);

  const editLivreur = (livreur) => {
    setSelectedlivreurId(livreur);
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setSelectedlivreurId(null);
  };

  return (
    <div>
      <button onClick={() => editLivreur(null)}>Ajouter un livreur</button>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Nom"
          name="nom"
          value={filter.nom}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          placeholder="Prénom"
          name="prenom"
          value={filter.prenom}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          placeholder="Âge"
          name="age"
          value={filter.age}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          placeholder="Ville"
          name="ville"
          value={filter.ville}
          onChange={handleFilterChange}
        />
        <select name="sexe" value={filter.sexe} onChange={handleFilterChange}>
          <option value="" disabled>
            Sexe
          </option>
          <option value="homme">Homme</option>
          <option value="femme">Femme</option>
        </select>
      </div>

      <div className="livreurs-list">
        {filteredLivreurs.map((livreur) => (
          <div key={livreur.id} className="livreur-card">
            <div className="livreur-image-container">
              <img
                src={livreur.image}
                alt={`${livreur.prenom} ${livreur.nom}`}
                className="livreur-image"
              />
              <p>{`${livreur.prenom} ${livreur.nom}`}</p>
              <p>Âge: {livreur.age}</p>
              <p>Sexe: {livreur.sexe}</p>
            </div>
            <div className="livreur-details">
              <p>Adresse: {livreur.address}</p>
              <p>Email: {livreur.email}</p>
              <p>Ville: {livreur.ville}</p>
              <p>Véhicule: {livreur.vehicule}</p>
              <p>Permis: {livreur.permis}</p>
              <button onClick={() => deleteLivreur(livreur.id)}>
                Supprimer
              </button>
              <button
                style={{ backgroundColor: "blue" }}
                onClick={() => editLivreur(livreur)}
              >
                Modifier
              </button>
            </div>
          </div>
        ))}
      </div>
      {showOverlay && (
        <LivreurOverlay
          livreur={selectedLivreurId}
          onClose={handleCloseOverlay}
        />
      )}
    </div>
  );
}

/**
 *
 * @param {Object|null} deliveryId
 * @param {} onClose
 * @returns
 */
function LivreurOverlay({ livreur, onClose }) {
  const [currentLivreur, setCurrentLivreur] = useState({
    id: null,
    nom: "",
    prenom: "",
    image: "votre photo",
    age: "",
    sexe: "",
    address: "",
    email: "",
    ville: "Abidjan",
    vehicule: "moto",
    permis: "",
  });

  useEffect(() => {
    if (livreur !== null) {
      setCurrentLivreur({ ...livreur });
    }
  }, [livreur]);
  // console.log(currentLivreur, onClose);

  return <ShowOverlayLivreur livreur={currentLivreur} onClose={onClose} />;
}

/**
 *
 * @param {Object} livreur
 * @param {CallableFunction} onClose
 * @returns
 */
function ShowOverlayLivreur({ livreur, onClose }) {
  const [currentLivreur, setCurrentLivreur] = useState({
    id: null,
    nom: "",
    prenom: "",
    image: "",
    age: "",
    sexe: "",
    address: "",
    email: "",
    ville: "",
    vehicule: "",
    permis: "",
  });

  useEffect(() => {
    if (livreur) {
      // Mettre à jour l'état currentLivreur quand la prop livreur change
      setCurrentLivreur(livreur);
    }
  }, [livreur]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentLivreur((prevLivreur) => ({
      ...prevLivreur,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    onClose(); // Fermer l'overlay sans sauvegarder
  };

  return (
    <div className="overContain">
      <div className="overlay">
        {currentLivreur.id === null ? (
          <h2>Création du livreur</h2>
        ) : (
          <h2>Edition du livreur</h2>
        )}

        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <form action="" method="post">
          <div className="row">
            <div className="form-group col">
              <img
                style={{ width: "100px" }}
                src={currentLivreur.image}
                alt=""
              />
              <label htmlFor="image">Image</label>
              <input
                className="form-control"
                type="file"
                name="image"
                id="image"
                // value={currentLivreur.image}
                // onChange={handleInputChange}
              />
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="nom">Nom</label>
                <input
                  className="form-control"
                  type="text"
                  name="nom"
                  id="nom"
                  value={currentLivreur.nom}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="prenom">Prénom</label>
                <input
                  className="form-control"
                  type="text"
                  name="prenom"
                  id="prenom"
                  value={currentLivreur.prenom}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                className="form-control"
                type="text"
                name="age"
                id="age"
                value={currentLivreur.age}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                value={currentLivreur.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="sexe">Sexe</label>
              <select
                className="form-select"
                name="sexe"
                id="sexe"
                value={currentLivreur.sexe}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Sexe
                </option>
                <option value="m">M</option>
                <option value="f">F</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <label htmlFor="ville">Ville</label>
              <input
                className="form-control"
                type="text"
                name="ville"
                id="ville"
                value={currentLivreur.ville}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="vehicule">Véhicule</label>
              <input
                className="form-control"
                type="text"
                name="vehicule"
                id="vehicule"
                value={currentLivreur.vehicule}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="permis">Permis</label>
            <input
              className="form-control"
              type="text"
              name="permis"
              id="permis"
              value={currentLivreur.permis}
              onChange={handleInputChange}
            />
          </div>
          {currentLivreur.id === null ? (
            <button type="submit">Créer</button>
          ) : (
            <button type="submit">Sauvegarder les modifications</button>
          )}

          <button type="button" onClick={handleCancel}>
            Annuler
          </button>
        </form>
      </div>
    </div>
  );
}

LivreurOverlay.propTypes = {
  livreur: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};
