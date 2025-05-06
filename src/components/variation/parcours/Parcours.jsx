// import illustr from "../../../public/assets/parcours.png";

export function Parcours() {
  return (
    <div className="parcours w-100 d-flex justify-content-start align-items-center flex-column p-2 ps-5 gap-2">
      <div className="titre">
        <h4 className="">Mon parcours scolaire</h4>
      </div>
      <div className="d-flex align-items-center w-100 gap-3 texte">
        {/* <div className="image-container p-4" style={{ width: "30%" }}>
          <img src={illustr} alt="skills" className="image" />
        </div> */}
        <ul className="">
          <li className="mb-3">
            <div className="fs-6 d-flex align-items-center">
              <span
                style={{
                  padding: "7px 14px",
                  margin: "8px 0px",
                }}
                className="section fs-6 bg-third d-inline-block"
              >
                2022 - 2023
              </span>
              <div className="ms-4">
                <span className="my-4" style={{ fontSize: "15px" }}>
                  Brevet de Technicien Supérieur 2ème année
                </span>
                <p className="my-2 ml-6" style={{ fontSize: "15px" }}>
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
                className="section fs-6 bg-third d-inline-block"
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
                className="section fs-6 bg-third d-inline-block"
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
                className="section fs-6 bg-third d-inline-block"
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
    </div>
  );
}
