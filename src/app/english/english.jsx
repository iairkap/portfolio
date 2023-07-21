import React from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";
import styles from "./english.module.css";

function English({ language }) {
  return (
    <a href="https://www.efset.org/cert/Lonahf">
      <div className={styles.generalContainer}>
        <h6 className={styles.subtitulo}>
          {language === "ES" ? "NIVEL DE INGLÉS" : "ENGLISH LEVEL"}
        </h6>
        <h1 className={styles.titulo}>C2</h1>
        <h6 className={styles.subtitulo}>
          {language === "ES" ? "EF SET" : "EF SET"}
        </h6>
      </div>
    </a>
  );
}

export default English;
