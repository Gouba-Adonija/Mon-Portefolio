export function Parcours() {
  return (
    <div className="parcours d-flex justify-content-center align-items-center flex-column gap-2">
      <div className="titre">
        <h3 className="">Mon parcours scolaire</h3>
      </div>
      <ul className="">
        <li className="mb-3">
          <div className="fs-6 d-flex align-items-center">
            <span
              style={{
                padding: "7px 14px",
                margin: "8px 0px",
              }}
              className="section fs-6 bg-warning-subtle d-inline-block"
            >
              2022 - 2023
            </span>
            <div className="ms-4">
              <span className="my-4 ">
                Brevet de Technicien Supérieur 2ème année
              </span>
              <p className="my-2" style={{ fontSize: "15px" }}>
                Institut Famah de Vridi
              </p>
            </div>
          </div>
        </li>
        <li className="mb-3">
          <div className="fs-6 d-flex align-items-center">
            <span
              style={{
                padding: "7px 14px",
                margin: "8px 0px",
              }}
              className="section fs-6 bg-warning-subtle d-inline-block"
            >
              2021 - 2022
            </span>
            <div className="ms-4">
              <span className="my-4 ">
                Brevet de Technicien Supérieur 2ème année
              </span>
              <p className="my-2" style={{ fontSize: "15px" }}>
                Institut Famah de Vridi
              </p>
            </div>
          </div>
        </li>
        <li className="mb-3">
          <div className="fs-6 d-flex align-items-center">
            <span
              style={{
                padding: "7px 14px",
                margin: "8px 0px",
              }}
              className="section fs-6 bg-warning-subtle d-inline-block"
            >
              2020 - 2021
            </span>
            <div className="ms-4">
              <span className="my-4 ">Baccalaureat</span>
              <p className="my-2" style={{ fontSize: "15px" }}>
                Lycée Moderne de Grand-Bassam
              </p>
            </div>
          </div>
        </li>
        <li className="mb-3">
          <div className="fs-6 d-flex align-items-center">
            <span
              style={{
                padding: "7px 14px",
                margin: "8px 0px",
              }}
              className="section fs-6 bg-warning-subtle d-inline-block"
            >
              2018 - 2019
            </span>
            <div className="ms-4">
              <span className="my-4 ">Brevet d`Etude Premier Cylce</span>
              <p className="my-2" style={{ fontSize: "15px" }}>
                Collège Moderne d`Assinie-Mafia
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
