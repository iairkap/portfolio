import React, { memo, useMemo } from "react";
import styles from "./edad.module.css";

const Edad = memo(function Edad({ language }) {
  const age = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const birthYear = 1994;
    let calculatedAge = currentYear - birthYear;
    const birthdateThisYear = new Date(currentYear, 0, 6);
    if (new Date() < birthdateThisYear) {
      calculatedAge -= 1;
    }
    return calculatedAge;
  }, []);

  return (
    <div className={styles.generalContainer}>
      <h6 className={styles.subtitulo}>{language === "ES" ? "EDAD" : "AGE"}</h6>
      <h1 className={styles.titulo}>{age}</h1>
      <h6 className={styles.subtitulo}>
        {language === "ES" ? "AÑOS" : "YEARS"}
      </h6>
    </div>
  );
});

export default Edad;
