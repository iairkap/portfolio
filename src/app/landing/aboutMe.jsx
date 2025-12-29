"use client";
import React, { memo } from "react";
import styles from "./aboutme.module.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const AboutMe = memo(function AboutMe({ language }) {
  const darkMode = useSelector((state) => state.darkMode);

  const esText =
    "Soy un <strong>Desarrollador Full Stack</strong> e <strong>Ingeniero Informático en formación</strong>, experto en Reactjs, Next.js, JavaScript y más. Con antecedentes en la <strong>industria audiovisual</strong>, aporto creatividad al sector tecnológico, creando <strong>soluciones digitales innovadoras</strong> y <strong>visualmente atractivas</strong>.";

  const enText =
    "I am a <strong>Full Stack Developer</strong> and a <strong>Computer Engineering student</strong>, expert in Reactjs, Next.js, JavaScript, and more. With a background in the <strong>audiovisual industry</strong>, I bring creativity to the technology sector, creating <strong>innovative digital solutions</strong> that are <strong>visually appealing</strong>.";

  return (
    <div className={darkMode ? styles.backgroundColor : styles.backgroundColorLight}>
      <div className={styles.Container}>
        <motion.div
          className={styles.ContainerText}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className={styles.titulo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hola, soy Iair Kaplun 👋
          </motion.h1>
          <motion.p
            className={styles.parrafo}
            dangerouslySetInnerHTML={{
              __html: language === "ES" ? esText : enText,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.div>
      </div>
    </div>
  );
});

export default AboutMe;
/*




 */
