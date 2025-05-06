import { motion } from "framer-motion";
import profilImage from "../assets/image1.jpg";
import "./face.css";

export function Face() {
  return (
    <motion.div
      className="container h-100 d-flex flex-column justify-content-center align-items-center text-white bg-dark px-1 rounded shadow-lg"
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
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
        className="text-center fs-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <motion.h4
          className="mb-2 display-6 my-secondary letter-spacing my-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          Gouba Adonija
        </motion.h4>

        <motion.p
          className="lead mb-4 fs-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          Développeur Web FullStack
        </motion.p>

        <div className="d-flex gap-3 mt-4 bg-warning justify-content-between">
          <motion.div
            className="gap-2 d-flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          >
            <a href="tel:+2250798874440" className="contact-link">
              <i className="fa-solid fa-phone"> </i>
              <span className="contact-info">{"     "}07 98 87 44 40</span>
            </a>
          </motion.div>
          <motion.div
            className="d-flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          >
            <a href="https://wa.me/2250594782389" className="contact-link">
              <i className="fa-brands fa-whatsapp"> </i>
              <span className="contact-info">{"     "}05 94 78 23 89</span>
            </a>
          </motion.div>

          <motion.div
            className="d-flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          >
            <a
              href="mailto:goubaadonijaezeckias@gmail.com"
              className="contact-link"
            >
              <i className="fa-regular fa-envelope"></i>
              <span className="contact-info">
                {"     "} goubaadonijaezeckias@gmail.com
              </span>
            </a>
          </motion.div>

          <motion.div
            className="d-flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
          >
            <a
              href="https://www.linkedin.com/in/adonija-ezeckias-gouba-7818a1259/"
              className="contact-link"
            >
              <i className="fa-brands fa-linkedin"></i>
              {"     "}{" "}
              <span className="contact-info">
                linkedin.com/in/adonija-ezeckias-gouba-7818a1259
              </span>
            </a>
          </motion.div>

          <motion.div
            className="d-flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
          >
            <a href="https://github.com/gouba-adonija" className="contact-link">
              <i className="fa-brands fa-github"></i>
              {"     "}
              <span className="contact-info"> github.com/gouba-adonija</span>
            </a>
          </motion.div>

          <motion.div
            className="d-flex flex-column"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
          >
            <a href="#" className="contact-link">
              <i className="fa-solid fa-location-dot"></i>
              <span className="contact-info">
                {"     "} Abidjan, Cote d`Ivoire
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
