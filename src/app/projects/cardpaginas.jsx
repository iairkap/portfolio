import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./cardpaginas.module.css";
import { proyectosWebs } from "../portfolio/webProjects";
import { useCardLogic } from "../hooks/useCardLogic";
import { CardModal } from "./CardModal";

function getFirstTenWords(str) {
  return str.split(" ").slice(0, 20).join(" ") + "...";
}

/**
 * Componente Card - Presentacional puro
 * Lógica extraída a useCardLogic, modal a CardModal (SRP)
 */
function Card({ project }) {
  const {
    isHovered,
    setIsHovered,
    modalIsOpen,
    openModal,
    closeModal,
    isSmallScreen,
    language,
    modalContentStyles,
    textStyles,
  } = useCardLogic();

  return (
    <div
      className={styles.contenedor}
      onClick={openModal}
      onTouchStart={openModal}
      style={{ background: project.backgroundContainer }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
          alt={`${project.name} preview`}
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

      <CardModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        project={project}
        language={language}
        modalContentStyles={modalContentStyles}
        textStyles={textStyles}
      />
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
