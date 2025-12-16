import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Modal from "react-modal";
import styles from "./cardpaginas.module.css";
import { proyectosWebs } from "../portfolio/webProjects";
import { Helmet } from "react-helmet";
import { setLanguage, selectLanguage } from "../redux/languageSlice";
import { useSelector, useDispatch } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useModal } from "../hooks/useModal";

function getFirstTenWords(str) {
  return str.split(" ").slice(0, 20).join(" ") + "...";
}

function Card({ project }) {
  const isSmallScreen = useMediaQuery("(max-width:768px)");

  const [isHovered, setIsHovered] = useState(false);
  const { isOpen: modalIsOpen, open: openModal, close: closeModal } = useModal();
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  const darkMode = useSelector((state) => state.darkMode.value);

  const modalContentStyles = darkMode
    ? styles.modalContentDark
    : styles.modalContentLight;

  const textStyles = darkMode ? styles.textDark : styles.textLight;

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.75)",
      backdropFilter: "blur(5px)",
    },
    content: {
      backgroundColor: "transparent",
      border: "none",
      width: "80%",
      height: "70%",
      margin: "auto",
      overflow: "visible",
    },
  };

  return (
    <div
      className={styles.contenedor}
      onClick={() => setModalIsOpen(true)}
      onTouchStart={() => setModalIsOpen(true)}
      style={{ background: project.backgroundContainer }} // Aplicar el color de fondo del proyecto
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {" "}
      <motion.div
        className={`absolute bottom-0 overflow-hidden rounded-t-3xl transition-all duration-300 ease-in-out ${
          isHovered
            ? "w-[95%] h-[55%] left-[2.5%] transform hover:scale-90"
            : "md:h-full md:w-full md:left-0 w-[95%] h-[50%] left-[2.5%] transform hover:scale-90"
        } ${isSmallScreen ? styles.smallScreenClass : styles.largeScreenClass}`}
      >
        <Image
          src={project.picture}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          draggable={false}
          alt="card image"
          layout="fill"
        />
      </motion.div>
      <div className={styles.textContainer}>
        <h1 className={styles.nombreDelProyecto}>{project.name}</h1>

        <h3 className={styles.textExplain}>
          {getFirstTenWords(
            language === "ES" ? project.textExplainEs : project.textExplainEn
          )}
        </h3>
        <div className={styles.stackAll}>
          {project.stack.map((tech, index) => (
            <h3
              key={index}
              className={styles.stackfa}
              style={{ backgroundColor: project.backgroundContainer }}
            >
              {tech}
            </h3>
          ))}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Mi Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(5px)",
            height: "100dvh",
          },
          content: {},
        }}
        className={styles.modalContent}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <Helmet>
          <style>{`
      .modalContent::before {
        background-color: ${project.backgroundContainer};
      }
    `}</style>
        </Helmet>
        <div className={modalContentStyles}>
          <button className={styles.close} onClick={closeModal}>
            x
          </button>
          <div className={textStyles}>
            <h1 className={styles.name}>{project.name}</h1>
            <h3 className={styles.parrafo}>
              {language === "ES"
                ? project.textExplainEs
                : project.textExplainEn}
            </h3>{" "}
            {/* Muestra todo el texto en el modal */}
            <div className={styles.stackAll}>
              {project.stack.map((tech, index) => (
                <h3
                  key={index}
                  className={styles.stackfa}
                  style={{ backgroundColor: project.backgroundContainer }}
                >
                  {tech}
                </h3>
              ))}
            </div>{" "}
            <div className={styles.linkContainer}>
              <h2>
                <h2 className={styles.website}>Web site:</h2>
                <a href={project.demo} target="_blank" className={styles.link}>
                  {project.demo}
                </a>
              </h2>
            </div>
            <h2>
              <h2 className={styles.website}>GitHub:</h2>

              <a href={project.github} target="_blank" className={styles.link}>
                {project.github}
              </a>
            </h2>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default function CardsContainer() {
  return (
    <div className={styles.cardContainer}>
      {proyectosWebs.map((project, index) => (
        <Card key={index} project={project} />
      ))}
    </div>
  );
}
