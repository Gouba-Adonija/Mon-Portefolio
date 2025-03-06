// import illustr from "../../../public/assets/langue.png";
export const Langue = () => {
  const fr = 90;
  const en = 75;

  return (
    <div className="language-skills w-100 h-100 d-flex justify-content-center align-items-center flex-column gap-2">
      <div className="titre">
        <h3 className="">Mes compétences linguistiques</h3>
      </div>
      <div className="d-flex align-items-center w-100 gap-3">
        <div className="m-auto w-100 gap-4">
          <div className="language mt-2">
            <div className="d-flex gap-4">
              <label className="section fs-6 bg-warning-subtle d-inline-block">
                Français
              </label>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${fr}%` }}></div>
              </div>
            </div>
            <div className="">
              <p className="desciptLangage">
                Le français est ma langue maternelle, et je le maîtrise à un
                niveau quasi natif. Mon excellente compréhension du français me
                permet de m'exprimer avec aisance et précision, tant à l'oral
                qu'à l'écrit. Je suis capable de rédiger des textes complexes,
                de mener des négociations délicates et de comprendre les nuances
                culturelles et linguistiques propres à la langue française. Mon
                niveau de français me permet également de corriger et
                d'améliorer les écrits d'autres personnes, en veillant à la
                clarté et à la cohérence du message.
              </p>
            </div>
          </div>
          <div className="language">
            <div className="d-flex gap-4">
              <label className="section fs-6 bg-warning-subtle d-inline-block">
                Anglais
              </label>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${en}%` }}></div>
              </div>
            </div>
            <div className="">
              <p className="desciptLangage">
                {" "}
                Je possède une maîtrise avancée de la langue anglaise, ce qui me
                permet de communiquer efficacement dans divers contextes
                professionnels et personnels. Mon niveau d'anglais me permet de
                comprendre et de participer à des discussions complexes, de lire
                des documents techniques et de rédiger des rapports clairs et
                précis. Je suis capable de suivre des conférences, des
                séminaires et des formations en anglais sans difficulté majeure.
                Mon vocabulaire est riche et varié, bien que je continue à
                enrichir mes connaissances pour atteindre un niveau encore plus
                élevé.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
