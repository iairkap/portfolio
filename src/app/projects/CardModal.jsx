import React from "react";
import { Helmet } from "react-helmet";
import { ModalOverlay } from "../components/ui/ModalOverlay";
import { MODAL_STYLES } from "../config/modalStyles";
import styles from "./cardpaginas.module.css";

/**
 * Componente Modal para mostrar detalles del proyecto
 * Extraído de Card para seguir SRP
 */
export function CardModal({
  isOpen,
  onClose,
  project,
  language,
  modalContentStyles,
  textStyles,
}) {
  const customStyles = {
    overlay: MODAL_STYLES.overlayWithHeight,
    content: {},
  };

  return (
    <ModalOverlay
      isOpen={isOpen}
      onClose={onClose}
      customStyles={customStyles}
      className={styles.modalContent}
      contentLabel={project.name}
    >
      <Helmet>
        <style>{`
          .modalContent::before {
            background-color: ${project.backgroundContainer};
          }
        `}</style>
      </Helmet>
      <div className={styles[modalContentStyles]}>
        <button className={styles.close} onClick={onClose}>
          x
        </button>
        <div className={styles[textStyles]}>
          <h1 className={styles.name}>{project.name}</h1>
          <h3 className={styles.parrafo}>
            {language === "ES" ? project.textExplainEs : project.textExplainEn}
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
    </ModalOverlay>
  );
}
