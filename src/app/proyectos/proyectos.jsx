"use client";
import React, { memo, useState, useEffect } from "react";
import styles from "./proyectos.module.css";
import { motion, AnimatePresence } from "framer-motion";
import MarqueeText from "../components/ui/MarqueeText";
import { useTouchDevice } from "../hooks";

const Proyectos = memo(function Proyectos({ language }) {
  const [isHovered, setIsHovered] = useState(false);
  const isTouchDevice = useTouchDevice();

  // Auto-alternar en touch devices cada 3 segundos
  useEffect(() => {
    if (!isTouchDevice) {
      return;
    }

    const interval = setInterval(() => {
      setIsHovered((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, [isTouchDevice]);

  const phrases = {
    ES: "PROYECTOS PASADOS Y ACTUALES • PORTAFOLIO COMPLETO • EXPERIENCIA",
    EN: "PAST AND CURRENT PROJECTS • FULL PORTFOLIO • EXPERIENCE",
  };

  const currentText =
    (language === "ES" ? phrases.ES : phrases.EN) +
    " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ";

  return (
    <div
      className={styles.generalContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Label "my work" abajo a la izquierda - desaparece en hover */}
      {!isHovered && (
        <motion.div
          className={styles.myWorkLabel}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          my work
        </motion.div>
      )}

      {/* Icono de terminal abajo a la derecha - desaparece en hover */}
      {!isHovered && (
        <motion.div
          className={styles.terminalIcon}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.terminalSvg}
          >
            <path
              d="M4 17L10 11L4 5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M12 19H20" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>
      )}

      {/* Título "projects" - desaparece en hover */}
      {!isHovered && (
        <motion.div
          className={styles.projectsTitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {" "}
        </motion.div>
      )}

      {/* Texto marquee - aparece en hover */}
      <MarqueeText isVisible={isHovered} text={currentText} fontSize="2rem" speed={60} />
    </div>
  );
});

export default Proyectos;
