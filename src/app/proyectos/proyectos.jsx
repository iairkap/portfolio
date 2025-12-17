import React, { memo } from "react";
import styles from "./proyectos.module.css";
import Image from "next/image";
import click from "../../../public/click.svg";

const Proyectos = memo(function Proyectos({ language }) {
  return (
    <div className={styles.generalContainer}>
      <div className={styles.clickContainer}>
        <Image src={click} className={styles.click}></Image>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.titulo}>
          {language === "ES" ? "Proyectos pasados y actuales" : "Past and Current Projects"}
        </h1>
        <h6 className={styles.subtitulos}>
          {language === "ES"
            ? "Revisa los proyectos en los que he estado trabajando y en los que estoy trabajando actualmente."
            : "Review the projects I have been working on and the ones I am currently working on."}
        </h6>
      </div>
    </div>
  );
});

export default Proyectos;
