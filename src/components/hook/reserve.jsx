{
  sortedData.map((delivery) => (
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
  ));
}
