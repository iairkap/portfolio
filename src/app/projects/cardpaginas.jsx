import React, { memo, useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./cardpaginas.module.css";
import { proyectosWebs } from "../portfolio/webProjects";
import { useCardLogic } from "../hooks/useCardLogic";
import { useTouchDevice } from "../hooks";
import { ProjectModal } from "../components/ui/ProjectModal";

function getFirstTenWords(str) {
  return str.split(" ").slice(0, 20).join(" ") + "...";
}

/**
 * Componente Card - Presentacional puro
 * Lógica extraída a useCardLogic, modal a CardModal (SRP)
 */
const Card = memo(function Card({ project }) {
  const cardRef = useRef(null);
  const [cardPosition, setCardPosition] = useState(null);
  const [isSwiped, setIsSwiped] = useState(false);
  const isTouchDevice = useTouchDevice();

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

  const handleMouseEnter = useCallback(() => setIsHovered(true), [setIsHovered]);
  const handleMouseLeave = useCallback(() => setIsHovered(false), [setIsHovered]);

  const handleDragEnd = useCallback((event, info) => {
    // Si arrastra a la izquierda más de 50px, hacer swipe
    if (info.offset.x < -50) {
      setIsSwiped(true);
      // Auto-reset después de 4 segundos
      setTimeout(() => setIsSwiped(false), 4000);
    } else if (info.offset.x > 50) {
      setIsSwiped(false);
    }
  }, []);

  const handleOpenModal = useCallback(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCardPosition({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    }
    openModal();
  }, [openModal]);

  return (
    <div
      ref={cardRef}
      className={styles.contenedor}
      onClick={!isTouchDevice ? handleOpenModal : undefined}
      onTouchStart={!isTouchDevice ? handleOpenModal : undefined}
      style={{ background: project.backgroundContainer }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Swipe hint - solo en touch devices cuando no está swiped */}
      {isTouchDevice && !isSwiped && (
        <motion.div
          className={styles.swipeHint}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: [10, -5, 10] }}
          transition={{
            opacity: { duration: 0.5, delay: 0.5 },
            x: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 5L20 12L13 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 5L13 12L6 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
          </svg>
          <span>Swipe</span>
        </motion.div>
      )}

      <motion.div
        className={`${styles.imageContainer} ${
          isSmallScreen ? styles.smallScreenClass : styles.largeScreenClass
        }`}
        animate={{
          width: isHovered ? "95%" : "100%",
          height: isHovered ? "55%" : "100%",
          left: isHovered ? "2.5%" : "0%",
          x: isTouchDevice && isSwiped ? "-100%" : "0%",
        }}
        drag={isTouchDevice ? "x" : false}
        dragConstraints={{ left: -100, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        whileHover={{ scale: 1.02 }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
          scale: { duration: 0.3 },
        }}
      >
        <Image
          src={project.picture}
          className={styles.cardImage}
          draggable={false}
          alt={`${project.name} preview`}
          fill
          priority={false}
        />
      </motion.div>

      <motion.div
        className={styles.textContainer}
        animate={{
          opacity: isTouchDevice && !isSwiped ? 0 : 1,
          pointerEvents: isTouchDevice && !isSwiped ? "none" : "auto",
        }}
        transition={{ duration: 0.3 }}
      >
        <h1 className={styles.nombreDelProyecto}>{project.name}</h1>
        <h3 className={styles.textExplain}>
          {getFirstTenWords(language === "ES" ? project.textExplainEs : project.textExplainEn)}
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
        
        {/* Bot\u00f3n "Ver m\u00e1s" en mobile cuando est\u00e1 swiped */}
        {isTouchDevice && isSwiped && (
          <motion.button
            className={styles.viewMoreButton}
            onClick={handleOpenModal}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {language === "ES" ? "Ver m\u00e1s" : "View more"}
          </motion.button>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {modalIsOpen && cardPosition && (
          <ProjectModal
            isOpen={modalIsOpen}
            onClose={closeModal}
            project={project}
            language={language}
            modalContentStyles={modalContentStyles}
            textStyles={textStyles}
            cardPosition={cardPosition}
          />
        )}
      </AnimatePresence>
    </div>
  );
});

export default function CardsContainer() {
  return (
    <div className={styles.cardContainer}>
      {proyectosWebs.map((project, index) => (
        <Card key={index} project={project} />
      ))}
    </div>
  );
}
