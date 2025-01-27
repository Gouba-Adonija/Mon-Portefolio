import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { DelPagination } from "../hook/delPagination";
import "../../../public/css/DeliveryList.css";

const DeliveryOverlay = ({ deliveryId, onClose }) => {
  const [delivery, setDelivery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Récupérer les données de la livraison par ID
    fetch(`https://jsonplaceholder.typicode.com/posts/${deliveryId}`)
      .then((response) => response.json())
      .then((data) => {
        setDelivery(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(`Erreur de récupération des données ${err} `);
        setLoading(false);
      });
  }, [deliveryId]);

  if (loading) return <div className="loading">Chargement...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="delivery-overlay">
      <div className="delivery-overlay-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h3 className="delivery-title">{delivery.title}</h3>
        <p className="delivery-address">
          <strong>Adresse:</strong> {delivery.body}
        </p>
        <p className="delivery-status">
          <strong>Statut:</strong> En cours
        </p>
        <p className="delivery-description">
          <strong>Description:</strong> Détails de la livraison ici.
        </p>
      </div>
    </div>
  );
};

DeliveryOverlay.propTypes = {
  deliveryId: PropTypes.number.isRequired,
  // Fonction pour fermer l'overlay
  onClose: PropTypes.func.isRequired,
};

// Composant DeliveryList pour afficher la liste des livraisons
export const DeliveryList = ({ url }) => {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState(null);
  const [filter, setFilter] = useState("all");
  const [sortedData, setSortedData] = useState([]);

  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedDeliveryId, setSelectedDeliveryId] = useState(null);

  const handleOpenOverlay = (deliveryId) => {
    setSelectedDeliveryId(deliveryId);
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setSelectedDeliveryId(null);
  };

  // Fetch des données de la livraison
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoad(false);
      })
      .catch((err) => {
        setErrors(`Erreur de récupération des données ${err} `);
        setLoad(false);
      });
  }, [url]);

  useEffect(() => {
    if (data) {
      const mappedData = data.map((post) => ({
        id: post.id,
        title: post.title,
        body: post.body,
        address: "Adresse fictive pour livraison",
        estimatedDeliveryDate: new Date(2024, 0, 1),
        status: post.id % 2 === 0 ? "en cours" : "terminer",
      }));

      // Appliquer le filtre
      const filtered = mappedData.filter((delivery) => {
        if (filter === "all") return true;
        return delivery.status.toLowerCase() === filter.toLowerCase();
      });

      // Trier les livraisons par date estimée de livraison
      const sorted = filtered.sort(
        (a, b) =>
          new Date(a.estimatedDeliveryDate) - new Date(b.estimatedDeliveryDate)
      );

      setSortedData(sorted);
    }
  }, [data, filter]);

  if (load) return <div className="loading">Chargement...</div>;
  if (errors) return <div className="error">Erreur : {errors}</div>;

  return (
    <div className="delivery-container">
      <h2>Livraisons en Cours</h2>

      <div className="filter">
        <div className="generals">
          <label htmlFor="filter-by">Filtrer par:</label>
          <select
            style={{ height: "30px", width: "100%" }}
            id="filter-by"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">Tous</option>
            <option value="en cours">En Cours</option>
            <option value="livrée">Livrée</option>
            <option value="annulée">Annulée</option>
          </select>
        </div>
        <div className="specifts">
          <form action="">
            <input className="form-control" placeholder="matricule" />
            <input className="form-control" placeholder="commune" />
            <input className="form-control" type="text" />
            <button>Rechercher</button>
          </form>
        </div>
      </div>

      <div className="delivery-list">
        <DelPagination
          sortedData={sortedData}
          handleOpenOverlay={handleOpenOverlay}
          itemsPerPage={3}
        />
        {showOverlay && (
          <DeliveryOverlay
            deliveryId={selectedDeliveryId}
            onClose={handleCloseOverlay}
          />
        )}
      </div>
    </div>
  );
};

DeliveryList.propTypes = {
  url: PropTypes.string.isRequired,
};
