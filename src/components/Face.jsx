import { motion } from "framer-motion";
import profilImage from "../assets/image1.jpg";
import "./face.css";

export function Face() {
  return (
    <motion.div
      className="container h-100 d-flex flex-column justify-content-center align-items-center text-white bg-dark p-4 rounded shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          src={profilImage}
          alt="Profile"
          className="w-60 rounded-circle border border-2 border-danger"
          style={{ width: "200px", height: "180px", objectFit: "cover" }}
        />
      </motion.div>

      {/* Informations : avec animation pour chaque élément */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <motion.h4
          className="mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          Gouba Adonija
        </motion.h4>

        <motion.p
          className="lead mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          Développeur Web FullStack
        </motion.p>

        <motion.p
          className="d-flex gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        >
          <a href="tel:+2250798874440">
            <i className="fa-solid fa-phone"> </i>
            {"     "}0798874440
          </a>
          |
          <a href="https://wa.me/2250594782389">
            <i className="fa-brands fa-whatsapp"> </i>
            {"     "}0594782389
          </a>
        </motion.p>

        <motion.p
          className="d-flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        >
          <a href="mailto:goubaadonijaezeckias@gmail.com">
            <i className="fa-regular fa-envelope"></i>
            {"     "} goubaadonijaezeckias@gmail.com
          </a>
        </motion.p>

        <motion.p
          className="d-flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
        >
          <a href="https://www.linkedin.com/in/adonija-ezeckias-gouba-7818a1259/">
            <i className="fa-brands fa-linkedin"></i>
            {"     "} linkedin.com/in/adonija-ezeckias-gouba-7818a1259
          </a>
        </motion.p>

        <motion.p
          className="d-flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
        >
          <a href="https://github.com/gouba-adonija">
            <i className="fa-brands fa-github"></i>
            {"     "} github.com/gouba-adonija
          </a>
        </motion.p>

        <motion.p
          className="d-flex mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
        >
          <i className="fa-solid fa-location-dot"></i>
          {"     "} Abidjan, Cote d`Ivoire
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
