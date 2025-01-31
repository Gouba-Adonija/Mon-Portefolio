import { useState } from "react";

export function Resume() {
  const pages = [
    <div>
      <p>Bonjour,</p>
      <p>
        Développeur Fullstack passionné, je suis spécialisé dans la création
        d’applications web dynamiques et évolutives. Mon expertise repose sur
        une solide maîtrise du front-end avec React.js et du back-end avec
        Node.js et Laravel, ce qui me permet de prendre en charge l'ensemble
        d'un projet, de la conception à la mise en production.
      </p>
      <p>
        Applications Fullstack : En combinant mes compétences en front-end et
        back-end, je construis des applications web complètes qui fonctionnent
        de manière fluide, de l’interface utilisateur à la base de données, tout
        en garantissant la sécurité, la performance et la scalabilité des
        solutions.
      </p>
    </div>,
    // Page 3
    <div>
      <p className="section fs-6 bg-warning-subtle d-inline-block">
        Front-End avec React.js
      </p>
      <br />
      <p>
        Je crée des interfaces modernes et interactives qui offrent une
        expérience utilisateur fluide et intuitive. Grâce à React, je suis
        capable de concevoir des applications web dynamiques, réactives et
        performantes.
      </p>
      <p className="section fs-6 bg-warning-subtle d-inline-block">
        Back-End avec Node.js & Laravel
      </p>
      <br />
      <p>
        En utilisant Node.js, je développe des API robustes et performantes,
        tout en assurant la gestion des bases de données et la logique côté
        serveur.
      </p>
      <p>
        Laravel me permet également de créer des applications web backend
        élégantes et évolutives, en suivant les meilleures pratiques et les
        principes de l’architecture MVC.
      </p>
    </div>,
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column gap-2">
      <div className="titre">
        <h3 className="">A propos de moi</h3>
      </div>
      <div className="fs-6">{pages[currentPage]}</div>
      <div className="pagination-controls text-end">
        <span>
          Page {currentPage + 1} / {pages.length}
        </span>

        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="mx-2 py-0"
        >
          {"<"}
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
          className="py-0"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
