import React, { memo, useCallback } from "react";
import styles from "./language.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../redux/languageSlice";

const Language = memo(function Language() {
  const language = useSelector((state) => state.language.value);
  const dispatch = useDispatch();

  const handleLanguageChange = useCallback(
    (newLanguage) => {
      console.log("Changing language to:", newLanguage);
      dispatch(setLanguage(newLanguage));
    },
    [dispatch]
  );

  console.log("Render Language component:", language); // Agrega esta línea
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
});

export default Language;
