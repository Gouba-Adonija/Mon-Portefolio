import { useState } from "react";
import PropTypes from "prop-types";

export function DelPagination({ sortedData, handleOpenOverlay, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {currentItems.map((delivery) => (
        <div key={delivery.id} className="delivery-item">
          <h3>{delivery.title}</h3>
          <p>
            <strong>Adresse :</strong> {delivery.address}
          </p>
          <p>
            <strong>Date Estimée :</strong>{" "}
            {new Date(delivery.estimatedDeliveryDate).toLocaleDateString()}
          </p>
          <p>
            <strong>Statut :</strong>{" "}
            <span className={`status ${delivery.status.toLowerCase()}`}>
              {delivery.status}
            </span>
          </p>
          <p>
            <strong>Description :</strong> {delivery.body}
          </p>
          <p>
            <button onClick={() => handleOpenOverlay(delivery.id)}>
              Voir Plus...
            </button>
          </p>
        </div>
      ))}

      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

DelPagination.propTypes = {
  sortedData: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleOpenOverlay: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
};
