export const Langue = () => {
  // Valeurs des compétences linguistiques (en pourcentage)
  const fr = 95; // Français à 70%
  const en = 80; // Anglais à 80%

  return (
    <div className="language-skills d-flex justify-content-center align-items-center flex-column gap-2">
      <div className="titre">
        <h3 className="">Mes compétences linguistiques</h3>
      </div>
      <div className="language">
        <label>Français</label>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${fr}%` }}></div>
        </div>
        <span>
          Lu, ecrit et parlé {"      "} {fr}%
        </span>
      </div>
      <div className="language">
        <label>Anglais</label>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${en}%` }}></div>
        </div>
        <span>
          Lu, ecrit et parlé {"      "} {en}%
        </span>
      </div>
    </div>
  );
};
