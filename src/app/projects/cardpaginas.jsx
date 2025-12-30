import { motion, AnimatePresence, useDragControls } from "framer-motion";
import React, { memo, useCallback, useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "./cardpaginas.module.css";
import { proyectosWebs, proyectFrontBackSplit } from "../portfolio/webProjects";
import { useCardLogic } from "../hooks/useCardLogic";
import { useTouchDevice, useResponsiveAnimation } from "../hooks";

// Lazy load ProjectModal - only loads when user opens a modal
const ProjectModal = dynamic(() => 
  import("../components/ui/ProjectModal").then(mod => ({ default: mod.ProjectModal })),
  { ssr: false }
);

function getFirstTenWords(str) {
  return str.split(" ").slice(0, 10).join(" ") + "...";
}

/**
 * Componente Card - Presentacional puro
 * Lógica extraída a useCardLogic, modal a CardModal (SRP)
 */
const Card = memo(function Card({ project, index }) {
  const cardRef = useRef(null);
  const [cardPosition, setCardPosition] = useState(null);
  const [isSwiped, setIsSwiped] = useState(false);
  const isTouchDevice = useTouchDevice();
  const dragControls = useDragControls();
  const { isSmallMac, isMobile, isDesktop } = useResponsiveAnimation();

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
      onPointerDown={(e) => isTouchDevice && dragControls.start(e)}
      style={{ background: project.backgroundContainer }}
      onMouseEnter={!isTouchDevice ? handleMouseEnter : undefined}
      onMouseLeave={!isTouchDevice ? handleMouseLeave : undefined}
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
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 5L20 12L13 19"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 5L13 12L6 19"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.5"
            />
          </svg>
          <span>Swipe</span>
        </motion.div>
      )}

      <motion.div
        className={`${styles.imageContainer} ${
          isSmallScreen ? styles.smallScreenClass : styles.largeScreenClass
        }`}
        animate={(() => {
          // PRIORIDAD 1: Touch device - SIEMPRE usa swipe (sin importar screen size)
          if (isTouchDevice) {
            return {
              width: "100%",
              height: "100%",
              left: "0%",
              x: isSwiped ? "-120%" : "0%",
              opacity: isSwiped ? 0 : 1,
              filter: "blur(0px)",
            };
          }
          
          // PRIORIDAD 2: Desktop con mouse en pantalla pequeña - imagen desaparece SOLO en hover
          if (isSmallScreen) {
            return {
              width: "100%",
              height: "100%",
              left: "0%",
              opacity: isHovered ? 0 : 1,
              filter: isHovered ? "blur(8px)" : "blur(0px)",
            };
          }
          
          // PRIORIDAD 3: Small Mac (1018-1280px) - fade + blur
          if (isSmallMac) {
            return {
              width: "100%",
              height: "100%",
              left: "0%",
              opacity: isHovered ? 0 : 1,
              filter: isHovered ? "blur(12px)" : "blur(0px)",
            };
          }
          
          // PRIORIDAD 4: Desktop grande (>1280px) - reduce size
          if (isDesktop) {
            return {
              width: isHovered ? "95%" : "100%",
              height: isHovered ? "45%" : "100%",
              left: isHovered ? "2.5%" : "0%",
              opacity: 1,
              filter: "blur(0px)",
            };
          }
          
          // Fallback (no debería llegar aquí)
          return {
            width: "100%",
            height: "100%",
            left: "0%",
            opacity: 1,
            filter: "blur(0px)",
          };
        })()}
        drag={isTouchDevice ? "x" : false}
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={{ left: -100, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        whileHover={!isTouchDevice && !isSmallScreen && isDesktop ? { scale: 1.02 } : {}}
        transition={{
          duration: isSmallScreen ? 0.25 : (isSmallMac ? 0.5 : 0.4), // Más rápido en small screen
          ease: isSmallScreen ? [0.4, 0, 0.2, 1] : (isSmallMac ? [0.4, 0, 0.2, 1] : [0.25, 0.1, 0.25, 1]),
          scale: { duration: 0.3 },
          opacity: { duration: isSmallScreen ? 0.25 : (isSmallMac ? 0.4 : 0.3) }, // Rápido fade out
          filter: { duration: isSmallScreen ? 0.25 : (isSmallMac ? 0.5 : 0.3) },
        }}
      >
        {project.picture && (
          <Image
            src={project.picture}
            className={styles.cardImage}
            draggable={false}
            alt={`${project.name} preview`}
            fill
            priority={index === 0} // Solo primera card (always above fold en mobile)
            quality={isTouchDevice ? 75 : 85} // Menor calidad en mobile (imperceptible en pantalla pequeña)
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            loading={index > 0 ? "lazy" : "eager"} // Explicit lazy loading
            fetchPriority={index === 0 ? "high" : "auto"} // LCP image high priority
          />
        )}
      </motion.div>

      <motion.div
        className={styles.textContainer}
        style={{ color: project.textColor }} // Color fijo por proyecto
        animate={{
          // CASO 1: Touch devices - texto solo aparece en swipe
          opacity: isTouchDevice 
            ? (isSwiped ? 1 : 0)
            : (isHovered ? 1 : 0), // Desktop con mouse - texto aparece en hover
          y: isTouchDevice 
            ? 0 
            : (isHovered ? 0 : 20), // Desktop - slide in effect
          pointerEvents: (isTouchDevice && isSwiped) || (!isTouchDevice && isHovered)
            ? "auto" 
            : "none",
        }}
        transition={{
          duration: isTouchDevice ? 0.15 : 0.4, // Mobile: animaciones más rápidas
          ease: isTouchDevice ? "easeOut" : [0.25, 0.46, 0.45, 0.94],
          opacity: { delay: 0 }, // Sin delay en mobile
        }}
      >
        <h1 className={styles.nombreDelProyecto}>{project.name}</h1>
        
        {/* Detectar si es proyecto con Front/Back o proyecto normal */}
        {project.frontExplainEn ? (
          // Proyecto con estructura Front/Back
          <>
            <motion.div
              className={styles.textExplain}
              animate={{ opacity: isTouchDevice && !isSwiped ? 0 : 1 }}
            >
              <span className={styles.sectionLabel}>Front:</span>{" "}
              {getFirstTenWords(language === "ES" ? project.frontExplainEs : project.frontExplainEn)}
            </motion.div>
            <motion.div
              className={styles.textExplain}
              animate={{ opacity: isTouchDevice && !isSwiped ? 0 : 1 }}
            >
              <span className={styles.sectionLabel}>Back:</span>{" "}
              {getFirstTenWords(language === "ES" ? project.backExplainEs : project.backExplainEn)}
            </motion.div>
          </>
        ) : (
          // Proyecto normal
          <motion.h3
            className={styles.textExplain}
            animate={{ opacity: isTouchDevice && !isSwiped ? 0 : 1 }}
          >
            {getFirstTenWords(language === "ES" ? project.textExplainEs : project.textExplainEn)}
          </motion.h3>
        )}
        
        <motion.div
          className={styles.stackAll}
          animate={{ opacity: isTouchDevice && !isSwiped ? 0 : 1 }}
        >
          {project.stack?.map((tech, index) => (
            <h3
              key={index}
              className={styles.stackfa}
              style={{ backgroundColor: project.backgroundContainer }}
            >
              {tech}
            </h3>
          ))}
        </motion.div>

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
  // Combinar ambos arrays de proyectos
  const allProjects = [...proyectFrontBackSplit, ...proyectosWebs]
    // Filtrar proyectos undefined o sin datos mínimos
    .filter(project => project && project.name && project.backgroundContainer);
  
  return (
    <div className={styles.cardContainer}>
      {allProjects.map((project, index) => (
        <Card key={index} project={project} index={index} />
      ))}
    </div>
  );
}
