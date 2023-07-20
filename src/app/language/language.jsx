import React, { useContext } from "react";
import styles from "./language.module.css";
import { LanguageContext } from "../contexts/LanguageContext";

function Language({ language,setLanguage }) {
  console.log("Render Language component:", language); // Agrega esta línea

  const handleLanguageChange = (newLanguage) => {
    console.log("Changing language to:", newLanguage); // Verifica que el evento de click se está disparando correctamente.
    setLanguage(newLanguage);
  };

  return (
    <div className={styles.generalBackground}>
      <div className={styles.contenedor}>
        <div className={styles.titulo}>
          <h1>{language}</h1>
        </div>
        <div className={styles.idiomas}>
          <div
            className={styles.languageContainer}
            onClick={() => handleLanguageChange("ES")}
          >
            <div>
              <h6 className={language === "ES" ? styles.selected : null}>ES</h6>
            </div>
          </div>
          <div
            className={styles.languageContainer}
            onClick={() => handleLanguageChange("EN")}
          >
            <div>
              <h6 className={language === "EN" ? styles.selected : null}>EN</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Language;
