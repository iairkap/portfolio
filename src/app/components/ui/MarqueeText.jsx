import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./MarqueeText.module.css";

/**
 * MarqueeText - Componente reutilizable para texto en marquesina
 * Principio Single Responsibility: Solo maneja la lógica del efecto marquee
 *
 * @param {boolean} isVisible - Si el marquee debe mostrarse
 * @param {string} text - Texto a mostrar en el marquee
 * @param {number} speed - Velocidad del marquee (píxeles por segundo). Default: 60
 * @param {string} fontSize - Tamaño de fuente. Default: "2rem"
 * @param {string} customClassName - Clase CSS personalizada adicional para el texto
 */
export default function MarqueeText({
  isVisible,
  text,
  speed = 60,
  fontSize = "2rem",
  customClassName = "",
}) {
  const [textWidth, setTextWidth] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [text, isVisible]);

  const duration = textWidth / speed;

  return (
    <div className={styles.textContainer}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="marquee"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={styles.marqueeWrapper}
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
              <span
                ref={textRef}
                className={`${styles.marqueeText} ${customClassName}`}
                style={{ fontSize }}
              >
                {text}
              </span>
              <span className={`${styles.marqueeText} ${customClassName}`} style={{ fontSize }}>
                {text}
              </span>
              <span className={`${styles.marqueeText} ${customClassName}`} style={{ fontSize }}>
                {text}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
