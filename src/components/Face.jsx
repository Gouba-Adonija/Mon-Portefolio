import profilImage from "../assets/image1.jpg";
import "./face.css";
export function Face() {
  return (
    <div className="container h-100 d-flex flex-column justify-content-center align-items-center text-white bg-dark p-4 rounded shadow-lg">
      <div className="mb-4">
        <img
          src={profilImage}
          alt="Profile"
          className="w-60 rounded-circle border border-2 border-danger"
          style={{ width: "200px", height: "180px", objectFit: "cover" }}
        />
      </div>

      {/* Informations : des icones à la place des textes*/}
      <div className="text-center">
        <h4 className="mb-2">Gouba Adonija</h4>
        <p className="lead mb-4">Développeur Web FullStack</p>
        <p className="d-flex gap-2">
          <a href="tel:+2250798874440">
            <i className="fa-solid fa-phone"> </i>
            {"     "}0798874440
          </a>
          |
          <a href="https://wa.me/2250594782389">
            <i className="fa-brands fa-whatsapp"> </i>
            {"     "}0594782389
          </a>
        </p>
        <p className="d-flex">
          <a href="mailto:goubaadonijaezeckias@gmail.com">
            <i className="fa-regular fa-envelope"></i>
            {"     "}
            goubaadonijaezeckias@gmail.com
          </a>
        </p>
        <p className="d-flex">
          <a href="https://www.linkedin.com/in/adonija-ezeckias-gouba-7818a1259/">
            <i className="fa-brands fa-linkedin"></i>
            {"     "}
            linkedin.com/in/adonija-ezeckias-gouba-7818a1259
          </a>
        </p>
        <p className="d-flex">
          <a href="https://github.com/gouba-adonija">
            <i className="fa-brands fa-github"></i>
            {"     "} github.com/gouba-adonija
          </a>
        </p>

        <p className="d-flex mb-3">
          <i className="fa-solid fa-location-dot"></i>
          {"     "} Abidjan, Cote d`Ivoire
        </p>
      </div>
    </div>
  );
}
