import { useState } from "react";
import { motion } from "framer-motion";
import "./resume.css";

export function Resume() {
  const pages = [
    <div key={1} className="fs-6">
      <p className="texte">Bonjour,</p>
      <p className="texte">
        Développeur Fullstack passionné, je suis spécialisé dans la création
        d’applications web dynamiques et évolutives. Mon expertise repose sur
        une solide maîtrise du front-end avec React.js et du back-end avec
        Node.js et Laravel, ce qui me permet de prendre en charge l'ensemble
        d'un projet, de la conception à la mise en production.
      </p>
      <p className="texte">
        Applications Fullstack : En combinant mes compétences en front-end et
        back-end, je construis des applications web complètes qui fonctionnent
        de manière fluide, de l’interface utilisateur à la base de données, tout
        en garantissant la sécurité, la performance et la scalabilité des
        solutions.
      </p>
    </div>,
    // Page 3
    <div key={2} className="fs-6">
      <p className="section fs-5 bg-primary d-inline-block mt-4">
        Front-End avec React.js
      </p>
      <br />
      <p className="texte">
        Je crée des interfaces modernes et interactives qui offrent une
        expérience utilisateur fluide et intuitive. Grâce à React, je suis
        capable de concevoir des applications web dynamiques, réactives et
        performantes.
      </p>
      <p className="section fs-5 bg-primary d-inline-block mt-4">
        Back-End avec Node.js & Laravel
      </p>
      <br />
      <p className="texte">
        En utilisant Node.js, je développe des API robustes et performantes,
        tout en assurant la gestion des bases de données et la logique côté
        serveur.
      </p>
      <p className="texte">
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
    <div className="w-100 d-flex justify-content-center align-items-center flex-column">
      <div className="titre">
        <h4>A propos de moi</h4>
      </div>
      <div className="fs-6 px-3">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          {pages[currentPage]}
        </motion.div>
      </div>
      <motion.div
        className="pagination-controls"
        initial={{ opacity: 0, x: 1, scale: 0.7 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
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
      </motion.div>
    </div>
  );
}
