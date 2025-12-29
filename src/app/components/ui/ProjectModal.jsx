import React from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import styles from "../../projects/cardpaginas.module.css";
import { ProjectModalContent } from "./ProjectModalContent";

/**
 * Modal con animación de card a pantalla completa
 * Renderiza en body usando portal para evitar problemas de scroll
 */
export function ProjectModal({
  isOpen,
  onClose,
  project,
  language,
  modalContentStyles,
  textStyles,
  cardPosition,
}) {
  if (!isOpen || typeof window === "undefined") {
    return null;
  }

  // Usar la posición exacta de la card en viewport (ya considera scroll)
  const initial = cardPosition
    ? {
        position: "fixed",
        top: cardPosition.top,
        left: cardPosition.left,
        width: cardPosition.width,
        height: cardPosition.height,
        x: 0,
        y: 0,
        borderRadius: "1.875rem",
        opacity: 1,
      }
    : {
        scale: 0.8,
        opacity: 0,
      };

  const modalContent = (
    <motion.div
      className={styles.modalOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        className={styles[modalContentStyles]}
        style={{ position: "fixed" }}
        initial={initial}
        animate={{
          top: "50vh",
          left: "50vw",
          x: "-50%",
          y: "-50%",
          width: "90vw",
          height: "90vh",
          maxWidth: "1400px",
          opacity: 1,
          borderRadius: "1.4rem",
        }}
        exit={initial}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <style jsx>{`
          .${styles[modalContentStyles]}::before {
            background-color: ${project.backgroundContainer};
          }
        `}</style>

        <button className={styles.close} onClick={onClose}>
          ×
        </button>
        <ProjectModalContent project={project} language={language} textStyles={textStyles} />
      </motion.div>
    </motion.div>
  );

  return createPortal(modalContent, document.body);
}
