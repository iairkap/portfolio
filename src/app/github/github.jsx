import React from "react";
import styles from "./github.module.css";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";
import Fithub from "../../../public/github.svg";
import Image from "next/image";

function Github(props) {
  const { language } = useContext(LanguageContext);

  return (
    <a
      href="https://github.com/iairkap"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.generalContainer}>
        <Image src={Fithub} className={styles.imagen} />
        <div className={styles.textContainer}>
          <h1 className={styles.titulo}>
            {language === "ES" ? "Github" : "Github"}
          </h1>
          <h6 className={styles.subtitulos}>
            {language === "ES"
              ? "Revisa los proyectos en los que he estado trabajando y en los que estoy trabajando actualmente."
              : "Review the projects I have been working on and the ones I am currently working on."}
          </h6>
        </div>
      </div>
    </a>
  );
}
export default Github;
