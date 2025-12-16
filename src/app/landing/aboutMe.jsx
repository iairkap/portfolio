import React, { memo } from "react";
import styles from "./aboutme.module.css";
import Image from "next/image";
import cyberpunk from "../../../public/Cyberpunk-Poster-Photo-Effect.webp";
import { LanguageContext } from "../contexts/LanguageContext";

const AboutMe = memo(function AboutMe({ language }) {
  const esText =
    "Soy un <strong>Desarrollador Full Stack</strong> e <strong>Ingeniero Informático en formación</strong>, experto en Reactjs, Next.js, JavaScript y más. Con antecedentes en la <strong>industria audiovisual</strong>, aporto creatividad al sector tecnológico, creando <strong>soluciones digitales innovadoras</strong> y <strong>visualmente atractivas</strong>.";

  const enText =
    "I am a <strong>Full Stack Developer</strong> and a <strong>Computer Engineering student</strong>, expert in Reactjs, Next.js, JavaScript, and more. With a background in the <strong>audiovisual industry</strong>, I bring creativity to the technology sector, creating <strong>innovative digital solutions</strong> that are <strong>visually appealing</strong>.";

  return (
    <div className={styles.backgroundColor}>
      <div className={styles.water}></div>
      <div className={styles.Container}>
        <div className={styles.ContainerText}>
          <h1 className={styles.titulo}>Hola, soy Iair Kaplun 👋</h1>
          <p
            className={styles.parrafo}
            dangerouslySetInnerHTML={{
              __html: language === "ES" ? esText : enText,
            }}
          />
        </div>
        <div className={styles.imageContainer}></div>
      </div>
    </div>
  );
});

export default AboutMe;
/*




 */
