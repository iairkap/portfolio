import React from "react";
import styles from "./edad.module.css";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

function Edad(props) {
  const { language } = useContext(LanguageContext);

  // Obtén el año actual
  const currentYear = new Date().getFullYear();

  // Año de nacimiento
  const birthYear = 1994;

  // Calcula la edad
  let age = currentYear - birthYear;

  // Asegúrate de restar uno si el cumpleaños no ha ocurrido aún este año
  const birthdateThisYear = new Date(currentYear, 0, 6); // 0 es enero en JavaScript
  if (new Date() < birthdateThisYear) {
    age -= 1;
  }

  return (
    <div className={styles.generalContainer}>
      <h6 className={styles.subtitulo}>{language === "ES" ? "EDAD" : "AGE"}</h6>
      <h1 className={styles.titulo}>{age}</h1>
      <h6 className={styles.subtitulo}>
        {language === "ES" ? "AÑOS" : "YEARS OLD"}
      </h6>
    </div>
  );
}

export default Edad;
