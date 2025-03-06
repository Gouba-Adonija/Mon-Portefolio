export function Competences() {
  return (
    <div className="fs-6 w-100 d-flex justify-content-center align-items-center flex-column gap-2">
      <span className="titre">
        <h3 className="">Mes compétences informatique</h3>
      </span>
      <div>
        <p className="">
          Création de sites et d`apllications Web , desktop et mobiles,
          intuituves et adaptatives
        </p>
        <div>
          <p className="section fs-6 bg-warning-subtle d-inline-block">
            Front-End
          </p>
          <p>
            React.js : HTML5, CSS3, JavaScript (ES6+), Webpack, Responsive
            UxDesign, Blade
          </p>
        </div>
        <div>
          <p className="section fs-6 bg-warning-subtle d-inline-block">
            Back-End
          </p>
          <p>
            <span>Node.js & Laravel</span>: RESTful APIs, SQL (MySQL), NoSQL
            (MongoDB) <br />
            <span>Outils et Déploiement</span> : Git, GitHub, CI/CD, Heroku,
            AWS, <br />
            <span>Firebase Tests et Sécurité</span> : Tests unitaires et
            d`intégration, gestion de la sécurité des API, authentification avec
            JWT, OAuth
          </p>
        </div>
        <div className="">
          <p className="section fs-6 bg-warning-subtle d-inline-block">
            Autres compétences
          </p>
          <p>
            <span>Word & Excel & PowerPoint</span> : creation de textes, mise en
            forme, feuilles de calcul, tableau complexe
          </p>
        </div>
      </div>
    </div>
  );
}
