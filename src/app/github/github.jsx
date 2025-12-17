import React, { memo } from "react";
import styles from "./github.module.css";
import Fithub from "../../../public/github.svg";
import Image from "next/image";

const Github = memo(function Github({ language }) {
  return (
    <a href="https://github.com/iairkap" target="_blank" rel="noopener noreferrer">
      <div className={styles.generalContainer}>
        <Image src={Fithub} className={styles.imagen} alt="GitHub profile" />
        <div className={styles.textContainer}>
          <h1 className={styles.titulo}>{language === "ES" ? "Github" : "Github"}</h1>
          <h6 className={styles.subtitulos}>
            {language === "ES"
              ? "Revisa los proyectos en los que he estado trabajando y en los que estoy trabajando actualmente."
              : "Review the projects I have been working on and the ones I am currently working on."}
          </h6>
        </div>
      </div>
    </a>
  );
});
export default Github;
