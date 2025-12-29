"use client";
import React, { memo, useState, useEffect, useRef } from "react";
import styles from "./aboutme.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { useTouchDevice } from "../hooks";

const AboutMeV2 = memo(function AboutMeV2({ language }) {
  const darkMode = useSelector((state) => state.darkMode.value);
  const [isHovered, setIsHovered] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [textWidth, setTextWidth] = useState(0);
  const textRef = useRef(null);
  const isTouchDevice = useTouchDevice();

  const phrases = {
    ES: [
      "PRECISIÓN FULL STACK • EXPERTO EN REACT & NEXT.JS",
      "NARRATIVA DIGITAL • CÓDIGO DE ALTO RENDIMIENTO",
      "ARQUITECTURA ESCALABLE • INNOVACIÓN VISUAL",
    ],
    EN: [
      "FULL STACK PRECISION • REACT & NEXT.JS EXPERT",
      "DIGITAL STORYTELLING • HIGH PERFORMANCE CODE",
      "SCALABLE ARCHITECTURE • VISUAL INNOVATION",
    ],
  };
  const currentPhrases = language === "ES" ? phrases.ES : phrases.EN;
  // Añadimos espacios extra para separar los loops (sin bullet point)
  const currentText =
    currentPhrases[currentPhraseIndex] + " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ";

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

  // Medimos el ancho exacto del texto para que el loop sea perfecto
  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [currentPhraseIndex, language, isHovered]);

  const handleNextPhrase = () => {
    setCurrentPhraseIndex((prev) => (prev + 1) % currentPhrases.length);
  };

  // Ajuste de velocidad: a mayor número, más lento.
  // Un valor de 50-60 suele ser ideal para lectura rápida pero legible.
  const duration = textWidth / 60;

  // Animación orbital: cada figura gira alrededor del centro
  const orbitRadius = 120;
  const animationDuration = 15;

  return (
    <div
      className={darkMode ? styles.backgroundColor : styles.backgroundColorLight}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative", overflow: "hidden" }} // Asegura que nada se salga
    >
      {/* Nombre arriba a la izquierda */}
      <motion.div
        className={styles.nameTag}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        iair kaplun
      </motion.div>

      {/* Título profesional - desaparece en hover */}
      {!isHovered && (
        <motion.div
          className={styles.professionalTitle}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          Software Engineer <br /> Audiovisual Designer
        </motion.div>
      )}

      {/* Figuras geométricas animadas en órbita - desaparecen en hover */}
      {!isHovered && (
        <div className={styles.geometricContainer}>
          {/* Círculo - Empieza grande, posición 0° */}
          <motion.div
            className={`${styles.circle} ${darkMode ? styles.circleDark : styles.circleLight}`}
            initial={{ opacity: 0 }}
            animate={{
              x: [
                orbitRadius * Math.cos(0),
                orbitRadius * Math.cos((2 * Math.PI) / 3),
                orbitRadius * Math.cos((4 * Math.PI) / 3),
                orbitRadius * Math.cos(0),
              ],
              y: [
                orbitRadius * Math.sin(0),
                orbitRadius * Math.sin((2 * Math.PI) / 3),
                orbitRadius * Math.sin((4 * Math.PI) / 3),
                orbitRadius * Math.sin(0),
              ],
              scale: [1.8, 0.6, 0.6, 1.8],
              rotate: 360,
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Cuadrado - Empieza pequeño, posición 120° */}
          <motion.div
            className={`${styles.square} ${darkMode ? styles.squareDark : styles.squareLight}`}
            initial={{ opacity: 0 }}
            animate={{
              x: [
                orbitRadius * Math.cos((2 * Math.PI) / 3),
                orbitRadius * Math.cos((4 * Math.PI) / 3),
                orbitRadius * Math.cos(0),
                orbitRadius * Math.cos((2 * Math.PI) / 3),
              ],
              y: [
                orbitRadius * Math.sin((2 * Math.PI) / 3),
                orbitRadius * Math.sin((4 * Math.PI) / 3),
                orbitRadius * Math.sin(0),
                orbitRadius * Math.sin((2 * Math.PI) / 3),
              ],
              scale: [0.6, 1.8, 0.6, 0.6],
              rotate: -360,
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Triángulo - Empieza pequeño, posición 240° */}
          <motion.div
            className={`${styles.triangle} ${darkMode ? styles.triangleDark : styles.triangleLight}`}
            initial={{ opacity: 0 }}
            animate={{
              x: [
                orbitRadius * Math.cos((4 * Math.PI) / 3),
                orbitRadius * Math.cos(0),
                orbitRadius * Math.cos((2 * Math.PI) / 3),
                orbitRadius * Math.cos((4 * Math.PI) / 3),
              ],
              y: [
                orbitRadius * Math.sin((4 * Math.PI) / 3),
                orbitRadius * Math.sin(0),
                orbitRadius * Math.sin((2 * Math.PI) / 3),
                orbitRadius * Math.sin((4 * Math.PI) / 3),
              ],
              scale: [0.6, 0.6, 1.8, 0.6],
              rotate: 360,
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      )}

      <div className={styles.textContainer}>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              key="marquee"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className={styles.marqueeWrapper}
              onClick={handleNextPhrase} // Opcional: cambiar frase al click
              style={{ cursor: "pointer" }}
            >
              <motion.div
                className={styles.marqueeContent}
                animate={{ x: [0, -textWidth] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: duration > 0 ? duration : 10,
                    ease: "linear",
                  },
                }}
              >
                {/* Renderizamos el texto dos veces para el loop infinito sin cortes */}
                <span ref={textRef} className={styles.marqueeText}>
                  {currentText}
                </span>
                <span className={styles.marqueeText}>{currentText}</span>
                <span className={styles.marqueeText}>{currentText}</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Botón See My Projects */}
      <motion.div
        className={styles.projectsButton}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <a href="#projects" className={styles.projectsLink}>
          {language === "ES" ? "ver mis proyectos" : "see my projects"}
        </a>
      </motion.div>
    </div>
  );
});

export default AboutMeV2;
