import React from "react";
import styles from "./aboutme.module.css";
import Image from "next/image";
import cyberpunk from "../../../public/Cyberpunk-Poster-Photo-Effect.png";
import { LanguageContext } from "../contexts/LanguageContext";

function AboutMe({language}) {
  

  const esText =
    "Soy un <strong>Desarrollador Full Stack</strong> graduado de Soy Henry, experto en Reactjs, Next.js, JavaScript y más. Con antecedentes en la <strong>industria audiovisual</strong>, aporto creatividad al sector tecnológico, creando <strong>soluciones digitales innovadoras</strong> y <strong>visualmente atractivas</strong>.";

  const enText =
    "I am a <strong>Full Stack Developer</strong> graduated from Soy Henry, expert in Reactjs, Next.js, JavaScript, and more. With a background in the <strong>audiovisual industry</strong>, I bring creativity to the technology sector, creating <strong>innovative digital solutions</strong> and <strong>visually appealing</strong> ones.";

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
        <div className={styles.imageContainer}>
          <Image
            src={cyberpunk}
            width={453}
            height={606}
            objectFit="cover"
            className={styles.imagen}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
/*




 */
