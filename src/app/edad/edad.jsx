import React from "react";
import styles from "./edad.module.css";

function Edad( { language }) {
  
  const currentYear = new Date().getFullYear();

  const birthYear = 1994;

  let age = currentYear - birthYear;

  const birthdateThisYear = new Date(currentYear, 0, 6); // 0 es enero en JavaScript
  if (new Date() < birthdateThisYear) {
    age -= 1;
  }

  return (
    <div className={styles.generalContainer}>
      <h6 className={styles.subtitulo}>{language === "ES" ? "EDAD" : "AGE"}</h6>
      <h1 className={styles.titulo}>{age}</h1>
      <h6 className={styles.subtitulo}>
        {language === "ES" ? "AÑOS" : "YEARS"}
      </h6>
    </div>
  );
}

export default Edad;
